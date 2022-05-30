import React, { useState, useEffect } from "react";
import { GlobalStateContext } from "./GlobalStateContext"
import { getPokemonData } from "../../components/functions/getPokemonData/getPokemonData"
import { BASE_URL } from "../../components/constants/urlBase";
import { sortPokemons } from "../../components/functions/functionSort/sortPokemons";
import axios from "axios";

export const GlobalState = (props) => {

    const limit = 30
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [totalPages, setTotalPages] = useState(0)
    const [offset, setOffset] = useState(0)
    const [pokedexList, setPokedexList] = useState([]);
    

  const getPokemons = async () => {
    setLoading(true);
    try {
      const data  = await getPokemonData(limit, offset) 

      const newArrayPokemons = [];
      setTotalPages(data.count)

      for (let pokemon of data.results) {
        const pokemonDetails = (await axios.get(`${BASE_URL}${pokemon.name}`)).data;
        newArrayPokemons.push(pokemonDetails);
      }
      setPokemonList(sortPokemons(newArrayPokemons))

    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemons();
  }, [totalPages, offset]);



  return (
    <GlobalStateContext.Provider  value={[
        pokemonList,
        setPokemonList,
        loading,
        error,
        totalPages,
        setTotalPages,
        offset,
        setOffset,
        limit,
        pokedexList,
        setPokedexList
      ]}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}






