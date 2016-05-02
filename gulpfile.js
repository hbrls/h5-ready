var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('default', function (done) {
  pump([
    gulp.src('./src/ready.js'),
    uglify(),
    rename('h5-ready.min.js'),
    gulp.dest('./dist'),
  ], done);
});
