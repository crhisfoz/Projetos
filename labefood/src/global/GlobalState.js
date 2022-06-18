import React, {useState, useEffect, createContext} from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls"
import Swal from "sweetalert2"


export const GlobalStateContext = createContext();

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

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([]))
  }, [cart])


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
