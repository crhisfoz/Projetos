import React, { useState, useContext } from 'react'
import { useNavigate} from 'react-router-dom';
import Card from '../../components/Card/Card'
import Filtro from '../../components/Filtro/Filtro'
import Footer from '../../components/Footer/Footer'
import Search from '../../components/Search/Search'
import { BASE_URL } from '../../constants/urls';
import { getRestaurant } from '../../Services/services'
import CircularProgress from '@material-ui/core/CircularProgress'
/* import { GlobalOrderContext } from '../../Context/OrderContent/GlobalOrderContext' */
import {
    goToCart
} from '../../routes/coordinator';

import {
    FourFoodCardContainer,
    FourFoodHeader,
    FourFoodSearch,
    FourFoodFooter,

} from './styles'
/* import { ActiveOrder } from '../../components/ActiveOrder/ActiveOrder' */
import Arrow from '../../components/Arrow/Arrow';

const FourFood = () => {

    const navigate = useNavigate()

    const [restaurants, loading, error, category, setRestaurants, filter, setFilter] = getRestaurant(`${BASE_URL}/restaurants`, []);
    const [input, setInput] = useState("")



    const onChangeInput = (ev) => {
        setInput(ev.target.value)
    }

    console.log('categoria fourfood', category)
    console.log('filtro fourfood', filter)
    console.log('restaurants fourfood', restaurants)
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
    <Arrow showTitle={true} title={'Fourfood'}/>
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

export default FourFood;
