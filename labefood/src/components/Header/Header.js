import React from "react";
import ifuture from "../../assets/ifuture-login.png";


import {
    HeaderContainer
} from './styles'

const Header = ({ heigth }) => {
    return(<HeaderContainer className='main-container' heigth={heigth}>
    <div className='main'> 
     <div className="main-title">
        <img src={ifuture}/>     
     </div>
    </div>
    </HeaderContainer>)
}

export default Header;