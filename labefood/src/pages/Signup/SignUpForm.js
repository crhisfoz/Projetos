import { Button, TextField, InputAdornment } from "@material-ui/core";
import {Visibility, VisibilityOff} from '@material-ui/icons'
import React, {useState} from "react";
import { InputsContainer } from "./styles"

import 'react-toastify/dist/ReactToastify.css';



const SignUpForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return(<InputsContainer>
        

        <form onSubmit=''>
            <h3>Cadastrar</h3>

            <TextField
                type="text"
                name="name"
                value=''
                onChange=''
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
                value=''
                onChange=''
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
                value=''
                onChange=''
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="000.000.000-00"
                required
                InputLabelProps={{ shrink: true}}
            />

             <TextField

                name="password"
                value=''
                onChange=''
                label="Senha"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Mínimo 6 caracteres"
                required
                pattern=".{6,}"
                InputLabelProps={{ shrink: true}}
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
                type={'password'}
                name="confirmarSenha"
                value=''
                onChange=''
                label="Confirmar"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Confirme a senha anterior"
                required
                InputLabelProps={{ shrink: true}}
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
                style={{ textTransform: 'none' }}
            >
                Criar
            </Button>
        </form>
    </InputsContainer>)
}

export default SignUpForm;