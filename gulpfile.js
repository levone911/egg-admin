'use strict';
const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('less', function() {
  return gulp.src('app/public/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('app/public/css'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: 'http://127.0.0.1:7001',
  });
  gulp.watch('app/public/less/*.less', [ 'less' ]);
  gulp.watch('app/view/*.html').on('change', reload);
});

// Default task to be run with `gulp`
gulp.task('default', [ 'browser-sync' ]);
