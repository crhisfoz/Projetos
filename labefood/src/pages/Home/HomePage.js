import React, { useState, useEffect } from "react"
import Card from "../../components/Card/Card"
import Footer from "../../components/Footer/Footer"
import Search from "../../components/Search/Search"
import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import CircularProgress from "@material-ui/core/CircularProgress"
import Arrow from "../../components/Arrow/Arrow"
import useProtectedPage from "../../hooks/useProtectPage"

import {
    FourFoodCardContainer,
    FourFoodSearch,
    FourFoodFooter,
    FiltroContainer,
    Container

} from "./styles"


const HomePage = () => {

    useProtectedPage()

    const { restaurants, loading } = useRequestData(`${BASE_URL}/restaurants`, [])

    const [selectedCategory, setSelectedCategory] = useState({
        active: false,
        category: "",
    })


    const [search, setSearch] = useState("")

    const onChangeInput = (ev) => {
        setSearch(ev.target.value)
    }


    const handleSelectCategory = (category) => {
        if (selectedCategory.category === category && selectedCategory.active) {
            setSelectedCategory({ active: false, category: "" })
        } else {
            setSelectedCategory({ active: true, category: category })
        }
    }

    const filterByCategory = () => {
        const filters = restaurants.filter((restaurant) => {
            if (restaurant.category === selectedCategory.category) return true
        })

        return filters.map((rest) => {
            return <Card
                image={rest.logoUrl}
                name={rest.name}
                id={rest.id}
                delivery={rest.deliveryTime}
                shippingPrice={rest.shipping}
            />
        })
    }

    const categoriesList = restaurants.map((restaurant) => {
        return restaurant.category
    })
        .sort((a, b) => {
            return a.localeCompare(b)
        })

    const categories = [...new Set(categoriesList)].map((category) => {
        return (
            <div
                onClick={() => {
                    handleSelectCategory(category)
                }}
                key={category}
            >
                <ul><li>{category}</li></ul>
            </div>
        )
    })

    const restaurantsList = restaurants.filter(rest => {
        return rest.name.toLowerCase().includes(search.toLowerCase())
    })
        .map((rest) => {
            return <Card
                image={rest.logoUrl}
                name={rest.name}
                id={rest.id}
                delivery={rest.deliveryTime}
                shippingPrice={rest.shipping}
            />
        })

    return (<Container>
        <Arrow showTitle={true} title={"Labefood"} onClick={true} />
        <FourFoodSearch>
            <Search
                input={search}
                onChangeInput={onChangeInput}
            />
        </FourFoodSearch>
        <FiltroContainer className="filtro">
            {categories}
        </FiltroContainer>

        <FourFoodCardContainer>
            <>
                {loading && <CircularProgress />}
                {!loading && restaurants && selectedCategory.category !== "" ? filterByCategory() : restaurantsList}
            </>
        </FourFoodCardContainer>
        <FourFoodFooter>
            <Footer />
        </FourFoodFooter>
    </Container>
    )
}

export default HomePage;
