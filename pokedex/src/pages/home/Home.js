import React, { useContext, useState } from "react";
import { StyledHome } from "./style";
import { CardPokemon } from "../../components/cardPokemon/cardPokemon";
import { Spinner } from "../../components/spinner/Spinner";
import { GlobalStateContext } from "../../global/globalState/GlobalStateContext";
import { EmptyCard } from "../../components/emptyCard/emptyCard";
import { Pagination } from "../../components/pagination/Pagination";
import Swal from "sweetalert2"

export const Home = () => {

  const[
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
    setPokedexList,
  ] = useContext(GlobalStateContext)

  
  const addToPokedex = (newPokemon) => {
    const newListPokemon = [...pokedexList];
    newListPokemon.push(newPokemon);
    setPokedexList(newListPokemon)
    Swal.fire(`${newPokemon.name} Adicionado`)
    
    for(let i = 0; i < pokemonList.length; i ++){
      if (pokemonList[i] === newPokemon){
        pokemonList.splice(i, 1)
      }
    }
  };  

  const cardPokemon =
    pokemonList &&
    pokemonList.map((pokemon, index) => {
      return (
        <CardPokemon
          key={index}
          image={pokemon.sprites.other.dream_world.front_default}
          name={pokemon.name}
          type={pokemon.types[0].type.name}
         pokemonList={pokemon}
        addToPokedex={addToPokedex}
        id={pokemon.id}
        />
      );
    });

  return (
    <StyledHome>
      <div className="contayner my-1 py-1">
        <div className="row">
          <div className="col-12 md-1 mb-1">
            {loading && <Spinner />}
            <div className="row justify-content-center">
              {!loading && error && <h1>Houve Um Erro na Requisição</h1>}
              {!loading && pokemonList && pokemonList.length > 0 && cardPokemon}
              {!loading && pokemonList && pokemonList.length === 0 && (
               <EmptyCard/>
              )}
            </div>
          </div>
        </div>
              </div>
      {totalPages && <Pagination limit={limit} totalPages={totalPages} offset={offset} setOffset={setOffset}/>}
    </StyledHome>
  );
};
