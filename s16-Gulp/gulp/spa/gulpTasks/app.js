const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const { src } = require('gulp');

function appHTML(){
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'));
}

function appCSS(){
    return gulp
      .src("src/assets/sass/index.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(uglifycss({ uglyComments: true }))
      .pipe(concat("app.min.css"))
      .pipe(gulp.dest("build/assets/css"));
}

function appJS(){
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['ENV']})) //ENV is the most recent version of JS
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'));
}

function appIMG(){
    return gulp.src('src/assets/imgs/**/*.*') //Any kind of image is goilg to the destiny build directory
        .pipe(gulp.dest('build/assets/imgs'));
}

gulp.task('appHTML', appHTML);
gulp.task('appCSS', appCSS);
gulp.task('appJS', appJS);
gulp.task('appIMG', appIMG);

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}