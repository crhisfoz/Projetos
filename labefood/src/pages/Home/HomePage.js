import React, { useState, useContext } from "react"
import { useNavigate} from "react-router-dom";
import Card from "../../components/Card/Card"
import Filtro from "../../components/Filtro/Filtro"
import Footer from "../../components/Footer/Footer"
import Search from "../../components/Search/Search"
import { BASE_URL } from "../../constants/urls"
import  useRequestData  from "../../hooks/useRequestData"
import CircularProgress from "@material-ui/core/CircularProgress"
import {goToCart} from "../../routes/coordinator";
import Arrow from '../../components/Arrow/Arrow'

import {
    FourFoodCardContainer,
    FourFoodSearch,
    FourFoodFooter,

} from "./styles"

const HomePage = () => {

    const navigate = useNavigate()

    const { restaurants, loading,} = useRequestData(`${BASE_URL}/restaurants`, [])
    const [input, setInput] = useState("")

    console.log('data pagina home',restaurants)

    const onChangeInput = (ev) => {
        setInput(ev.target.value)
    }

    const showRestaurant =
    restaurants &&
    restaurants.filter(rest => {
            return rest.name.toLowerCase().includes(input.toLowerCase())
        })
            .map((rest, index) => {
                return (<div  key={index}>
                   {/*  <Filtro
                    category={category}
                    filter={[filter, setFilter, setRestaurants]}
                    />  */}
                    <Card
                    image={rest.logoUrl}
                    name={rest.name}
                    id={rest.id}
                    delivery={rest.deliveryTime}
                    shippingPrice={rest.shipping}
                    />
                </div>
                )
            })

    return (<>
    <Arrow showTitle={true} title={'Labefood'} onClick={true} />
        <FourFoodSearch>
            <Search
                input={input}
                onChangeInput={onChangeInput}
            />
        </FourFoodSearch>

        <FourFoodCardContainer>
            <>
                {loading && <CircularProgress />}
                {!loading && restaurants && restaurants.length > 0 && showRestaurant}
                {!loading && restaurants && restaurants.length === 0 && (
                    <h2> Não Há Restaurantes na Lista</h2>
                )}
            </>

        </FourFoodCardContainer>
        <FourFoodFooter>
            <Footer onCLick={()=>goToCart(navigate)}/>
        </FourFoodFooter>
    </>
    )
}

export default HomePage;
