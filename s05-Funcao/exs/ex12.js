const fatorial = numero =>{
    let resultado = 1;
    for(let i = numero; i>0; i--){
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5));