const primeiroEUltimoDoArray = arr => {
    const resultado = [];

    resultado.push(arr[0]);
    resultado.push(arr[arr.length-1]);

    return resultado;
}

console.log(primeiroEUltimoDoArray(["mano", "truta", 2]));