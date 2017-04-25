/**
 * Created by tanmi on 2016/12/7.
 */
// let arr=[1,2,3,4,5,6,7,8,9];
// let res=[];
// arr.sort((p,n)=>n-p).forEach((v,i)=>{i%2==0?res.unshift(v):res.push(v)});
$(function() {
    // 点击波纹效果
    var rip=document.getElementsByClassName("aside");
    ripple(rip);
    function ripple(target){
        var canvas = {},
            centerX = 0,
            centerY = 0,
            color = '',
            containers = target,
            context = {},
            element = {},
            radius = 0,
            // 根据callback生成requestAnimationFrame动画,requestAnimationFrame 请求动画帧原理setTimeout
            requestAnimFrame = function () {
                return (
                    window.requestAnimationFrame    ||
                    window.mozRequestAnimationFrame  ||
                    window.oRequestAnimationFrame   ||
                    window.msRequestAnimationFrame   ||
                    function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    }
                );
            } (),
            // 为每个指定元素生成canves
            init = function () {
                containers = Array.prototype.slice.call(containers);
                for (var i = 0; i < containers.length; i += 1) {
                    canvas = document.createElement('canvas');
                    canvas.addEventListener('click', press, false);
                    containers[i].appendChild(canvas);
                    canvas.style.width ='100%';
                    canvas.style.height='100%';
                    canvas.style.opacity='0.3';
                    canvas.width = canvas.offsetWidth;
                    canvas.height = canvas.offsetHeight;
                }
            },
            // 点击并且获取需要的数据，如点击坐标、元素大小、颜色
            press = function (event) {
                element = event.toElement;
                context = element.getContext('2d');
                radius = 0;
                //鼠标点击位置
                centerX = event.offsetX;
                centerY = event.offsetY;
                context.clearRect(0, 0, element.width, element.height);//清空指定矩形框的像素，(x,y)起始点坐标，类似于橡皮擦
                draw();
            },
            // 绘制圆形，并且执行动画
            draw = function () {
                context.beginPath();
                context.arc(centerX, centerY, radius, 0, 2* Math.PI, false);
                context.fillStyle = colorS();
                context.fill();
                radius += 2;
                // 通过判断半径小于元素宽度，不断绘制 radius += 2 的圆形
                if (radius < element.width/3) {
                    requestAnimFrame(draw);
                }else{
                    setTimeout(context.clearRect(0, 0, element.width, element.height),800);
                }
            };
        //随机取颜色值rgb色值是十进制，10--16的进制转换
         function colorS(){
            var s = "#";
            function num(star,end){//随机取整
                var n = Math.random()*end+star;
                return parseInt(n);
            }
            s+=num(0,255).toString(16);
            s+=num(0,255).toString(16);
            s+=num(0,255).toString(16);
            return s;
        };
        init();
    }
    //====================old progress===========
    //文章载入中进度条
    //downLoad_play($("#play_01"));
    var tar1=$("#art-page-all"),tar2 =$("#canvas-progress");
    function show_art(){
        tar1.css("display","block");
        tar2.css("display","none");
    }
    function downLoad_play(target){
        //构造函数：lightLoader对象，c：canvas元素、cw：width、ch：height；
        var lightLoader = function(c, cw, ch){

            var _this = this;
            this.c = c;
            this.ctx = c.getContext('2d');//创建canvas画布环境
            this.cw = cw;
            this.ch = ch;

            this.loaded = 0;//已经载入的百分比n/100
            this.loaderSpeed = .6;//进度条速度
            this.loaderHeight = 10;//进度条占画布height
            this.loaderWidth = 310;//进度条占画布width
            //loader相对于canvas的位置
            this.loader = {
                x: (this.cw/2) - (this.loaderWidth/2),
                y: (this.ch/2) - (this.loaderHeight/2)
            };
            this.particles = [];
            this.particleLift = 180;//微粒抛洒范围 高度
            this.hueStart = 0;//开始的色调值
            this.hueEnd = 120;//结束的色调值
            this.hue = 0;//色调
            this.gravity = .15;//自定义引力G
            this.particleRate = 4;//微粒率

            this.init = function(){
                this.loop();
            };


            this.rand = function(rMi, rMa){return ~~((Math.random()*(rMa-rMi+1))+rMi);};//~~取整；rmi-rma之间的随机整数
            this.hitTest = function(x1, y1, w1, h1, x2, y2, w2, h2){return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);};

            //更新loader
            this.updateLoader = function(){
                if(this.loaded < 100){
                    this.loaded += this.loaderSpeed;
                } else {
                    this.loaded = 0;
                }
            };

            //进度条绘制
            this.renderLoader = function(){
                //this.ctx为画布环境
                this.ctx.fillStyle = '#000';//填充颜色
                //context.fillRect(x,y,width,height);矩形填充（x，y）开始点，矩形宽高；
                this.ctx.fillRect(this.loader.x, this.loader.y, this.loaderWidth, this.loaderHeight);

                this.hue = this.hueStart + (this.loaded/100)*(this.hueEnd - this.hueStart);//?

                var newWidth = (this.loaded/100)*this.loaderWidth;
                // HSLA(H,S,L,A)H：Hue(色调)。0(或360)表示红色，120表示绿色，240表示蓝色，也可取其他数值来指定颜色。取值为：0 - 360
                // S：Saturation(饱和度)。取值为：0.0% - 100.0%
                // L：Lightness(亮度)。取值为：0.0% - 100.0%
                // A：Alpha透明度。取值0~1之间。
                this.ctx.fillStyle = 'hsla('+this.hue+', 100%, 40%, 1)';
                this.ctx.fillRect(this.loader.x, this.loader.y, newWidth, this.loaderHeight);

                this.ctx.fillStyle = '#222';
                this.ctx.fillRect(this.loader.x, this.loader.y, newWidth, this.loaderHeight/2);
            };

            //微粒生成
            this.Particle = function(){
                // (x,y)微粒开始抛洒的位置
                this.x = _this.loader.x + ((_this.loaded/100)*_this.loaderWidth) - _this.rand(0, 1);
                this.y = _this.ch/2 + _this.rand(0,_this.loaderHeight)-_this.loaderHeight/2;
                this.vx = (_this.rand(0,4)-2)/100;
                this.vy = (_this.rand(0,_this.particleLift)-_this.particleLift*2)/100;
                //微粒大小
                this.width = _this.rand(1,4)/2;
                this.height = _this.rand(1,4)/2;
                //微粒颜色
                this.hue = _this.hue;
            };

            this.Particle.prototype.update = function(i){
                this.vx += (_this.rand(0,6)-3)/100;
                this.vy += _this.gravity;
                this.x += this.vx;
                this.y += this.vy;

                if(this.y > _this.ch){
                    _this.particles.splice(i, 1);
                }
            };

            this.Particle.prototype.render = function(){
                _this.ctx.fillStyle = 'hsla('+this.hue+', 100%, '+_this.rand(50,70)+'%, '+_this.rand(20,100)/100+')';
                _this.ctx.fillRect(this.x, this.y, this.width, this.height);//绘制微粒
            };

            this.createParticles = function(){
                var i = this.particleRate;//微粒率，在此可以控制微粒数
                while(i--){
                    // 实例化微粒对象，并放入总微粒对象中；
                    this.particles.push(new this.Particle());
                };
            };

            this.updateParticles = function(){
                var i = this.particles.length;
                while(i--){
                    var p = this.particles[i];
                    p.update(i);//不断更新微粒对象
                };
            };

            this.renderParticles = function(){
                var i = this.particles.length;
                while(i--){
                    var p = this.particles[i];
                    p.render();//不断绘制微粒
                };
            };

            this.clearCanvas = function(){
                //globalCompositeOperation 属性设置或返回如何将一个源（新的）图像绘制到目标（已有）的图像上;显示源图像
                this.ctx.globalCompositeOperation = 'source-over';
                this.ctx.clearRect(0,0,this.cw,this.ch);//橡皮檫
                this.ctx.globalCompositeOperation = 'lighter';//显示源图像 + 目标图像。
            };

            this.loop = function(){
                var loopIt = function(){
                    //this指向Windows；
                    requestAnimationFrame(loopIt, _this.c);//为进度条canvas；创建requestAnimationFrame(callback,canvas);
                    _this.clearCanvas();//清除canvas已有的绘制记录

                    _this.createParticles();//创建微粒

                    _this.updateLoader();//更新进度条
                    _this.updateParticles();//更新微粒

                    _this.renderLoader();//绘制进度条
                    _this.renderParticles();//绘制微粒

                };
                loopIt();
            };

        };

        var isCanvasSupported = function(){
            var elem = document.createElement('canvas');
            return !!(elem.getContext && elem.getContext('2d'));
        };

        var setupRAF = function(){
            var lastTime = 0;
            //创建requestAnimationFrame对象
            var vendors = ['ms', 'moz', 'webkit', 'o'];
            for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x){
                window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
            };

            // 如果不支持requestAnimationFrame
            if(!window.requestAnimationFrame){
                window.requestAnimationFrame = function(callback, element){
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };
            };

            if (!window.cancelAnimationFrame){
                window.cancelAnimationFrame = function(id){
                    clearTimeout(id);
                };
            };
        };


        if(isCanvasSupported){
            //创建canvas标签
            var c = document.createElement('canvas');
            c.width = 300;
            c.height = 100;
            var cw = c.width;
            var ch = c.height;
            c.setAttribute("id","canvas-progress");
            //向要显示的位置追加创建的canvas元素
            target.append(c);
            var cl = new lightLoader(c, cw, ch);//实例化lightLoader对象，canvas元素、width、height；

            setupRAF();
            cl.init();
        }
    }
    //setTimeout(show_art,3000);//控制文章/分页；和载入进度条的显示
   //================================old progress end=======

    //=============================new progress  yellow man==============
    console.log(22);
    function yellow(){






    }
    //=============================new progress end==============
});







