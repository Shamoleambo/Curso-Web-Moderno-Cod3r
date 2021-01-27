const arr = [1,2,4,66,77,44,32];

const ordenado = arr.sort((a,b) => a-b);

console.log("Maior: " + ordenado[ordenado.length-1]);
console.log("Menor: " + ordenado[0]);