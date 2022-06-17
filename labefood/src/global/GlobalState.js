import React, {useState, useEffect} from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls"
import {GlobalStateContext} from "./GlobalStateContext"
import Swal from "sweetalert2"

export const GlobalState = (props) => {


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
        Swal.fire(err.response.data.message)
      });
  };



  return (
    <GlobalStateContext.Provider
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
    </GlobalStateContext.Provider>
  )
}
