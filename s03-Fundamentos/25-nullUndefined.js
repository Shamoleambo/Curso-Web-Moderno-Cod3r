let valor
console.log(valor);
valor =null;
console.log(valor);

var exVar = 'Var fora';
let exLet = 'Let fora';
{
    var exVar = 'Var dentro';
    let exLet = 'Let dentro';
    console.log(exVar);
    console.log(exLet);
}
console.log(exVar);
console.log(exLet);