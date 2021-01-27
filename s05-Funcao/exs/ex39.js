const trocaPosicoesVetoresMesmoTamanho = (vetorA, vetorB)=>{

    for(let i=0; i<vetorA.length; i++){

        vetorA[i] = vetorA[i]+vetorB[i]; //a <= a+b
        vetorB[i] = vetorA[i]-vetorB[i]; //b <= a-b = a
        vetorA[i] = vetorA[i]-vetorB[i]; 
    }
}
const vetorA = [1,2,3];
const vetorB = [4,5,6];

console.log(vetorA, vetorB);
trocaPosicoesVetoresMesmoTamanho(vetorA, vetorB);
console.log(vetorA, vetorB);