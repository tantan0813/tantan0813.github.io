/**
 * Created by tanmi on 2016/12/1.
 */
window.onload = function() {
    //换背景图
    change_main_bg();
    function change_main_bg() {
        //取随机数
        function selectfrom(lowValue, highValue) {
            var choice = highValue - lowValue + 1;
            return Math.floor(Math.random() * choice + lowValue);
        };
        //图片定时器
        setInterval(function () {
            var bg = document.getElementsByClassName("top")[0],
                bgIndex = selectfrom(1, 10);
            bg.style.background = "url(img/bg-main-" + bgIndex + ".jpg)";
        }, 6000);
        //文字框定时器
        setInterval(function () {
            var text = document.getElementsByClassName("text"),
                textIndex = selectfrom(0, 3);
            // text[textIndex].style.display=="none" && text[textIndex].style.display="block" ;
            text[textIndex].style.display == "none" ? text[textIndex].style.display = "block" : text[textIndex].style.display = "none";
        }, 2000);
    };
    //花瓣效果
    flower();
    function flower() {
        $(document).snowfall('clear');
        $(document).snowfall({
            image: "img/huaban.png",
            flakeCount: 6,
            minSize: 5,
            maxSize: 22,
        });
    }
    //锚点高亮追随
    linght();
    function linght(){
        scrollFunc = function(){
            var scrollTop=0,
                i = 0;
            if(document.documentElement&&document.documentElement.scrollTop) {
                scrollTop=document.documentElement.scrollTop;
            } else if(document.body) {
                scrollTop=document.body.scrollTop;
            }
            console.log(scrollTop)
            if(scrollTop>100 && scrollTop<200){
               i = 1;
            }else if(scrollTop>200 && scrollTop<600){
                i = 2;
            }else if(scrollTop>600 && scrollTop<900){
                i = 3;
            }else if(scrollTop>900 && scrollTop<1300){
                i = 4;
            }else if(scrollTop>1300 && scrollTop<1600){
                i = 5;
            }
            $(".light").eq(i).addClass("active").siblings().removeClass("active")
        }
        if(document.addEventListener){
            document.addEventListener('DOMMouseScroll',scrollFunc,false);
        }//W3C
        window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome
    }
}


