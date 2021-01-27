class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = "Reporter"){
        super(sobrenome);
        this.profissao = profissao;
    }
//super chama a função contrutora do elemento Pai(no caso o Avo)
//se nada for passado como sobrenome para o Pai, ele pega o do avô
//extends estabelece a relação de protótipo
}

class Filho extends Pai{
    constructor(sobrenome, retardo="Naruto"){
        super(sobrenome)
        this.retardo = retardo;
    }
}


const filho = new Filho("Mano", "FilhadaPuta");
console.log(filho);