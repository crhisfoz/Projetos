import styledComponents from "styled-components";


export const HeaderStyle = styledComponents.header`
    background-color: white;
    color: black;
    text-align: center;
    font-size: 30px;
    font-weight: regular;
    font-family: 'Roboto';
    border-bottom: 1px solid #B8B8B8;
    padding: 10px;
`;
export const Profiles = styledComponents.div`
    background-color: white;
    width: 100%;
    color: black;
    text-align: center;
    font-size: 16px;
    font-weight: regular;
    font-family: 'Roboto';
    border-bottom: 1px solid #B8B8B8;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;
export const ProfileH1 = styledComponents.h1`
    background-color: white;
    color: black;
    text-align: left;
    font-size: 16px;
    font-weight: regular;
    font-family: 'Roboto';
    padding: 0px;
    margin: 0px;
`;
export const Endereco = styledComponents.div`
    background-color: #B8B8B8;
    width: 100%;
    color: black;
    text-align: center;
    font-size: 16px;
    font-weight: regular;
    font-family: 'Roboto';
    border-bottom: 1px solid #B8B8B8;
    padding: 10px;
`;
export const EnderecoH1 = styledComponents.h1`
    background-color: #B8B8B8;
    color: black;
    text-align: left;
    font-size: 16px;
    font-weight: regular;
    font-family: 'Roboto';
    padding: 0px;
    margin: 0px;
`;
export const EnderecoH1C = styledComponents.h1`
    background-color: #B8B8B8;
    color: black;
    opacity: 0.5;
    text-align: left;
    font-size: 16px;
    font-weight: regular;
    font-family: 'Roboto';
    padding: 0px;
    margin: 0px;
`;
export const Edit = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    height: 10vh;
    display: flex;
    margin-top: -8vh;
    margin-left: 128vh;
`;
export const EditAdress = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    height: 10vh;
    display: flex;
    margin-top: -4vh;
    margin-left: 37vw;
`;
export const Historico = styledComponents.div`
    background-color: white;
    color: black;
    text-align: left;
    font-size: 16px;
    font-weight: regular;
    font-family: 'Roboto';
    border-bottom: 1px solid black;
    margin-top: 4vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 1vh;
`;
export const HistoricoH1 = styledComponents.h1`
    font-size: 16px;
    flex-direction: column;
    text-align: center;
    font-weight: regular;
    font-family: 'Roboto';
    padding-bottom: 10px;
    margin: 0px;
   ;
`;

export const ContainerPedidos = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    display: flex;
    border: 2px solid #000;
    border-radius: 10px;
    margin-left: 1vh;
    font-weight: regular;
    font-family: 'Roboto';
    margin-top: 1rem;
    width: 345px;
    h3{
        margin: 5px 10px 5px 10px;
        font-family: 'Roboto';
    }
    h5{ margin:1rem;
        font-family: 'Roboto';
    }

`;

export const ContainerPedidosH2 = styledComponents.h2`
    background-color: white;
    color: #E8222E;
    text-align: left;
    font-size: 16px;
    font-weight: regular;
    font-family: 'Roboto';
`;
export const Data = styledComponents.h3`
    background-color: white;
    color: black;
    text-align: left;
    font-size: 16px;
    font-weight: regular;
    font-family: 'Roboto';
    margin: 0px;
    margin-left: 10px;
    opacity: 0.5;
`;
export const ContainerPedidosH3 = styledComponents.h3`
    background-color: white;
    color: black;
    text-align: left;
    font-size: 16px;
    font-weight: regular;
    font-family: 'Roboto';
    margin: 0px;
    margin-left: 10px;
`;


export const ProfileContainer = styledComponents.div`
    display: flex;
    width: 80vh;
    height: 100%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    li{
        list-style-type: none;
    }
`;

