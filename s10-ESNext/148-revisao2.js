//Arrow Function (this):

const teste = () => console.log(this === exports);

const teste2 = () => console.log(this === module.exports);

function teste3(){
    return console.log(this === global);
}

teste();
teste2();
teste3();

//operador rest

function somaArray(...numeros){
    let total = 0;
    numeros.forEach( n=> total+=n );
    return total;
}

console.log(somaArray(2,3,4,5));