const [a] = [10];// para os arrays usamos os colchetes []

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];//é possível pular valores e attr valores por default(caso do n6)
const [, [, nota]] = [[1, 2, 3, 4], [9, 6, 8]];
console.log(nota);