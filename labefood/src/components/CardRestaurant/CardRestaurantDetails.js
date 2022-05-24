import React from "react";
import {
  CardContainer,
  Rectangle

}  from './style'

const CardRestaurantDetails = ({
  image,
  name,
  category,
  deliveryTime,
  shipping,
  address,
}) => {
  return (

<CardContainer className="restaurante-card">
        <Rectangle>
            <img className="image" src={image} /> 
            <span className="card-restaturante-text-style-3">{name}</span>
            <div>
              <span className="description"> {category}</span>       
            </div>
            <div className="info-entrega">
                    <span className="tempo-de-entrega">Entrega  {Math.floor(deliveryTime * 0.9)} - {deliveryTime} min</span>
                <span className="taxa-de-entrega">Frete R$ {Number(shipping).toFixed(2)}</span>
            </div>
            <span className="description"> {address}</span> 
        </Rectangle>
    </CardContainer>

  );
};

export default CardRestaurantDetails
