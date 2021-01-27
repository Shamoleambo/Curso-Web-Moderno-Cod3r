const pessoa = {
    nome: "Tiago",
    idade: 26,
    sexo: "Masculino"
}

console.log(Object.keys(pessoa)); //array com nome attrs
console.log(Object.values(pessoa)); //array com valor de cada attr
console.log(Object.entries(pessoa)); //array de arrays, contendo attr e seu valor

Object.entries(pessoa).forEach( ([a,b]) => {
    console.log(a);
    console.log(b);
});

Object.defineProperty(pessoa, "time", {
    enumerable: true,
    writable: false,
    value: "São Paulo"
});

pessoa.time = "Lixo";
console.log(pessoa);

const dest = {a: 1};
const obj2 = {b:3};
const obj3 = {c: 4, a:5};
Object.assign(dest, obj2, obj3);
console.log(dest);  