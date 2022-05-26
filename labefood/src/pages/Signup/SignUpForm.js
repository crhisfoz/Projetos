import { Button, TextField, InputAdornment, CircularProgress } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons"
import React, { useState } from "react";
import { InputsContainer } from "./styles"
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { goToHome, goToAddress, goToLogin } from "../../routes/coordinator";
import Swal from "sweetalert2";
import { signUp } from "../../requests/authentication"

const headers = { "Content-Type": "application/json" }

const SignUpForm = () => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({})

    const { form, onChangeForm, clearForm } = useForm({
        name: "",
        email: "",
        cpf: "",
        password: "",
        confirmPassword: ""
    });


    const onSignupForm = async (event) => {
        event.preventDefault();

        let body = {
            name: form.name,
            email: form.email,
            cpf: form.cpf,
            password: form.password
        }
        console.log('body', body)
        if (form.password !== form.confirmPassword) {

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: true,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer)
                    toast.addEventListener("mouseleave", Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: "warning",
                title: `A Senha Digitada Não Confere, Verifique e Digite Novamente`
            })
        } else {
           await axios.post(`${BASE_URL}/signup`, body,
                { headers: headers })
                .then((res) => {
                    localStorage.setItem("token", res.data.token);
                    console.log('Response', res)
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton:false,
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener("mouseenter", Swal.stopTimer)
                            toast.addEventListener("mouseleave", Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: "success",
                        title: `Usuário Cadastrado Com Sucesso`
                    })
                    if(res.data.user.hasAddress === false){
                        goToAddress(navigate)
                    }else{
                        goToLogin(navigate)
                    }

                
                })
                .catch((err)=>{
                    console.log('Erro', err.response.data.message)
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: true,
                        timer: 5000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener("mouseenter", Swal.stopTimer)
                            toast.addEventListener("mouseleave", Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: "warning",
                        title: `${err.response.data.message}`
                    })
                })
    }
}

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (<InputsContainer>

        <form onSubmit={onSignupForm}>
            <h3>Cadastrar</h3>

            <TextField
                type="text"
                name="name"
                value={form.name}
                onChange={onChangeForm}
                label="Nome"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Nome e sobrenome"
                required
                autoComplete="current-name"
                InputLabelProps={{ shrink: true }}
            />

            <TextField
                name="email"
                value={form.email}
                onChange={onChangeForm}
                label="E-mail"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="email@email.com"
                required
                autoComplete="current-email"
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                name="cpf"
                value={form.cpf}
                onChange={onChangeForm}
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="000.000.000-00"
                required
                InputLabelProps={{ shrink: true }}
                autoComplete="current-cpf"
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
                required
                pattern=".{6,}"
                autoComplete="current-password"
                InputLabelProps={{ shrink: true }}
                type={showPassword ? "text" : "password"}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" onClick={handleShowPassword}>
                            {showPassword ? <Visibility cursor="pointer" /> : <VisibilityOff cursor="pointer" />}
                        </InputAdornment>
                    )
                }}
            />

            <TextField
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={onChangeForm}
                label="Confirmar"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Confirme a senha anterior"
                required
                autoComplete="current-password"
                InputLabelProps={{ shrink: true }}
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
                color="primary"
            >
                {loading ? <CircularProgress color={"inherit"} size={24} /> : <>Criar</>}
            </Button>
        </form>
    </InputsContainer>)
}

export default SignUpForm;