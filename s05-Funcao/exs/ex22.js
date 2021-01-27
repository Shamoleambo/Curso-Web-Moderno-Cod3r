const valorAnuidade = (mes, anuidade) => {
    return ((Math.pow(1.05, mes-1))*anuidade).toFixed(2);
}

console.log(valorAnuidade(12, 1000));