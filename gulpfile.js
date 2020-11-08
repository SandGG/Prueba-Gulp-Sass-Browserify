const gulp = require("gulp"),
    babelify = require('babelify'),
    browserify = require("browserify")
    fs = require("fs");
;

gulp.task("bundle", function(done){
    browserify({
        plugin: 
            [ [require('esmify')] ]
        })
        .transform(babelify)
        .require("./script.js", { entry: true })
        .bundle()
        .on("error", function (err) { console.log("Error: " + err.message); })
        .pipe(fs.createWriteStream("bundle.js"));

    done();
});
