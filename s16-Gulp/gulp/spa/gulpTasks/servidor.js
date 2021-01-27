const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');

/* This server will be only used in the development process */

function servidor(){
    return gulp.src('build')
        .pipe(webserver({
            port:8080,
            open:true,
            livereload:true
        }));
}

function monitorarArquivos(cb){ //This function monitors the src directory to call the gulp Tasks, in case of an update, to redo the build

    watch('src/**/*.html', ()=> gulp.series('appHTML')());
    watch('src/**/*.scss', ()=> gulp.series('appCSS')());
    watch('src/**/*.js', ()=> gulp.series('appJS')());
    watch('src/assets/imgs/**/*.*', ()=> gulp.series('appIMG')());

    return cb();
}

module.exports = {
    monitorarArquivos,
    servidor
}