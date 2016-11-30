/**
 * Created by tanmi on 2016/12/1.
 */
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less');
//定义一个testLess任务（自定义任务名称）
gulp.task('tranformLess', function () {
    // gulp.src('src/less/index.less') //该任务针对的文件
    gulp.src('less/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 4 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(livereload())
        // .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
        .pipe(gulp.dest('css/*.css')); //将会在src/css下生成index.css
        console.log(sourceType + ": success!");
});
gulp.task('default',['tranformLess', 'elseTask']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径