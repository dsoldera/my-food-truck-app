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
  js: ['./www/app/**/*.js'],
  html: ['./www/app/**/*.html']
};

gulp.task('concat', function(){
  return gulp.src(paths.js)
      .pipe($.babel({
        presets: ['es2015']
      }))
      .pipe($.ngAnnotate())
      .pipe($.sourcemaps.init())
      .pipe($.plumber())
      .pipe($.concat('bundle.js'))
      .pipe($.uglify())
      .pipe(gulp.dest('./www/js'));
});

gulp.task('default', ['sass']['concat']);

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

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['concat']);
  gulp.watch(paths.html, ['concat']);
});


