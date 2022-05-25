import axios from "axios";

import { useEffect, useState } from "react";


export const useRequestData = (url, initialState) => {
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
          window.alert(err.response.data.message)
        } finally {
          setLoading(false);
        }
      };
      fetch();
    }, []);
    
    return {restaurants, loading, error, setRestaurants};
  };

  export default useRequestData;