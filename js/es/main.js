"use strict";$(function(){function t(t){function i(){function t(t,i){var e=Math.random()*i+t;return parseInt(e)}var i="#";return i+=t(0,255).toString(16),i+=t(0,255).toString(16),i+=t(0,255).toString(16)}var e={},a=0,n=0,r=t,s={},h={},o=0,l=function(){return window.requestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),c=function(){r=Array.prototype.slice.call(r);for(var t=0;t<r.length;t+=1)e=document.createElement("canvas"),e.addEventListener("click",d,!1),r[t].appendChild(e),e.style.width="100%",e.style.height="100%",e.style.opacity="0.3",e.width=e.offsetWidth,e.height=e.offsetHeight},d=function(t){h=t.toElement,s=h.getContext("2d"),o=0,a=t.offsetX,n=t.offsetY,s.clearRect(0,0,h.width,h.height),u()},u=function f(){s.beginPath(),s.arc(a,n,o,0,2*Math.PI,!1),s.fillStyle=i(),s.fill(),o+=2,o<h.width/3?l(f):setTimeout(s.clearRect(0,0,h.width,h.height),800)};c()}function i(t,i){console.log(33),t.setAttribute("display","block"),i.setAttribute("display","none")}function e(t){var i=function(t,i,e){var a=this;this.c=t,this.ctx=t.getContext("2d"),this.cw=i,this.ch=e,this.loaded=0,this.loaderSpeed=.6,this.loaderHeight=10,this.loaderWidth=310,this.loader={x:this.cw/2-this.loaderWidth/2,y:this.ch/2-this.loaderHeight/2},this.particles=[],this.particleLift=180,this.hueStart=0,this.hueEnd=120,this.hue=0,this.gravity=.15,this.particleRate=4,this.init=function(){this.loop()},this.rand=function(t,i){return~~(Math.random()*(i-t+1)+t)},this.hitTest=function(t,i,e,a,n,r,s,h){return!(t+e<n||n+s<t||i+a<r||r+h<i)},this.updateLoader=function(){this.loaded<100?this.loaded+=this.loaderSpeed:this.loaded=0},this.renderLoader=function(){this.ctx.fillStyle="#000",this.ctx.fillRect(this.loader.x,this.loader.y,this.loaderWidth,this.loaderHeight),this.hue=this.hueStart+this.loaded/100*(this.hueEnd-this.hueStart);var t=this.loaded/100*this.loaderWidth;this.ctx.fillStyle="hsla("+this.hue+", 100%, 40%, 1)",this.ctx.fillRect(this.loader.x,this.loader.y,t,this.loaderHeight),this.ctx.fillStyle="#222",this.ctx.fillRect(this.loader.x,this.loader.y,t,this.loaderHeight/2)},this.Particle=function(){this.x=a.loader.x+a.loaded/100*a.loaderWidth-a.rand(0,1),this.y=a.ch/2+a.rand(0,a.loaderHeight)-a.loaderHeight/2,this.vx=(a.rand(0,4)-2)/100,this.vy=(a.rand(0,a.particleLift)-2*a.particleLift)/100,this.width=a.rand(1,4)/2,this.height=a.rand(1,4)/2,this.hue=a.hue},this.Particle.prototype.update=function(t){this.vx+=(a.rand(0,6)-3)/100,this.vy+=a.gravity,this.x+=this.vx,this.y+=this.vy,this.y>a.ch&&a.particles.splice(t,1)},this.Particle.prototype.render=function(){a.ctx.fillStyle="hsla("+this.hue+", 100%, "+a.rand(50,70)+"%, "+a.rand(20,100)/100+")",a.ctx.fillRect(this.x,this.y,this.width,this.height)},this.createParticles=function(){for(var t=this.particleRate;t--;)this.particles.push(new this.Particle)},this.updateParticles=function(){for(var t=this.particles.length;t--;){var i=this.particles[t];i.update(t)}},this.renderParticles=function(){for(var t=this.particles.length;t--;){var i=this.particles[t];i.render()}},this.clearCanvas=function(){this.ctx.globalCompositeOperation="source-over",this.ctx.clearRect(0,0,this.cw,this.ch),this.ctx.globalCompositeOperation="lighter"},this.loop=function(){var t=function i(){requestAnimationFrame(i,a.c),a.clearCanvas(),a.createParticles(),a.updateLoader(),a.updateParticles(),a.renderLoader(),a.renderParticles()};t()}},e=function(){var t=document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},a=function(){for(var t=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i,e){var a=(new Date).getTime(),n=Math.max(0,16-(a-t)),r=window.setTimeout(function(){i(a+n)},n);return t=a+n,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})};if(e){var n=document.createElement("canvas");n.width=400,n.height=100;var r=n.width,s=n.height;n.setAttribute("id","canvas-progress"),t.append(n);var h=new i(n,r,s);a(),h.init()}}var a=document.getElementsByClassName("aside");t(a),e($("#play_01")),setTimeout(i("#art-page-all","#canvas-progress"),1300)});