const criterioNotas = nota =>{
    if(nota<38 && nota>=0){

        return nota
    }else if(nota<=100){

        if(nota%5>2){
            return nota + (5-nota%5);
        }else{
            return nota;
        }
    }else{

        return "Nota Inválida"
    }
}

console.log(criterioNotas(68));