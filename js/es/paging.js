"use strict";

/**
 * Created by tanmi on 2016/12/7.
 */
// let arr=[1,2,3,4,5,6,7,8,9];
// let res=[];
// arr.sort((p,n)=>n-p).forEach((v,i)=>{i%2==0?res.unshift(v):res.push(v)});


$(function () {
    page($("#skill>div"), 2, $("#skill"), "page_active");
    function page(content, page_len, place, active) {
        //参数依次为分页内容体、每页的内容数量，页码的添加位置，页码活跃时的样式
        var list = content;
        var pages = Math.ceil(list.length / page_len);
        var s = "<ul class='page_index'><li class='pre' title='当前前五页'>pre</li>";
        for (var i = 1; i <= pages; i++) {
            s += "<li class='page_num'>" + i + "</li>";
        }
        s += "<li class='next' title='当前后五页'>next</li></ul>";
        place.after(s);
        $(".page_num").on("click", function () {
            var num = $(this).text() * page_len;
            $(this).addClass(active).siblings().removeClass(active);
            var show_ing = list.slice(num - page_len, num);
            var show_no_next = list.slice(num);
            var show_no_pre = list.slice(0, num - page_len);
            show_ing.css("display", "block");
            show_no_pre.css("display", "none");
            show_no_next.css("display", "none");
        });
    }
    var rip = document.getElementsByClassName("aside");
    ripple(rip);
    function ripple(target) {
        console.log(1);
        var canvas = {},
            centerX = 0,
            centerY = 0,
            color = '',

        // containers = document.getElementsByClassName('material-design');
        containers = target;
        context = {}, element = {}, radius = 0,
        // 根据callback生成requestAnimationFrame动画
        requestAnimFrame = function () {
            return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        }(),
        // 为每个指定元素生成canves
        init = function init() {
            containers = Array.prototype.slice.call(containers);
            for (var i = 0; i < containers.length; i += 1) {
                canvas = document.createElement('canvas');
                canvas.addEventListener('click', press, false);
                containers[i].appendChild(canvas);
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            }
        },
        // 点击并且获取需要的数据，如点击坐标、元素大小、颜色
        press = function press(event) {
            color = event.toElement.parentElement.dataset.color;
            element = event.toElement;
            context = element.getContext('2d');
            radius = 0;
            centerX = event.offsetX;
            centerY = event.offsetY;
            context.clearRect(0, 0, element.width, element.height);
            draw();
        },
        // 绘制圆形，并且执行动画
        draw = function (_draw) {
            function draw() {
                return _draw.apply(this, arguments);
            }

            draw.toString = function () {
                return _draw.toString();
            };

            return draw;
        }(function () {
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            context.fillStyle = color;
            context.fill();
            radius += 2;
            // 通过判断半径小于元素宽度，不断绘制 radius += 2 的圆形
            if (radius < element.width) {
                requestAnimFrame(draw);
            }
        });

        init();
    }
});