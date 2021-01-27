function Carro(velocidadeMaxima=200, delta=5){
    //attr PRIVADO
    let velocidadeAtual = 0;

    //metodo PÚBLICO
    this.acelerar = function (){
        if (velocidadeAtual + delta >= velocidadeMaxima) velocidadeAtual = velocidadeMaxima
        else velocidadeAtual+= delta
    }
    //permite o acesso/consulta à variável, sem deixar mexer nela
    this.getVelocidadeAtual = function(){
        return `${velocidadeAtual}Km/h`
    }
}

const uno = new Carro;
uno.acelerar();

const ferrari = new Carro(350, 50);
ferrari.acelerar();