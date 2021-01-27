const qtdeParesImparesVetor = vetor =>{
    let pares = vetor.reduce((contador, numero)=>{
        if(numero%2==0) contador++
        return contador;
    },0);
    let impares = vetor.reduce((contador, numero)=>{
        if(numero%2!=0) contador++
        return contador;
    },0);

    return `O vetor possuí ${pares} números pares, e ${impares} números ímpares.`
}

console.log(qtdeParesImparesVetor([2,3,4,5,6,1,1,1]));