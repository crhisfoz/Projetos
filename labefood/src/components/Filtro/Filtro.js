import React  from "react";

import { FiltroContainer } from "./styles";

const Filtro = (props) => {

    const [category] = props.category
    
    const [filter, setFilter, setRestaurants] = props.filter
    
    const filterRestaurant = (cat) =>{
        const updatedList = category.filter((x) => x.category === cat);
        setRestaurants(updatedList)
    }

    console.log('categoria recebida props', props)

console.log('categoria filtro', category)
    const categoryFilter = filter.map((category, index)=> <ul onClick={()=>filterRestaurant(category)} key={index}><li>{category}</li></ul> )

    return(<FiltroContainer className="filtro">
        {categoryFilter}
    </FiltroContainer>)
}

export default Filtro;