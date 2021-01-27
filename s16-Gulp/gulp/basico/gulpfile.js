const gulp = require('gulp');
const {series, parallel} = require('gulp'); //It's a destructuring, taking from the gulp import only the series
//Another possibility for the above: const series = gulp.series;

const antes1 = cb => {
    console.log('Tarefa Antes 1');

    return cb();
}

const antes2 = cb => {
    console.log('Tarefa Antes 2');

    return cb();
}

function copiar(cb){
    gulp
      .src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"]) //src defines which files are being managed in your workflow
      .pipe(gulp.dest('pastaB')); //pipes execute specific functions of transforming and filtering in the selected files

    return cb(); //We don't need to pass this function to be called at the end of every task, Gulp does it by default
}//Gulp's functions need a callback as a parameter for Gulp to know that this task has been finished

const fim = cb => {
    console.log('Tarefa Fim');

    return cb();
}



module.exports.default = series(
    parallel(antes1,antes2),
    copiar,
    fim
    ); //The default task is necessary to Gulp to initiate all the other tasks