const  gulp  = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-sass'),
    moduleImporter = require('sass-module-importer')
; 

function js () {
    return browserify('script.js')
    .transform(babelify, {presets: ['@babel/preset-env']})
    .bundle()
    .pipe(source('./'))
    .pipe(gulp.dest('armado.js'));
}

function css (){
    return gulp.src('./estilo.scss')
    .pipe(sass( { importer: moduleImporter() } ))
    .pipe(gulp.dest('./'));
}

function watch () {
    gulp.watch('*.js', js); 
    gulp.watch('*.scss', css);
}

exports.default = gulp.series(js, css);
exports.watch = watch;