#!/usr/bin/env node

// console.log(process.argv);
const inquirer = require("inquirer");
const { argv } = require("yargs");
const pokemandata = async (pokenmanname) => {
  const names = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokenmanname}`
  );
  const json = await names.json();
  const moves = json.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, 5));
};
//create prompt module
const prompt = inquirer.createPromptModule();
prompt([
  {
    type: "input",
    name: "pokeman",
    message: "enter pokeman name to vew",
  },
]).then((answer) => {
  const pokeman = answer.pokeman;
  pokemandata(pokeman);
});
