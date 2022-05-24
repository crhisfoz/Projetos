
import React from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
import AddressForm from "./AddressForm";
import { goBack } from "../../routes/coordinator";

import { AddressContainer } from './styles'

const Address = () => {


    const navigate = useNavigate()
    return(<AddressContainer>
            <Arrow 
            onClick={()=> goBack(navigate)}/>
            <Header />
            <AddressForm />
    </AddressContainer>)
}

export default Address;