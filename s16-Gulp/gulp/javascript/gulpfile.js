const gulp = require('gulp');
const {series, parallel} = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function padrao(cb){
    return gulp.src('src/**/*.js') //It's possible to return the result of the whole method without the callback
        .pipe(babel({ //babel will make your code more compatible with older browsers; the config object sets some configs as seen below:
            comments: false, //no comments files are transfered to the final file
            presets: ["env"] //env is the most recent version of JS
        }))
        .pipe(uglify()) //it will minimize our code, removing empty spaces, making it more light
        .on('error', err => console.log(err)) //If an error happens after the uglify the arrow function as second parameter will be executed
        .pipe(concat('codigo.min.js')) //After the transpiling and uglification process the files are concatenated in one single file.
        .pipe(gulp.dest('build/js')); //The destination of the final file
}

function fim(cb){
    console.log("Fim!");

    return cb();
}

module.exports.default = series(padrao, fim);