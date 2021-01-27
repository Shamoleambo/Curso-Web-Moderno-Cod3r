const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')(); //A função retorna um objeto, por isso a chamada
const contadorD = require('./instanciaNova')();

contadorA.inc();
contadorA.inc();
console.log(contadorB.valor); //O node faz cashing de objetos retornados via require

contadorC.inc();
contadorC.inc();
console.log(contadorD.valor);