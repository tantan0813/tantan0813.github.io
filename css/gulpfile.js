/**
 * Created by tanmi on 2016/12/1.
 */
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const livereload = require('gulp-livereload');
//定义一个testLess任务（自定义任务名称）
gulp.task('Less', function () {
    gulp.src('less/*.less') //该任务针对less下的文件less文件
        .pipe(less()) //该任务调用的模块
        .pipe(autoprefixer({
            browsers: ['last 4 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        // .pipe(minifycss())
        .pipe(gulp.dest('css'))//将会在css下生成index.css
        .pipe(livereload())
});
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径
gulp.task('Watch', function () {
    gulp.watch('less/*.less', ['Less']); //当所有less文件发生改变时，调用testLess任务
    // gulp.watch('css/*.css', ['minifycss']); //当所有less文件发生改变时，调用testLess任务
});
