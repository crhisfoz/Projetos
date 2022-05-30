import React, { useEffect, useState, useContext } from "react";
import { StylePokemonDetails } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../components/constants/urlBase";
import { Spinner } from "../../components/spinner/Spinner";
import { GlobalStateContext } from "../../global/globalState/GlobalStateContext";
import { sortPokemons } from "../../components/functions/functionSort/sortPokemons";
import Swal from "sweetalert2";
import { goToPokedex } from "../../routes/Coordinator";


export const PokemonDetails = () => {

  const navigate = useNavigate()

  const params = useParams();

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

  const [pokemonDetails, setPokemonDetails] = useState();
  const [buttonName, setButtonName] = useState("Adicionar à Pokedex");
  const [stateButton, setStateButton] = useState(false);
  const [classButton, setClassButton] = useState("btn btn-primary");

  useEffect(() => {
    const getPokemonDetails = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}${params.name}`);
        setPokemonDetails(data);
      } catch (err) {
        console.log(error);
      }
    };
    getPokemonDetails();
  }, []);

  const addToPokedexDetails = (newPokemon) => {
    const newListPokemon = [...pokemonList];
    const index = pokedexList.findIndex((i) => i.id === newPokemon.id);
    if (index < 0) {
      if (
        window.confirm(
          `O ${newPokemon.name} não está na Pokedex, deseja adicioná-lo ?`
        )
      ) {
        setPokedexList([...pokedexList, newPokemon]);
        setStateButton(!stateButton);
        pokemonList.splice(newPokemon, 1);
        Swal.fire(`${newPokemon.name} foi Adicionado à Pokedex`);
      }
    } else {
      if (
        window.confirm(`Deseja Remover o ${newPokemon.name} da Pokedex ?? `)
      ) {
        newListPokemon.push(newPokemon);
        setPokemonList(sortPokemons(newListPokemon))
        setPokedexList(pokedexList.filter((pokemon)=>pokemon.id !== newPokemon.id))
        Swal.fire(`${newPokemon.name} foi Removido da Pokedex`);
        goToPokedex(navigate)

      }
    }
  };

  useEffect(() => {
    if (pokemonDetails) {
      const index = pokedexList.findIndex(
        (i) => i.id === pokemonDetails.id
      );
      if (index < 0) {
        setButtonName("Adicionar à Pokedex");
        setClassButton("btn btn-primary");
      } else {
        setClassButton("btn btn-danger");
        setButtonName("Remover da Pokedex");
      }
    }
  }, [pokemonDetails, pokedexList]);

  const pokemonDetailsPage = pokemonDetails && (
    <div className="container">
      <div className="row align-items-start">
        <div className="topo">
          <h1>{pokemonDetails.name} </h1>
          <div className="topo">
            <h3> Tipo: {pokemonDetails.types[0].type.name} </h3>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col">
          <div className="card">
            <img
              className="image"
              src={pokemonDetails.sprites.other.dream_world.front_default}
              alt="Imagem Pokemon Frente"
            />
          </div>
          <div className="card">
            <img
              src={pokemonDetails.sprites.back_default}
              className="image-costas"
              alt="Imagem Pokemon Costas"
            />
          </div>
        </div>
        <div className="col">
          <div className="card-detalhes">
            <h4>Poderes</h4>
            <p>
              Hp: <small>{pokemonDetails.stats[0].base_stat}</small>{" "}
            </p>
            <p>
              Attack: <small>{pokemonDetails.stats[1].base_stat}</small>{" "}
            </p>
            <p>
              Defense: <small>{pokemonDetails.stats[2].base_stat}</small>{" "}
            </p>
            <p>
              Special-attack: <small>{pokemonDetails.stats[3].base_stat}</small>{" "}
            </p>
            <p>
              Special-defense:{" "}
              <small>{pokemonDetails.stats[4].base_stat}</small>{" "}
            </p>
            <p>
              Speed: <small>{pokemonDetails.stats[5].base_stat}</small>{" "}
            </p>
          </div>
        </div>
        <div className="col">
          <div className="card-detalhes">
            <h4>Principais Ataques</h4>
            <p>
              <small>{pokemonDetails.moves[0].move.name}</small>
            </p>
            <p>
              <small>{pokemonDetails.moves[1].move.name}</small>
            </p>
            <p>
              <small>{pokemonDetails.moves[2].move.name}</small>
            </p>
            <p>
              <small>{pokemonDetails.moves[3].move.name}</small>
            </p>
            <p>
              <small>{pokemonDetails.moves[4].move.name}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <StylePokemonDetails>
      <div className="container">{pokemonDetailsPage}</div>
      <div className="col-12 md-4 mb-5">
            {loading && <Spinner />}
            <div className="row justify-content-center">
              {!loading && error && <h1>Houve Um Erro na Requisição</h1>}
              {!loading && pokemonDetails && pokemonDetails.length > 0 && pokemonDetailsPage}
              {!loading && pokemonDetails && pokemonDetails.length === 0 && (
                <h1> Não Há Pokemons</h1>
              )}
            </div>
          </div>
      <div className="container-button">
        <button
          className={classButton}
          onClick={() => addToPokedexDetails(pokemonDetails)}
        >
          {buttonName}
        </button>
      </div>
    </StylePokemonDetails>
  );
};
