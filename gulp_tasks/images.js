const gulp = require('gulp');

const conf = require('../conf/gulp.conf');

gulp.task('images', images);

function images() {
    return gulp.src(conf.path.src('images/**/*'))
        .pipe(gulp.dest(conf.path.tmp('images')))
        .pipe(gulp.dest(conf.path.dist('images')))
}
