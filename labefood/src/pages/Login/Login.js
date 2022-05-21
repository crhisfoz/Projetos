import React from 'react'
import logo from '../../assets/logo-login.png'
import { LoginContainer, StyleButton, FormContainer } from './styled'
import LoginForm from '../../components/LoginForm/LoginForm'
import { goToSignUp } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { Button } from "@material-ui/core";

const Login = () => {
  const navigate = useNavigate()
  return (<>
    <LoginContainer>
      <img src={logo} />
      <FormContainer>
        <h2> Entrar</h2>
        <LoginForm />
       
        <StyleButton>
          <Button
           onClick={() =>  goToSignUp(navigate) 
           }>Entrar</Button>
           </StyleButton>

      </FormContainer>
      Não possui cadastro? Clique aqui.


    </LoginContainer>
  </>

  )
}

export default Login