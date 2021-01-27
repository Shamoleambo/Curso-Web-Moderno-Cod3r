const novoSalario = (planoDeTrabalho, salarioAtual)=>{
    switch(planoDeTrabalho){
        case 'A':
            return salarioAtual*1.1;
        case 'B':
            return salarioAtual*1.15;
        case 'C':
            return salarioAtual*1.2;
        default:
            return 'Plano de Trabalho Inválido';
    }
}

console.log(novoSalario('D', 2000));