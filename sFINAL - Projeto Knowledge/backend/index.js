const app = require('express')(); //The result of the function called by express is inside app
const consign = require('consign');
const db = require('./config/db'); //This is the knex with de db config(knexfile.js) exported by db.js in the config directory

app.db = db;

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js') //This one MUST come before the below for .api/user is using the validations
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, ()=>{
    console.log('Backend Executando...');
});