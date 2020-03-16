var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var connectSSI = require('connect-ssi');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var prompt = require('gulp-prompt');
var project = 'src';

// Setup Server
gulp.task(
  'server',
  function() {
    browserSync.init({
      server: {
        baseDir: './' + project + '/',
        middleware: [
          connectSSI({
            baseDir: __dirname + '/' + project,
            ext: '.html'
          })
        ]
      },
      port:5000
    });
  });

gulp.task('sass', function() {
  return gulp.src('./' + project + 'scss/**/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./' + project + '/css'))
    .pipe(browserSync.stream());
});

// Reload Browser
gulp.task(
  'bs-reload',
  function() {
    browserSync.reload();
  });

// Reload Browser
gulp.task(
  'bs-stream',
  function() {
    browserSync.stream();
  });
// Run
gulp.task(
  'default', ['server', 'sass'],
  function() {
    gulp.watch('./' + project + '/**/*.html', ['bs-reload']);
    gulp.watch('./' + project + '/sass/**/*.scss', ['sass', 'bs-stream']);
    gulp.watch('./' + project + '/js/**/*.js', ['bs-reload']);
  });
