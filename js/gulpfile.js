/**
 * Created by tanmi on 2016/12/7.
 */
var gulp = require("gulp"),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    babel = require("gulp-babel");
const livereload = require('gulp-livereload');
gulp.task("ES6", function () {
    return gulp.src("es6/*.js")// ES6 源码存放的路径
        .pipe(babel())
        // .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        // .pipe(uglify())    //压缩
        .pipe(gulp.dest("es"))//转换成 ES5 存放的路径
        .pipe(livereload())
});
gulp.task('Watch', function () {
    gulp.watch('es6/*.js', ['ES6']); //当所有less文件发生改变时，调用任务
});

