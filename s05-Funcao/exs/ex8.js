const pontuacaoPedro = (pontos) => {
    let arr = pontos.split(" ");
    let arrRetorno = [];
    let melhorPontuacao = arr[0];
    let quebraRecorde = 0;
    let piorPartida = arr[0];
    for(let i=1; i<=arr.length; i++){

        console.log(arr[i], melhorPontuacao);
        if(Number(melhorPontuacao)<Number(arr[i])){
            quebraRecorde++;
            melhorPontuacao = arr[i];
        }
        if(Number(piorPartida)>Number(arr[i])){
            piorPartida = arr[i];
        }
    }
    arrRetorno.push(quebraRecorde, arr.indexOf(piorPartida)+1)
    return arrRetorno;
}

console.log(pontuacaoPedro("10 20 20 8 25 3 0 30 1"));