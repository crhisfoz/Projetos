import React from "react";
import { Button } from "@material-ui/core";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../components/Hooks/useProtectPage";
import {
    LoginContainer,
    SignUpButtonContainer
} from './styles'
import LoginForm from "./LoginForm";
import Arrow from "../../components/Arrow/Arrow";

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