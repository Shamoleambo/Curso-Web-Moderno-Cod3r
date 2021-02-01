
const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>;
const BoaNoite = props => <h1>Boa noite {props.nome}...</h1>;

export {BoaTarde, BoaNoite}; //Exports the jsx in a destructuring manner
export default {BoaTarde, BoaNoite}; //Creates an object which contains these two jsx