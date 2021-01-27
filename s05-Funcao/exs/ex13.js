const diasSemana = dia =>{
    switch(dia){
        case 2: case 3: case 4: case 5:
            return "Dia Útil";
            break;
        case 1: case 6:
            return "FDS";
            break;
        default:
            return "Dia Inválido";
            break;
    }
}

console.log(diasSemana(30));