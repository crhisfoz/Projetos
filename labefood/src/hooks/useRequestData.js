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
          setRestaurants(data.restaurants)
  
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
    
    return {restaurants, loading, error, setRestaurants};
  };

  export default useRequestData;