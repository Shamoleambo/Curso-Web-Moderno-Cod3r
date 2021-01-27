function criarProduto(nome, preco, desconto = .3){
    return{
        nome,
        preco,
        desconto,
        loja: 'Loja404'
    }
}

console.log(criarProduto('PC', 2000));