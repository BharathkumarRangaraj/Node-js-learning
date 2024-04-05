#!/usr/bin/env node
console.log(process.argv);
const pokemandata = async (pokenmanname) => {
  const names = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokenmanname}`
  );
  const json = await names.json();
  const moves = json.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, 5));
};
pokemandata("charmander");
