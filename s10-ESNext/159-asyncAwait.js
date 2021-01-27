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
let obterAlunos = async() => {
    const ta = await getTurma("A");
    const tb = await getTurma("B");
    const tc = await getTurma("C");
    return [].concat(ta, tb, tc);
}

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes));

    