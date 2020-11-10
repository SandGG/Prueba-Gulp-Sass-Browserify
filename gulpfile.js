/*--------- LA MIA ---------
const gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify')
;

gulp.task('bundle', function() {
    browserify('script.js',
        {
            plugin: [ [require('esmify')] ]
        }
    )
    .transform(babelify)
    .bundle()
    .pipe(gulp.dest('./'));
});

gulp.task("prueba", function () {
    return browserify("script.js")
    .transform(babelify, {presets: ['@babel/preset-env']})
    .bundle()
    .pipe(gulp.dest("dist"));
});*/


const { dest } = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
var source = require('vinyl-source-stream'); 

function build() {
    var s = browserify("script.js")
    .transform(babelify, {presets: ['@babel/preset-env']})
    .bundle()
    .pipe(source("./"));
    
    return s.pipe(dest("armado.js"));
}

exports.build = build;


