const gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify')
    //fs = require("fs");
;

gulp.task('bundle', function(done) {
    gulp.watch("*.js", function() {
        browserify({
        plugin: 
            [ [require('esmify')] ]
        })
        .transform(babelify)
        .require('./script.js', { 
            entry: true
        })
        .bundle()
        .on('error', function (err) { 
            console.log('Error: ' + err.message); 
        })
        //.pipe(gulp.src('script.js')
        .pipe(gulp.dest('./bundle.js'));
        //.pipe(fs.createWriteStream("bundle.js"));
	});
    done();
});
