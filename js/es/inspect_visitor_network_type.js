/**
 * Created by tanmi on 2016/12/17.
 */
//Judge_visitor_network_type();
// 3：iphone 无法判断\\firebox\\非WiFi    4：WiFi&PC
(function ($) {
    $.fn.judge = function(options) {
        //根据用户的网络环境决定是否加载背景音乐 Whether to load music by User network type
        isMusicLoad();
        function isMusicLoad(){
            var net_type = Judge_visitor_network_type(),
                url = window.location.pathname;//get current URL的路径名
            alert(net_type);
            function addMusic(){
                var target = document.getElementById("bgMusic");
                //给coding life 添加不同的bg-music
                // if(url.indexOf("life") > 0) target.setAttribute("src", "http://m2.music.126.net/7I3Z3JsyHLvCcNHCxk0wbQ==/3420580726120857.mp3");
                if(url.indexOf("coding") > 0) target.setAttribute("src", "http://m2.music.126.net/-d73pDTFK_7utRBknyLP9A==/528865118117207.mp3");
            }
            if(net_type == "4"){
                addMusic();
            }else if(net_type == "3"){
                document.getElementById("music").remove();
            }
        }
        // checked_equipment_type();
        //judge visitor equipment type
        function checked_equipment_type(){
            var sUserAgent = navigator.userAgent.toLowerCase(),
                bIsIpad = sUserAgent.match(/ipad/i) == "ipad",
                bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os",
                bIsMidp = sUserAgent.match(/midp/i) == "midp",
                bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
                bIsUc = sUserAgent.match(/ucweb/i) == "ucweb",
                bIsAndroid = sUserAgent.match(/android/i) == "android",
                bIsCE = sUserAgent.match(/windows ce/i) == "windows ce",
                bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                return "phone";
            } else {
                console.log(9);
                return  "4";
                // return  "pc";
            }
        }
        //judge mobile equipment type
        function checked_mobile_equipment(){
            // 0:iPhone    1:Android
            if(checked_equipment_type() == "phone"){
                var u = navigator.userAgent, app = navigator.appVersion;
                var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
                var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                if (isAndroid) {
                    return '1';
                }else if (isIOS) {
                    return '0';
                }
            }
            return "4";
        }
        //Judge visitor network type sort of phone
        function Judge_visitor_network_type(){
            // 0:iPhone    1:Android
            if(checked_mobile_equipment() == "0"){
                judge_iphone_network_type();
            }else if( checked_mobile_equipment() == "1"){
                judge_android_network_type();
            }
            return "4";
        }
        // 3：iphone 无法判断及非WiFi    4：WiFi
        function judge_iphone_network_type(){
            //iphone noway to judge
            return "3";
        }
        function judge_android_network_type(){
            // var type = navigator.connection;
            var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            var type = connection.type;
            alert(type);
            //wifi:qq_Browser  2:common browser  //firebox 20:wifi&3G
            if(type == "wifi" || type == 2 ){
                alert(1);
                return "4";
            }
            alert(2);
            return "3";
        }
    }
})(jQuery);