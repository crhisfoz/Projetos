import React from "react";
import "./style.css";
import { goToHome } from "../../routes/Coordinator";
import { goToPokedex } from "../../routes/Coordinator";
import { goToPokemonDetailsHome } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/Coordinator";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Projeto Pokedex</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="btn btn-primary me-2"
                  aria-current="page"
                  onClick={() => goToHome(navigate)}
                >
                  {" "}
                  Página Inicial
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-primary me-2"
                  onClick={() => goToPokedex(navigate)}
                >
                  Ver Minha Pokedex
                </button>
              </li>
              <li className="nav-item">
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-primary"
                  onClick={() => goBack(navigate)}
                >
                  Voltar
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
