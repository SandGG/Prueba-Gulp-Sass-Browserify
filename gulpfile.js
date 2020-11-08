const gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify')
;

gulp.task('bundle', function(done) {
    browserify('script.js',
        {
            plugin: [ [require('esmify')] ]
        }
    )
    .transform(babelify)
    .bundle()
    .pipe(gulp.dest('./'));

    done();
});
