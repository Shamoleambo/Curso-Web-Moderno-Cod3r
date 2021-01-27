const anoBissexto = ano => {
    if(ano%400==0){
        console.log("Ano Bissexto");
        return true;
    }else if(ano%100==0){
        console.log("Não é Bissexto");
        return false;
    }else if(ano%4==0){
        console.log("Ano Bissexto");
        return true;
    }else{
        console.log("Não é Bissexto");
        return false;
    }
}
anoBissexto(2021);