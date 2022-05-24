import React, { useContext, useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import AddressContent from './AddressContent'
import { CardItemAdd } from '../../components/CardItems/CardItemAdd'
import Footer from '../../components/Footer/Footer'
import { GlobalOrderContext } from '../../Context/OrderContent/GlobalOrderContext'
import { goToFourFood, goBack} from '../../routes/coordinator';
import useForm from '../../hooks/useForm'
import axios from 'axios'
import Header from '../../components/Header/Header';
import CircularProgress from '@material-ui/core/CircularProgress'
import { BASE_URL } from '../../constants/urls'
import Arrow from '../../components/Arrow/Arrow';



import {
  CartDetails,
  CartEmpty,
  Container,
  Frete,
  Input,
  Path,
  Price,
  RestaurantDetails,
  StyledButton,
  SubTotal,
  Total,
  TotalPrice,
  AddressTitle,
  FourFoodFooter
} from './styles'

const Cart = () => {
 
  const { cart, dataRestaurant, loading, setCart} = useContext(GlobalOrderContext)
  const infoUser = JSON.parse(localStorage.getItem('infoUser'))

  const navigate = useNavigate()
  const [ form, onChange ] = useForm({
    paymentMethod: '',
  })


  const [renderCart, setRenderCart] = useState([])

  const renderCartFun = () => {
    setRenderCart(JSON.parse(localStorage.getItem('cart')))
  }

  const placeOrder = (e) => {
 
    e.preventDefault()

    const body = {
      products: cart.map((item) => {
        return {
          id: item.id,
          quantity: item.quantity,
        }
      }),
      paymentMethod: form.paymentMethod,
    }
    const config = {
      method: 'post',
      url: BASE_URL + `/restaurants/${dataRestaurant.id}/order`,
      headers: { auth: localStorage.getItem('token') },
      data: body,
    }
    axios(config)
      .then(({ data }) => {
        alert('pedido feito')
        return data
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
      setCart('cart', [])
/*       goToFourFood(navigate) */   
  }

  
  const valor = cart.map((c) => {
    return c.quantity * c.price
  })
  let soma = 0.0
  for (let i = 0; i < valor.length; i++) {
    soma = soma + valor[i]
  }
  let somaWithFrete = soma + dataRestaurant.shipping


  return (
    <Container>
      {loading && <CircularProgress />}
      <Arrow onClick={() => goBack(navigate)} showTitle={true} title={'Meu Carrinho'} /> 
      
      <Header />
      <AddressContent
      address={infoUser.data.address}
      >
        <AddressTitle>Endereço de entrega</AddressTitle>
        <p>{infoUser.data.address}</p>
      </AddressContent>
      {cart.length > 0 ? (
        <RestaurantDetails>
          <h3>{dataRestaurant.name}</h3>
          <p>{dataRestaurant.address}</p>
          <p>
            {' '}
            {Math.floor(dataRestaurant.deliveryTime * 0.9)} -{' '}
            {dataRestaurant.deliveryTime} min
          </p>
        </RestaurantDetails>
      ) : (
        <></>
      )}
      <CartDetails>
        {cart.length === 0 && <CartEmpty>Carrinho Vazio</CartEmpty>}
        {renderCart.map((item) => {
          return <CardItemAdd product={item} key={item.id} />
        })}
        <Price>
          <Frete>
            Frete R$ {' '}
            {cart.length > 0 ? dataRestaurant.shipping.toFixed(2) : '0,00'}
          </Frete>
          <TotalPrice>
            <SubTotal>SUBTOTAL</SubTotal>
            <Total> R$ {soma === 0 ? soma : somaWithFrete.toFixed(2)}</Total>
          </TotalPrice>
        </Price>
        <p>Forma de Pagamento</p>
        <Path></Path>
        <form onSubmit={placeOrder}>
          <Input
            type='radio'
            value={'money'}
            required
            onChange={onChange}
            id='money'
            name={'paymentMethod'}
          />
          <label htmlFor='dinheiro'>Dinheiro</label>
          <br />
          <br />
          <Input
            type='radio'
            value={'creditcard'}
            required
            onChange={onChange}
            id='credit'
            name={'paymentMethod'}
          />
          <label htmlFor='credito'>Cartão de Crédito</label>
          <StyledButton
            textPrimary={'secondary'}
            color={'primary'}
            fullWidth
            variant='contained'
            type='submit'
            margin={'normal'}
            desabilitado={cart.length <= 0}
          >
            Confirmar
          </StyledButton>
        </form>
      </CartDetails>
      <FourFoodFooter>
      <Footer />
      </FourFoodFooter>  
    </Container>
  )
}

export default Cart
