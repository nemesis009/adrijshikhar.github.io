import { task, src, dest, series } from 'gulp';
import { sync, logError } from 'gulp-sass';
import header from 'gulp-header';
import cleanCSS from 'gulp-clean-css';
import rename from "gulp-rename";
import uglify from 'gulp-uglify';
import autoprefixer from 'gulp-autoprefixer';

var browserSync = require('browser-sync').create();

// const done = "done"
// Copy third party libraries from /node_modules into /vendor
task('vendor', function (done) {

  // Bootstrap
  src([
    './node_modules/bootstrap/dist/**/*',
    '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
    '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
  ])
    .pipe(dest('./vendor/bootstrap'))

  // Font Awesome
  src([
    './node_modules/@fortawesome/**/*',
  ])
    .pipe(dest('./vendor'))

  // jQuery
  src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
  ])
    .pipe(dest('./vendor/jquery'))

  // jQuery Easing
  src([
    './node_modules/jquery.easing/*.js'
  ])
    .pipe(dest('./vendor/jquery-easing'))
    done();
});

// Compile SCSS
task('css:compile', function () {
  return src('./scss/**/*.scss')
    .pipe(sync({
      outputStyle: 'expanded'
    }).on('error', logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(dest('./css'))
});

// Minify CSS
task('css:minify', series('css:compile', function () {
  return src([
    './css/*.css',
    '!./css/*.min.css'
  ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('./css'))
    .pipe(browserSync.stream());
}));

// CSS
task('css', series('css:compile', 'css:minify'));

// Minify JavaScript
task('js:minify', function () {
  return src([
    './js/*.js',
    '!./js/*.min.js'
  ])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('./js'))
    .pipe(browserSync.stream());
});

// JS
task('js', series('js:minify'));

// Default task
task('default', series('css', 'js', 'vendor'));

// Configure the browserSync task
task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Dev task
task('dev', series('css', 'js', 'browserSync'));
