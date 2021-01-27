const escola = [{
    nome: 'Turma M1',
    alunos:[{
        nome:'Gustavo',
        nota:8.1
    },{
        nome:'Ana',
        nota:9.3
    }]
},{
    nome:'Turma M2',
    alunos:[{
        nome:'Rebeca',
        nota:8.9
    },{
        nome:'Roberto',
        nota:7.3
    }]
}]

const getNotaAluno = aluno => aluno.nota;
const getNotasTurma = turma => turma.alunos.map(getNotaAluno);

const notas1 = escola.map(getNotasTurma);
console.log(notas1);

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma);
console.log(notas2);

const teste = [[[[[[2,3],5]]]], [[3,4,5],7,7], [[[[2,[4,5,6][[[7,9,8]]]]]]]];
console.log(teste.flatMap());