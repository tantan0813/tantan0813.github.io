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
    function ripple(target) {
        console.log(4);
        var canvas = {},
            centerX = 0,
            centerY = 0,
            color = '',
            containers = target,
            context = {},
            element = {},
            radius = 0,
            // 根据callback生成requestAnimationFrame动画,requestAnimationFrame 请求动画帧原理setTimeout
            //         requestAnimFrame = function () {
            //             return (
            //                 window.requestAnimationFrame    ||
            //                 window.mozRequestAnimationFrame  ||
            //                 window.oRequestAnimationFrame   ||
            //                 window.msRequestAnimationFrame   ||
            //                 function (callback) {
            //                     window.setTimeout(callback, 1000 / 60);
            //                 }
            //             );
            //         } (),
            //         // 为每个指定元素生成canves
            //         init = function () {
            //             containers = Array.prototype.slice.call(containers);
            //             for (var i = 0; i < containers.length; i += 1) {
            //                 canvas = document.createElement('canvas');
            //                 canvas.addEventListener('click', press, false);
            //                 containers[i].appendChild(canvas);
            //                 canvas.style.width ='100%';
            //                 canvas.style.height='100%';
            //                 canvas.style.opacity='0.16';
            //                 canvas.width = canvas.offsetWidth;
            //                 canvas.height = canvas.offsetHeight;
            //             }
            //         },
            //         // 点击并且获取需要的数据，如点击坐标、元素大小、颜色
            //         press = function (event) {
            //             // color = colorS();
            //             element = event.toElement;
            //             context = element.getContext('2d');
            //             radius = 0;
            //             //鼠标点击位置
            //             centerX = event.offsetX;
            //             centerY = event.offsetY;
            //             context.clearRect(0, 0, element.width, element.height);//清空指定矩形框的像素，(x,y)起始点坐标
            //             draw();
            //         },
            //         // 绘制圆形，并且执行动画
            //         draw = function () {
            //             context.beginPath();
            //             context.arc(centerX, centerY, radius, 0, 2* Math.PI, false);
            //             console.log(111);
            //             context.fillStyle = colorS();
            //             console.log(context.fillStyle);
            //             context.fill();
            //             radius += 2;
            //             // 通过判断半径小于元素宽度，不断绘制 radius += 2 的圆形
            //             if (radius < 40) {
            //                 requestAnimFrame(draw);
            //             }
            //         };
            //     //随机取颜色值rgb色值是十进制，10--16的进制转换
            //     colorS = function(){
            //         var s = "#";
            //         function num(star,end){//随机取整
            //             var n = Math.random()*end+star;
            //             return parseInt(n);
            //         }
            //         s+=num(0,255).toString(16);
            //         s+=num(0,255).toString(16);
            //         s+=num(0,255).toString(16);
            //         return s;
            //     };
            //     init();
            // }
            requestAnimFrame = function () {
                return (
                    window.requestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    }
                );
            }(),
            // 为每个指定元素生成canves
            init = function () {
                containers = Array.prototype.slice.call(containers);
                for (var i = 0; i < containers.length; i += 1) {
                    canvas = document.createElement('canvas');
                    canvas.addEventListener('click', press, false);
                    containers[i].appendChild(canvas);
                    canvas.style.width = '100%';
                    canvas.style.height = '100%';
                    canvas.style.opacity = '0.2';
                    canvas.width = canvas.offsetWidth;
                    canvas.height = canvas.offsetHeight;
                }
            },
            // 点击并且获取需要的数据，如点击坐标、元素大小、颜色
            press = function (event) {
//            color = colorS();
//            color = event.toElement.parentElement.dataset.color;
                element = event.toElement;
                context = element.getContext('2d');
                radius = 0;
                //鼠标点击位置
                centerX = event.offsetX;
                centerY = event.offsetY;
                context.clearRect(0, 0, element.width, element.height);//清空指定矩形框的像素，(x,y)起始点坐标
                draw();
            },
            // 绘制圆形，并且执行动画
            draw = function () {
                context.beginPath();
                context.arc(centerX, centerY, radius, 0, 100 * Math.PI, false);
                context.fillStyle = colorS();
                context.fill();
                radius += 2;
                // 通过判断半径小于元素宽度，不断绘制 radius += 2 的圆形
                if (radius < element.width) {
                    requestAnimFrame(draw);
                }
            };
        //随机取颜色值rgb色值是十进制，10--16的进制转换
        colorS = function () {
            var s = "#";

            function num(star, end) {//随机取整
                var n = Math.random() * end + star;
                return parseInt(n);
            }

            s += num(0, 255).toString(16);
            s += num(0, 255).toString(16);
            s += num(0, 255).toString(16);
            console.log(s);
            return s;
        };
        init();
    }
});







