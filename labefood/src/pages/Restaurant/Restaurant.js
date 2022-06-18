import {
  FormControl,
  MenuItem,
  Select,
} from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { Loading } from "../../components/Loading"
import ProductCard from "../../components/ProductCard/ProductCard"
import { RestaurantCardDetails } from "../../components/RestaurantCardDetails"
import { GlobalState } from "../../GlobalState/GlobalState"
import useRequestData from "../../hooks/useRequestData"
import {
  ContainerModal,
  ContainerProductCategory,
  ContainerRestaurantsDetails,
  ModalSelect,
  StyledButton,
  ContainerProducts,
  FourFoodFooter,
} from "./styles"

const RestaurantPage = () => {

  const navigate = useNavigate()

  const param = useParams()
  const {  data, loading} = useRequestRestaurant({}, `/restaurants/${param.id}`)
  const [quantity, setQuantity] = useState(0)
  const [open, setOpen] = useState(false)
  const { cart, setCart, dataRestaurant,setDataRestaurant } = useContext(GlobalState)
  const [prod, setProd] = useState({})

  console.log(data);
  console.log(cart);
  console.log(dataRestaurant);

  const openModal = (product) => {
    if (cart.length > 0) {
      if (data.restaurant.id === cart[0].idRestaurant) {
        setOpen(true)
        setProd({ ...product, idRestaurant: param.id })

      } else {
        alert("Você não pode realizar pedidos em diferentes restaurantes!Esvazie seu carrinho e comece novamente")

      }
    } else {
      setOpen(true)
      setProd({ ...product, idRestaurant: param.id })

    }

  }

  const addToCart = () => {
    if (quantity > 0){
      setCart([...cart, { ...prod, quantity: quantity }])
      setQuantity(0)
      setDataRestaurant(data.restaurant)
      localStorage.setItem("restaurant", JSON.stringify(data.restaurant))
      localStorage.setItem("cart", JSON.stringify(cart))
      closeModal()

  }else{ 
    setCart([...cart, { ...prod, quantity: quantity }])

  }
}

  const closeModal = () => {

    setOpen(!open);

  }

  const handleChange = (event) => {

    setQuantity(event.target.value)

  }

  const renderProducts = (category) => {
    return data.restaurant && data.restaurant.products.map((product) => {
      if (product.category === category) {
        return (
          <CardItemAdd
            key={product.id}
            product={product}
            quantity={product.quantity}
            openModal={openModal}
          />
        )
      }
    })
  }

  const renderRestaurant = data.restaurant &&
    (
      <ContainerRestaurantsDetails>
        <CardRestaurant
          image={data.restaurant.logoUrl}
          name={data.restaurant.name}
          category={data.restaurant.category}
          deliveryTime={data.restaurant.deliveryTime}
          shipping={data.restaurant.shipping}
          address={data.restaurant.address}
        />
      </ContainerRestaurantsDetails>
    )

  const categoriesList = data.restaurant && data.restaurant.products.map((product) => {
    return product.category
  })


  const products = [...new Set(categoriesList)].map((category) => {
    return (
      <ContainerProductCategory key={category} >
        <h2>{category}</h2>
        {renderProducts(category)}
      </ContainerProductCategory>
    )
  })

  return (
    <ContainerProducts>
     <Arrow onClick={() => goToHome(navigate)} showTitle={true} title={'Restaurante'} /> 
      <Header  heigth={'2rem'}/>
      {loading && <CircularProgress />}
      <styleRestaurant>
        {!loading && renderRestaurant}
        {products}
      </styleRestaurant>

      <ContainerModal open={open} onClick={(e) => (e.target === e.currentTarget ? closeModal() : null)}>
        <ModalSelect >
          <p>Selecione a quantidade desejada</p>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={quantity}
              onChange={handleChange}
            >
              <MenuItem value={0} disabled>
                0
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
          <StyledButton
            variant="text"
            color="primary"
            onClick={() => addToCart()}
          >
            ADICIONAR AO CARRINHO
          </StyledButton>
        </ModalSelect>
      </ContainerModal>
      <FourFoodFooter>
      <Footer/>
      </FourFoodFooter> 
    </ContainerProducts>
  )
}

export default RestaurantPage
