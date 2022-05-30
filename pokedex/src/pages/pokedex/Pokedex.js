import React, { useContext } from "react";
import { CardPokedex } from "../../components/cardPokedex/CardPokedex";
import { StylePokedex } from "./style";
import { Spinner } from "../../components/spinner/Spinner";
import { sortPokemons } from "../../components/functions/functionSort/sortPokemons";
import { EmptyCard } from "../../components/emptyCard/emptyCard";
import { GlobalStateContext } from "../../global/globalState/GlobalStateContext";
import Swal from "sweetalert2"


export const Pokedex = () => {
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


  const RemoveToPokedex = (newPokemon) => {
    const newListPokemon = [...pokemonList];
    newListPokemon.push(newPokemon);
        setPokemonList(sortPokemons(newListPokemon))
        Swal.fire(`${newPokemon.name} Foi removido`)
    for (let i = 0; i < pokedexList.length; i++) {
      if (pokedexList[i] === newPokemon) {
        pokedexList.splice(i, 1);
      }
    }
  };

  const cardPokedex = pokedexList.map((pokemon) => {
    return (
      <CardPokedex
        key={pokemon.id}
        pokemon={pokemon}
        type={pokemon.types[0].type.name}
        removeToPokedex={RemoveToPokedex}
      />
    );
  });


  return (
    <StylePokedex>
    
      <div className="contayner my-5 py-5">
            {loading && <Spinner />}
        <div className="row">
          <div className="col-12 md-4 mb-5">
            <div className="row justify-content-center">
                       {!loading && pokedexList.length > 0 && cardPokedex}
            {!loading &&  pokedexList.length === 0 && (
                <EmptyCard/>)}
              </div>
          </div>
        </div>
      </div>
    </StylePokedex>
  );
};
