//Com promise
const http = require('http');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res=>{
        let resultado = '';

        res.on('data', dados => {
            resultado += dados;
        });

        res.on('end', ()=>{
            try{
                resolve(JSON.parse(resultado));
            }catch(e){
                reject(e);
            }
        });
    });
    })
}
Promise.all([getTurma('a'), getTurma('b'), getTurma('c')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message));

getTurma('d').catch( e => console.log(e.message));