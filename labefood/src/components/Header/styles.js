import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 345px;
    height: 3em;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    margin-top: ${props => props.heigth? props.heigth : '0.5em' };
    .main-title{
        display: flex;
        flex-direction: column;
        align-content: center;
        border: 2px solid;
    }

    img{
        display: flex;
        width: 345px;
        height: 10rem;
    }

    h3{
        color: var(--red);
        font-weight: normal;
    }

`;