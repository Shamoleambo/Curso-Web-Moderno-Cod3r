//capital inicial, taxa de juros e tempo de aplicacao

//Juros Simples
const jurosSimples = (capIn, juros, tempo) => (capIn+tempo*juros*capIn).toFixed(2);
console.log(jurosSimples(100, .1, 3));

//Juros Compostos
const jurosCompostos = (capIn, juros, tempo) => (capIn*(Math.pow(1+juros, tempo))).toFixed(2);
console.log(jurosCompostos(100, .1, 3));