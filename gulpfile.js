//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'),
    less = require('gulp-less'),//less转换
    minifycss = require('gulp-minify-css'),//css压缩
    uglify = require('gulp-uglify'),
    git = require('gulp-git'),//自动git
    rename = require('gulp-rename'),//改名
    babel = require("gulp-babel"),//babel转换
    runSequence = require('run-sequence'),//任务队列
    del = require('del'),//删除
    moment = require("moment"),
    ftp = require('gulp-ftp'),
    gutil = require('gulp-util'),
    spritesmith = require('gulp.spritesmith'),//图片精灵
    argv = require('minimist')(process.argv.slice(2)),
    zip = require('gulp-zip'),//打包压缩
    gp_deploy = require('gulp-gh-pages');//部署到git pages
const autoprefixer = require('gulp-autoprefixer'),//自动添加浏览器前缀
        livereload = require('gulp-livereload');//自动刷新
//JavaScript处理
gulp.task("ES6", function () {
    return gulp.src("js/es6/*.js")// ES6 源码存放的路径
        .pipe(babel())
        .pipe(uglify())//压缩
        .pipe(gulp.dest("js/es"))//转换成 ES5 存放的路径
        .pipe(livereload());
});
//Less处理
gulp.task('Less', function () {
    gulp.src('css/less/*.less') //该任务针对less下的文件less文件
        .pipe(less()) //该任务调用的模块
        .pipe(minifycss())//压缩css
        .pipe(autoprefixer({
            browsers: ['last 4 versions', 'Android >= 4.0'],
            cascade: true,//是否美化属性值 默认：true
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('css/css'))//将会在css下生成index.css
        .pipe(livereload());
});
//第三方插件复制(swiper.js/jquery.js and so on)暂时无用
gulp.task('copy', function (done) {
    return gulp.src("src/core/*")
        .pipe(gulp.dest("src/s"));
});
//运用gulp一键生成合成图片(图片精灵)
gulp.task('sprite', function(){
    return gulp.src('img/*.png' )
        .pipe( spritesmith({
            imgName:'sprite.png',
            cssName:'sprite.css'
        }) )
        .pipe( gulp.dest("img/after") );
});
//清理本地无关配置文件
gulp.task('clean',function(){
    return del("zip/*");
});
//打包
gulp.task('zip_new', function () {
    var timeStamp = moment().format("YYYY-MM-D_HH-mm-ss_");
    gulp.src(["../tantan0813.github.io/*/*/*","../tantan0813.github.io/*","../tantan0813.github.io/*/*"])
        .pipe(zip("dist_" + timeStamp + ".zip"))
        .pipe(gulp.dest("../tantan0813.github.io/zip"));
});

//==============wait handel=============
//git pages branch git push
var options = {};
gulp.task('deploy', function () {
    return gulp.src('../tantan0813.github.io/*')
        .pipe(gp_deploy(options));
});
//git提交
gulp.task('commit', function(){
    return gulp.src(["../tantan0813.github.io/*/*/*","../tantan0813.github.io/*","../tantan0813.github.io/*/*"])
        .pipe(git.add())
        .pipe(git.commit());
});
//检查之前提交git版本
gulp.task('checkout',["commit"], function () {
    gitTag = argv.tag;
    git.checkout(gitTag, function (err) {
        if (err) throw err;
    });
});
//发送到服务器
gulp.task('ftp', function () {
    gulp.src("../tantan0813.github.io/zip/*")
        .pipe(ftp({
            host: 'localhost',
            port: 8080,
            user: 'tantan0813',
            pass:'11429zxcv',
            // remotePath: "somePath/"
        }))
    .pipe(gutil.noop());
    // .pipe( gulp.dest() );

});
//==========end============
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径

//仅本地监听处理JavaScript、HTML、less//watch监听方法（改变时运行），run直接运行（自执行一次）
gulp.task('Watch', function () {
    livereload.listen();
    gulp.watch('css/less/*.less', ['Less']); //当所有less文件发生改变时，调用testLess任务
    gulp.watch('js/es6/*.js', ['ES6']); //当所有less文件发生改变时，调用任务
});
//一键打包发送服务器
gulp.task('git-v', function () {
    //runSequence 运行任务队列(括号内为同步任务，方括号为异步任务)
    runSequence('clean',[ 'ES6','Less',"sprite"],'zip_new',function(){
    // runSequence('clean',"checkout",[ 'ES6','Less',"sprite"],'zip_new',"ftp",function(){
        console.log("你已成功提交"+ moment().format("YYYY-MM-D_HH-mm-ss_") +"版本")
    });
});