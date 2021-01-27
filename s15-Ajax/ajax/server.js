const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('.')); //Para todas as requisições ele servirá todos os arquivos estáticos
app.use(bodyParser.urlencoded({extended:true})); //Esse codigo lerá os dados a partir de um submit de um formulário e os transformará em objeto
app.use(bodyParser.json()); //Esse codigo lerá os dados em formato json e os transofrmará em objeto

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload');//Pasta de destino do upload
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`);//Nome padronizados dos arquivos, com a data para evitar nomes duplicados
    }
});//O objeto que vai dentro desse método do multer serve pra configurar a pasta pra onde vão os arquivos e quais são os nome dos arquivos

const upload = multer({storage}).single('arquivo');

app.post('/upload', (req, res)=> {
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um erro.');
        }

        res.end("Concluído com sucesso.");
    });
});

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id:2
    });
});

app.get('/parOuImpar', (req, res) =>{
    //req.body
    //req.query => /parOuImpar/?numero=33
    //req.params => /parOuImpar/33
    const par = parseInt(req.query.numero) % 2 === 0;
    res.send({
        resultado: par ? "par" : "ímpar"
    });
});

app.listen(8080, ()=> console.log('Executando...'));
