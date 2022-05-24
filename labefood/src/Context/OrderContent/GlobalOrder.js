import React, {useState, useEffect} from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import {GlobalOrderContext} from './GlobalOrderContext'

const GlobalOrder = (props) => {


  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );
  const [dataRestaurant, setDataRestaurant] = useState(
    JSON.parse(localStorage.getItem("restaurant"))
      ? JSON.parse(localStorage.getItem("restaurant"))
      : {}
  );
  const [activeOrder, setActiveOrder] = useState({});
  const [loading, setLoading] = useState(false)
 

  const getActiveOrder = () => {
    setLoading(true)
    axios
      .get(`${BASE_URL}/active-order`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setActiveOrder(res.data);
        setLoading(false)
      })
      .catch((err) => {
        window.alert("Erro ao realizar solicitação.\n Tente novamente.");
      });
  };


  useEffect(()=>{
    localStorage.setItem('cart', '{}')
  },[cart])
 
  return (
    <GlobalOrderContext.Provider
    value={{
      cart,
      setCart,
      dataRestaurant,
      setDataRestaurant,
      activeOrder,
      getActiveOrder,
      loading,
      setLoading
    }}
    >
      {props.children}
    </GlobalOrderContext.Provider>
  )
}

export default GlobalOrder