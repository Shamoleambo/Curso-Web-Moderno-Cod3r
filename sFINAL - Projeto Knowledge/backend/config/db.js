const config = require('../knexfile');
const knex = require('knex')(config);

knex.migrate.latest([config]); //This command will load the tables in the moment when you execute the backend
module.exports = knex