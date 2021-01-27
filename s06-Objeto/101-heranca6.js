function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

const pessoa1 = new Pessoa("Tiago", 26);
const pessoa2 = new Pessoa("Amanda", 13);

console.log(pessoa1.__proto__);
console.log(pessoa2);

//simulando o new:
function novo(f, ...params){
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj
}

const pessoa3 = novo(Pessoa, "Tiago", 26);
const pessoa4 = novo(Pessoa, "Amanda", 13);
console.log(pessoa3.__proto__);
console.log(pessoa4);