import Pessoa from './pessoa';
import './assets'; //In this import webpack will look for a file named index.js to import from,
                    //which will reference other files to be imported

const atendente = new Pessoa;
console.log(atendente.cumprimentar());