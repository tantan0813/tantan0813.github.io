/**
 * Created by tanmi on 2016/12/1.
 */
window.onload = function(){
    change_main_bg();
    function change_main_bg(){
        //取随机数
        function selectfrom (lowValue,highValue){
            var choice=highValue-lowValue+1;
            return Math.floor(Math.random()*choice+lowValue);
        };
        setInterval(function(){
          var bg = document.getElementsByClassName("top")[0],
              bgIndex = selectfrom (1,10);
            bg.style.background="url(img/bg-main-"+bgIndex+".jpg)";
            text[textIndex].style.display=="none" ? text[textIndex].style.display="block" :text[textIndex].style.display="none";
        },4000);
        setInterval(function (){
            var text = document.getElementsByClassName("text"),
                textIndex = selectfrom (0,3);
            // text[textIndex].style.display=="none" && text[textIndex].style.display="block" ;
            text[textIndex].style.display=="none" ? text[textIndex].style.display="block" :text[textIndex].style.display="none";
        },2000)
    }
}