import { Button, TextField, InputAdornment } from "@material-ui/core";
import React, {useState} from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styles";
import { login } from "../../requests/authentication"
import { useNavigate} from 'react-router-dom'
import { goToAddress, goToHome } from "../../routes/coordinator";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@material-ui/core/CircularProgress'
import {Visibility, VisibilityOff} from '@material-ui/icons'
import axios from 'axios';
import { BASE_URL } from "../../constants/urls";

const headers = { 'Content-Type': 'application/json' }

const LoginForm = () => {

    const { form, onChangeForm, clearForm } = useForm({
        email: "",
        password: "",
      })
    
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const onSubmitFormLogin = (ev) => {
        setLoading(true)
        ev.preventDefault();
        const body = {
          email: form.email,
          password: form.password,
        };
        axios
          .post(`${BASE_URL}/login`, body)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            window.alert("Login Efetuado Com Sucesso");
            goToHome(navigate)
          })
          .catch((err) => {
            window.alert(err.response.data.message)
          })
          .finally(()=>{
              clearForm()
              setLoading(false)
          })
      };

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (<InputsContainer>
    
        <form onSubmit={onSubmitFormLogin}>
            <h3>Entrar</h3>

            <TextField
                name="email"
                value={form.email}
                onChange={onChangeForm}
                label="E-mail"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="email@email.com"
                autoComplete="current-email"
                required
            />
            <TextField
                name="password"
                value={form.password}
                onChange={onChangeForm}
                label="Senha"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Mínimo 6 caracteres"
                pattern=".{6,}"
                autoComplete="current-password"
                required
                type={showPassword ? "text" : "password"}
                 InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" onClick={handleShowPassword}>
                                {showPassword ? <Visibility cursor="pointer" /> : <VisibilityOff cursor="pointer" />}
                            </InputAdornment>
                        )
                    }}
            /> 
            <Button
                type="submit"
                fullWidth
                variant="contained"
                margin="normal"
                color='primary'
            >
                 {loading ? <CircularProgress color={'inherit'} size={24}/>: <>Entrar</>}
            </Button>
            <ToastContainer />
        </form>
    </InputsContainer>)
}

export default LoginForm;