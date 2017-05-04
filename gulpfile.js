/********************************* Define Gulp tasks ******************/

var gulp = require('gulp');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

gulp.task('hello', function() {
  console.log('Hello All...!');
});

gulp.task('js', function(){
   gulp.src('src/scripts/*.js')
   .pipe(concat('script.js'))
   .pipe(uglify())
   .pipe(gulp.dest('build/scripts/'));
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

gulp.task('css', function(){
   gulp.src('src/styles/*.css')
   .pipe(concat('styles.css'))
   .pipe(minify())
   .pipe(gulp.dest('build/styles/'));
});

gulp.task('start',['js','css'],function(){

});



gulp.task('browserSync', function() {
   browserSync.init({
      server: {
         baseDir: 'build'
      },
   })
})

gulp.task('default', ['browserSync', 'styles'], function (){
   gulp.watch('src/styles/*.css', ['styles']);
});


