//Object.preventExtensions => não pode aumentar o num de attr(pode excluir)

const obj = {teste1:"1", teste2:"2", teste3:"3"};
Object.preventExtensions(obj);
obj.novoTeste = "4";
delete obj.teste2;
//console.log(obj, Object.isExtensible(obj)); 
//Object.isExtensible() => verifica se é extensível ou não


//Object.seal => nao pode add nem revover, mas pode modificar

const obj2 = Object.seal({
    prop1:"1", prop2:'2', prop3:'3', prop4:'4'
});
//console.log(Object.isSealed(obj2));
//Object.isSealed(obj2) => verifica se o objeto está selado
obj2.teste = "mano";
delete obj2.prop3;
obj2.prop2 = "mudança"; //Esse vai conseguir fazer
//console.log(obj2);

//Object.freeze(obj) => não pode add, remover ou alterar valores
const congelado = Object.freeze({
    prop1:"1", prop2:"2", prop3:"3"
});
console.log(congelado);
congelado.nova = "poraNenhuma";
congelado.prop1 = "nem";
delete congelado.prop2;
console.log(congelado);
console.log(Object.isFrozen(congelado));
//Verifica se o objeto está congelado