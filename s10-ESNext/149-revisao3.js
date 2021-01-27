//Object.values(obj) & Object.entries(obj):
const obj = {prop1: "mano", prop2: true, prop3: 26};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const nome = "Tiago Gomes";
const pessoa = {
    nome,
    meuNome(){
        return `Meu nome é ${this.nome}`;
    }
}
console.log(pessoa.meuNome());