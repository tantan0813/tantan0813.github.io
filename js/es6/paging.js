/**
 * Created by tanmi on 2016/12/7.
 */
// let arr=[1,2,3,4,5,6,7,8,9];
// let res=[];
// arr.sort((p,n)=>n-p).forEach((v,i)=>{i%2==0?res.unshift(v):res.push(v)});


$(function() {
   var _list=$(".list");
   var list = Array.prototype.splice.call(_list,0);//转化为数组
   console.log(_list,typeof _list,typeof list,_list.length,list.length);
   console.log(list[2]);
})
