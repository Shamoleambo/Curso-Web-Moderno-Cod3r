function getPreco(imposto = 0, moeda='R$'){
    return `Preço = ${((this.preco)*(1-this.desc)*(1+imposto)).toFixed(2)}${moeda}`
}

const carro = {
    preco: 70000,
    desc: .05,
    getPreco
}
// global.preco = 5000;
// global.desc = .3;
// console.log(getPreco());
console.log(carro.getPreco(.3, "$"));

console.log(getPreco.call(carro, .023, "$$"));
console.log(getPreco.apply(carro, [.023, "$$"]));