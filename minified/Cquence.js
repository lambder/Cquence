function getInternetExplorerVersion(){var e=-1;if("Microsoft Internet Explorer"==navigator.appName){var n=navigator.userAgent,t=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=t.exec(n)&&(e=parseFloat(RegExp.$1))}return e}var raf=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},elem=function(e){return document.getElementById(e)},style=function(e,n,t){"opacity"===n?IE8?(e.style["-ms-filter"]="progid:DXImageTransform.Microsoft.Alpha(Opacity="+Math.floor(100*t)+")",e.style.filter="alpha(opacity="+Math.floor(100*t)+")"):e.style[n]=t:e.style[n]=t+"px"},combine=function(){for(var e=Array.prototype.slice.call(arguments,0),n=0,t=0;t<e.length;t++)n=Math.max(e[t].d,n);return{d:n,f:function(n){for(var t=0;t<e.length;t++){var r=e[t];r.d>n?r.f(n):r.done||(r.f(r.d),r.done=!0)}}}},sequence=function(){for(var e=Array.prototype.slice.call(arguments,0),n=0,t=0;t<e.length;t++)n+=e[t].d;return{d:n,f:function(n){for(var t=null,r=0,o=0;o<e.length;o++){var t=e[o];if(r+t.d>n)return void t.f(n-r);t.done||(t.f(t.d),t.done=!0),r+=t.d}}}},animate=function(e){return function(n,t,r,o){return{d:t,f:function(a){var i=elem(n);for(var f in r){var u=r[f],l=o[f],s=l-u,c=e(Math.max(a/t,0)),d=u+c*s;style(i,f,d)}}}}},linear=animate(function(e){return e}),easeIn=animate(function(e){return Math.pow(e,5)}),easeOut=animate(function(e){return 1-Math.pow(1-e,5)}),sleep=function(e){return{d:e,f:function(){}}},IEVERSION=getInternetExplorerVersion(),IE8=8===IEVERSION,IEWTF=8>IEVERSION&&IEVERSION>-1,timeline=[],start=+new Date,second=1e3,stop=15*second,render=null,renderloop=function(){var e=+new Date-start;stop>e&&raf(renderloop),render&&render.f(e)};