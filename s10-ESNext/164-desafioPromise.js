const fs = require('fs');

const caminho = __dirname + '/dados.txt';
const lerDados = (caminhoArquivo) => new Promise(resolve => {
    fs.readFile(caminhoArquivo, (e, arquivo) => resolve(arquivo.toString()));
})

lerDados(caminho)
    .then(dados => dados.split('\r\n'))
    .then(console.log)