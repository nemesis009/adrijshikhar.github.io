import { task, src, dest, watch } from 'gulp';
import { sync, logError } from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import autoprefixer from 'gulp-autoprefixer';
import log from "fancy-log";
var browserSync = require('browser-sync').create();

function img_copy(){
  src([
    'src/img/*',
  ])
    .pipe(dest('./dist/img'))
}

function vendor() {
  src([
    './node_modules/bootstrap/dist/**/*',
    '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
    '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
  ])
    .pipe(dest('./src/vendor/bootstrap'))
  src([
    './node_modules/@fortawesome/**/*',
  ])
    .pipe(dest('./src/vendor'))
  src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
  ])
    .pipe(dest('./src/vendor/jquery'))
}

function vendor_minify() {
  src([
    './node_modules/bootstrap/dist/**/*',
    '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
    '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
  ])
    .pipe(dest('./dist/vendor/bootstrap'))

    src([
    './node_modules/@fortawesome/**/*',
  ])
    .pipe(dest('./dist/vendor'))

    src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
  ])
    .pipe(dest('./dist/vendor/jquery'))

    src([
    './src/vendor/jquery-easing/*.js'
  ]).pipe(uglify())
    .pipe(dest('./dist/vendor/jquery-easing'))
}

function scss_compile() {
  return src('./src/scss/*')
    .pipe(sync({
      outputStyle: 'expanded'
    }).on('error', logError))
    .pipe(autoprefixer())
    .pipe(dest('./src/css'))
    .pipe(browserSync.stream());
}

function minify_css() {
  return src([
    './src/css/*.css',
  ])
    .pipe(cleanCSS())
    .pipe(dest('./dist/css'))
}

function minify_js() {
  return src([
    './src/js/*',
  ])
    .pipe(uglify())
    .pipe(dest('./dist/js'))
}

function html() {
  src([
    './src/*.html',
  ])
    .pipe(dest('./dist/'))
}

function dev() {
  browserSync.init({
    server: {
      baseDir: "./src",
      index: "/index.html"
    }
  });
  vendor()
  watch('src/scss/**/*.scss', scss_compile)
  watch('src/js/**/*.js').on('change', browserSync.reload);
  watch('src/*.html').on('change', browserSync.reload);
}

function serve(done) {
  scss_compile()
  vendor_minify()
  minify_css()
  minify_js()
  img_copy()
  html()
  done()
  log.info("Ready to serve")
}


exports.default = serve
exports.dev = dev
