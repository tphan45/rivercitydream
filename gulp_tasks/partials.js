const gulp = require('gulp');
const angularTemplatecache = require('gulp-angular-templatecache');

const conf = require('../conf/gulp.conf');

gulp.task('partials', partials);

function partials() {
  return gulp.src(conf.path.src('scripts/**/*.html'))
    .pipe(angularTemplatecache('templateCacheHtml.js', {
      module: conf.ngModule,
      root: 'scripts'
    }))
    .pipe(gulp.dest(conf.path.tmp()));
}
