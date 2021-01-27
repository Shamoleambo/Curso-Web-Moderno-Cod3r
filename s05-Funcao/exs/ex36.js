const multVetor = (vetor, mult) => vetor.map( elem => elem*mult );

const multVetorLtda = (vetor, mult) => vetor.map( elem => elem>5 ? elem*mult : elem );

console.log(multVetor([1,2,3,4,5,6], 2));
console.log(multVetorLtda([1,2,3,4,5,6], 2));