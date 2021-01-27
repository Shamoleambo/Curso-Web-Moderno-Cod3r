//É possível add novos métodos/funcionalidades aos prototypes das Funções


//Acho que não posso usar concat com array e string
String.prototype.reverse = function(){
    return this.split('').reverse().join("")
}

let teste = "teste";
console.log(teste.reverse());

Array.prototype.first = function(){
    return this[0]
}
console.log([1,2,3,4].first());