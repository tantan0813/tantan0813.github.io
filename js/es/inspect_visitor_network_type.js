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
            function addMusic(){
                var target = document.getElementById("bgMusic");
                //给coding life 添加不同的bg-music
                if(url.indexOf("life") > 0) target.setAttribute("src", "http://m2.music.126.net/7I3Z3JsyHLvCcNHCxk0wbQ==/3420580726120857.mp3");
                if(url.indexOf("coding") > 0) target.setAttribute("src", "http://45.124.125.97/m10.music.126.net/20161219180429/fd501b6e5cf12f73a4f656a60fda1218/ymusic/a19d/0542/3f4a/22f668de5d922babf9720154b6de09bb.mp3");
            }
            if(net_type == "4"){
                addMusic();
            }else if(net_type == "3"){
                document.getElementById("music").remove();
            }
        }
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
                return  "4";
                // return  "pc";
            }
        }
        //judge mobile equipment type
        function checked_mobile_equipment(){
            // 0:iPhone    1:Android
            if(checked_equipment_type() == "phone"){
                var u = navigator.userAgent, app = navigator.appVersion;
                // if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
                //     if(window.location.href.indexOf("?mobile")<0){
                //         try{
                //             if(/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)){
                //                 return '0';
                //             }else{
                //                 return '1';
                //             }
                //         }catch(e){}
                //     }
                // }else if( u.indexOf('iPad') > -1){
                //     return '0';
                // }else{
                //     return '1';
                // }
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
            var type = navigator.connection;
            //WiFi:qq_Browser  2:common browser  //firebox 20:wifi&3G
            if(type == "wifi" || type == 2 ){
                return "4";
            }
            return "3";
        }
    }
})(jQuery);