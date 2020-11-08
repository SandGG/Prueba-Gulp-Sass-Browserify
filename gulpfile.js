const gulp = require("gulp"),
    babelify = require('babelify'),
    browserify = require("browserify")
    fs = require("fs");
;

gulp.task("prueba1", function(done){
    browserify({ debug: true })
        .transform(babelify)
        .require("./script.js", { entry: true })
        .bundle()
        .on("error", function (err) { console.log("Error: " + err.message); })
        .pipe(fs.createWriteStream("bundle.js")
    );

    done();
});

gulp.task("prueba2", function(done){
    browserify({
        plugin: 
            [ [require('esmify')] ]
        })
        .transform(babelify)
        .require("./script.js", { entry: true })
        .bundle()
        .on("error", function (err) { console.log("Error: " + err.message); })
        .pipe(fs.createWriteStream("bundle.js")
    );

    done();
});

/*gulp.task("build3", function(done){
    browserify('script.js')
    .transform(babelify.configure({ 
        presets:["es2015"] 
    }))    
    .bundle()
    //.pipe(gulp.dest('./all.js'))

    done();
});*/

