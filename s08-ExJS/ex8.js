const multSoma = (num1, num2) => {
    if(num1==0 || num2==0) return 0;
    let resultado = 0;

    for(let i=1; i<=num1; i++){
        
        resultado+=num2;
    }

    return resultado;
}

console.log(multSoma(22,1));