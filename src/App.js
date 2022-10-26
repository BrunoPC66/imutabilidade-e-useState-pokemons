import React from "react";
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { FlexContainer } from "./FlexContainer/FlexContainer";

function App() {
  const poke172 = {
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2.0,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png",
    id: 172
  };

  const poke25 = {
    name: "Pikachu",
    type: "Electric",
    evolved: true,
    weight: 6.0,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/375px-025Pikachu.png",
    id: 25
  };

  const poke26 = {
    name: "Raichu",
    type: "Electric",
    evolved: true,
    weight: 30.0,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/8/88/026Raichu.png/375px-026Raichu.png",
    id: 26
  };

  const poke1 = {
    name: "Bulbasaur",
    type: "Grass",
    evolved: false,
    weight: 6.9,
    color: "green",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/375px-001Bulbasaur.png",
    id: 1
  };

  const poke2 = {
    name: "Ivysaur",
    type: "Grass",
    evolved: true,
    weight: 13.0,
    color: "green",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/7/73/002Ivysaur.png/375px-002Ivysaur.png",
    id: 2
  };

  const poke3 = {
    name: "Venusaur",
    type: "Grass",
    evolved: true,
    weight: 100.0,
    color: "green",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/a/ae/003Venusaur.png/375px-003Venusaur.png",
    id: 3
  };

  const poke4 = {
    name: "Charmander",
    type: "Fire",
    evolved: false,
    weight: 8.5,
    color: "red",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/900px-004Charmander.png",
    id: 4
  };

  const poke5 = {
    name: "Charmeleon",
    type: "Fire",
    evolved: true,
    weight: 19.0,
    color: "red",
    image:
      "https://archives.bulbagarden.net/media/upload/4/4a/005Charmeleon.png",
    id: 5
  };

  const poke6 = {
    name: "Charizard",
    type: "Fire",
    evolved: true,
    weight: 90.5,
    color: "red",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/375px-006Charizard.png",
    id: 6
  };

  const poke7 = {
    name: "Squirtle",
    type: "Water",
    evolved: false,
    weight: 9.0,
    color: "blue",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/3/39/007Squirtle.png/375px-007Squirtle.png",
    id: 7
  };

  const poke8 = {
    name: "Wartortle",
    type: "Water",
    evolved: true,
    weight: 22.5,
    color: "blue",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/0/0c/008Wartortle.png/375px-008Wartortle.png",
    id: 8
  };

  const poke9 = {
    name: "Blastoise",
    type: "Water",
    evolved: true,
    weight: 85.5,
    color: "blue",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/0/02/009Blastoise.png/375px-009Blastoise.png",
    id: 9
  };

  return (
    <>
      <GlobalStyle />
      <FlexContainer>
        <PokemonCard poke={poke172} evo1={poke25} evo2={poke26} />
        <PokemonCard poke={poke1} evo1={poke2} evo2={poke3} />
        <PokemonCard poke={poke4} evo1={poke5} evo2={poke6} />
        <PokemonCard poke={poke7} evo1={poke8} evo2={poke9} />
      </FlexContainer>
    </>
  );
}

export default App;
