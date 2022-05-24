import { Button, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styles";
import { signup } from "../../Services/auth"
import { useNavigate} from 'react-router-dom'
import { goToAddress, goToFourFood } from "../../routes/coordinator";

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { message } from "../../utils/message";
import { GlobalStateContext } from "../../Context/GlobalState/GlobalStateContext";

const SignUpForm = () => {
    const navigate = useNavigate();
    const { setters } = useContext(GlobalStateContext)

    const [form, onChange] = useForm({
        name: "", 
        email: "", 
        cpf: "",
        password: "",
        confirmarSenha: ""
    });

    const onSubmitForm = async (event) =>{
        event.preventDefault();

        let user = {
            name: form.name,
            email: form.email,
            cpf: form.cpf,
            password: form.password
        }
        
        if(form.password !== form.confirmarSenha){
            return toast.error(message[1])
        }

        let retorno = await signup(user);

        if (retorno.data.status === 200) {
            localStorage.setItem('token', retorno.data.token)
            console.log("retorno: ", retorno);
            
            if(retorno.data.user.hasAddress){
                return goToFourFood(navigate);
            }
            
            setters.setHasAddress(retorno.data.user.hasAddress)
            goToAddress(navigate);

        }

        if(retorno.data.status === 409){
            return toast.error(retorno.data.error)
        }
    }

    return(<InputsContainer>
        
        <ToastContainer />
        <form onSubmit={onSubmitForm}>
            <h3>Cadastrar</h3>

            <TextField
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                label="Nome"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Nome e sobrenome"
                required
                InputLabelProps={{ shrink: true}}
            />

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
                InputLabelProps={{ shrink: true}}
            />
            <TextField
                name="cpf"
                value={form.cpf}
                onChange={onChange}
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="000.000.000-00"
                required
                InputLabelProps={{ shrink: true}}
            />

             <TextField
                type={'password'}
                name="password"
                value={form.password}
                onChange={onChange}
                label="Senha"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Mínimo 6 caracteres"
                required
                InputLabelProps={{ shrink: true}}
            />

            <TextField
                type={'password'}
                name="confirmarSenha"
                value={form.confirmarSenha}
                onChange={onChange}
                label="Confirmar"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Confirme a senha anterior"
                required
                InputLabelProps={{ shrink: true}}
            />


            <Button
                type="submit"
                fullWidth
                variant="contained"
                margin="normal"
                style={{ textTransform: 'none' }}
            >
                Criar
            </Button>
        </form>
    </InputsContainer>)
}

export default SignUpForm;