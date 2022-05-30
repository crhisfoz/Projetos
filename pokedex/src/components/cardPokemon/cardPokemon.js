import React from "react";
import "./style.css"
import { useNavigate} from "react-router-dom";


export const CardPokemon = (props) => {

  
  const navigate = useNavigate();


  const style = "thumb-container me-2 mb-2 " + props.type


  const goToPokemonDetails = (name) =>{
    navigate(`pokemon/${name}`)
  }
  
  return (
    <div className={style} style={{ width: "15rem" }}>
      <div className="card-img-poke">
      <img
        src={props.image}
        alt="Imagem Pokemon"
      />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
      </div>
      <h6>#Id:<small>{props.id} </small></h6>
      <h6>Tipo: <small>{props.type} </small></h6>
      <div className="card-button">
        <button
          className="btn btn-primary me-3"
          onClick={() => props.addToPokedex(props.pokemonList)}
        >
          Adicionar à Pokedex
        </button>
        <button
          className="btn btn-primary"
          onClick={() => goToPokemonDetails(props.name)}
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};
