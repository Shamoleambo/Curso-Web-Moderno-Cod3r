module.exports = app =>{
    /* The three URLs below are the only public URLs */
    app.post('/signup', app.api.user.save);
    app.post('/signin', app.api.auth.signin);
    app.post('/validateToken', app.api.auth.validateToken);


    app.route('/users')
        .get(app.api.user.get)
        .post(app.api.user.save);
    
    app.route('/users/:id')
        .get(app.api.user.getById) //The same method will update(this) and insert(above)
        .put(app.api.user.save);

    app.route('/categories')
        .get(app.api.category.get)
        .post(app.api.category.save);
 
    app.route('/categories/tree')
        .get(app.api.category.getTree);

    //This is a more generic url, it should come at the bottom to not interfere with the more specific urls above
    app.route('/categories/:id')
        .get(app.api.category.getById)
        .put(app.api.category.save)
        .delete(app.api.category.remove);

    app.route('/articles')
        .get(app.api.article.get)
        .post(app.api.article.save)
    
    app.route('/articles/:id')
        .get(app.api.article.getById)
        .put(app.api.article.save)
        .delete(app.api.article.remove);

    app.route('/categories/:id/articles')
        .get(app.api.article.getByCategory);
}