const potencia = (base, exp) => Math.pow(base, exp);
const potencia2 = (base, exp)=>{
    let resultado = 1;
    for(let i=0; i<exp; i++){
        resultado *= base;
    }
    return resultado;
}

console.log(potencia(2,3));
console.log(potencia2(2,3));