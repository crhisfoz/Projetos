import React from "react";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectPage"
import {
    LoginContainer,
    SignUpButtonContainer
} from './styles'
import LoginForm from "./LoginForm";


const Login = () => {
    useProtectedPage()

    return(
        <LoginContainer className="login-container">
            <Header heigth={'3em'} />            
            <LoginForm />
            <SignUpButtonContainer>
                Não possui cadastro? Clique <a href="./signup">aqui.</a>
            </SignUpButtonContainer>
        </LoginContainer>
    )
}

export default Login;