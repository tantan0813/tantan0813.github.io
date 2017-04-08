/**
 * Created by tanmi on 2016/12/7.
 */
// let arr=[1,2,3,4,5,6,7,8,9];
// let res=[];
// arr.sort((p,n)=>n-p).forEach((v,i)=>{i%2==0?res.unshift(v):res.push(v)});


$(function() {
    page($("#skill>div"),2,$("#skill"),"page_active");
    function page(content,page_len,place,active){//参数依次为分页内容体、每页的内容数量，页码的添加位置，页码活跃时的样式
        var list = content;
        var pages=Math.ceil(list.length/page_len);
        var s="<ul class='page_index'><li class='pre' title='当前前五页'>pre</li>";
        for(var i=1;i<=pages;i++){
            s+="<li class='page_num'>"+i+"</li>";
        }
        s+="<li class='next' title='当前后五页'>next</li></ul>";
        place.after(s);
        $(".page_num").on("click",function(){
            var num = $(this).text()*page_len;
            $(this).addClass(active).siblings().removeClass(active);
            var show_ing=list.slice(num-page_len,num);
            var show_no_next=list.slice(num);
            var show_no_pre=list.slice(0,num-page_len);
            show_ing.css("display", "block");
            show_no_pre.css("display", "none");
            show_no_next.css("display", "none");
        });
    }
});







