import styled from 'styled-components'

export const FourFoodCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 640px;
    overflow-x: auto;

    .FourFood-header{
        border-bottom: 1px solid var(--grey);
        width: 100%;
        height: 44px;
        margin: 20px 92px 0 93px;
        padding: 13px 50.5px 12px;
    }
`;
export const FourFoodHeader = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 64px;
    margin: 0 0 8px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 var(--black-25);
    background-color: #fff;
    .FourFood-header{
    }
`;
export const FourFoodSearch = styled.div`
    display: flex;
    justify-content: center;
    .search{
        width: 20.5rem;
        height: 3.5rem;
        border-radius: 2px;
        margin-top: 10px;
        margin-bottom: 10px;
        border: solid 1px var(--greyish);
    }
`;
export const FourFoodFooter = styled.div`
    display: flex;
    
    justify-content: center;
    `
    export const ProductCategory = styled.div`
    letter-spacing: -0.29px;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    margin-top: 1rem;
    border-bottom: 1px solid black;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
  `;