class Pessoa {
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa("Jão");
p1.falar();

const pessoaFactory = nome => {
    return {
        falar: ()=> console.log(`meu nome é ${nome}`)
    }
}
const p2 = pessoaFactory("Ana");
p2.falar();