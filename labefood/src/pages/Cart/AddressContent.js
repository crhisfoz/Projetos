import {TextField } from "@material-ui/core";
import React from "react";
import { AddressContentContentContainer } from "./styles";



const AddressContent = ({address}) => {

    return (<AddressContentContentContainer>
            <TextField
                type="text"
                name="Endereco de Entrega"
                value=""
                label="Endereço de Entrega"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder={address}
                required
                InputLabelProps={{ shrink: true}}
            />
    </AddressContentContentContainer>)
}

export default AddressContent