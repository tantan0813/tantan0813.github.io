"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by tanmi on 2016/12/7.
 */
// let arr=[1,2,3,4,5,6,7,8,9];
// let res=[];
// arr.sort((p,n)=>n-p).forEach((v,i)=>{i%2==0?res.unshift(v):res.push(v)});


$(function () {
   var _list = $(".list");
   var list = Array.prototype.splice.call(_list, 0); //转化为数组
   console.log(_list, typeof _list === "undefined" ? "undefined" : _typeof(_list), typeof list === "undefined" ? "undefined" : _typeof(list), _list.length, list.length);
});