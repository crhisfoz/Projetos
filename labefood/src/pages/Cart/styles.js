import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow-x: auto;
  margin: 60px 0;
  font-family: "Roboto";
`
export const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
  padding: 1rem 1rem;
`
export const AdressTitle = styled.p`
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
 color:var(--greyish);
`
export const CartEmpty = styled.p`
  text-align: center;
`
export const Path = styled.div`
  height: 0.03rem;
  margin-bottom: 1rem;
  border: solid 1px black;
`
export const CartDetails = styled.div`
  padding: 1rem 1rem;
`
export const StyledButton = styled.button`
display: flex;
  width: 100%;
  padding: 1rem;
  display: block;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  background-color: ${(props) =>
    props.desabilitado ? "E8222E" : '#e8222e' };
  cursor: pointer;
  margin: 20px 0;
  text-align: center;
  align-content: center;
  justify-content: center;
  font-family: 'Roboto';
  height: 3rem;
  border-radius: 5px;

`
export const RestaurantDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.3rem 1rem 0.3rem 1rem;
  height: auto;
  gap: 0.5rem;
  h3 {
    margin: 0;
    margin-top: 0.5rem;
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color:var(--lipstick)
  }
  p {
    margin: 0;
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--greyish)
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 40px;
`

export const Frete = styled.p`
  align-self: flex-end;
  margin-bottom: 0;
  margin-right: 20px;
`

export const Total = styled.p`
  color:var(--lipstick);
  font-weight: bold;
  
`

export const SubTotal = styled.p`
  margin-bottom: 0;
`
export const Input = styled.input`
  background-color: black;
  accent-color: black;
`
export const AddressTitle = styled.span`
  font-family: "Roboto";
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--greyish)
`
export const AddressContentContentContainer = styled.div`
  display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
    margin-top: 2rem;

    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;
`
export const FourFoodFooter = styled.div`
    display: flex;
    justify-content: center;  

`

