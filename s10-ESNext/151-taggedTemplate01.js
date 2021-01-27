//tagged templates - processa o template string dentro de uma função
function tiu(partes, ...valores){
    console.log(partes);
    console.log(valores);
    return 'Outra string';
}

const aluno = 'Gui';
const situacao = 'Aprovado';
console.log(tiu `${aluno} está ${situacao}`);