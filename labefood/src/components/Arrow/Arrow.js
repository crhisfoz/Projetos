import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {StyledToolbar} from './styles'
import Button from '@material-ui/core/Button';
import { ArrowBackIos } from "@material-ui/icons"
import {goBack, goToLogin} from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom';

const Arrow =({ onClick, showTitle, title }) => {
    const navigate = useNavigate()

    const logout = () =>{
        localStorage.setItem('token', "")
        goToLogin(navigate)
    }
    return (
        <AppBar className='arrowContainer' position="static">
            <StyledToolbar>
                <Button  onClick={()=> goBack(navigate)}  color="inherit"> <ArrowBackIos
                    className="arrow-back-ios" /></Button>
                    {showTitle? <span>{title}</span> : '' }
                <Button onClick={logout} color="inherit">Logout</Button>
            </StyledToolbar>
        </AppBar>
    );
}

export default Arrow;


