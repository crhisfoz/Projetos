import { Button, TextField, InputAdornment } from "@material-ui/core";
import React, { useContext,useState} from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styles";
import { login } from "../../Services/auth"
import { useNavigate} from 'react-router-dom'
import { goToAddress, goToFourFood } from "../../routes/coordinator";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStateContext } from "../../Context/GlobalState/GlobalStateContext";
import CircularProgress from '@material-ui/core/CircularProgress'
import {Visibility, VisibilityOff} from '@material-ui/icons'



const LoginForm = () => {

    const [form, onChange] = useForm({ email: "", password: "" });
    const { setters } =  useContext(GlobalStateContext); 
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const onSubmitForm = (event) => {
        setLoading(true)
        event.preventDefault();

        let payload = {
            email: form.email,
            password: form.password
        }

        auth(payload);
      
    }

    const auth = async (payload) => {
        let retorno = await login(payload);

        if (retorno.data.status === 200) {

            setters.setInfoUser(retorno.data);        
            localStorage.setItem('infoUser',JSON.stringify(retorno.data))
            localStorage.setItem('token', retorno.data.token)
          

                window.alert("Seja Bem-Vindo")
                 
            setLoading(false)
            goToFourFood(navigate);
            if(retorno.data.data.hasAddress === false)  {
                goToAddress(navigate)
            }
        }
        
        if(retorno.data.status === 401){
            setLoading(false);
            toast.error(retorno.data.error);
            toast.error('Verifique os Dados digitados')
         
        }

        if(retorno.data.status === 404){
            setLoading(false);
            toast.error(retorno.data.error)
            toast.error('Verifique os Dados digitados')
        }
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (<InputsContainer>
    
        <form onSubmit={onSubmitForm}>
            <h3>Entrar</h3>

            <TextField
                name="email"
                value={form.email}
                onChange={onChange}
                label="E-mail"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="email@email.com"
                required
            />
            <TextField
                name="password"
                value={form.password}
                onChange={onChange}
                label="Senha"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Mínimo 6 caracteres"
                required
                type={showPassword ? "text" : "password"}
                password={true}
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