var posthtml = require('gulp-posthtml');
var gulp = require('gulp');

gulp.task('posthtml', function (done) {
    var plugins = [
        require('posthtml-web-component')()
    ];
    return gulp.src('./html/index.html')
        .pipe(posthtml(plugins))
        .pipe(gulp.dest('./dest'));
});
