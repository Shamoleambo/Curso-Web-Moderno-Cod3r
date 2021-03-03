const queries = require('./queries');

module.exports = app =>{
    const {existsOrError} = app.api.validation;

    //Method for both saving and updating
    const save = (req, res)=>{
        const article = {...req.body};
        if(req.params.id) article.id = req.params.id;

        try{
            existsOrError(article.name, "Nome não informado");
            existsOrError(article.description, "Descrição não informada");
            existsOrError(article.content, "Conteudo não informado");
            existsOrError(article.userId, "Autor não informado");
            existsOrError(article.categoryId, "Categoria não informada");
        }catch(msg){
            res.status(400).send(msg);
        }

        if(article.id){
            app.db('articles')
                .update(article)
                .where({id: article.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err));
        }else{
            app.db('articles')
                .insert(article)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err));
        }
    }

    const remove = async (req, res) =>{
        try{
            const rowsDeleted = await app.db('articles')
                .where({id: req.params.id})
                .del();

            try{
                existsOrError(rowsDeleted, "Artigo não foi encontrado");
            }catch(msg){
                return res.status(400).send(msg);
            }
            
            res.status(204).send();
        }catch(msg){
            res.status(500).send(msg);
        }
    }

    //Limit of pagination used for get and getByCategory
    const limit = 3;

    const get = async (req, res) =>{
        const page = req.query.page || 1;

        const result = await app.db('articles').count('id').first();
        const count = parseInt(result.count);

        app.db('articles')
            .select('id', 'name', 'description')
            .limit(limit)
            .offset(page*limit - limit)
            .then(articles => res.json({data: articles, count, limit}))
            .catch(err => res.status(500).send(err));
    }

    const getById = (req, res) =>{
        app.db('articles')
            .where({id: req.params.id})
            .first()
            .then(articles => {
                articles.content = articles.content.toString(); //The content attribute comes in a binary format, that's why it needs a toString() method
                return res.json(articles);
            })
            .catch(err => res.status(500).send(err));
    }

    const getByCategory = async (req, res)=>{
        const categoryId = req.params.id;
        const page = req.query.page || 1;
        const categories = await app.db.raw(queries.categoryWithChildren, categoryId);
        const ids = categories.rows.map(c => c.id);

        //The tables from the db are: a for articles, and u for users
        app.db({a: 'articles', u: 'users'})
            .select('a.id', 'a.name', 'a.description', 'a.imageUrl', {author: 'u.name'}) //Author is the column's name referencing the user who wrote the article
            .limit(limit)
            .offset(page*limit - limit)
            .whereRaw('?? = ??', ['u.id', 'a.userId'])
            .whereIn('categoryId', ids)
            .orderBy('a.id', 'desc')
            .then(articles => res.json(articles))
            .catch(err => res.status(500).send(err));
    }

    return {save, remove, get, getById, getByCategory};
}