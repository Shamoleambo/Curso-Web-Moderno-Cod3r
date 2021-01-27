const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

//Leitura sincrona:
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

//Leitura assincrona:
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    const config = JSON.parse(conteudo); //O que é retornado(conteudo) é uma string(JSON) 
    console.log(`${config.db.host} : ${config.db.port}`)
});

const config = require('./arquivo.json');
console.log(config.db);

fs.readdir(__dirname, (err, arquivos)=>{
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
});