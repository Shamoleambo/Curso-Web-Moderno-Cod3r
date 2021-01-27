const obj = {
    _valor: 1, //convenção
    get valor() { return this._valor++ },//Há precedência do return em relação ao operdaor unário ++
    set valor(valor) {
        if( valor > this._valor){
            this._valor = valor;
        }
    }
}

console.log(obj.valor, obj.valor);
obj.valor = 22;
console.log(obj.valor);
obj.valor = 13;
console.log(obj.valor, obj.valor);