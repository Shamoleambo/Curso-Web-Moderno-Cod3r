const bodyParser = require('body-parser');
const cors = require('cors');

//Bellow is used the consign pattern to define the relationship between files, and make it easier to manage them:
//app is the instance of express referenced in the index.js file
module.exports = app =>{
    app.use(bodyParser.json());
    app.use(cors());
}