---
layout: home
---
<div class="bg-music" id="music">
  <a class="mscBtn play" id="audioBtn" style="cursor:pointer;"></a>
  <audio id="bgMusic" src="" autoplay="autoplay" loop="loop"></audio>
</div>
<div class="index-content life">
  <div class="section">
    <ul class="artical-cate">
      <li><a href="/coding"><span>程序人生</span></a></li>
      <li class="on" style="text-align:center"><a href="/life"><span>心情杂记</span></a></li>
    </ul>

    <div class="cate-bar"><span id="cateBar"></span></div>

    <div id="play_01">
        <div id="art-page-all" style="display: none">
            <ul class="artical-list list-art">
                 {% for post in site.categories.life %}
                 <li class="list" style="display: none">
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
                 {% endfor %}
            </ul>
        </div>
    </div>


  </div>
  <div class="aside">
  </div>
</div>
