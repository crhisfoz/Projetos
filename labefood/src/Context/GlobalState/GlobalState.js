import React, {useState, useEffect} from "react";

import {GlobalStateContext} from './GlobalStateContext';

const GlobalState = (props) => {



    const [infoUser, setInfoUser]= useState({})
    const [hasAddress, setHasAddress] = useState(false)
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart"))
          ? JSON.parse(localStorage.getItem("cart"))
          : []
      );
      const [restaurant, setRestaurant] = useState(
        JSON.parse(localStorage.getItem("restaurant"))
          ? JSON.parse(localStorage.getItem("restaurant"))
          : []
      );

 
    const states = { infoUser, hasAddress, restaurant, product, cart,}
    const setters = { setInfoUser, setHasAddress, setRestaurant, setProduct, setCart}

return(
    <GlobalStateContext.Provider value={{ states, setters }}>
        {props.children}
    </GlobalStateContext.Provider>)
}

export default GlobalState;