import React, { useState } from "react";
import {
  Card,
  PokemonName,
  PokemonType,
  EvolveButton,
  ImgPokemon
} from "./styles";

const PokemonCard = (props) => {
  const [pokemon, setPokemon] = useState(props.poke);

  const evoPokemon = () => {
    if (pokemon === props.poke) {
      setPokemon(props.evo1);
    }
    if (pokemon === props.evo1) {
      setPokemon(props.evo2);
    }
    return pokemon;
  };

  const desEvoPokemon = () => {
    if (pokemon === props.evo2) {
      setPokemon(props.evo1);
    }
    if (pokemon === props.evo1) {
      setPokemon(props.poke);
    }
    return pokemon;
  };

  return (
    <Card color={pokemon.color}>
      <ImgPokemon src={pokemon.image} alt={`Pokemon`} />
      <PokemonName>{pokemon.name}</PokemonName>
      <PokemonType>{pokemon.type}</PokemonType>
      <p>{pokemon.weight}kg</p>

      <EvolveButton onClick={evoPokemon}>Evoluir!</EvolveButton>
      <EvolveButton onClick={desEvoPokemon}>Desevoluir!</EvolveButton>
    </Card>
  );
};

export default PokemonCard;
