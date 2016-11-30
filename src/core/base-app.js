import Base from './base';
import {parse,serialize} from 'cookie';
class BaseApp extends Base {
    setCookie(...args) {
		document.cookie=serialize(...args);
	}
	getCookie(key) {
		return (parse(document.cookie)||{})[key]
	}
	/**
	* @method getDeviceType
	* @description 获取设备系统名称
	*/
	getDeviceType() {
		const u = navigator.userAgent;
	    if (u.match(/Android/i) != null) { //android代码
	        return "Android";
	    } else if (u.match(/iPhone|iPod/i) != null) { //IOS
	        return "IOS";
	    } else {
	        return "WP";
	    }
	}
	/**
	* @method isInApp
	* @param  无
	* @description 获取运行平台
	*/
	isInApp() {
		const type = this.getDeviceType();
		if(type === 'Android' || type === 'IOS' || type === 'WP'){
			return true;
		}
		return false;
	}
	/**
	* @method setHeader
	* @param  title 字符串
	* @description 设置app头部显示内容
	*/
	setHeader(title) {
		try{
	    	switch (DeviceType) {
	            case "Android":
	                gototitle.clickOntitle(title);
	                break;
	            case "IOS":
	                clickOntitle(title);
	                break;
	            case "WP":
	                external.notify('clickOntitle?' + title);
	                break;
	    	}
		}catch(e){
	        console.log(e)
		}
	}
	bindBack:(function(){
	    window.historyBack=()=> history.go(-1);
	    return (isFirst)=>{
	        try{
	           switch (DeviceType) {
	                case "Android":
	                    if(!isFirst){
	                        gotoback.clickOnback('true', 'historyBack()');                      
	                    }                       
	                    else
	                        gotoback.clickOnback('false', '');
	                    break;
	                case "IOS":
	                    if(!isFirst)
	                        clickOnback("true", "historyBack()");
	                    else{          
	                        clickOnback("false", "");
	                    }
	                    break;
	                case "WP":
	                    if(!isFirst)
	                        external.notify('clickOnback?true&historyBack');
	                    else
	                        external.notify('clickOnback?true&');
	                    break;
	            }   
	        }catch(e){
	            console.log(e)
	        }   
	    }
	})()
	// 登录
	hybirdLogin(url=location.href, title){
		url=url.replace(/\&/g,'&amp;');
        try{
            switch (DeviceType) {
                case "Android":
                    Login.clickOnLogin(url, title, "mobile_login");
                    break;
                case "IOS":
                    clickOnLogin(url, title, "mobile_login");
                    break;
                case "WP":
                    external.notify("clickOnLogin?" + url + "&" + title + "&mobile_login");
                    break;
            }
        }catch(e){
            console.log(e);
        }
	}
    saveAppParam(params={}){
	    let {p,Entry}=params;
	    p&&saveP(p);
	    Entry&&saveEntry(Entry);
	}
	saveP(p){   
	   	p&&sessionStorage.setItem('p',p);
	}
	getP(){
	    return sessionStorage.getItem('p');
	}
	saveEntry(Entry){
	    Entry&&setCookie('Entry',Entry,{path:'/'});
	}
	getEntry(Entry){
	    return getCookie('Entry');
	}
	isHybird(){
	    switch (DeviceType) {
	        case "Android":
	            return !!window.Login&&!!window.gotoback;            
	            
	        case "IOS":
	            return !!window.clickOnback&&!!window.clickOnLogin;
	           
	        case "WP":
	            return !!window.external&&!!window.external.notify;
	           
	    }
	}
	isHybirdLogin(){
	    return !!getP();
	}
	downloadPdf(title,url){
	    if(!isHybird())return;
	    try{
	        switch (DeviceType) {
	            case "Android":
	            gotopdf.clickOnPdf(title,url);
	            break;           
	        }
	    }catch(e){
	        console.log(e);
	    }
	}
	isHybirdAdroid(){
	    return isHybird()&&DeviceType=='Android';
	}
};
export default BaseApp;

