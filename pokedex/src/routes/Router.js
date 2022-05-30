import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { ErrorPage } from "../pages/error/ErrorPage";
import { Home } from "../pages/home/Home";
import { Pokedex } from "../pages/pokedex/Pokedex";
import { PokemonDetails } from "../pages/pokemon-details/PokemonDetails";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pokedex" element={<Pokedex />} />
        <Route exact path="/pokemon/:name" element={<PokemonDetails />} />
        <Route exact path="/pokedex/:name" element={<PokemonDetails />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
