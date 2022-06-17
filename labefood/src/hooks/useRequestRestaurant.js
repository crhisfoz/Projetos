import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"
import { BASE_URL } from "../constants/urls";

export const useRequestRestaurant = (initialState, path) => {
    

    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
  
      const token = localStorage.getItem('token')
  
      const fetch = async () => {
        setLoading(true);
        try {
          const { data } = await axios.get(`${BASE_URL}${path}`, {
            headers: {
              'Content-Type': 'application/json',
              auth: token
            }
          });
          setData(data);
        } catch (err) {
            Swal.fire(err.response.data.message) 
        } finally {
          setLoading(false);
        }
      };
      fetch();
    }, []);
  
  return { data, loading};
  };