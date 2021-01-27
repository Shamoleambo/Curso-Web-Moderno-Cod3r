const calculadoraBasica = (num1,operacao, num2)=>{
    switch(operacao){
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "*":
            return num1*num2;
        case "/":
            return num1/num2;
    }
}

console.log(calculadoraBasica(2,"/",3));