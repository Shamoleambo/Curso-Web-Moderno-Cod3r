const frutas = fruta =>{
    switch(fruta){
        case "maçã":
            return "Não vendemos essa fruta aqui"
        case "kiwi":
            return "Estamos com escassez de kiwi"
        case "melancia":
            return "Aqui está, são 3 reais o quilo"
        default:
            return "Erro!"
    }
}

console.log(frutas("mano"));