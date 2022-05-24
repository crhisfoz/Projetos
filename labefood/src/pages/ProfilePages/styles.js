import styled from 'styled-components'
import Button  from "@material-ui/core/Button"

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;

    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;

    h3{
        color: var(--black);
        font-weight: normal;
        margin-bottom: 0.8em;
        margin-top: 0.8em;
    }

    input:hover{
        cursor: pointer;
    }

    form > button{
        color: var(--red);
        background-color: var(--red);
    }
`
export const Geral = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
    margin: 0 auto;
`
export const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
    margin-top: -10vh;
`

export const FourFoodFooter = styled.div`
    display: flex;
    justify-content: center;  
    bottom: 0; 
    `

export const StyledButton = styled(Button) `
align-self: flex-end;
`