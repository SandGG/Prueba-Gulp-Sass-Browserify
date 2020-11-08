const gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify')
    //fs = require("fs");
;

gulp.task('bundle', function(done) {
    browserify('script.js',
        {
            plugin: [ [require('esmify')] ]
        }
    )
    .transform(babelify)
    .bundle()
    //.pipe(fs.createWriteStream("bundle.js"));
    .pipe(gulp.dest('./bundle.js'));

    done();
});
