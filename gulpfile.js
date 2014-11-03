var gulp = require('gulp');
var to5 = require('gulp-6to5');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function () {
  return gulp.src('src/**/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(to5())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['js'], function () {
  gulp.watch('src/**/*.js', ['js']);
});

gulp.task('default', ['js']);
