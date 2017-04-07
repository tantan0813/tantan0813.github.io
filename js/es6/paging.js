/**
 * Created by tanmi on 2016/12/7.
 */
// let arr=[1,2,3,4,5,6,7,8,9];
// let res=[];
// arr.sort((p,n)=>n-p).forEach((v,i)=>{i%2==0?res.unshift(v):res.push(v)});


$(function() {
    // var list=$(".list");
    var list = document.getElementsByClassName("list");
    var show_bg=list.slice(0,5);
    var show_no=list.slice(5);
    console.log(list,typeof list,list.length);
    show_bg.setAttribute("display", "block");
    show_no.setAttribute("display", "none");
    var pages=Math.ceil(list.length/5);
});







