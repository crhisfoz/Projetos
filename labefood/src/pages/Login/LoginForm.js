import { Button, TextField, InputAdornment, CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styles";
import { useNavigate } from "react-router-dom"
import { goToHome } from "../../routes/coordinator";
import "react-toastify/dist/ReactToastify.css";
import { Visibility, VisibilityOff } from "@material-ui/icons"
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import Swal from "sweetalert2"

const headers = { "Content-Type": "application/json" }

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
            .post(`${BASE_URL}/login`, body, headers)
            .then((res) => {
                localStorage.setItem("token", res.data.token);

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Login Realizado com Sucesso'
                })
                goToHome(navigate)
            })
            .catch((err) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton:true,
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'warning',
                    title:`${err.response.data.message}, verifique os dados Digitados`
                })

            })
            .finally(() => {
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
                color="primary"
            >
                {loading ? <CircularProgress color={"inherit"} size={24} /> : <>Entrar</>}
            </Button>
        </form>
    </InputsContainer>)
}

export default LoginForm;