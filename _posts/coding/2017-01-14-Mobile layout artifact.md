---
layout: post
title: Mobile Layout artifact
description: 移动端布局神器
category: coding
---
起因是看了勾三股四关于`display:flex`的微博，感觉总结的很到位。然后我一个好朋友的blog也开了关于`display:flex`的文章，纠结的是那个傻逼没有完篇，就是开了个题，我有强迫症看不下去了，请让我来终结这个！

## 1.display:flex之于display:box;讨论最多的就是兼容性：

- [两者兼容性比较][1]

### 1.1display:flex;
对于PC端，一般chrome（测试版本：49.0.2623.110 m）和火狐（测试版本：49.0.2）都能很好地支持。ie不支持，显示的是顺序排列下来的宽度100%的模块。

对于移动端：

（1）上述代码iOS的原生safari浏览器是支持的；UC浏览器支持的很好；微信浏览器不支持（测试机型：苹果4s）

（2）安卓的原生浏览器不支持，能够正常显示模块，文档流依次排列；UC浏览器不支持，显示为空白；微信浏览器不支持（测试机型：华为荣耀6 Plus，Android4.4.2）

### 1.2display:box;
PC端：chrome（测试版本：49.0.2623.110 m）和火狐（测试版本：49.0.2）都能很好地支持。ie不支持，显示的是顺序排列下来的宽度100%的模块。

移动端：

（1）上述代码iOS的原生safari浏览器是支持的；UC浏览器支持的很好（测试机型：苹果4s）

（2）安卓的原生浏览器支持；UC浏览器不支持，显示为空白（测试机型：华为荣耀6 Plus:Android4.4.2）

　UC浏览器是支持display:box;在我的手机上之所以没显示，排查了一下原因，是因为页面缺少meta,<meta name="viewport" content="width=device-width" />加上之后就可以正常显示了。

结论：不考虑IE浏览器的话，PC端上使用哪个都可以，一般使用display:flex；移动端的安卓的UC只支持display:box，iOS的UCdisplay:box和display:flex两个都支持。

## 2.今天主要讨论display:flex;

分为两个部分：自己的测试、大神的总结

### 2.1自己测试：

    display:flex;//ie10开始支持,父類一共五個屬性
    //flex-direction:row;
    //row | row-reverse | column | column-reverse;子类排列顺序(会自动留开子类间的空白)
    flex-wrap:wrap ;
    //nowrap | wrap 换行| wrap-reverse;子类排列是否换行
    //justify-content: space-between;//子类排列方式(会自动留开子类间的空白)
    //flex-start | flex-end | center中间 | space-between 两边| space-around四周;
    align-items: baseline;//(no会自动留开子类间左右的空白)
    //flex-start | flex-end | center | baseline基于父类top | stretch;
    align-content:stretch ;//(no会自动留开子类间左右上下的空白)
    //flex-start | flex-end | center | space-between 基于父类top会留上下的空白 | space-around 会留上下的空白 | stretch 基于父类top会留上下的空白;
    //子元素属性
    order: 10;//order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
    flex-grow:0.8;//flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
    flex-shrink:2;//flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
    flex-basis:auto;//flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
    flex:none;//flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
    align-self:center;//align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

### 2.2大神总结：

![image](http://ww4.sinaimg.cn/mw690/660d0cdfjw1etlhxhx0lgj218g0xc76b.jpg)
![image](http://ww1.sinaimg.cn/mw690/660d0cdfjw1etlhxise4kj218g0xc0vf.jpg)
![image](http://ww1.sinaimg.cn/mw690/660d0cdfjw1etlhxjtkfwj218g0xcwhp.jpg)
![image](http://ww3.sinaimg.cn/mw690/660d0cdfjw1etlhxjven9j218g0xcgp4.jpg)
![image](http://ww4.sinaimg.cn/mw690/660d0cdfjw1etlhxkrusyj218g0xcwhn.jpg)
![image](http://ww4.sinaimg.cn/mw690/660d0cdfjw1etlhxl3605j218g0xcwip.jpg)

## 3.详细版

- [阮一峰详细版][2]

注：添加浏览器前缀比较麻烦，建议配合`gulp`中的`auto-prefix`使用

-[gulp参考文档][3]

[1]:http://www.cnblogs.com/walk-on-the-way/p/5997073.html
[2]:http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
[3]:http://www.gulpjs.com.cn/docs/getting-started/