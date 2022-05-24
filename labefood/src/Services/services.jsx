import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToLogin } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";


export const getRestaurant = (url, initialState) => {
  const [restaurants, setRestaurants] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [category, setCategory] = useState([])
  const [filter, setFilter] = useState(restaurants)

  const navigate = useNavigate()

console.log('filtro', filter)
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
        const newArrayCategory = []

        for (let restaurant of data.restaurants) {
          const newCategory = restaurant.category
          newArrayCategory.push(newCategory)
        }
        setRestaurants(data.restaurants)
        setFilter(data.restaurants)
        setCategory(newArrayCategory)

      } catch (err) {
        setError(err);
        window.alert('Para acessar a página, Você precisa estar logado, Faça Login Novamente')
        goToLogin(navigate)
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);
  console.log('categoria na requisicao', category)
  return [restaurants, loading, error, category, setRestaurants, filter, setFilter];
};

export const useRequestOrders = (url, initialState) => {


  const [orders, setOrders] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {

    const token = localStorage.getItem('token')

    const fetch = async () => {
      setLoading(true);
      try {
        const {data } = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            auth: token
          }
        });
        setOrders(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return [orders, loading, error];

};


export const getRestaurantDetail = (initialState, path) => {

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
          setLoading(false);
      } catch (err) {
        window.alert('Erro', err.response.data.message)
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

return { data, loading };
};

export const getActiveOrder = () => {

  const [activeOrder, setActiveOrder] = useState({});

  axios
    .get(`${BASE_URL}/active-order`, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      setActiveOrder(res.data);
    })
    .catch((err) => {
      window.alert("Erro ao realizar solicitação.\n Tente novamente.");
    });
    return  [activeOrder, setActiveOrder] 
};

