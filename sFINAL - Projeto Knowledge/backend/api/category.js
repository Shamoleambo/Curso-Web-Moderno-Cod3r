module.exports = app => {
    const {existsOrError, notExistsOrError} = app.api.validation;

    //Method for both saving and updating
    const save = (req, res) => {
        const category = {
            id: req.body.id,
            name: req.body.name,
            parentId: req.body.parentId
        };
        if(req.params.id) category.id = req.params.id;

        try{
            existsOrError(category.name, "Nome de categoria não informado");
        }catch(msg){
            return res.status(400).send(msg);
        }

        if(category.id){
            app.db('categories')
                .update(category)
                .where({id: category.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err));
        }else{
            app.db('categories')
                .insert(category)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err));
        }
    }

    //If the category you are trying to remove is associated with another category you can not remove it. You'll have to detatch them first
    const remove = async (req, res) =>{
        try{

            existsOrError(req.params.id, "Código da Categoria não informado");

            const subcategory = await app.db('categories').where({parentId: req.params.id});
            notExistsOrError(subcategory, 'Categoria possui subcategorias');

            const artiles = await app.db('articles').where({categoryId: req.params.id});
            notExistsOrError(artiles, "Categoria possui artigos");

            const rowsDeleted = await app.db('categories').where({id: req.params.id}).del();
            existsOrError(rowsDeleted, "Categoria não foi encontrada");

            res.status(204).send();
        }catch(msg){
            res.status(404).send(msg);
        }
    }

    //Receives a list of categories and returns a list of categories showing the different paths and branches
    const withPath = categories =>{
        const getParent = (categories, parentId) => {
            const parent = categories.filter(parent => parent.id === parentId);
            return parent.length ? parent[0] : null;
        }

        const categoriesWithPath = categories.map(category =>{
            let path = category.name;
            let parent = getParent(categories, category.parentId);

            while(parent){
                path = `${parent.name} > ${path}`;
                parent = getParent(categories, parent.parentId);
            }

            return {...category, path};
        });

        //Alphabetical order
        categoriesWithPath.sort((a,b) => a.path<b.path ? -1 : a.path>b.path ? 1 : 0);

        return categoriesWithPath;
    }

    const get = (req, res) =>{
        app.db('categories')
            .then(categories => res.json(withPath(categories)))
            .catch(err => res.status(500).send(err));
    }

    const getById = (req, res) =>{
        app.db('categories')
            .where({id: req.params.id})
            .first()
            .then(category => res.json(category))
            .catch(err => res.status(500).send(err));
    }

    //Transform the categories' list in a tree list:
    const toTree = (categories, tree) =>{
        if(!tree) tree = categories.filter(c => !c.parentId); //Sets the tree array to have only the categories that don't have parents

        tree = tree.map(parentNode =>{
            const isChild = node => node.parentId === parentNode.id; //Filter function

            parentNode.children = toTree(categories, categories.filter(isChild));
            return parentNode; //Now with the children property set
        });

        return tree;
    }

    const getTree = (req, res) =>{
        app.db('categories')
            .then(categories => res.json(toTree(withPath(categories))))
            .catch(err => res.status(500).send(err));
    }

    return {save, remove, get, getById, getTree};
}