const concat = require('gulp-concat');

const gulp = require('gulp')

gulp.task('scripts', function() {
    return gulp.src('./js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./assets/js/'));
});

gulp.task('watch', function() {
    gulp.watch(['./js/*.js'], gulp.series(['scripts']));
});