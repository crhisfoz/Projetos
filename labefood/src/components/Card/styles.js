import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    height: 196px;
    padding: 0 0 16px;

    .image{
        width: 100%;
        height: 120px;
        margin: 5px 0 12px;
        object-fit: contain;
    }

    .card-restaturante-text-style-3{
        width: 296px;
        height: 18px;
        margin: 12px 16px 4px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #5cb646;
    }

    .info-entrega{
        display: flex;   
        
        .tempo-de-entrega {
            width: 148px;
            height: 18px;
            margin: 4px 8px 0 16px;
            font-family: Roboto;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.39px;
            color: #b8b8b8;
        }

        .taxa-de-entrega {
            width: 140px;
            height: 18px;
            margin: 4px 16px 0 8px;
            font-family: Roboto;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.39px;
            text-align: right;
            color: #b8b8b8;
        }
    }
`;


export const Rectangle = styled.div`
    width: 328px;
    height: 188px;
    padding: 0 0 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`;