'use strict';
const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const rev = require('gulp-rev');
const notify = require('gulp-notify');
const reload = browserSync.reload;

// 文件路径
const config = {
  publish: {
    less: 'app/public/less/',
    js: 'app/public/js/pages/',
    view: 'app/view/',
  },
  dist: {
    css: 'app/public/css',
    js: 'app/public/js/',
    revCss: 'app/public/css/rev/',
    revJs: 'app/public/js/rev/',
  },
};

gulp.task('less', function() {
  return gulp.src(config.publish.less + '*.less')
    .pipe(less())
    .pipe(gulp.dest(config.dist.css))
    .pipe(notify('less 编译完毕!'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: 'http://127.0.0.1:7001',
  });
  gulp.watch(config.publish.less + '*.less', [ 'less' ]);
  gulp.watch(config.publish.view + '*.html').on('change', reload);
});

gulp.task('rev-css', function() {
  return gulp.src(config.publish.less + '*.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(rev())
    .pipe(gulp.dest(config.dist.revCss))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.dist.revCss))
    .pipe(notify('css 编译完毕!'));
});
gulp.task('rev-js', function() {
  return gulp.src(config.publish.js + '*.js')
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest(config.dist.revJs))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.dist.revJs))
    .pipe(notify('js 编译完毕!'));
});
// npm run dev 有问题 css没有加载。
// Default task to be run with `gulp`
gulp.task('default', [ 'less', 'browser-sync' ]);

gulp.task('prod', [ 'rev-css', 'rev-js' ]);
