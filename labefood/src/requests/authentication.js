import axios from 'axios';
import { BASE_URL} from '../constants/urls'

const headers = { 'Content-Type': 'application/json' }

 export const signUp = async (body) =>
    await axios.post(`${BASE_URL}/signup`, body,
        { headers: headers })
        .then(response => {
            let data = {
                status: response.status,
                token: response.data.token,
                user: response.data.user
            }
            return {
                data
            }
        }
        ).catch(error =>{
            let data = {
                data: {
                    status: error.response.status,
                    error: error.response.data.message
                }
            }

            return data;
        });