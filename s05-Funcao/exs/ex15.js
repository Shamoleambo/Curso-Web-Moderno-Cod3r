const revendaCarros = modelo =>{
    switch(modelo){
        case "hatch":
            return "Venda efetuada com sucesso"
        case "sedan": case "moto": case "caminhonete":
            return "Tem certeza que não prefere esse modelo?"
        default:
            return "Não trabalhamos com esse tipo de automóvel"
    }
}

console.log(revendaCarros("mano"));