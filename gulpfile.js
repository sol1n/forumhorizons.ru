var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-minify-css');
var prefixer = require('gulp-autoprefixer');
var browserSync = require("browser-sync");

gulp.task('webserver', function () {
    browserSync(config);
});

var config = {
    server: {
        baseDir: "."
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
};

gulp.task('default', function() {
  gulp.src('src/style/main.scss')
    .pipe(sass())
    .pipe(prefixer()) 
    .pipe(cssmin())
    .pipe(gulp.dest('assets/css'));
});