const bhaskara = (a, b, c) => {
    let delta = Math.pow(b,2) -4*a*c;
    let resultado = [];
    if(delta<0){
        return "Delta Negativo";
    }else{
        let x1 = (-b+Math.pow(delta,.5))/(2*a)
        let x2 = (-b-Math.pow(delta,.5))/(2*a)
        resultado.push(x1, x2);
    }
    return resultado
}

console.log(bhaskara(1,1,1));