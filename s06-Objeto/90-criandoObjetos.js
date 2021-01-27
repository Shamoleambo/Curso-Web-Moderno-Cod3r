function fazCarros(nome, modelo, preco){
    return{
        nome,
        modelo,
        preco,
        getVelocidade(){
            return "200Km/h"
        }
    }
}

const carro1 = fazCarros('Audi', "T", 180000);
console.log(carro1.getVelocidade());

const filha = Object.create(null);

const json = JSON.parse('{"nome":"Tiago"}');
console.log(json);