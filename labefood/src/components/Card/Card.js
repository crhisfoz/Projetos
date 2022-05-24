import React from "react"

import { CardContainer, Rectangle} from './styles'

import { goToRestaurant } from '../../routes/coordinator'
import { useNavigate } from "react-router-dom"


const Card = (props) => {
    const navigate = useNavigate();

    return(<CardContainer className="restaurante-card">
        <Rectangle>
            <img className="image" src={props.image} onClick={() => goToRestaurant(navigate, props.id) }/> 
            <span className="card-restaturante-text-style-3">{props.name}</span>
            
            <div className="info-entrega">
                    <span className="tempo-de-entrega">Entrega  {Math.floor(props.delivery * 0.9)} - {props.delivery} min</span>
                <span className="taxa-de-entrega">Frete R$ {Number(props.shippingPrice).toFixed(2)}</span>
            </div>
        </Rectangle>
    </CardContainer>);
}

export default Card;