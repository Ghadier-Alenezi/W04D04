import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import "./style.css";

const Card = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);
  const getPokemon = async () => {
    const response = await fetch(
      "https://api.pokemontcg.io/v2/cards"
    );
    const body = await response.json();
    setPokemon(body.data);
  };

  return (
    <div className="wrapper">
      {pokemon.length ? (
        <ul>
          {pokemon.map((pokemon, i) => {
            <div key={i}>
              <li>{pokemon.name}</li>
              <img className="imgCard" src={pokemon.images.large} />
            </div>;
          })}
        </ul>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default Card;
