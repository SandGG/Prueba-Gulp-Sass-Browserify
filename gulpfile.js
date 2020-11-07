const gulp = require("gulp"),
    babelify = require('babelify'),
    browserify = require("browserify")
    //concat = require('gulp-concat');
;

gulp.task("build3", function(done){
    browserify(['script.js', 'funcionalidad.js', 'orden.js', 'cliente.js'])
    .transform(babelify)//.configure({ 
        //presets:["es2015"] 
    //}))      //, { presets: ["@babel/preset-env", "@babel/preset-react"] } )
    .bundle()
    .pipe(gulp.dest('./'))

    done();
});



/*var gulp = require('gulp');

function hola(done) {
    console.log('Hola Mundo!!!');
    done();
}

function here(done) {
    console.log('Aqui estoy');
    hola(done);
    done();
}

gulp.task('default', function(done) {
    console.log('default');
    here(done);
    done();
});

//exports.here = here;*/

/*gulp.task("build1", function(done){//no funciona
    browserify(['script.js', 'funcionalidad.js', 'orden.js', 'cliente.js'])
    .transform(babelify)
    .bundle()
    .pipe(concat('all.js'))
    .pipe(gulp.dest("./"));  

    done();
});

gulp.task("build2", function(done){//Aqui concatena
    gulp.src(['script.js', 'funcionalidad.js', 'orden.js', 'cliente.js'])
    //browserify(['script.js', 'funcionalidad.js', 'orden.js', 'cliente.js'])
    //.transform(babelify)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./'))

    done();
});*/