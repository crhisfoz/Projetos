import axios from "axios";
import { BASE_URL } from '../../constant/urls'
import { useEffect, useState } from "react";

const useRequestData = (initialState, path) => {
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const headers = {
        headers: {
          auth: localStorage.getItem("token"),
        },
      };

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${BASE_URL}${path}`, headers);
                setData(data);
                setLoading(false);
            } catch (err) {
                window.alert('Erro', err.response.data.message)
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, [path]);

    return { data, loading };
};

export default useRequestData;
