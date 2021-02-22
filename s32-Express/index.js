const express = require('express');
const bodyParser = require('body-parser'); //Envia os dados no corpo da requisição: .body()
const app = express();

const saudacao = require('./saudacaoMid');

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(saudacao("Mano"));

app.use((req, res, next)=>{
    console.log('Antes...');
    next();
});

//A ordem no padrão middleware é EXTREMAMENTE importante; Lembre-se: CADEIA de responsabilidade(Chain of Responsability)

app.get('/clientes/relatorio', (req, res)=>{
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`);
});

app.post('/corpo', (req, res)=>{
    // let corpo = '';
    // req.on('data', function (parte){
    //     corpo += parte;
    // });

    // req.on('end', function (){
    //     res.send(corpo);
    // });

    res.send(req.body);
});

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} seleceionado.`);
});

app.get('/opa',(req, res, next)=>{
    
    res.json({
        data: [
            {id:1, nome: "Mano", idade: 26},
            {id:2, nome: "Truta", idade: 27},
            {id:3, nome: "Tiu", idade: 25}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    });

    next();
});

app.use((req, res, next)=>{
    console.log('...depois.');
    next();
});

app.listen(3000, ()=> console.log("Backend executando..."));