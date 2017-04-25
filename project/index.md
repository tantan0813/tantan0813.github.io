---
layout: home
---

<div class="index-content life">
  <div class="section">
    <ul class="artical-cate">
      <li><a href="/coding"><span>程序人生</span></a></li>
      <li><a href="/life"><span>心情杂记</span></a></li>
      <li class="on" style="text-align:center"><a href="/project"><span>项目历练</span></a></li>
    </ul>

    <div class="cate-bar"><span id="cateBar"></span></div>

 <div id="play_01">
    <div id="animate progress">
        <ol>
            <li class="run time">
                <div class="stage">
                    <div id="head-1"></div>
                    <div id="head-2"></div>
                    <div id="headear"></div>
                    <div id="headear-radius"></div>
                    <div id="white-square"></div>
                    <div id="face-left"></div>
                    <div id="face-right"></div>
                    <div id="face"></div>
                    <div id="brow-right"></div>
                    <div id="eye-left"></div>
                    <div id="eye-right"></div>
                    <div id="brow-left"></div>
                    <div id="back_mouse"></div>
                    <div id="circle1"></div>
                    <div id="circle2"></div>
                    <div id="circle3"></div>
                    <div id="circle4"></div>
                    <div id="ear"></div>
                    <div id="ear-square"></div>
                </div>
            </li>
        </ol>
    </div>
    <ul class="artical-list">
      {% for post in site.categories.life %} {% if {{post.title}} !='Coming Conferences and Activities' %}
      <li>
        <div class="table-article">
          <div class="col-title">
            <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
          </div>
          <div class="col-date">
            <p class="entry-date">{{ post.date|date:"%Y-%m-%d" }}</p>
          </div>
        </div>
        <div class="title-desc">{{ post.description }}</div>
      </li>
      {% endif %} {% endfor %}
    </ul>
 </div>

  </div>
  <div class="aside">
  </div>
</div>
