"use strict";!function(e){e.fn.judge_net_type=function(e){function t(){function e(){var e=document.getElementById("bgMusic");i.indexOf("life")>0&&e.setAttribute("src","http://m10.music.126.net/20170426144858/6000098919dcc304f3f238de352ba1fd/ymusic/fa8c/ae6c/7684/b9b20cd4c04b58346365c9d68c48de9c.mp3"),i.indexOf("project")>0&&e.setAttribute("src","http://m10.music.126.net/20170426145949/3b96d4671e6aa35a28f317a54b03cde7/ymusic/eb06/e0ca/d372/e1d134b1a210e24a4395427fb8c5119e.mp3"),i.indexOf("coding")>0&&e.setAttribute("src","http://m2.music.126.net/VCXWODSoU-UOEwwkFP0_Sw==/7971459303055692.mp3")}var t=c(),i=window.location.pathname;"4"==t?e():"3"==t&&document.getElementById("music").remove()}function i(){var e=navigator.userAgent.toLowerCase(),t="ipad"==e.match(/ipad/i),i="iphone os"==e.match(/iphone os/i),n="midp"==e.match(/midp/i),c="rv:1.2.3.4"==e.match(/rv:1.2.3.4/i),o="ucweb"==e.match(/ucweb/i),a="android"==e.match(/android/i),r="windows ce"==e.match(/windows ce/i),d="windows mobile"==e.match(/windows mobile/i);return t||i||n||c||o||a||r||d?"phone":"4"}function n(){if("phone"==i()){var e=navigator.userAgent,t=(navigator.appVersion,e.indexOf("Android")>-1||e.indexOf("Linux")>-1),n=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(t)return"1";if(n)return"0"}return"4"}function c(){if("0"==n())return"3";if("1"==n()){var e=navigator.connection||navigator.mozConnection||navigator.webkitConnection,t=e.type;return"wifi"==t||2==t?"4":"3"}return"4"}t()}}(jQuery);