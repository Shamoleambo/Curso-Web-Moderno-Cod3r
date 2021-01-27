const valorPedido = (codigo, qtde)=>{
    switch(codigo){
        case 100:
            return 'R$'+(3*qtde).toFixed(2);
        case 200:
            return 'R$'+(4*qtde).toFixed(2);
        case 300:
            return 'R$'+(5.5*qtde).toFixed(2);
        case 400:
            return 'R$'+(7.5*qtde).toFixed(2);
        case 500:
            return 'R$'+(3.5*qtde).toFixed(2);
        case 600:
            return 'R$'+(2.8*qtde).toFixed(2);
    }
}

console.log(valorPedido(100, 2));
console.log(valorPedido(200, 2));
console.log(valorPedido(300, 2));
console.log(valorPedido(400, 2));
console.log(valorPedido(500, 2));
console.log(valorPedido(600, 2));
