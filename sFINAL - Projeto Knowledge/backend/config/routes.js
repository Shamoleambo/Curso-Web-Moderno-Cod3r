const admin = require('./admin');

module.exports = app =>{
    /* The three URLs below are the only public URLs */
    app.post('/signup', app.api.user.save);
    app.post('/signin', app.api.auth.signin);
    app.post('/validateToken', app.api.auth.validateToken);


    app.route('/users')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.user.get))
        .post(admin(app.api.user.save));
    
    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.user.getById)) //The same method will update(this) and insert(above)
        .put(admin(app.api.user.save));

    app.route('/categories')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.category.get))
        .post(admin(app.api.category.save));
 
    app.route('/categories/tree')
        .get(app.api.category.getTree);

    //This is a more generic url, it should come at the bottom to not interfere with the more specific urls above
    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getById)
        .put(admin(app.api.category.save))
        .delete(admin(app.api.category.remove));

    app.route('/articles')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.article.get))
        .post(admin(app.api.article.save))
    
    app.route('/articles/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getById)
        .put(admin(app.api.article.save))
        .delete(admin(app.api.article.remove));

    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getByCategory);
}