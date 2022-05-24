import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { GlobalStateContext } from "../../Context/GlobalState/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styles";
import { toast, ToastContainer } from 'react-toastify'
import { message } from "../../utils/message";
import { goToFourFood} from "../../routes/coordinator";
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../../constants/urls'
import CircularProgress from '@material-ui/core/CircularProgress'


const AddressForm = () => {
   
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    const {token} =  JSON.parse(localStorage.getItem('infoUser'))

    const headers = { headers: { auth: token,
        'Content-Type': 'application/json' 
    }};


    const [form, onChange, clear] = useForm({
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
                    goToFourFood(navigate)
                    window.alert('Cadastro Efetuado com Sucesso')
                    setLoading(false)
                    goToFourFood(navigate)
        
              clear({
                    street: '',
                    number: '',
                    neighbourhood: '',
                    city: '',
                    state: '',
                    complement:''
                })
              })
              .catch((err) => {
                console.log(err);
        console.log('resposta endereco Api', err) 
              });
          }; 

    return(<InputsContainer>

            <form onSubmit={onSubmitForm}>
            <h3>Meu endereço</h3>
            <TextField
                type='text'
                name='logradouro'
                value={form.logradouro}
                onChange={onChange}
                label='Logradouro'
                variant='outlined'
                fullWidth
                margin='normal'
                placeholder='Rua / Av.'
                required
                InputLabelProps={{ shrink: true}}

            />
            <TextField
                type='text'
                name='numero'
                value={form.numero}
                onChange={onChange}
                label='Número'
                variant='outlined'
                fullWidth
                margin='normal'
                placeholder='Número'
                required
                InputLabelProps={{ shrink: true}}
            />
            <TextField
                type='text'
                name='complemento'
                value={form.complemento}
                onChange={onChange}
                label='Complemento'
                variant='outlined'
                fullWidth
                margin='normal'
                placeholder='Apto. / Bloco'
                InputLabelProps={{ shrink: true}}
            />
            <TextField
                type='text'
                name='bairro'
                value={form.bairro}
                onChange={onChange}
                label='Bairro'
                variant='outlined'
                fullWidth
                margin='normal'
                placeholder='Bairro'
                required
                InputLabelProps={{ shrink: true}}
            />
            <TextField
                type='text'
                name='cidade'
                value={form.cidade}
                onChange={onChange}
                label='Cidade'
                variant='outlined'
                fullWidth
                margin='normal'
                placeholder='Cidade'
                required
                InputLabelProps={{ shrink: true}}
            />
            <TextField
                type='text'
                name='estado'
                value={form.estado}
                onChange={onChange}
                label='Estado'
                variant='outlined'
                fullWidth
                margin='normal'
                placeholder='Estado'
                required
                InputLabelProps={{ shrink: true}}
            />

            
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    margin='normal'
                > {loading ? <CircularProgress color={'inherit'} size={24}/>: <>Enviar</>}</Button>
        </form>
        
        
    </InputsContainer>)
}

export default AddressForm;