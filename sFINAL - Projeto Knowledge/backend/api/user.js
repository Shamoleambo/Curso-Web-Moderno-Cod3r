const bcrypt = require('bcrypt-nodejs');

//The app below represents the instance of the express in the first line of the index.js file
module.exports = app =>{

    const {existsOrError, notExistsOrError, equalsOrError} = app.api.validation;

    const encryptPassword = password =>{
        //The salt is the seasoning to generate the encrypted password
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    //This method will be used to insert a new user and update an already existing one
    const save = async (req, res)=>{
        const user = {...req.body};
        if(req.params.id) user.id = req.params.id;

        if(!req.originalUrl.startsWith('/users')) user.admin = false;
        if(!req.user || !req.user.admin) user.admin = false;

        //Validations:
        try{
            existsOrError(user.name, "Nome não informado");
            existsOrError(user.email, "E-mail não informado");
            existsOrError(user.password, "Senha não informada");
            existsOrError(user.confirmPassword, "Confirmação de senha não informada");
            equalsOrError(user.password, user.confirmPassword, "Senhas não conferem");

            const userFromDB = await app.db('users').where({email: user.email}).first();
            if(!user.id){
                notExistsOrError(userFromDB, "Usuário já cadastrado");
            }
        } catch(msg){
            return res.status(400).send(msg);
        }

        user.password = encryptPassword(user.password);
        delete user.confirmPassword;

        //Update OR Insert:
        if(user.id){
            app.db('users')
                .update(user)
                .where({id: user.id})
                .whereNull('deletedAt')
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err));
        } else{
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err));
        }
    }


    //get Method to return the list of users and a few attributes of them:
    const get = (req, res) =>{
        app.db('users')
            .select('id', 'name', 'email', 'admin') //These are the attributes to be projected
            .whereNull('deletedAt') //Will execute this query only if the field 'deletedAt' is set to null
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err));
    }

    //Get by Id:
    const getById = (req, res)=>{
        app.db('users')
            .select("id", 'name', 'email', 'admin')
            .where({id: req.params.id})
            .whereNull('deletedAt')
            .first()        //For it not to be a list(array)
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err));
    }

    const remove = async (req, res) =>{
        try{
            const articles = await app.db('articles')
                .where({userId: req.params.id});
            notExistsOrError(articles, 'Usuário possui artigos');

            const rowsUpdated = await app.db('users')
                .update({deletedAt: new Date()})
                .where({id: req.params.id});
            existsOrError(rowsUpdated, "Usuário não foi encontrado");

            res.status(204).send();
        }catch(msg){
            res.status(400).send(msg);
        }
    }

    return {save, get, getById, remove}
}