import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const InputsContainer = styled.div`
    margin-top: 5rem;
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
    
`

export const SignUpButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;

    align-items: center;
    margin-bottom: 20px;
`