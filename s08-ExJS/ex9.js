const repeticaoArray = (repetido, numVezes) => {
    const resultado = [];

    for(let i=0; i<numVezes; i++){
        resultado.push(repetido);
    }
    return resultado;
}

console.log(repeticaoArray(1, 4));