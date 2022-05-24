import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import { Edit } from './Style';

export const EditIco = ({ onClick }) => {
    return(<Edit onClick={onClick}>
        <EditIcon />
    </Edit>
        )
}
