import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styles";
import { goToHome } from "../../routes/coordinator";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../../constants/urls'
import CircularProgress from '@material-ui/core/CircularProgress'
import Swal from "sweetalert2"


const AddressForm = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    const token = localStorage.getItem("token")

    const headers = {
        headers: {
            auth: token,
            'Content-Type': 'application/json'
        }
    };


    const { form, onChangeForm, clearForm } = useForm({
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: ''
    });


    const onSubmitForm = (ev) => {
        setLoading(true)
        ev.preventDefault();

        const body = {
            street: form.logradouro,
            number: form.numero,
            neighbourhood: form.bairro,
            city: form.cidade,
            state: form.estado,
            complement: form.complemento
        }

        axios
            .put(`${BASE_URL}/address`, body, headers)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: true,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Cadastro Realizado com Sucesso'
                })
                setLoading(false)
                goToHome(navigate)
            })
            .catch((err) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: true,
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'warning',
                    title: `${err.response.data.message}, verifique os dados Digitados`
                })
            })
            .finally(clearForm())
    };

    return (<InputsContainer>

        <form onSubmit={onSubmitForm}>
            <h3>Meu endereço</h3>
            <TextField
                type='text'
                name='logradouro'
                value={form.logradouro}
                onChange={onChangeForm}
                label='Logradouro'
                variant='outlined'
                fullWidth
                margin='normal'
                placeholder='Rua / Av.'
                required
                InputLabelProps={{ shrink: true }}

            />
            <TextField
                type='text'
                name='numero'
                value={form.numero}
                onChange={onChangeForm}
                label='Número'
                variant='outlined'
                fullWidth
                margin='normal'
                placeholder='Número'
                required
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                type='text'
                name='complemento'
                value={form.complemento}
                onChange={onChangeForm}
                label='Complemento'
                variant='outlined'
                fullWidth
                margin='normal'
                placeholder='Apto. / Bloco'
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                type='text'
                name='bairro'
                value={form.bairro}
                onChange={onChangeForm}
                label='Bairro'
                variant='outlined'
                fullWidth
                margin='normal'
                placeholder='Bairro'
                required
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                type='text'
                name='cidade'
                value={form.cidade}
                onChange={onChangeForm}
                label='Cidade'
                variant='outlined'
                fullWidth
                margin='normal'
                placeholder='Cidade'
                required
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                type='text'
                name='estado'
                value={form.estado}
                onChange={onChangeForm}
                label='Estado'
                variant='outlined'
                fullWidth
                margin='normal'
                placeholder='Estado'
                required
                InputLabelProps={{ shrink: true }}
            />
            <Button
                type='submit'
                fullWidth
                variant='contained'
                margin='normal'
                color="primary"
            > {loading ? <CircularProgress color={'inherit'} size={24} /> : <>Enviar</>}</Button>
        </form>
    </InputsContainer>)
}

export default AddressForm;