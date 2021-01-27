const gerarNumeroAleatorio = (min, max) => new Promise(resolve => {
    if(min>max) [min, max] = [max, min];
    const intervalo = (max + 1) - min;
    const aleatorio = Math.floor(Math.random()*intervalo + min);
    resolve(aleatorio);
});

gerarNumeroAleatorio(2,44)
    .then(num => num*10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log);