//novo recurso ES2015

const pessoa = {
    nome:"Ana",
    idade:25,
    endereco:{
        rua:"Rua dos Bobos",
        num:0
    }
}

const {nome,idade} = pessoa;
console.log(nome,idade);

const {nome :n, idade: i} = pessoa;
console.log(n,i);

const {sobrenome, puta = false} = pessoa;
console.log(sobrenome, puta);

const {endereco:{rua,num,cep}} = pessoa;
console.log(rua,num, cep);