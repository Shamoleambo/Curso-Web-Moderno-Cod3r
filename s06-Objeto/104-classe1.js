//A classe ao ser instanciada será transformada numa função construtora
//a função que será chamada no momento em que a classe for instanciada usando o operador new é a constructor. Dentro do constructor vão os parâmetros da função construtora

class Lancamento{
    constructor(nome = "Genérico", valor){
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.ano = ano;
        this.mes = mes;
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario(){
        let valorConsolidado = 0;
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor;
        });

        return valorConsolidado
    }
}

const salario = new Lancamento("Tiago", 5000);
const contas = new Lancamento("Contas", -1350);
const multa = new Lancamento("Multa", -200);

const fev2021 = new CicloFinanceiro("Fevereiro",2021);

console.log(salario,"\n",contas,"\n",fev2021);
console.log("\n");
fev2021.addLancamentos(salario, contas, multa);
console.log(fev2021.sumario());