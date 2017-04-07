/**
 * Created by tanmi on 2016/12/1.
 */
window.onload = function() {
     // 在新窗口中打开
    function addBlankTargetForLinks () {
        $('a[href^="http"]').each(function(){
            $(this).attr('target', '_blank');
        });
    }
    $(document).bind('DOMNodeInserted', function(event) {
        addBlankTargetForLinks();
    });
    //换背景图
    change_main_bg();
    function change_main_bg() {
        //取随机数
        function select_from(lowValue, highValue) {
            var choice = highValue - lowValue + 1;
            return Math.floor(Math.random() * choice + lowValue);
        };
        //图片定时器
        setInterval(function () {
            var bg = document.getElementsByClassName("top")[0],
                bgIndex = select_from(1, 10);
            bg.style.background = "url(../img/bg-main-" + bgIndex + ".jpg)";
        }, 6000);
        //文字框定时器
        setInterval(function () {
            var text = document.getElementsByClassName("text"),
                textIndex = select_from(0, 3);
            if( text[textIndex] !==undefined && text[textIndex].style !== undefined){
                text[textIndex].style.display == "none" ? text[textIndex].style.display = "block" : text[textIndex].style.display = "none";
            };
        }, 2000);
    };
    //花瓣效果
    flower();
    function flower() {
        $(document).snowfall('clear');
        $(document).snowfall({
            // image: "img/flower.png",
            image: "../img/butterfly.png",
            flakeCount: 6,
            minSize: 5,
            maxSize: 22,
        });
    }
    //锚点高亮追随
    linght();
    function linght(){
        //类名添加
        function play(target,i) {
            $(target).eq(i).addClass("active").siblings().removeClass("active")
        }
        $(".light").click(function(){
            var index = $(this).index();
            play(".light",index);
            switch(index){
                case 0:
                    document.getElementById('self').scrollIntoView();
                    break;
                case 1:
                    document.getElementById('skill').scrollIntoView();
                    break;
                case 2:
                    document.getElementById('article').scrollIntoView();
                    break;
                case 3:
                    document.getElementById('top').scrollIntoView();
                    break;
            }
        });
        scrollFunc = function(){
            var scrollTop=0,
                i;
            if(document.documentElement&&document.documentElement.scrollTop) {
                scrollTop=document.documentElement.scrollTop;
            } else if(document.body) {
                scrollTop=document.body.scrollTop;
            }
            if(scrollTop>0 && scrollTop<300){
                i = 3;
            }else if(scrollTop>300 && scrollTop<500){
                i = 0;
            }else if(scrollTop>500 && scrollTop<800){
                i = 1;
            }else if(scrollTop>800){
                i = 2;
            }
            // console.log(scrollTop);
            play(".light",i);
        }
        if(document.addEventListener){
            document.addEventListener('DOMMouseScroll',scrollFunc,false);
        }//W3C
        window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome
    }
}


