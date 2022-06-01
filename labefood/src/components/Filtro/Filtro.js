import React  from "react";

import { FiltroContainer } from "./styles";

const Filtro = ({data}) => {
    
    const {category, filter,setRestaurants} = data
    
  const filterRestaurant = (cat) =>{
        const updatedList = filter.filter((x) => x.category === cat);
        setRestaurants(updatedList)
    }

    const categoryFilter = category.map((cat, index)=> <ul onClick={()=>filterRestaurant(cat)} key={index}><li>{cat}</li></ul> )
 
    return(<FiltroContainer className="filtro">
       {categoryFilter}
    </FiltroContainer>)
}

export default Filtro;