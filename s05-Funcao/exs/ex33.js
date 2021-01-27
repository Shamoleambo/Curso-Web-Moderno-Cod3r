const vetorInteiro = [1,2,3,4];
const vetorString = ["Mano", "Truta", "Tiu", "Fi"];
const vetorDouble = [.1, .22, .333, .444];

console.log(vetorInteiro.concat(vetorDouble).concat(vetorString));
console.log(vetorString.concat(vetorInteiro.concat(vetorDouble)));