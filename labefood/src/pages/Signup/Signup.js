import React from "react";
import Header from "../../components/Header/Header";

import {
    LoginContainer
} from './styles'
import { useNavigate } from "react-router-dom";
import Arrow from "../../components/Arrow/Arrow";
import SignUpForm from "./SignUpForm"
import { goToLogin } from "../../routes/coordinator";

const Signup = () => {
    const navigate = useNavigate()
    return(
        <LoginContainer className="login-container">
            <Arrow onClick={()=> goToLogin(navigate)}/>
            <Header />  
            <SignUpForm />
        </LoginContainer>
    )
}

export default Signup;