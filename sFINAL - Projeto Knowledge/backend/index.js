const app = require('express')(); //The result of the function called by express is inside app
const consign = require('consign');

consign()
    .then('./config/middlewares.js')
    .into(app)

app.listen(3000, ()=>{
    console.log('Backend Executando...');
});