---
layout: home
---
<div class="bg-music">
  <a class="mscBtn play" id="audioBtn" style="cursor:pointer;"></a>
  <audio id="bgMusic" src="../music/Summer.mp3" autoplay="autoplay" loop="loop"></audio>
</div>
<div class="index-content coding">
  <div class="section">
    <ul class="artical-cate">
      <li class="on"><a href="/coding"><span>程序人生</span></a></li>
      <li style="text-align:center"><a href="/life"><span>心情杂记</span></a></li>
    </ul>

    <div class="cate-bar"><span id="cateBar"></span></div>

    <ul class="artical-list">
      {% for post in site.categories.coding %} {% if {{post.title}} !='Coming Conferences and Activities' %}
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
  <div class="aside">
  </div>
</div>
