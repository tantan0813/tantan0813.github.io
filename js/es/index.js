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
            image: "img/butterfly.png",
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
            if(scrollTop>200 && scrollTop<360){
                i = 0;
            }else if(scrollTop>360 && scrollTop<600){
                i = 1;
            }else if(scrollTop>600 && scrollTop<1200){
                i = 2;
            }else if(scrollTop>1200){
                i = 3;
            }
            play(".light",i);
        }
        if(document.addEventListener){
            document.addEventListener('DOMMouseScroll',scrollFunc,false);
        }//W3C
        window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome
    }
    //文章分页
    var defaults = {
        totalPages: 0,//总页数
        liNums: 0,//分页的数字按钮数(建议取奇数)
        activeClass: 'active' ,//active类
        firstPage: '首页',//首页按钮名称
        lastPage: '末页',//末页按钮名称
        prv: '«',//前一页按钮名称
        next: '»',//后一页按钮名称
        hasFirstPage: true,//是否有首页按钮
        hasLastPage: true,//是否有末页按钮
        hasPrv: true,//是否有前一页按钮
        hasNext: true,//是否有后一页按钮
        callBack : function(page){
            //回掉，page选中页数
        }
    };
    var target = document.getElementsByClassName("article_all")[0].getElementsByTagName("a"),
        pages = target.length,
        page_show = 3,
        pages_index = Math.ceil( pages/3);
    if(pages_index>9){page_show =7;}
    // pages>9 && page_show =7;
    //分页显示相应文章
    function show_article(i){
       $(".article_all").find("a").eq(i).show().siblings().hide();
    };
    //分页显示方法
    $.fn.Page = function (options) {
        //覆盖默认参数
        var opts = $.extend(defaults, options);
        //主函数
        return this.each(function () {
            var obj = $(this),
                l = opts.totalPages,
                n = opts.liNums,
                active = opts.activeClass,
                str = '',
                str1 = '<li><a href="javascript:" class="'+ active +'">1</a></li>';
            if (l > 1&&l < n+1) {
                for (i = 2; i < l + 1; i++) {
                    str += '<li><a href="javascript:">' + i + '</a></li>';
                }
            }else if(l > n){
                for (i = 2; i < n + 1; i++) {
                    str += '<li><a href="javascript:">' + i + '</a></li>';
                }
            }
            var dataHtml = '';
            if(opts.hasNext){
                dataHtml += '<div class="next fr">' + opts.next + '</div>';
            }
            if(opts.hasLastPage){
                dataHtml += '<div class="last fr">' + opts.lastPage + '</div>';
            }
            dataHtml += '<ul class="pagingUl">' + str1 + str + '</ul>';
            if(opts.hasFirstPage){
                dataHtml += '<div class="first fr">' + opts.firstPage + '</div>';
            }
            if(opts.hasPrv){
                dataHtml += '<div class="prv fr">' + opts.prv + '</div>';
            }
            obj.html(dataHtml).off("click");//防止重复调用时，重复绑定事件
            obj.on('click', '.next', function () {
                var pageshow = parseInt($('.' + active).html());
                var nums,flag;
                var a = n % 2;
                if(a == 0){
                    //偶数
                    nums = n;
                    flag = true;
                }else if(a == 1){
                    //奇数
                    nums = (n+1);
                    flag = false;
                }
                if(pageshow >= l) {
                    return;
                }else if(pageshow > 0&&pageshow <= nums/2){
                    //最前几项
                    $('.' + active).removeClass(active).parent().next().find('a').addClass(active);
                }else if((pageshow > l-nums/2&&pageshow < l&&flag==false)||(pageshow > l-nums/2-1&&pageshow < l&&flag==true)){
                    //最后几项
                    $('.' + active).removeClass(active).parent().next().find('a').addClass(active);
                }else{
                    $('.' + active).removeClass(active).parent().next().find('a').addClass(active);
                    fpageShow(pageshow+1);
                }
                opts.callBack(pageshow+1);
            });
            obj.on('click', '.prv', function () {
                var pageshow = parseInt($('.' + active).html());
                var nums = odevity(n);
                if (pageshow <= 1) {
                    return;
                }else if((pageshow > 1&&pageshow <= nums/2)||(pageshow > l-nums/2&&pageshow < l+1)){
                    //最前几项或最后几项
                    $('.' + active).removeClass(active).parent().prev().find('a').addClass(active);
                }else {
                    $('.' + active).removeClass(active).parent().prev().find('a').addClass(active);
                    fpageShow(pageshow-1);
                }
                opts.callBack(pageshow-1);
            });

            obj.on('click', '.first', function(){
                var activepage = parseInt($('.' + active).html());
                if (activepage <= 1){
                    return
                }//当前第一页
                opts.callBack(1);
                fpagePrv(0);
            });
            obj.on('click', '.last', function(){
                var activepage = parseInt($('.' + active).html());
                if (activepage >= l){
                    return;
                }//当前最后一页
                opts.callBack(l);
                if(l>n){
                    fpageNext(n-1);
                }else{
                    fpageNext(l-1);
                }
            });

            obj.on('click', 'li', function(){
                var $this = $(this);
                var pageshow = parseInt($this.find('a').html());
                var nums = odevity(n);
                opts.callBack(pageshow);
                if(l>n){
                    if(pageshow > l-nums/2&&pageshow < l+1){
                        //最后几项
                        fpageNext((n-1)-(l-pageshow));
                    }else if(pageshow > 0&&pageshow < nums/2){
                        //最前几项
                        fpagePrv(pageshow-1);
                    }else{
                        fpageShow(pageshow);
                    }
                }else{
                    $('.' + active).removeClass(active);
                    $this.find('a').addClass(active);
                }
            });
            //重新渲染结构
            /*activePage 当前项*/
            function fpageShow(activePage){
                var nums = odevity(n);
                var pageStart = activePage - (nums/2-1);
                var str1 = '';
                for(i=0;i<n;i++){
                    str1 += '<li><a href="javascript:" class="">' + (pageStart+i) + '</a></li>'
                }
                obj.find('ul').html(str1);
                obj.find('ul li').eq(nums/2-1).find('a').addClass(active);
            }
            /*index 选中项索引*/
            function fpagePrv(index){
                var str1 = '';
                if(l>n-1){
                    for(i=0;i<n;i++){
                        str1 += '<li><a href="javascript:" class="">' + (i+1) + '</a></li>'
                    }
                }else{
                    for(i=0;i<l;i++){
                        str1 += '<li><a href="javascript:" class="">' + (i+1) + '</a></li>'
                    }
                }
                obj.find('ul').html(str1);
                obj.find('ul li').eq(index).find('a').addClass(active);
            }
            /*index 选中项索引*/
            function fpageNext(index){
                var str1 = '';
                if(l>n-1){
                    for(i=l-(n-1);i<l+1;i++){
                        str1 += '<li><a href="javascript:" class="">' + i + '</a></li>'
                    }
                    obj.find('ul').html(str1);
                    obj.find('ul li').eq(index).find('a').addClass(active);
                }else{
                    for(i=0;i<l;i++){
                        str1 += '<li><a href="javascript:" class="">' + (i+1) + '</a></li>'
                    }
                    obj.find('ul').html(str1);
                    obj.find('ul li').eq(index).find('a').addClass(active);
                }
            }
            //判断liNums的奇偶性
            function odevity(n){
                var a = n % 2;
                if(a == 0){
                    //偶数
                    return n;
                }else if(a == 1){
                    //奇数
                    return (n+1);
                }
            }
        });
    }
    console.log(pages);
    //分页显示方法调用
    $("#page").Page({
        totalPages: pages_index,//分页总数
        liNums: page_show,//分页的数字按钮数(建议取奇数)
        activeClass: 'activP', //active 类样式定义
        callBack : function(){
            // console.log(111);
            var i = 1;
            show_article(i);
        }
    });

}


