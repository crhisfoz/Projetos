import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar } from './styles'
import Button from '@material-ui/core/Button';
import { ArrowBackIos } from "@material-ui/icons"
import { goBack, goToLogin } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"


const Arrow = ({ onClick, showTitle, title }) => {
    const navigate = useNavigate()

    const logout = () => {
        Swal.fire({
            position: 'top-end',
            title: "Deseja Realmente Sair",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sair!'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('token', "")
                goToLogin(navigate)
            }
        })
    }

        
    return (
        <AppBar className='arrowContainer' position="static">
            <StyledToolbar>
                <Button onClick={() => goBack(navigate)} color="inherit"> <ArrowBackIos
                    className="arrow-back-ios" /></Button>
                {showTitle ? <span>{title}</span> : ''}
                <Button onClick={logout} color="inherit">Logout</Button>
            </StyledToolbar>
        </AppBar>
    );
}

export default Arrow;


