import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"
import {goToLogin} from "../routes/coordinator"
import { useNavigate } from "react-router-dom";


export const useRequestData = (url, initialState) => {
  
  const navigate = useNavigate()
  
    const [restaurants, setRestaurants] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [category, setCategory] = useState([])
    const [filter, setFilter] = useState(restaurants)
  
  
    useEffect(() => {
  
      const token = localStorage.getItem('token')
  
      const fetch = async () => {
        setLoading(true);
        try {
          const { data } = await axios.get(url, {
            headers: {
              'Content-Type': 'application/json',
              auth: token
            }
          });
          const arrayCategory = []

        for (let restaurant of data.restaurants) {
          const newCategory = restaurant.category
          arrayCategory.push(newCategory)
        }
        setRestaurants(data.restaurants)
        setCategory(arrayCategory)
        setFilter(data.restaurants)      
  
        } catch (err) {
          setError(err);
          Swal.fire(err.response.data.message)
          goToLogin(navigate)        
        } finally {
          setLoading(false);
        }
      };
      fetch();
    }, []);
    
    return {restaurants, loading, error, category,filter, setFilter, setRestaurants, setCategory};
  };

  export default useRequestData;