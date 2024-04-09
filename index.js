require('dotenv').config();
const pokemonPrinterFile = require("./pokemonPrinter");


console.log(process.env.ENVIRONMENT_MESSAGE);

console.log("terminal app is running!");

console.log(pokemonPrinterFile.pokemonPrinter());

// const pokemon = require('pokemon');

// let randomPokemon = pokemon.random();
// console.log(`Today's lucky Pokemon is ${randomPokemon}`);

console.log("bye bye, terminal app is finished!");
