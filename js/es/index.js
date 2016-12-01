/**
 * Created by tanmi on 2016/12/1.
 */
window.onload = function(){
    change_main_bg();
    function change_main_bg(){
        setInterval(function(){
          var bg = document.getElementsByClassName("top")[0],
              text = document.getElementsByClassName("text"),
              index = Math.round(Math.random()*9+1);
            bg.style.background="url(img/bg-main-"+index+".jpg)";
            text[index].style.display="block"?"none":"block"

        },3000);
    }
}