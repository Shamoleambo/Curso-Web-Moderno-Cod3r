function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]; //usando o próprio operador destructuring para inverter as variáveis
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

console.log(rand([50,40])); //estão invertidos, no problemo!
console.log(rand([992])); // max = default = 1000
console.log(rand([,10])); //min=default=0
console.log(rand([])); //min e max são default
//console.log(rand()) //da erro pois não há nada para ser desestruturado