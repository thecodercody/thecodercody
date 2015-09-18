// include gulp
var gulp = require('gulp');

// include plugins
var concat = require('gulp-concat');

// concatenate js files
gulp.task('scripts', function() {
  return gulp.src(['www/app/**/*.js', 'www/lib/*.js', 'www/init.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./'));
});

// default task
gulp.task('default', ['scripts']);