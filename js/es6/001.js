/**
 * Created by tanmi on 2016/12/7.
 */
let arr=[1,2,3,4,5,6,7,8,9];
var res=[];
arr.sort((p,n)=>n-p).forEach((v,i)=>{i%2==0?res.unshift(v):res.push(v)});