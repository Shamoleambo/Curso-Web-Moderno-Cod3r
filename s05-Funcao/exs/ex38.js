const impressaoImparesInicioAoFim = (valorA, valorB) => {

    if(valorA>valorB){
        let temp = valorA;
        valorA = valorB;
        valorB = temp;
    }

    for(let i=valorA; i<=valorB; i++){

        if(i%2!=0) console.log(i);
    }
}

impressaoImparesInicioAoFim(1,45);