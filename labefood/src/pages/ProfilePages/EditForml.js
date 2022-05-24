import React from 'react';
import { TextField, Button } from '@material-ui/core';
import useForm from '../../hooks/useForm';
import { InputsContainer } from "./styles";
import axios from 'axios';
import auth from 'surge/lib/middleware/auth';

const EditPerfil = () => {
    axios.post ('https://us-central1-missao-newton.cloudfunctions.net/{{fourFoodA}}/profile', 
    auth(localStorage.getItem('token')), {
        name: '',
        email: '',
        cpf: '',

    }
    )
    const [form, onChange] = useForm({
        name: '',
        email: '',
        cpf: '',

    });
    const onSubmitForm = async (event) => {
        event.preventDefault();
        console.log(form);
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/{{fourFoodA}}/profile',
            auth(localStorage.getItem('token')), {
                name: form.name,
                email: form.email,
                cpf: form.cpf,
            }
        )
            .then(response => {
                console.log(response);
            }
            )
            .catch(error => {
                console.log(error);
            }
            )
    }

    return(<InputsContainer>
        <form onSubmit={onSubmitForm}>
            <h3>Editar</h3>

            <TextField
                name="nome"
                value={form.name}
                onChange={onChange}
                label="Nome"
                variant="outlined"
                fullWidth
                placeholder='Nome'
                margin="normal"
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

            <Button
                type="submit"
                fullWidth
                variant="contained"
                margin="normal"
            >Enviar</Button>
        </form>
    </InputsContainer>)
}
export default EditPerfil;