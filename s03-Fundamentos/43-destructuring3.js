function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

console.log(rand({ max: 1300, min: 1100 }));
console.log(rand({ min: 300 })); //max=default=1000
console.log(rand({})); //max e min são default
//console.log(rand()); //nesse caso dá erro, pois na desestruturação não haverá nada para ser desestruturado.