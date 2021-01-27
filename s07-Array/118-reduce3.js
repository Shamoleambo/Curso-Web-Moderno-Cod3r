Array.prototype.reduceTiago = function(callback, valorInicial){
    let acumulador = valorInicial!=undefined ? valorInicial : this[0];
    
    if(acumulador==this[0]){

        for(let i=1; i<this.length; i++){

            acumulador = callback(acumulador,this[i], i, this);
        }
    }else{

        for(let i=0; i<this.length; i++){

            acumulador = callback(acumulador,this[i], i, this);
        }
    }

    return acumulador;
};

const teste = [1,2,3,4,5];
console.log(teste.reduceTiago(function(acu, atual){
    return acu+atual
},10));