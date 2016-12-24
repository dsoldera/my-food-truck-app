var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true});
    // gutil = require('gulp-util'),
    // plumber = require('gulp-plumber'),
    // bower = require('bower'),
    // concat = require('gulp-concat'),
    // ngAnnotate = require('gulp-ng-annotate'),
    // sass = require('gulp-sass'),
    // minifyCss = require('gulp-minify-css'),
    // rename = require('gulp-rename'),
    // sh = require('shelljs');

var paths = {
  sass: ['./scss/**/*.scss'],
  js: ['./www/app/**/*.js']
};

gulp.task('concat', function(){
  return gulp.src(paths.js)
      .pipe($.plumber())
      .pipe($.concat('bundle.js'))
      // .pipe($.uglify())
      .pipe($.ngAnnotate())

      .pipe(gulp.dest('./www/js'));
});

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe($.sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe($.minifyCss({
      keepSpecialComments: 0
    }))
    .pipe($.rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', ['sass'], function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
