var gulp = require('gulp');//表示引进gulp模块
var sass = require('gulp-sass');

gulp.task('sass', function(){
  //sass()方法用于转换sass到css
  return gulp.src('src/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'})) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);


