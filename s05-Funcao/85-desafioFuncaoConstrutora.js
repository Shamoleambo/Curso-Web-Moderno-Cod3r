function Contrutora(nome){
    this.nome = nome;
    this.falar = function (){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Contrutora("Tiago");
p1.falar();