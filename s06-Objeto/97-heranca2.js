//Prototype Chain
Object.prototype.attr0 = 'Z';//NÃO FAÇA IAISSU!
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: 'C' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);//O attr3 de pai sofrerá sombreamento

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta=5) {
        if (this.velAtual + delta >= this.velMax) {
            this.velAtual = this.velMax;
        } else {
            this.velAtual += delta;
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo:'F40',
    velMax:340//Vai sombrear a prop velMax do objeto pai
}
const volvo = {
    modelo:'V40',
    status(){//sombreia o método do obj pai
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais();
console.log(volvo.status());

ferrari.acelerarMais(100);
ferrari.acelerarMais(100);
console.log(ferrari.status());