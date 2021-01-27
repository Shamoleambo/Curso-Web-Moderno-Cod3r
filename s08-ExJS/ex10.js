const stringMais = (num) => {
    let resultado = "";
    for(let i=0; i<num; i++){

        resultado+="+";
    }

    return resultado;
}

console.log(stringMais(5));