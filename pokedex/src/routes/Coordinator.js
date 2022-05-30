export const goToHome = (navigate) =>{
    navigate("/")
}

export const goToPokedex = (navigate) =>{
    navigate("/pokedex")
}

export const goToPokemonDetailsPokedex = (navigate) =>{
    navigate("/pokedex/name")

}
export const goToPokemonDetailsHome = (navigate) =>{
    navigate("/pokemon/name")
}

export const goBack = (navigate) =>{
    navigate(-1)
}