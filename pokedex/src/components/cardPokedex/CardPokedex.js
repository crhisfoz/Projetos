import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const CardPokedex = (props) => {
  
  const navigate = useNavigate();

  const { name, sprites } = props.pokemon;

  const style = "thumb-container me-2 mb-2 " + props.type

  const goToPokemonDetails = (name) =>{
    navigate(`${name}`)
  }
  return (
    <div className={style} style={{ width: "15rem" }}>
      <div className="card-img-pokedex">
      <img
        src={sprites.other.dream_world.front_default}
        className="card-img-top"
        alt="Imagem Pokemon"
      />
      </div>
 
      <div className="card-body">
        <h5 className="card-title">{name}</h5> 
        <h6>#Id:<small>{props.id} </small></h6>
      <h6>Tipo: <small>{props.type} </small></h6>
      </div>
      <div className="card-button">
        <button className="btn btn-danger me-3" onClick={()=> props.removeToPokedex(props.pokemon)}>Remover</button>
        <button
          className="btn btn-outline-primary"
          onClick={() => goToPokemonDetails (name)}
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};
