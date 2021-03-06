define("pages/weapp_tpl.html.js",[],function(){
return'<!-- <span class="weapp_card flex_context">\n    <span class="weapp_card_hd">\n        <span class="radius_avatar weapp_card_avatar">\n            <img src="<#=avatar#>">\n        </span>\n    </span>\n    <span class="weapp_card_bd flex_bd">\n        <strong class="weapp_card_nickname"><#=nickname#></strong>\n        <span class="weapp_card_logo"><img class="icon_weapp_logo_mini" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUAAAB4it11h9x2h9x2h9x2htx8j+R8i+B1h9x2h9x3h92Snv91htt2h9x1h9x4h9x1h9x1h9x2idx1h9t2h9t1htt1h9x1h9x1htx2h9x1h912h9x4h913iN17juOOjuN1iNx2h9t4h958i+B1htvejBiPAAAAJHRSTlMALPLcxKcVEOXXUgXtspU498sx69DPu5+Yc2JeRDwbCYuIRiGBtoolAAAA3ElEQVQoz62S1xKDIBBFWYiFYImm2DWF///G7DJEROOb58U79zi4O8iOo8zuCRfV8EdFgbYE49qFQs8ksJInajOA1wWfYvLcGSueU/oUGBtPpti09uNS68KTMcrQ5jce4kmN/HKn9XVPAo702JEdx9hTUrWUqVrI3KwUmM1NhIWMKdwiGvpGMWZOAj1PZuzAxHwhVSplrajoseBnbyDHAwvrtvKKhdqTtFBkL8wO5ijcsS3G1JMNvQ5mdW7fc0x0+ZcnlJlZiflAomdEyFaM7qeK2JahEjy5ZyU7jC/q/Rz/DgqEuAAAAABJRU5ErkJggg==" alt="">小程序</span>\n    </span>\n</span> -->\n<span class="weapp_card app_context appmsg_card_context">\n    <span class="weapp_card_bd">\n        <span class="weapp_card_profile flex_context">\n            <span class="radius_avatar weapp_card_avatar">\n                <img src="<#=avatar#>">\n            </span>\n            <span class="weapp_card_nickname flex_bd"><#=nickname#></span>\n        </span>\n        <span class="weapp_card_info">\n            <span class="weapp_card_title"><#=title#></span>\n            <span class="weapp_card_thumb_wrp" style="background-image:url(<#=imageUrl#>);"></span>\n        </span>\n    </span>\n    <span class="weapp_card_ft">\n        <span class="weapp_card_logo"><img class="icon_weapp_logo_mini" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUAAAB4it11h9x2h9x2h9x2htx8j+R8i+B1h9x2h9x3h92Snv91htt2h9x1h9x4h9x1h9x1h9x2idx1h9t2h9t1htt1h9x1h9x1htx2h9x1h912h9x4h913iN17juOOjuN1iNx2h9t4h958i+B1htvejBiPAAAAJHRSTlMALPLcxKcVEOXXUgXtspU498sx69DPu5+Yc2JeRDwbCYuIRiGBtoolAAAA3ElEQVQoz62S1xKDIBBFWYiFYImm2DWF///G7DJEROOb58U79zi4O8iOo8zuCRfV8EdFgbYE49qFQs8ksJInajOA1wWfYvLcGSueU/oUGBtPpti09uNS68KTMcrQ5jce4kmN/HKn9XVPAo702JEdx9hTUrWUqVrI3KwUmM1NhIWMKdwiGvpGMWZOAj1PZuzAxHwhVSplrajoseBnbyDHAwvrtvKKhdqTtFBkL8wO5ijcsS3G1JMNvQ5mdW7fc0x0+ZcnlJlZiflAomdEyFaM7qeK2JahEjy5ZyU7jC/q/Rz/DgqEuAAAAABJRU5ErkJggg==" alt="">小程序</span>\n    </span>\n</span>\n';
});define("pages/voice_tpl.html.js",[],function(){
return'<span class="js_audio_frame db">\n    <#if(show_not_support===true){#>\n    <span class="db">当前浏览器不支持播放音乐或语音，请在微信或其他浏览器中播放</span>\n    <#}#>\n    <span aria-labelledby="语音" id="voice_main_<#=voiceid#>_<#=posIndex#>" class="share_audio_context flex_context pages_reset" <#if(!musicSupport){#>style="display:none;"<#}#>>\n        <span id="voice_play_<#=voiceid#>_<#=posIndex#>" aria-labelledby="播放开关" class="db share_audio_switch"><em class="icon_share_audio_switch" role="button"></em></span>\n        <span id="voice_detail_<#=voiceid#>_<#=posIndex#>" class="share_audio_info flex_bd db">\n            <strong id="voice_title_<#=voiceid#>_<#=posIndex#>" class="share_audio_title" aria-describedby="语音标题" role="link"><#=title#></strong>\n            <#if(!!nickname){#>\n            <span id="voice_author_<#=voiceid#>_<#=posIndex#>" class="share_audio_tips db">来自<#=nickname#></span>\n            <#}#>\n            <span id="voice_seekRange_<#=voiceid#>_<#=posIndex#>" class="db share_audio_progress_wrp">\n                <span class="db share_audio_progress">\n                    <span id="voice_progress_<#=voiceid#>_<#=posIndex#>" style="width:0%" class="share_audio_progress_inner"></span>\n                    <span id="voice_buffer_<#=voiceid#>_<#=posIndex#>" class="share_audio_progress_buffer" style="width:0%;"></span>\n                    <span id="voice_loading_<#=voiceid#>_<#=posIndex#>" class="share_audio_progress_loading" style="display:none;">\n                        <span class="share_audio_progress_loading_inner"></span>\n                    </span>\n                </span>\n                <span id="voice_playdot_<#=voiceid#>_<#=posIndex#>" class="share_audio_progress_handle" style="display:none;left:0%;"></span>\n            </span>\n            <span class="share_audio_desc db" aria-labelledby="时长">\n                <em id="voice_playtime_<#=voiceid#>_<#=posIndex#>" class="share_audio_length_current" aria-hidden="true">00:00</em>\n                <em id="voice_duration_<#=voiceid#>_<#=posIndex#>" class="share_audio_length_total"><#=duration_str#></em>\n            </span>\n        </span>\n    </span>\n</span>\n';
});define("pages/voice_component.js",["biz_common/dom/event.js","biz_common/tmpl.js","pages/loadscript.js","pages/music_player.js","biz_common/dom/class.js","pages/report.js","biz_common/utils/monitor.js"],function(e,t,o,r){
"use strict";
function a(e){
this._o={
protocal:"",
wxIndex:0,
type:0,
comment_id:"",
src:"",
jsapi2Src:"",
mid:"",
songId:"",
autoPlay:!1,
duration:0,
needVioceMutex:!0,
appPlay:!0,
title:"",
allowPause:!1,
singer:"",
epname:"",
coverImgUrl:"",
webUrl:[location.protocol,"//mp.weixin.qq.com/s?referFrom=#referFrom#&songid=#songId#&__biz=",window.biz,"&mid=",window.mid,"&idx=",window.idx,"&sn=",window.sn,"#wechat_redirect"].join(""),
playingCss:"",
playCssDom:"",
playArea:"",
progress:"",
detailUrl:"",
detailArea:"",
fileSize:0,
playtimeDom:"",
loadingDom:"",
bufferDom:"",
playdotDom:"",
seekRange:"",
seekContainer:""
},this._init(e);
}
function i(e,t,o,r){
w.num++,t.musicSupport=w.musicSupport,t.show_not_support=!1,w.musicSupport||1!=w.num||(t.show_not_support=!0);
var a=document.createElement("div"),i="";
if(i=_.tmpl(e,t),a.innerHTML=i,r===!0)o.appendChild(a.children[0]);else{
var n=o.parentNode;
if(!n)return;
n.lastChild===o?n.appendChild(a.children[0]):n.insertBefore(a.children[0],o.nextSibling);
}
}
function n(){
"undefined"==typeof window.reportVoiceid&&(window.reportVoiceid=[]),"undefined"==typeof window.reportMid&&(window.reportMid=[]);
}
function p(){
y.on(window,"unload",s);
}
function s(){
function e(e,t){
for(var o=0,r=e.length;r>o;o++)e[o]=t;
return e;
}
for(var t in w.reportData)v.musicreport({
data:w.reportData[t]
}),w.reportData[t].hasended=e(w.reportData[t].hasended,0),w.reportData[t].detail_click=e(w.reportData[t].detail_click,0),
w.reportData[t].errorcode=e(w.reportData[t].errorcode,0),w.reportData[t].play_duration=e(w.reportData[t].play_duration,0);
}
function c(e){
k.setSum(w.reportId,18,1),k.send();
var t=+new Date,o="//open.music.qq.com/fcgi-bin/fcg_music_get_song_info_weixin.fcg?song_id=#songid#&mid=#mid#&format=json&app_id=1034002693&app_key=cjjDaueOyPYRJFeTqG&device_id=weixin&file_type=mp3&qqmusic_fromtag=50&callback=get_song_info_back";
o=o.replace("#mid#",e.mid).replace("#songid#",e.id),h({
url:o,
timeout:3e4,
callbackName:"get_song_info_back",
callback:function(o){
var r=+new Date-t;
if(!o||"undefined"==typeof o.ret){
var a=1;
return d({
type:"error",
time:r,
code:a
}),void("function"==typeof e.onError&&e.onError({
errcode:a
}));
}
var i;
i=0==o.ret?o.play_url?0:6:1001==o.ret?1:1002==o.ret?2:1003==o.ret?3:1004==o.ret?4:5,
d({
type:"success",
time:r,
code:i
}),e.onSuc({
status:i,
play_url:o.play_url,
duration:o.song_play_time||0
});
},
onerror:function(o){
var r=+new Date-t,a=4;
switch(1*o){
case 400:
a=2;
break;

case 500:
a=3;
break;

default:
a=4;
}
d({
type:"error",
time:r,
code:a
}),"function"==typeof e.onError&&e.onError({
errcode:a
});
}
});
}
function d(e){
var t=Math.max(e.time,0);
if(t=Math.min(t,6e4),e.time>=0&&e.time<200?k.setSum(w.reportId,24,1):e.time>=200&&e.time<500?k.setSum(w.reportId,25,1):e.time>=500&&e.time<1e3?k.setSum(w.reportId,26,1):e.time>=1e3&&e.time<2e3?k.setSum(w.reportId,27,1):e.time>=2e3&&e.time<1e4?k.setSum(w.reportId,28,1):e.time>=1e4&&k.setSum(w.reportId,29,1),
k.setAvg(w.reportId,23,t),"error"==e.type){
switch(1*e.code){
case 1:
k.setSum(w.reportId,9,1);
break;

case 2:
k.setSum(w.reportId,10,1);
break;

case 3:
k.setSum(w.reportId,11,1);
break;

case 4:
k.setSum(w.reportId,12,1);
}
k.setSum(w.reportId,19,1);
}else if("success"==e.type){
switch(1*e.code){
case 1:
k.setSum(w.reportId,8,1);
break;

case 0:
k.setSum(w.reportId,17,1);
break;

case 2:
k.setSum(w.reportId,13,1);
break;

case 3:
k.setSum(w.reportId,14,1);
break;

case 4:
k.setSum(w.reportId,15,1);
break;

case 5:
k.setSum(w.reportId,16,1);
break;

case 6:
k.setSum(w.reportId,47,1);
}
k.setSum(w.reportId,20,1);
}
k.send();
}
function u(e){
return new a(e);
}
function l(e){
if(isNaN(e))return"00:00";
e=Math.ceil(e);
var t=Math.floor(e/3600),o=Math.floor((e-3600*t)/60),r=e-3600*t-60*o;
return 0!=t?(10>t&&(t="0"+t),t+=":"):t="",10>o&&(o="0"+o),10>r&&(r="0"+r),t+o+":"+r;
}
function m(e){
return e=(e||"").replace(/&#96;/g,"`").replace(/&#61;/g,"=").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
}
function g(e){
return e=(e||"").replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/=/g,"&#61;").replace(/`/g,"&#96;");
}
var y=e("biz_common/dom/event.js"),_=e("biz_common/tmpl.js"),h=e("pages/loadscript.js"),f=e("pages/music_player.js"),D=e("biz_common/dom/class.js"),v=e("pages/report.js"),k=e("biz_common/utils/monitor.js"),w={
reportId:"28306",
musicSupport:f.getSurportType(),
debug:location.href.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1?!0:!1,
reportData:{},
posIndex:{},
qqMusiceSongId:"http://thirdparty.gtimg.com/#songId#.m4a?fromtag=38&songid=#songId#",
qqMusiceMid:"http://thirdparty.gtimg.com/C100#mid#.m4a?fromtag=38&songid=#songId#",
num:0
};
return n(),p(),a.prototype._init=function(e){
this._extend(e),this._g={
copyright:-1,
check_copyright:!1,
canDragBar:!1,
barDraging:!1,
canGoDetail:!0
},this._initData(),this._initQQmusicLyric(),this._initReportData(),this._initPlayer(),
this._playEvent();
},a.prototype._initData=function(){},a.prototype._initQQmusicLyric=function(){
var e=this._o;
e.webUrl=0==e.type||1==e.type?e.webUrl.replace("#songId#",e.songId||"").replace("#referFrom#","music.qq.com"):e.webUrl.replace("#songId#","").replace("#referFrom#","");
},a.prototype._initReportData=function(){
var e=this._o;
2==e.type||3==e.type||4==e.type?window.reportVoiceid.push(e.songId):(0==e.type||1==e.type)&&window.reportMid.push(e.songId),
"undefined"==typeof w.reportData[e.type]&&(w.reportData[e.type]=v.getMusicReportData(e),
w.posIndex[e.type]=0),this._g.posIndex=w.posIndex[e.type]++;
var t=w.reportData[e.type];
t.musicid.push(e.songId),t.commentid.push(e.comment_id),t.hasended.push(0),t.mtitle.push(e.title),
t.detail_click.push(0),t.duration.push(parseInt(1e3*e.duration)),t.errorcode.push(0),
t.play_duration.push(0);
},a.prototype._initPlayer=function(){
w.musicSupport&&(this._o.onStatusChange=this._statusChangeCallBack(),this._o.onTimeupdate=this._timeupdateCallBack(),
this._o.onError=this._errorCallBack(),this._o.onUpdateSeekRange=this._onUpdateSeekRange(),
this.player=new f.init(this._o));
},a.prototype.isInSeekrang=function(e){
var t=this._o.seekRange;
if(!t)return!1;
if(t===e)return!0;
for(var o=t.getElementsByTagName("*"),r=0,a=o.length;a>r;r++)if(o[r]===e)return!0;
return!1;
},a.prototype._playEvent=function(){
var e=this,t=this._o,o=this._g;
if(t.detailUrl&&t.detailArea&&y.on(t.detailArea,"click",function(r){
if(!o.barDraging&&o.canGoDetail){
var a=r.target||r.srcElement;
a&&e.isInSeekrang(a)||(2==t.type||3==t.type||4==t.type?(w.reportData[t.type].detail_click[o.posIndex]=1,
window.location.href=t.detailUrl):(0==t.type||1==t.type)&&e._checkCopyright(function(){
w.reportData[t.type].detail_click[o.posIndex]=1,window.location.href=t.detailUrl;
}));
}
}),w.musicSupport){
var r=0,a=4,i=5;
2==t.type?r=3:3==t.type?r=6:4==t.type?r=7:(0==t.type||1==t.type)&&(r=1),y.tap(t.playArea,function(){
return D.hasClass(t.playCssDom,t.playingCss)?(t.allowPause?e.player.pause():e.player.stop(),
v.report({
type:r,
comment_id:t.comment_id,
voiceid:t.songId,
action:i
})):1==r?e._checkCopyright(function(){
e.player.setSrc(o.play_url),o.duration&&e.player.setDuration(o.duration),e._playMusic(r,a);
}):e._playMusic(r,a),!1;
}),e._dragEvent();
}
},a.prototype._getCategory=function(){
var e=this._o.type;
return 2==e||3==e||4==e?2:0==e||1==e?1:-1;
},a.prototype._dragEvent=function(){
var e=this,t=this._o,o=this._g,r=t.seekRange;
if(r){
var a=0,i=r,n=!1,p=window.__zoom||1;
for(1!=p&&(n=!0);i&&i!=document.body;)a+=n?i.offsetLeft*p:i.offsetLeft,"page-content"==i.id&&(n=!1),
i=i.offsetParent;
var s=e.player.getDuration();
o.seekData={
zoom:p,
offsetLeft:a,
duration:s,
rangeWidth:r.offsetWidth,
startTime:0,
dragTime:0,
downX:0,
moveX:0
},y.on(r,"mousedown",function(t){
o.canDragBar&&(e._pointerDownHandler({
x:t.pageX||t.clientX
}),t.preventDefault());
}),y.on(t.seekContainer,"mousemove",function(t){
o.canDragBar&&o.barDraging&&(e._pointerMoveHandler({
x:t.pageX||t.clientX
}),t.preventDefault(),t.stopPropagation());
}),y.on(document.body,"mouseup",function(t){
return o.canDragBar&&o.barDraging?(e._pointerUpHandler({
x:t.pageX||t.clientX
}),t.preventDefault(),t.stopPropagation(),!1):void 0;
}),y.on(r,"touchstart",function(t){
o.canDragBar&&(e._pointerDownHandler({
x:t.changedTouches[0].clientX
}),t.preventDefault());
}),y.on(r,"touchmove",function(t){
o.canDragBar&&o.barDraging&&(e._pointerMoveHandler({
x:t.changedTouches[0].clientX
}),t.preventDefault(),t.stopPropagation());
}),y.on(r,"touchend",function(t){
return o.canDragBar&&o.barDraging?(e._pointerUpHandler({
x:t.changedTouches[0].clientX
}),t.preventDefault(),t.stopPropagation(),!1):void 0;
});
}
},a.prototype._pointerDownHandler=function(e){
var t=this._g;
t.barDraging=!0,t.canGoDetail=!1,t.seekData.downX=e.x,t.seekData.startTime=this.player.getCurTime();
},a.prototype._pointerMoveHandler=function(e){
var t=this._g,o=t.seekData;
o.moveX=e.x;
var r=(o.moveX-o.offsetLeft)/o.zoom/o.rangeWidth;
r=Math.min(r,1),r=Math.max(r,0),o.dragTime=r*o.duration,o.dragTime!=o.startTime&&this._updateProgressBar(o.dragTime);
},a.prototype._pointerUpHandler=function(e){
var t=this._g,o=t.seekData;
o.dragTime||this._pointerMoveHandler({
x:e.x
}),t.barDraging=!1,this.player.seek(o.dragTime),t.seekData.startTime=0,t.seekData.dragTime=0,
t.seekData.downX=0,t.seekData.moveX=0,setTimeout(function(){
t.canGoDetail=!0;
},1e3);
},a.prototype._checkCopyright=function(e){
var t=this,o=this._o,r=this._g;
return r.play_url&&this._musicCopyrightWarnning(!1)===!1?void("function"==typeof e&&e()):void(r.check_copyright||(r.check_copyright=!0,
c({
id:o.songId,
mid:o.mid,
onSuc:function(o){
r.check_copyright=!1,r.copyright=1*o.status,t._musicCopyrightWarnning(!0)===!1&&"function"==typeof e&&(r.play_url=o.play_url,
r.duration=o.duration||0,e({
play_url:o.play_url,
duration:r.duration
}));
},
onError:function(){
r.check_copyright=!1;
}
})));
},a.prototype._musicCopyrightWarnning=function(e){
var t=this._g,o=!0,a="";
switch(1*t.copyright){
case 0:
o=!1;
break;

case 1:
o=!0,a="该歌曲版权已过期，无法播放。";
break;

case 2:
o=!0,a="抱歉，应版权方要求，当前国家或地区暂不提供此歌曲服务。";
break;

case 3:
o=!0,a="该歌曲版权已过期，无法播放。";
break;

case 4:
o=!0,a="抱歉，歌曲信息不正确。";
break;

case 5:
o=!0,a="系统错误，请稍后再试。";
break;

case 6:
o=!0,a="系统错误，请稍后再试。";
break;

default:
o=!0,a="系统错误，请稍后再试。";
}
return o===!0&&e===!0&&(a+="错误码："+t.copyright,setTimeout(function(){
r(a);
},0)),o;
},a.prototype._playMusic=function(e,t){
var o=this._o,r=this._g;
this.player.play(),w.reportData[o.type].hasended[r.posIndex]=1,v.report({
type:e,
comment_id:o.comment_id,
voiceid:o.songId,
action:t
});
},a.prototype._extend=function(e){
for(var t in e)this._o[t]=e[t];
},a.prototype._onUpdateSeekRange=function(){
var e=this,t=e._o,o=e._g;
return function(e){
this.surportSeekRange()&&t.bufferDom&&t.playdotDom?(o.canDragBar=!0,t.playdotDom.style.display="block",
t.bufferDom.style.width=1*e+"%"):(o.canDragBar=!1,t.playdotDom&&(t.playdotDom.style.display="none"));
};
},a.prototype._statusChangeCallBack=function(){
var e=this;
return function(t,o){
e._updatePlayerCss(this,o);
};
},a.prototype._timeupdateCallBack=function(){
var e=this,t=this._o,o=this._g;
return function(r,a){
e._updateProgress(a),0!=a&&(w.reportData[t.type].play_duration[o.posIndex]=parseInt(1e3*a));
};
},a.prototype._errorCallBack=function(){
var e=this,t=this._o,o=this._g;
return function(r,a){
w.reportData[t.type].errorcode[o.posIndex]=a.code,e._updatePlayerCss(this,3),e._reportH5Error(a);
};
},a.prototype._reportH5Error=function(e){
if("mp.weixin.qq.com"==location.host&&1==e.type||w.debug){
var t=["code:",e.code,";type:",this._o.type,";url:",window.location.href];
this.player&&t.push(";src:"+this.player.getSrc());
var o=new Image;
o.src=["https://badjs.weixinbridge.com/badjs?level=4&id=112&msg=",encodeURIComponent(t.join("")),"&uin=",window.uin||"","&from=",this._o.type].join("");
}
},a.prototype._updatePlayerCss=function(e,t){
!!w.debug&&console.log("status:"+t);
{
var o=this._o,r=o.playCssDom;
o.progress;
}
2==t?(D.removeClass(r,o.playingCss),o.playdotDom&&(e.surportSeekRange()?(o.playdotDom.style.display="block",
this._g.canDragBar=!0):(o.playdotDom.style.display="none",this._g.canDragBar=!1))):3==t?(D.removeClass(r,o.playingCss),
o.playdotDom&&(o.playdotDom.style.display="none",this._g.canDragBar=!1),this._updateProgress(0)):(1==t||4==t)&&(D.addClass(r,o.playingCss),
o.playdotDom&&(e.surportSeekRange()?(o.playdotDom.style.display="block",this._g.canDragBar=!0):(o.playdotDom.style.display="none",
this._g.canDragBar=!1))),o.loadingDom&&(o.loadingDom.style.display=4==t?"block":"none");
},a.prototype._updateProgress=function(e){
this._g.barDraging||this._updateProgressBar(e);
},a.prototype._updateProgressBar=function(e){
var t=this._o,o=this.player,r=o.getDuration();
if(r){
var a=this._countProgress(r,e);
t.progress&&(t.progress.style.width=a),t.playtimeDom&&(t.playtimeDom.innerHTML=l(e)),
t.playdotDom&&(t.playdotDom.style.left=a);
}
},a.prototype._countProgress=function(e,t){
return Math.min(t/e*100,100)+"%";
},a.prototype.destory=function(){
this.player&&this.player.destory();
},{
init:u,
renderPlayer:i,
formatTime:l,
decodeStr:m,
encodeStr:g
};
});define("pages/qqmusic_tpl.html.js",[],function(){
return'<span id="qqmusic_main_<#=musicid#>_<#=posIndex#>" class="db qqmusic_area <#if(!musicSupport){#> unsupport<#}#>">\n    <span class="tc tips_global unsupport_tips" <#if(show_not_support!==true){#>style="display:none;"<#}#>>\n    当前浏览器不支持播放音乐或语音，请在微信或其他浏览器中播放    </span>\n    <span class="db qqmusic_wrp appmsg_card_context appmsg_card_active">\n        <span class="db qqmusic_bd">\n            <span id="qqmusic_play_<#=musicid#>_<#=posIndex#>" class="play_area">\n                <i class="icon_qqmusic_switch"></i>\n                <img src="<#=window.icon_qqmusic_default#>" alt="" class="pic_qqmusic_default">\n                <img src="<#=music_img#>" data-autourl="<#=audiourl#>" data-musicid="<#=musicid#>" class="qqmusic_thumb" alt="">\n            </span>\n            <a id="qqmusic_home_<#=musicid#>_<#=posIndex#>" class="access_area">\n                <span class="qqmusic_songname"><#=music_name#></span>\n                <span class="qqmusic_singername"><#=singer#></span>\n                <span class="qqmusic_source"><img src="<#=window.icon_qqmusic_source#>" alt=""></span>\n            </a>\n        </span>\n    </span>       \n</span>\n';
});define("new_video/ctl.js",["biz_wap/utils/ajax.js"],function(i){
"use strict";
var e=top.window.user_uin,t=Math.floor(top.window.user_uin/100)%20;
e||(t=-1);
var o=function(){
return t>=0;
};
top.window.__webviewid||(top.window.__webviewid=+new Date+"_"+Math.ceil(1e3*Math.random()));
var d=function(){
var i=top.window.mid,t=top.window.idx,o="";
o=i&&t?i+"_"+t:"";
var d=top.window.__webviewid,r=[e,o,d].join("_");
return r;
},r=function(e){
if(20>t)try{
var r=e.vid||"",w={};
w.__biz=top.window.biz||"",w.vid=r,w.clienttime=+new Date;
var n=top.window.mid,a=top.window.idx,p="";
n&&a?(w.type=1,p=n+"_"+a):(w.type=2,p=r),w.id=p,w.webviewid=d(),w.step=e.step||0,
w.orderid=e.orderid||0,w.ad_source=e.ad_source||0,w.traceid=e.traceid||0,w.ext1=e.ext1||"",
w.ext2=e.ext2||"",w.r=Math.random(),w.devicetype=top.window.devicetype,w.version=top.window.clientversion,
w.is_gray=o()?1:0;
var _=i("biz_wap/utils/ajax.js");
_({
url:"/mp/ad_video_report?action=user_action",
type:"post",
data:w
});
}catch(v){}
};
return{
report:r,
getWebviewid:d,
showAd:o
};
});define("a/testdata.js",[],function(){
"use strict";
function p(){
var p=[],e=new RegExp("(^|&)mock_ad=([^&]*)(&|$)","i"),t=window.location.search.substr(1).match(e);
if(t&&t[2]){
for(var i=t[2],d=i.split("_"),B=0;B<d.length;B++){
var c=a["pt_"+d[B]];
c&&p.push(c);
}
return p;
}
}
var a={
pt_2:{
ad_desc:"",
aid:"14152818",
app_info:{
apk_name:"com.tuan800.tao800",
apk_url:"http://imtt.dd.qq.com/16891/ECAB9669DE7A77DACA842CF2E4CEA9CE.apk?fsname=com.tuan800.tao800_4.22.0_42207.apk&amp;csr=1bca",
app_id:100734944,
app_md5:"ECAB9669DE7A77DACA842CF2E4CEA9CE",
app_name:"折800-独家折扣优惠买",
app_rating:4.93209,
app_size:29068789,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/ECAB9669DE7A77DACA842CF2E4CEA9CE.apk?fsname=com.tuan800.tao800_4.22.0_42207.apk&amp;csr=1bca",
category:[],
channel_id:"000116083635363934363334",
desc:"折800，手机必备购物APP，大牌折扣，好货底价购，服饰、家居，母婴、家电、鞋包……全品类覆盖，用心生活，精明消费，省钱又省心【新人好礼】新人专享、爆款秒杀，海量红包等你拿【品牌折扣】达芙妮、美的、COACH等半价购【劲爆促销】每日千余商品限时特卖，就是那么低价【正品保证】品牌授权，商家信誉严格把控【9大工序】商品细节，使用体验等全方位评测【职业选款】优中选优，超高性价比【抄底捡价】心黑手狠帮您砍价低至1折【嗨购活动】拼团、领券、抽奖、拍卖玩儿不停【签到赚钱】签到赚积分，积分当钱花【任性包邮】全场包邮，呼朋唤友来抢购【售后无忧】8天无理由退换，退货就返券，你来任性，小折为你买单！【联系我们】折800数千员工随时为你解决任何问题！客服：电话400-0611-800；QQ群：199512527 意见反馈：app@tuan800.com官方微博微信同步搜索：折800官方网址：m.zhe800.com；www.zhe800.com",
down_count:65980944,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_187076_1502105988/256",
new_feature:"1、99大促即将来袭！前方新一波优惠等你来拿2、收藏夹也能方便找到设置提醒的商品~3、优化用户体验，修复了部分已知功能~",
signature_md5:"CBFAB0D55237931C650DF038C6AE9E93",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_187076_1_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_2_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_3_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_4_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_5_1503288410/330",
url_scheme:"",
version_code:42207
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=GV0J%2BtrsQQNyp%2BMYCgCMCeQ%2BaDcHVWgrdGS7V5G4iSYtFxzSguZ2DNnNq%2BeZnD%2FfRi93PAMqHeVeUvIH5OA%2BIR7ZYjjMe%2F6lSbTRJeAd5DT4puSh4JVGBXQv3aqNQWOztu%2FFDjM6vegBDn5amzfSx2mUl1%2Fk1QVce8W4sFM8GUdGdygypG0IaxWwEMUQYVfiOvQI7yZaDF21S0bk3D7VqjQaGWUT18yOHKNVaLzU0eF5nBV4PgIGsBC1whR%2FsVfYK5KKc2qF3BMn1aBZu6JF23lKsAcHF5uQkTEhRDLPWLjjBMQbO6KvNV%2FzJSFBY5QkuV3A%2FOEOyEkd7ANb4o6rxn3AaxTvoJ7VHcIUq%2BIjBHSsTqNvSUTAkbdjBEPI%2BPCnYPF0im0cABILaTelvbzgg6dZVTdUH65f7BEqwpqxsJYva9XTEWi3lrMLHPwVmsydPbQ1fh9ZlyQG25jBM63BFyADYFq%2Bw3dDDycH1ySKNpIY8I7Uai8hmmcih3Wp9%2BbSXi1q1bPphmjwzY%2BHN1VxUnOnsqFbm%2B3tVuwEzjluodNcOS3c9U88DOnrtcziWksr9HuXR0Tyg2ao%2B44FmRkxxsgXOQRdzLul4Ur8yCE27pApqEAklKB%2BxaVd%2FDGFXqKsoFnFiRTVpm47yF7Ms9ui%2BNZWT91h%2FB1scMsN95qbki%2Bsz04lhaVkCKtIGxkBbeaxGVSGfCWc8l9LNscT8xQeIx7p9TIClLkoATVIFSpCnsrA6SqgZBbtaNlAPbBqgH7Y22AS5U4ajsMyHBIwKqRMtY%2BJEnfMYe5VBdJULSgbocsw%2FeTs4ZB0v0Aap14nEAX6rJD6tZMm1WD5eiNc%2BtURhbV0VU4ITvy5oPBb5O4Fa0GgcyafzYzMbRtApCWN2Xrmm8W774qHvFbITLWUBIsKE5rpKZUQ14BOLTGmt48zXU9HFLl6vA1h7955ip6ZdeYu7BbmHscY68GN%2B%2F7jcKx7tx7HfP2uXr5EulUtVID86vitwn8OIsTGdxgfYkI3CNRHYfBbLru1MV2xjzVT0PY8djLbhscGWZZGF%2BvkYoGEmApWQ78hPRVLRxO1IVBlrZf4Kk1fgEhpNmk%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"包2-0731-优秀女装",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410c82bf63643209dd9cb247c79f446aaa0020300b9770400&amp;hy=SH&amp;storeid=32303137303831343039343633383030303263303631313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:2,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=GV0J%2BtrsQQNyp%2BMYCgCMCeQ%2BaDcHVWgrdGS7V5G4iSYtFxzSguZ2DNnNq%2BeZnD%2FfRi93PAMqHeVeUvIH5OA%2BIR7ZYjjMe%2F6lSbTRJeAd5DT4puSh4JVGBXQv3aqNQWOztu%2FFDjM6vegBDn5amzfSx2mUl1%2Fk1QVce8W4sFM8GUdGdygypG0IaxWwEMUQYVfiOvQI7yZaDF21S0bk3D7VqjQaGWUT18yOHKNVaLzU0eF5nBV4PgIGsBC1whR%2FsVfYK5KKc2qF3BMn1aBZu6JF23lKsAcHF5uQkTEhRDLPWLjjBMQbO6KvNV%2FzJSFBY5QkuV3A%2FOEOyEkd7ANb4o6rxn3AaxTvoJ7VHcIUq%2BIjBHSsTqNvSUTAkbdjBEPI%2BPCnYPF0im0cABILaTelvbzgg6dZVTdUH65f7BEqwpqxsJYva9XTEWi3lrMLHPwVmsydPbQ1fh9ZlyQG25jBM63BFyADYFq%2Bw3dDDycH1ySKNpIY8I7Uai8hmmcih3Wp9%2BbSXi1q1bPphmjwzY%2BHN1VxUnOnsqFbm%2B3tVuwEzjluodNcOS3c9U88DOnrtcziWksr9HuXR0Tyg2ao%2B44FmRkxxsgXOQRdzLul4Ur8yCE27pApqEAklKB%2BxaVd%2FDGFXqKsoFnFiRTVpm47yF7Ms9ui%2BNZWT91h%2FB1scMsN95qbki%2Bsz04lhaVkCKtIGxkBbeaxGVSGfCWc8l9LNscT8xQeIx7p9TIClLkoATVIFSpCnsrA6SqgZBbtaNlAPbBqgH7Y22AS5U4ajsMyHBIwKqRMtY%2BJEnfMYe5VBdJULSgbocsw%2FeTs4ZB0v0Aap14nEAX6rJD6tZMm1WD5eiNc%2BtURhbV0VU4ITvy5oPBb5O4Fa0GgcyafzYzMbRtApCWN2Xrmm8W774qHvFbITLWUBIsKE5rpKZUQ14BOLTGmt48zXU9HFLl6vA1h7955ip6ZdeYu7BbmHscY68GN%2B%2F7jcKx7tx7HfP2uXr5EulUtVID86vitwn8OIsTGdxgfYkI3CNRHYfBbLru1MV2xjzVT0PY8djLbhscGWZZGF%2BvkYoGEmApWQ78hPRVLRxO1IVBlrZf4Kk1fgEhpNmk%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx0roylv2tqhiegu00",
type:"0",
url:"http://mp.weixin.qq.com/mp/ad_app_info?app_id=100734944&weixinadkey=08492438fabea0fa20ea10ca113c9c77ab393b4afe956b9402cb9c146446a4897b07983cdf4c87e494525135bbbf6c75&ticket=2vzb4elulhdn4&gdt_vid=wx03uxqfwz22ubsa00&channel_id=000116083636303834373639&md5sum=9A454F1F2CC41E3A02295D688871F7E1&weixinadinfo=13262845.wx03uxqfwz22ubsa00.0.1#wechat_redirect",
watermark_type:3
},
pt_2x1:{
ad_desc:"",
aid:"14152818",
app_info:{
apk_name:"com.tuan800.tao800",
apk_url:"http://imtt.dd.qq.com/16891/ECAB9669DE7A77DACA842CF2E4CEA9CE.apk?fsname=com.tuan800.tao800_4.22.0_42207.apk&amp;csr=1bca",
app_id:100734944,
app_md5:"ECAB9669DE7A77DACA842CF2E4CEA9CE",
app_name:"折800-独家折扣优惠买",
app_rating:4.93209,
app_size:29068789,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/ECAB9669DE7A77DACA842CF2E4CEA9CE.apk?fsname=com.tuan800.tao800_4.22.0_42207.apk&amp;csr=1bca",
category:[],
channel_id:"000116083635363934363334",
desc:"折800，手机必备购物APP，大牌折扣，好货底价购，服饰、家居，母婴、家电、鞋包……全品类覆盖，用心生活，精明消费，省钱又省心【新人好礼】新人专享、爆款秒杀，海量红包等你拿【品牌折扣】达芙妮、美的、COACH等半价购【劲爆促销】每日千余商品限时特卖，就是那么低价【正品保证】品牌授权，商家信誉严格把控【9大工序】商品细节，使用体验等全方位评测【职业选款】优中选优，超高性价比【抄底捡价】心黑手狠帮您砍价低至1折【嗨购活动】拼团、领券、抽奖、拍卖玩儿不停【签到赚钱】签到赚积分，积分当钱花【任性包邮】全场包邮，呼朋唤友来抢购【售后无忧】8天无理由退换，退货就返券，你来任性，小折为你买单！【联系我们】折800数千员工随时为你解决任何问题！客服：电话400-0611-800；QQ群：199512527 意见反馈：app@tuan800.com官方微博微信同步搜索：折800官方网址：m.zhe800.com；www.zhe800.com",
down_count:65980944,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_187076_1502105988/256",
new_feature:"1、99大促即将来袭！前方新一波优惠等你来拿2、收藏夹也能方便找到设置提醒的商品~3、优化用户体验，修复了部分已知功能~",
signature_md5:"CBFAB0D55237931C650DF038C6AE9E93",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_187076_1_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_2_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_3_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_4_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_5_1503288410/330",
url_scheme:"zhe800://goto_home",
version_code:42207
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=GV0J%2BtrsQQNyp%2BMYCgCMCeQ%2BaDcHVWgrdGS7V5G4iSYtFxzSguZ2DNnNq%2BeZnD%2FfRi93PAMqHeVeUvIH5OA%2BIR7ZYjjMe%2F6lSbTRJeAd5DT4puSh4JVGBXQv3aqNQWOztu%2FFDjM6vegBDn5amzfSx2mUl1%2Fk1QVce8W4sFM8GUdGdygypG0IaxWwEMUQYVfiOvQI7yZaDF21S0bk3D7VqjQaGWUT18yOHKNVaLzU0eF5nBV4PgIGsBC1whR%2FsVfYK5KKc2qF3BMn1aBZu6JF23lKsAcHF5uQkTEhRDLPWLjjBMQbO6KvNV%2FzJSFBY5QkuV3A%2FOEOyEkd7ANb4o6rxn3AaxTvoJ7VHcIUq%2BIjBHSsTqNvSUTAkbdjBEPI%2BPCnYPF0im0cABILaTelvbzgg6dZVTdUH65f7BEqwpqxsJYva9XTEWi3lrMLHPwVmsydPbQ1fh9ZlyQG25jBM63BFyADYFq%2Bw3dDDycH1ySKNpIY8I7Uai8hmmcih3Wp9%2BbSXi1q1bPphmjwzY%2BHN1VxUnOnsqFbm%2B3tVuwEzjluodNcOS3c9U88DOnrtcziWksr9HuXR0Tyg2ao%2B44FmRkxxsgXOQRdzLul4Ur8yCE27pApqEAklKB%2BxaVd%2FDGFXqKsoFnFiRTVpm47yF7Ms9ui%2BNZWT91h%2FB1scMsN95qbki%2Bsz04lhaVkCKtIGxkBbeaxGVSGfCWc8l9LNscT8xQeIx7p9TIClLkoATVIFSpCnsrA6SqgZBbtaNlAPbBqgH7Y22AS5U4ajsMyHBIwKqRMtY%2BJEnfMYe5VBdJULSgbocsw%2FeTs4ZB0v0Aap14nEAX6rJD6tZMm1WD5eiNc%2BtURhbV0VU4ITvy5oPBb5O4Fa0GgcyafzYzMbRtApCWN2Xrmm8W774qHvFbITLWUBIsKE5rpKZUQ14BOLTGmt48zXU9HFLl6vA1h7955ip6ZdeYu7BbmHscY68GN%2B%2F7jcKx7tx7HfP2uXr5EulUtVID86vitwn8OIsTGdxgfYkI3CNRHYfBbLru1MV2xjzVT0PY8djLbhscGWZZGF%2BvkYoGEmApWQ78hPRVLRxO1IVBlrZf4Kk1fgEhpNmk%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"包2-0731-优秀女装",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410c82bf63643209dd9cb247c79f446aaa0020300b9770400&amp;hy=SH&amp;storeid=32303137303831343039343633383030303263303631313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:2,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=GV0J%2BtrsQQNyp%2BMYCgCMCeQ%2BaDcHVWgrdGS7V5G4iSYtFxzSguZ2DNnNq%2BeZnD%2FfRi93PAMqHeVeUvIH5OA%2BIR7ZYjjMe%2F6lSbTRJeAd5DT4puSh4JVGBXQv3aqNQWOztu%2FFDjM6vegBDn5amzfSx2mUl1%2Fk1QVce8W4sFM8GUdGdygypG0IaxWwEMUQYVfiOvQI7yZaDF21S0bk3D7VqjQaGWUT18yOHKNVaLzU0eF5nBV4PgIGsBC1whR%2FsVfYK5KKc2qF3BMn1aBZu6JF23lKsAcHF5uQkTEhRDLPWLjjBMQbO6KvNV%2FzJSFBY5QkuV3A%2FOEOyEkd7ANb4o6rxn3AaxTvoJ7VHcIUq%2BIjBHSsTqNvSUTAkbdjBEPI%2BPCnYPF0im0cABILaTelvbzgg6dZVTdUH65f7BEqwpqxsJYva9XTEWi3lrMLHPwVmsydPbQ1fh9ZlyQG25jBM63BFyADYFq%2Bw3dDDycH1ySKNpIY8I7Uai8hmmcih3Wp9%2BbSXi1q1bPphmjwzY%2BHN1VxUnOnsqFbm%2B3tVuwEzjluodNcOS3c9U88DOnrtcziWksr9HuXR0Tyg2ao%2B44FmRkxxsgXOQRdzLul4Ur8yCE27pApqEAklKB%2BxaVd%2FDGFXqKsoFnFiRTVpm47yF7Ms9ui%2BNZWT91h%2FB1scMsN95qbki%2Bsz04lhaVkCKtIGxkBbeaxGVSGfCWc8l9LNscT8xQeIx7p9TIClLkoATVIFSpCnsrA6SqgZBbtaNlAPbBqgH7Y22AS5U4ajsMyHBIwKqRMtY%2BJEnfMYe5VBdJULSgbocsw%2FeTs4ZB0v0Aap14nEAX6rJD6tZMm1WD5eiNc%2BtURhbV0VU4ITvy5oPBb5O4Fa0GgcyafzYzMbRtApCWN2Xrmm8W774qHvFbITLWUBIsKE5rpKZUQ14BOLTGmt48zXU9HFLl6vA1h7955ip6ZdeYu7BbmHscY68GN%2B%2F7jcKx7tx7HfP2uXr5EulUtVID86vitwn8OIsTGdxgfYkI3CNRHYfBbLru1MV2xjzVT0PY8djLbhscGWZZGF%2BvkYoGEmApWQ78hPRVLRxO1IVBlrZf4Kk1fgEhpNmk%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx0roylv2tqhiegu00",
type:"0",
url:"http://mp.weixin.qq.com/mp/ad_app_info?app_id=100734944&weixinadkey=08492438fabea0fa20ea10ca113c9c77ab393b4afe956b9402cb9c146446a4897b07983cdf4c87e494525135bbbf6c75&ticket=2vzb4elulhdn4&gdt_vid=wx03uxqfwz22ubsa00&channel_id=000116083636303834373639&md5sum=9A454F1F2CC41E3A02295D688871F7E1&weixinadinfo=13262845.wx03uxqfwz22ubsa00.0.1#wechat_redirect",
watermark_type:3
},
pt_2x2:{
hint_txt:"世包国际中心",
url:"https://www.91xiangju.com/commodity-house/369.html?cps_id=3000&weixinadkey=217129ad35c6d7141bc4c9577a505c807cc3c263469de4f24a65ba4b327ed70ee7c4ca4e96aa8b31040617d05f57a817&gdt_vid=wx03amsjux4cp62m00&weixinadinfo=14865209.wx03amsjux4cp62m00.0.1",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=nMtwP4DM39pQbfG2MjMiPaYrUMO%2FJlRdJcx1gAeqVSArpTWI7%2B7y5Ht0kNp7csV8pOg%2FCfbBLuWaAE%2BQgraIsY3BBYWJHEo6s5pH52kt04VbIcVvsC9EDTMT8VNmjloczICeGrPg%2BZiuEpH5OmN0tcpmyRxQubnkJ%2FJh%2BNJeGVFoWksMMS1RY%2FLqq2gJIunfdfLDhIcXHMCqSyctGcNfuoJ78h2AzHvAmTUpbBtOlYywptyitKcYYeSRbqvkzceFcceJoQW%2BJTwNNnL3hTgy7dNV9DVM%2FC9gCpr%2FNwube1jLBeddaGt%2FIdCGnmAWGyxPVy8t9dMB8ylm53oxtlFbyqclxhsqF9Y9wVqwc2g3PimFbjQ4erW2y8wmSLmlRII533pLZFSJKMynsDoKlzlT7VqGdQluXpAsymEzLomiu%2BSx6gKPd%2FNb641%2BF9gHX3A7Kof7js09WvzhmuTy14FThgXSppOFQGQvNa9UZh9pwIu7uBiCKeEuXT1Xh3xTnN8Uz4lXsu89z68PPzjjktaLu3ES8tBg1oc8DAOW8WAhD17FMHFN3zXD1cdY92cqDsq8pLcEsOoHL9lUnygABEXYcD8CI21X0lGskYmZK6bqwXbjMcuM5DiAn6cBJgb2hDEX0rHhWHuk5c1b4Ty%2BHomACBN9hHlmWLZ8RYtjN%2FbQWnhi7ybJD7PFgZWviYkLAHKGDv%2BlSqpHPehq8OV1a0qvSEnlJVs9oWna%2FqchzosBgDjsykippj7sWCczPWIwFTT5NBdmo%2BNsaxnWbg1Y3iK1jGRVIv0ARLCl9ePlxmNyhqyeQUS7BNyE4%2FODWhmrrLe67UTTMC2eWkI56g6DumY%2FDlffZP4oh9svjtQT3gwuTjbXYR%2B9tdJUEkMAmeAFBh4irS6LZtK6j3feD5l2%2FGCBs6U2y5dwTTXoosD8v8W6LeVbVLAw4di8QaToPwn2wS7lYw%2FTfwvqDuCv5iwecgKyV%2FEDtqoTMWsfZf2Pv1eGySdd0A%2BHYudVDt3H%2BA8BUwP0RU6JstNsP%2FvSHXkjxFoYvsNPdjNaimMfLdoT5r6%2BC5dSFBpuVw1RJSZgS8ZaUs5SPctBzBmNKgTZdnknL6QpdWX9j79Xhskn",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=nMtwP4DM39pQbfG2MjMiPaYrUMO%2FJlRdJcx1gAeqVSArpTWI7%2B7y5Ht0kNp7csV8pOg%2FCfbBLuWaAE%2BQgraIsY3BBYWJHEo6s5pH52kt04VbIcVvsC9EDTMT8VNmjloczICeGrPg%2BZiuEpH5OmN0tcpmyRxQubnkJ%2FJh%2BNJeGVFoWksMMS1RY%2FLqq2gJIunfdfLDhIcXHMCqSyctGcNfuoJ78h2AzHvAmTUpbBtOlYywptyitKcYYeSRbqvkzceFcceJoQW%2BJTwNNnL3hTgy7dNV9DVM%2FC9gCpr%2FNwube1jLBeddaGt%2FIdCGnmAWGyxPVy8t9dMB8ylm53oxtlFbyqclxhsqF9Y9wVqwc2g3PimFbjQ4erW2y8wmSLmlRII533pLZFSJKMynsDoKlzlT7VqGdQluXpAsymEzLomiu%2BSx6gKPd%2FNb641%2BF9gHX3A7Kof7js09WvzhmuTy14FThgXSppOFQGQvNa9UZh9pwIu7uBiCKeEuXT1Xh3xTnN8Uz4lXsu89z68PPzjjktaLu3ES8tBg1oc8DAOW8WAhD17FMHFN3zXD1cdY92cqDsq8pLcEsOoHL9lUnygABEXYcD8CI21X0lGskYmZK6bqwXbjMcuM5DiAn6cBJgb2hDEX0rHhWHuk5c1b4Ty%2BHomACBN9hHlmWLZ8RYtjN%2FbQWnhi7ybJD7PFgZWviYkLAHKGDv%2BlSqpHPehq8OV1a0qvSEnlJVs9oWna%2FqchzosBgDjsykippj7sWCczPWIwFTT5NBdmo%2BNsaxnWbg1Y3iK1jGRVIv0ARLCl9ePlxmNyhqyeQUS7BNyE4%2FODWhmrrLe67UTTMC2eWkI56g6DumY%2FDlffZP4oh9svjtQT3gwuTjbXYR%2B9tdJUEkMAmeAFBh4irS6LZtK6j3feD5l2%2FGCBs6U2y5dwTTXoosD8v8W6LeVbVLAw4di8QaToPwn2wS7lYw%2FTfwvqDuCv5iwecgKyV%2FEDtqoTMWsfZf2Pv1eGySdd0A%2BHYudVDt3H%2BA8BUwP0RU6JstNsP%2FvSHXkjxFoYvsNPdjNaimMfLdoT5r6%2BC5dSFBpuVw1RJSZgS8ZaUs5SPctBzBmNKgTZdnknL6QpdWX9j79Xhskn",
traceid:"wx03amsjux4cp62m00",
group_id:"",
ticket:"",
aid:"14865209",
pt:2,
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410c07d2c3e99938774bdb158ef262589b8020300847c0400&hy=SH&storeid=32303137303832393039343230313030303030353762313336666664393336663561333230613030303030303664&bizid=1023",
ad_desc:"",
biz_appid:"",
pos_type:0,
watermark_type:2,
logo:"",
is_cpm:0,
dest_type:0
},
pt_2x3:{
hint_txt:"10769-宝丽爵-0824",
url:"https://mob.viewlayer.cn/?mtag=59a535c89b167282979719&weixinadkey=86e6eb5c544f70e026d52e419149d2026973d0aa1889900a2eb167ab40fc30662db001d032c56f030897f6cd7a77d20b&gdt_vid=wx0fjcetau7qkfqy00&weixinadinfo=14889680.wx0fjcetau7qkfqy00.0.1",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=91fgdLRf69awj12CmDMtqxE502q5uM%2BXPE8qWCUo9pxG3r%2FVfjPdr6txG%2FJAFtk6b2PHfACRtmGUkuhwpl8izS%2FRR1NMxl4Gdbz2epUMSkPKvgB6DMAM5dVWeFaB%2Bpf3D1WGaEbphEtyK3JKuMbFVGCiGSKvKH6RZMlM%2B0GKwFr07Z2hXNl41u6hocy2oqNZ6avM1M8HXTKpd4ks4v5%2BwgzpL3u%2BhpHLQvR0cyXPeQ4IPuunzCk6vKax%2FnFkiv9s5rjgsfuttNWN9SGJsofEf9mAbi8nP0CpYsyLxhAuTDmctClLYMKKs2tWW%2Fqcu%2BEjbSWf6jRi4%2Fqc41MSy4FnJOxUwoDqperrCJtKjJyve4XXXdwLl1RfeYNBCRjdrBK83FkSgDdDPpUTvUXGJpbxe0hvniD5gPXFZOePuohpTe3V4t9382QZXkRfhPWfKO1sy9UbS06WAP12EfzA14gjLOAp5ZCKdDZ92xTDej2mVXmUDkHaQ%2BN%2Fpg16xieWs4XRcZL97YmaCkw39nWeadjJQgehzbqLZdLw9jj8cZCU2oa3n28T8AD%2FxxhEKLdKcOxcbSUV2r8V8DntwpPiMDB31CRrvFUrV%2FM%2BgZC%2BMLsxixyDK4VLvXUu7kBaiSyt%2FCfnqqixcXOmbrsp%2ByzUMLUI7iYKGdf30Og9ZUR5XB%2BcpkF7jd642%2BBVRUkcdPppkwgLwBbFockwt6XFPjSyRHgQD%2FeVAgbPDbd%2BVLjbMIy3m4fvuNG0pBiPfUzcExfn5DVdPJIbfYhPgn51WObooV1jVypsUm2uNEhVihhUicCHcGMviDjqinnOharKPwaXW6dQVO%2FZatXhZgUfxIlFIEDeyMWEXDFaA6IE32YJyk7mvzYpzOzjxu8APMZZtY4sm6rol9bcQ0dR7jVE6pTmmTe%2FHbIlIKlfH4R9K1hJ956v%2Fq1zdiQmP1IR8fcdlCe%2B%2Bw5Uv3JdQl97LQSuNsno%2F8X1RXvSbo%2BRtPx6kZkRGC9WMbgZzsPmswrYaKZnFW%2Frjwvnt5gYAfvug7kB8T38Jnwm%2BsIMYIY5E61DulId3FTVZoRpJKQPopd3CRV5wgBUtaNWlf0u1xtT8eMk2M6tJ%2Fi5Dg%3D%3D",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=91fgdLRf69awj12CmDMtqxE502q5uM%2BXPE8qWCUo9pxG3r%2FVfjPdr6txG%2FJAFtk6b2PHfACRtmGUkuhwpl8izS%2FRR1NMxl4Gdbz2epUMSkPKvgB6DMAM5dVWeFaB%2Bpf3D1WGaEbphEtyK3JKuMbFVGCiGSKvKH6RZMlM%2B0GKwFr07Z2hXNl41u6hocy2oqNZ6avM1M8HXTKpd4ks4v5%2BwgzpL3u%2BhpHLQvR0cyXPeQ4IPuunzCk6vKax%2FnFkiv9s5rjgsfuttNWN9SGJsofEf9mAbi8nP0CpYsyLxhAuTDmctClLYMKKs2tWW%2Fqcu%2BEjbSWf6jRi4%2Fqc41MSy4FnJOxUwoDqperrCJtKjJyve4XXXdwLl1RfeYNBCRjdrBK83FkSgDdDPpUTvUXGJpbxe0hvniD5gPXFZOePuohpTe3V4t9382QZXkRfhPWfKO1sy9UbS06WAP12EfzA14gjLOAp5ZCKdDZ92xTDej2mVXmUDkHaQ%2BN%2Fpg16xieWs4XRcZL97YmaCkw39nWeadjJQgehzbqLZdLw9jj8cZCU2oa3n28T8AD%2FxxhEKLdKcOxcbSUV2r8V8DntwpPiMDB31CRrvFUrV%2FM%2BgZC%2BMLsxixyDK4VLvXUu7kBaiSyt%2FCfnqqixcXOmbrsp%2ByzUMLUI7iYKGdf30Og9ZUR5XB%2BcpkF7jd642%2BBVRUkcdPppkwgLwBbFockwt6XFPjSyRHgQD%2FeVAgbPDbd%2BVLjbMIy3m4fvuNG0pBiPfUzcExfn5DVdPJIbfYhPgn51WObooV1jVypsUm2uNEhVihhUicCHcGMviDjqinnOharKPwaXW6dQVO%2FZatXhZgUfxIlFIEDeyMWEXDFaA6IE32YJyk7mvzYpzOzjxu8APMZZtY4sm6rol9bcQ0dR7jVE6pTmmTe%2FHbIlIKlfH4R9K1hJ956v%2Fq1zdiQmP1IR8fcdlCe%2B%2Bw5Uv3JdQl97LQSuNsno%2F8X1RXvSbo%2BRtPx6kZkRGC9WMbgZzsPmswrYaKZnFW%2Frjwvnt5gYAfvug7kB8T38Jnwm%2BsIMYIY5E61DulId3FTVZoRpJKQPopd3CRV5wgBUtaNWlf0u1xtT8eMk2M6tJ%2Fi5Dg%3D%3D",
traceid:"wx0fjcetau7qkfqy00",
group_id:"",
ticket:"",
aid:"14889680",
pt:2,
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d0402534804105b110f03693bbf2947fa00821992985602027b350400&hy=SH&storeid=32303137303832393039333831363030306166613830313336666664393331333630333230613030303030303664&bizid=1023",
ad_desc:"",
biz_appid:"",
pos_type:0,
watermark_type:1,
logo:"",
is_cpm:0,
dest_type:0
},
pt_7:{
hint_txt:"19.9元留住宝宝的纯真影像",
url:"http://mall.qiakr.com/mall/getStockInfoForCustomer.htm?stockId=3265436&salesId=85999&weixinadkey=a2d138b7c0b55dcc82d2b3d1459d7678125a430f23b2b920b5aeeb1b8fdf0cc68fc967edec80016f6c1ee58da63add62&gdt_vid=wx0jbf2bov3yned400&weixinadinfo=14889854.wx0jbf2bov3yned400.0.1",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=JCeVfPTbl5HMTQp8E%2B5NsR5%2FbQBV3iR0re%2B%2BYqBj2Dj1j34%2BoBeR2xIUu%2BaWmWKK2dpbLlJnViMis4a%2FyWjVvZCdUwktE%2Bvt2tZysGWKaYaBFg4XolshIoMdHTMoDNRq7PJAljdLsDR3QrOm1vDeMGfKeYXVltgXBKNg3H8jZK9%2FBxaM7KjvwJe6vICEehiXEUtyjmLNdRXsaSacASN03w1IpbjEZ6nuBY1T7axAYTv%2FK%2Fle5enFaMHOHfj%2BqtEJ26UNXwnIm9pWIFS7QO9xUnVf9fFXF9zzLoax0zLiuBWJdc8b%2F8PXCWrCHueIr24bPhL54TX6XbedAyuAH2rh5yQb5aP9pv%2FAPvfQWBSsYB4ek0rXvhEa367yo14VD2Wf3LqoZ4er%2Fyz3z0XlFdP9jQjIh9cIbO0xe6Pgreh03IG9rcDEVucRnDLJI1y%2B0LxZ9iFzKQxPJnQYFE6lC09Jrysyrd%2FwK9DSsbUtq1EKWWgTIS4olfnOxzNFL9O8OqWtUEnG%2Fma0ADE7RIRq2NGDBhwxH1ba4u75ukOsFpZDmWCucem3EImIlYT1y%2BOyy3CmMU3Uqmv0iQY3gqFr5ej31mQODcjTyiRDieUHWkBzqAhKLEt%2FQ81uWzkUXgjxwFHSBrCK7C1zVpTWvil70tGQxlatA5j9H9b6AdUxN32As497y1FPDwn59c3RsSv6vDiCewM4RfMt2mw620ToJgkT%2BypsAAxWjna%2BCgDtcolZdapMZ%2FbcBPAqN2DAQTPayJyruRHJHXZGiVPl6eaUQJJvgkQs2Yo1hIq8gaImSgaQCa%2FjXLwtErfUw9svaakxhzu17SkQP3aaKFb7wGBN%2Bs72RGRUy32p14M6mW6OcW%2BCDlAXuwWYq%2FnskvlAZS3F2I16whmDSyGU8FsYExhq481zn4loo%2FBOzuSJ7Nu4ZagmruyOY3UEnq5M8HcH1ylC8g5%2B2%2BINCMCG4X3EUQz2wb8pvEfvEZuPQ6J494BqBXjeDQZ%2F5Kk8h51CBG0DIk81KaGztDYconO%2BZne39H%2BvR5wKQAQ7gbdahGPdi6OIVLbqwM%2BBiLJxQMaWK5BP7T%2BRqh%2BkQADee%2FjY24kKdjxNx%2F%2FhQ5XCZ9hzhw8d",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=JCeVfPTbl5HMTQp8E%2B5NsR5%2FbQBV3iR0re%2B%2BYqBj2Dj1j34%2BoBeR2xIUu%2BaWmWKK2dpbLlJnViMis4a%2FyWjVvZCdUwktE%2Bvt2tZysGWKaYaBFg4XolshIoMdHTMoDNRq7PJAljdLsDR3QrOm1vDeMGfKeYXVltgXBKNg3H8jZK9%2FBxaM7KjvwJe6vICEehiXEUtyjmLNdRXsaSacASN03w1IpbjEZ6nuBY1T7axAYTv%2FK%2Fle5enFaMHOHfj%2BqtEJ26UNXwnIm9pWIFS7QO9xUnVf9fFXF9zzLoax0zLiuBWJdc8b%2F8PXCWrCHueIr24bPhL54TX6XbedAyuAH2rh5yQb5aP9pv%2FAPvfQWBSsYB4ek0rXvhEa367yo14VD2Wf3LqoZ4er%2Fyz3z0XlFdP9jQjIh9cIbO0xe6Pgreh03IG9rcDEVucRnDLJI1y%2B0LxZ9iFzKQxPJnQYFE6lC09Jrysyrd%2FwK9DSsbUtq1EKWWgTIS4olfnOxzNFL9O8OqWtUEnG%2Fma0ADE7RIRq2NGDBhwxH1ba4u75ukOsFpZDmWCucem3EImIlYT1y%2BOyy3CmMU3Uqmv0iQY3gqFr5ej31mQODcjTyiRDieUHWkBzqAhKLEt%2FQ81uWzkUXgjxwFHSBrCK7C1zVpTWvil70tGQxlatA5j9H9b6AdUxN32As497y1FPDwn59c3RsSv6vDiCewM4RfMt2mw620ToJgkT%2BypsAAxWjna%2BCgDtcolZdapMZ%2FbcBPAqN2DAQTPayJyruRHJHXZGiVPl6eaUQJJvgkQs2Yo1hIq8gaImSgaQCa%2FjXLwtErfUw9svaakxhzu17SkQP3aaKFb7wGBN%2Bs72RGRUy32p14M6mW6OcW%2BCDlAXuwWYq%2FnskvlAZS3F2I16whmDSyGU8FsYExhq481zn4loo%2FBOzuSJ7Nu4ZagmruyOY3UEnq5M8HcH1ylC8g5%2B2%2BINCMCG4X3EUQz2wb8pvEfvEZuPQ6J494BqBXjeDQZ%2F5Kk8h51CBG0DIk81KaGztDYconO%2BZne39H%2BvR5wKQAQ7gbdahGPdi6OIVLbqwM%2BBiLJxQMaWK5BP7T%2BRqh%2BkQADee%2FjY24kKdjxNx%2F%2FhQ5XCZ9hzhw8d",
traceid:"wx0jbf2bov3yned400",
group_id:"",
ticket:"",
aid:"14889854",
pt:7,
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d0402534804105dee9141292a1f6ec2fdf5a44794a473020219830400&hy=SH&storeid=32303137303832393039333730303030303730656162313336666664393336663561333230613030303030303664&bizid=1023",
ad_desc:"小糯米为每个孩子打造一个开心、梦想、快乐、童真的童年",
biz_appid:"",
pos_type:0,
watermark_type:0,
logo:"",
is_cpm:0,
dest_type:0
},
pt_100:{
hint_txt:"点击“关注” 观看更多精彩潮剧",
url:"https://mp.weixin.qq.com/mp/ad_biz_info?__biz=MzU1MTE2OTk0NQ==&sn=6518d701813ded1dd09918956297917e&weixinadkey=548ae46bee12701d10d6ab4047c5a0654a5490df1dff40d7e5f67376762916254bd5aa9329fb3a7617e2324cb48a50c5&ticket=2tkzedhfavvnh&gdt_vid=wx0dczgs7job3vjy00&weixinadinfo=14888809.wx0dczgs7job3vjy00.0.1#wechat_redirect",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=fdj3ZZhD2qDmsKZjo9y6dU8Mp35CBHU1XJtkvATh%2B%2BJSG3EDPN%2FDltuZyeSKmsqb0d%2FShkXtSwn3vGdHrkWLZHGSRj67aypageTq%2FZ4M6WG1lwmsOzBRVMYhIqnUfNG695ZVwYJNaWumol%2BAEgddnm9zRmSND2lEDL%2FGNol%2FRIK5SR8IjtFD%2Fvvd3WTmzI%2BRwFnyOxw6yInbeJYSB985tP5joFDobz%2F3Yb3gKVFOhom9eiV%2FW4Den8rQyRAsdrE0486QvPBMujGScpNQBbw%2FCK1%2BQRL%2B0xuUuthvFm%2BcQByq7OdTt5a%2B0X23ce9EHVPyh%2BJafiK0ps7O1G%2FdAcfhbcpk0e1Bmtax%2Bnl%2FEABFFTsjG7CACftv6bXaX1RYPwWLf3%2BdryBoMrFZT0esJWftV8XlkDeINcSpLqmnO0Fc6ZIQEa6l0EBQObc%2FNH19c504%2FZJOuBpG7YzhHvJC9JyF09M2m95y46LqHh0Kv1WqpZlIytHoZJuA5S2Kj6GZA%2FbPLWQiiQHBxgQNyfKf2Gaw8Bfev0bukZ2AoufqyKL4b1t2AgosQgfm4PHNi2HnfMfsBK%2FIvWWB%2B8ygdPkgYIGI2Qa4npNUVK8py56bAfjNr5zjC9nJfZkLTwlY56GtA0NzcKm6t3lhPhvarKFv3grP7CXmTXn2pHNrEjkYMAQ0x0TOzun2ha3g6fKJFiPkUvMP22h1V6WzXYwtKwoLmYVoQcewlUx6u1F4PU3ZSXqkCp8dsAO89lZFc%2BLReloRvW1SZh90LAV0iiPxGOnYgF%2BLLgX32BCUQ9j6kUhhblV346n8zGobixoKGrP7FVaiIAtf0yMkEDtTfGbgjb7K9Nm7ND37c2i4fAHOYaYAYWJU7k3TXvivQmXIyP7M5XgkV9s3yLswrkuHO8hgIdcbdwlQZkk7T97AG%2F2irKAvFHdJ4aArIvxNGEJ%2FBSHm3TGBpuVyiuWsyd1n7l%2B6pDEljosRv2PvDIfsu5oIWaj7EzsBUvxqY5kFCQCcBBDol9VNAJY81%2BSPo%2BxXA0aYJ%2BenGCFgVm9QwSKfjab8WyAgmtkm1V5eZ4jkboOPfwaHYw0IqV9QxQ3Su1DPPIk%3D",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=fdj3ZZhD2qDmsKZjo9y6dU8Mp35CBHU1XJtkvATh%2B%2BJSG3EDPN%2FDltuZyeSKmsqb0d%2FShkXtSwn3vGdHrkWLZHGSRj67aypageTq%2FZ4M6WG1lwmsOzBRVMYhIqnUfNG695ZVwYJNaWumol%2BAEgddnm9zRmSND2lEDL%2FGNol%2FRIK5SR8IjtFD%2Fvvd3WTmzI%2BRwFnyOxw6yInbeJYSB985tP5joFDobz%2F3Yb3gKVFOhom9eiV%2FW4Den8rQyRAsdrE0486QvPBMujGScpNQBbw%2FCK1%2BQRL%2B0xuUuthvFm%2BcQByq7OdTt5a%2B0X23ce9EHVPyh%2BJafiK0ps7O1G%2FdAcfhbcpk0e1Bmtax%2Bnl%2FEABFFTsjG7CACftv6bXaX1RYPwWLf3%2BdryBoMrFZT0esJWftV8XlkDeINcSpLqmnO0Fc6ZIQEa6l0EBQObc%2FNH19c504%2FZJOuBpG7YzhHvJC9JyF09M2m95y46LqHh0Kv1WqpZlIytHoZJuA5S2Kj6GZA%2FbPLWQiiQHBxgQNyfKf2Gaw8Bfev0bukZ2AoufqyKL4b1t2AgosQgfm4PHNi2HnfMfsBK%2FIvWWB%2B8ygdPkgYIGI2Qa4npNUVK8py56bAfjNr5zjC9nJfZkLTwlY56GtA0NzcKm6t3lhPhvarKFv3grP7CXmTXn2pHNrEjkYMAQ0x0TOzun2ha3g6fKJFiPkUvMP22h1V6WzXYwtKwoLmYVoQcewlUx6u1F4PU3ZSXqkCp8dsAO89lZFc%2BLReloRvW1SZh90LAV0iiPxGOnYgF%2BLLgX32BCUQ9j6kUhhblV346n8zGobixoKGrP7FVaiIAtf0yMkEDtTfGbgjb7K9Nm7ND37c2i4fAHOYaYAYWJU7k3TXvivQmXIyP7M5XgkV9s3yLswrkuHO8hgIdcbdwlQZkk7T97AG%2F2irKAvFHdJ4aArIvxNGEJ%2FBSHm3TGBpuVyiuWsyd1n7l%2B6pDEljosRv2PvDIfsu5oIWaj7EzsBUvxqY5kFCQCcBBDol9VNAJY81%2BSPo%2BxXA0aYJ%2BenGCFgVm9QwSKfjab8WyAgmtkm1V5eZ4jkboOPfwaHYw0IqV9QxQ3Su1DPPIk%3D",
traceid:"wx0dczgs7job3vjy00",
group_id:"",
ticket:"2tkzedhfavvnh",
aid:"14888809",
pt:100,
image_url:"",
ad_desc:"",
biz_appid:"wx8c950ba05b9f01a9",
biz_info:{
user_name:"gh_d62037c98f00",
nick_name:"潮剧精选",
is_subscribed:0,
head_img:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM5PIbkaKgjHgnkhY4O3ZLBiaXbgrk6uquUy9ACLJd664ww/0",
biz_uin:3551169945
},
pos_type:0,
watermark_type:0,
logo:"",
is_cpm:0,
exp_info:{
exp_num:0,
exp_value:[]
},
dest_type:0
},
pt_103:{
ad_desc:"",
aid:"10904444",
app_info:{
apk_name:"com.mlzy.mlzy",
apk_url:"https://itunes.apple.com/cn/app/%E9%AD%94%E9%BE%99%E6%88%98%E5%9F%9F-%E4%BC%A0%E5%A5%87%E8%B7%A8%E6%9C%8D%E7%AB%9E%E6%8A%80-%E5%AE%9E%E6%97%B6%E6%BF%80%E6%83%85pk/id1177821716?mt=8&amp;uo=4",
app_id:1177821716,
app_md5:"",
app_name:"魔龙战域-传奇跨服竞技,实时激情PK",
app_rating:0,
app_size:0,
app_type:0,
appinfo_url:"https://itunes.apple.com/cn/app/%E9%AD%94%E9%BE%99%E6%88%98%E5%9F%9F-%E4%BC%A0%E5%A5%87%E8%B7%A8%E6%9C%8D%E7%AB%9E%E6%8A%80-%E5%AE%9E%E6%97%B6%E6%BF%80%E6%83%85pk/id1177821716?mt=8&amp;uo=4",
category:[],
channel_id:"",
desc:"",
down_count:0,
icon_url:"http://mmbiz.qpic.cn/mmbiz_jpg/86djwtIhOVD5ZwnOicUov9kUJGYxNuzJYDDADtOafuh6y4CKJLZicjR7BUD2tkgOXluqavibm6vNib68NAMx8A4sDA/0",
new_feature:"",
signature_md5:"",
snap_shots:"",
url_scheme:"",
version_code:0
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=BaQ97XL3503Auq%2Fl3Z63G5%2FMMc%2BtVZslK8LZCGSv74ZwnlaGZRMH6kv%2F0nK0GPyASYIyb%2BUQbqisCYeoTicGk8hp2MOqOUQMyv2weAJ6q%2FPGQslfRjAx8ZEakCuxw6nSn4slmx9dsu2Ux5SaSleqJn7BfGnvyvV1SX5JtGh9anjn4ibrl0nktv3hB%2B2%2FZMYQTobLlj5QPCjNDxOllyIegnRZiKM%2FH%2B31Zr2AGeqC0EPBIeK1dvG0GIHwjMYB1odiJNiK8Togz36JenoPEd9oAWOasyGHdVNZGprI1xg0%2FYvnXqKqSkmDRtAip0Ddi6AVkOEnrBJDPhXCWUs%2Bu1%2Bx8ruQQ8Oawsb8aQhGivNmsaDHCUTzFq7%2FdHv7u%2B86Ciz%2FydhvJWKGxhjS2ItjpljV49%2Fc4Q5IrDy0DsFe863NkXe6EjxRwa81VTiY2KmI20o3x%2B8%2BlUR5OqJlGa8KRkDUv0eeG5%2BYiKsMds5VcgVHo6Jmjv3w80zVqg24wAPZPY1W3lhD%2BUXJfSOA7iQ%2FUQPTxA8CrDyAHKe%2FeP%2BMvzz2cAni5wveEheyqlASUoVVdpKej7lLUsF3sBMeIIaP%2BDlTNM6zu0IJEeJHMCdcPyIz%2FLELhSw2lxv4oju2Wu2WEI4RUkj2W%2BWmpBrdR5w8SlpJ8DwcHOuVtk1Qjm12sjZ3OwjYCtP4VXwr7230nUdqpUGUz3MdWAOoLTWbK%2B64vMnmJhIsmEW8bAdJMkBCn20HyJVoi2NCeZFGuWtOcZ%2BsOY6p1%2FNO5J21pq7Yi3i1O0x5V2TSk%2B7p%2BRgRm3%2FQotAuQeBOAfPgm85YjuJzVCuZ6KcTEaGAp1qleCFhng5hOVj0dngoiZ927zYTlzgdFQLqnKVJgjJv5RBuqHDJPF8nbo3%2Bxft400e4h%2FJAxg0Pmuslgb7cSK3jwkcvAARKY2UWJHA7gccW%2F9japd96T8jUMnEpVip5ApANfFSRg1RNylRtNwyKqDwCu2AzWrEZZ2eS5%2Fcz4JaSXT0t22%2BmuBjzKGxVyp336Efkrf3X8liCGi8ZlyJeY5IkDKQm",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"0307-魔龙战域-1",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d040253480410e13eb7f81e7445ac5427c8c417c68bbc02026c260400&amp;hy=SH&amp;storeid=32303137303432373130343330343030306138333663313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:103,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=BaQ97XL3503Auq%2Fl3Z63G5%2FMMc%2BtVZslK8LZCGSv74ZwnlaGZRMH6kv%2F0nK0GPyASYIyb%2BUQbqisCYeoTicGk8hp2MOqOUQMyv2weAJ6q%2FPGQslfRjAx8ZEakCuxw6nSn4slmx9dsu2Ux5SaSleqJn7BfGnvyvV1SX5JtGh9anjn4ibrl0nktv3hB%2B2%2FZMYQTobLlj5QPCjNDxOllyIegnRZiKM%2FH%2B31Zr2AGeqC0EPBIeK1dvG0GIHwjMYB1odiJNiK8Togz36JenoPEd9oAWOasyGHdVNZGprI1xg0%2FYvnXqKqSkmDRtAip0Ddi6AVkOEnrBJDPhXCWUs%2Bu1%2Bx8ruQQ8Oawsb8aQhGivNmsaDHCUTzFq7%2FdHv7u%2B86Ciz%2FydhvJWKGxhjS2ItjpljV49%2Fc4Q5IrDy0DsFe863NkXe6EjxRwa81VTiY2KmI20o3x%2B8%2BlUR5OqJlGa8KRkDUv0eeG5%2BYiKsMds5VcgVHo6Jmjv3w80zVqg24wAPZPY1W3lhD%2BUXJfSOA7iQ%2FUQPTxA8CrDyAHKe%2FeP%2BMvzz2cAni5wveEheyqlASUoVVdpKej7lLUsF3sBMeIIaP%2BDlTNM6zu0IJEeJHMCdcPyIz%2FLELhSw2lxv4oju2Wu2WEI4RUkj2W%2BWmpBrdR5w8SlpJ8DwcHOuVtk1Qjm12sjZ3OwjYCtP4VXwr7230nUdqpUGUz3MdWAOoLTWbK%2B64vMnmJhIsmEW8bAdJMkBCn20HyJVoi2NCeZFGuWtOcZ%2BsOY6p1%2FNO5J21pq7Yi3i1O0x5V2TSk%2B7p%2BRgRm3%2FQotAuQeBOAfPgm85YjuJzVCuZ6KcTEaGAp1qleCFhng5hOVj0dngoiZ927zYTlzgdFQLqnKVJgjJv5RBuqHDJPF8nbo3%2Bxft400e4h%2FJAxg0Pmuslgb7cSK3jwkcvAARKY2UWJHA7gccW%2F9japd96T8jUMnEpVip5ApANfFSRg1RNylRtNwyKqDwCu2AzWrEZZ2eS5%2Fcz4JaSXT0t22%2BmuBjzKGxVyp336Efkrf3X8liCGi8ZlyJeY5IkDKQm",
ticket:"2d4hi78djhdmi",
traceid:"wx0rir2hs42k4zvu00",
type:"0",
url:"https://itunes.apple.com/cn/app/%E9%AD%94%E9%BE%99%E6%88%98%E5%9F%9F-%E4%BC%A0%E5%A5%87%E8%B7%A8%E6%9C%8D%E7%AB%9E%E6%8A%80-%E5%AE%9E%E6%97%B6%E6%BF%80%E6%83%85pk/id1177821716?mt=8&amp;uo=4&amp;weixinadkey=f65aa694022d1eb46a0da2b9286cf607f91178d071f0161c50f66291b21f0879436343822ded6c294be38b1ac77e302d&amp;ticket=2d4hi78djhdmi&amp;gdt_vid=wx0rir2hs42k4zvu00&amp;md5sum=&amp;weixinadinfo=10904444.wx0rir2hs42k4zvu00.0.1",
watermark_type:0
},
pt_103x1:{
ad_desc:"",
aid:"14690166",
app_info:{
apk_name:"com.vipshop.iphone",
apk_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
app_id:417200582,
app_md5:"",
app_name:"唯品会 - 全球精选 正品特卖",
app_rating:4.5,
app_size:177868800,
app_type:0,
appinfo_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
category:["购物","生活"],
channel_id:"",
desc:"",
down_count:0,
icon_url:"http://mmbiz.qpic.cn/mmbiz_jpg/QxcpzGS56acDgouyWHPicmB7uddoozlibww6EFq9dxplGGnTm89rxMYxGSvO6MPwABPI6fUxaZKzxcJBqbNqsR8Q/0",
new_feature:"",
signature_md5:"",
snap_shots:"",
url_scheme:"",
version_code:0
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=U1yjZ%2BxwYQbCgbvSiCl7sdIQbkIlw%2BK38Q87PiH%2B2A0U147V7yYHvMdwUgyY3rxyxyCzKNTxp1d7SuvgHltNZfl5KO10DjFvngfguSdBSGEX1mrrezc%2FSM757ZuoeLmOkKbwz1L1IXV54smUztL3iElnrcrFJO5YnsnxJYBEidtS1J%2FKTgkNsgP%2BBFHbXVc4FeAdrzscb5%2F7U0%2B5Q9lz8mipql9wAChjCOJRE5XxDDMys8Ugu9cVFDueqZmsS9bs6B1mdZ4AD6arzM%2FPaZ6%2FxkYDaadvcYhVvEphp6qfCeqx%2FX3y1vvh9asbCy4EkQt7IDsXZmZ4PpK%2BjKUu8yvViytKBuJPf6jGmpbgGYSfl1ppjGIYA0fhZsHSqwU%2BIBeF9netPpt23GXK894wKMbKlIuxy7IV5BnzJ67zrl4iO%2BdDZCh%2BoCsG0MEwApmTPy88ctS%2FjsF1mxNPpkRLxiddExCmEek9Q4HHrCyAUztemEudqlbNabEFZZMRnXnmHc8J3RkYx0M7eu7%2B1RQHbPYJmIQDYut%2B7n1E%2Fak1uzbAg6OoVuI3C4cCdMalbQQMRc%2BJDcQhTfBu%2BFzwUegTMx6PLtgw%2FtCgeC6YVOxxfLf9x8K4M0pkjjYLD5eKYjQEU3AKidPc3nrD64Y7fjtHsDNLuwajxDDgdxusixnJEuaADc8e%2BUcs8pHzr1fA8ndPFjfq1abY2U42C2yJkrcJs1CVUk7YNWcuk77E2hIFQ%2F8%2B%2B6E6BmaLdY1e6ZATjD0W%2BXxKGGtmAG2VhKWNrTMZeaTlLG7ZA04pLREUNjMeZjY20Z3tavH%2FdBvHctYTub1gqF5LOooF8f%2FM5OrjOy8aMheNOhCQCtleUhHM8F2iXcS0gJgJjVRMMGETPLhF%2B5gosi7wOBrYg%2BECoA6n9qqu2NJtSMEIvNWj8LY6rVwW%2Fc09NfYg3Q5IvFRAxpqzNUGRu5Odvmno5yZj%2F2rMoZqoIM1tXYS1SOBw%2FLHCswqOsGq%2B0slUrEtwvitJRy8wLD3Y8lbMT2zHA3SWQu8bFd%2B%2B%2Bjn3c%2BVTSb2FkE6hWbPoXp4VzceD%2Fo3AgkgsmCGFpOlRWt0wnGOcsK6s0oQ%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"IOS-牛仔单品-0408",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d040253480410ff8ee6a9e5086ee741f3fb674cf6f39702026d7f0400&amp;hy=SH&amp;storeid=32303137303832353034333232323030306132666331313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:103,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=U1yjZ%2BxwYQbCgbvSiCl7sdIQbkIlw%2BK38Q87PiH%2B2A0U147V7yYHvMdwUgyY3rxyxyCzKNTxp1d7SuvgHltNZfl5KO10DjFvngfguSdBSGEX1mrrezc%2FSM757ZuoeLmOkKbwz1L1IXV54smUztL3iElnrcrFJO5YnsnxJYBEidtS1J%2FKTgkNsgP%2BBFHbXVc4FeAdrzscb5%2F7U0%2B5Q9lz8mipql9wAChjCOJRE5XxDDMys8Ugu9cVFDueqZmsS9bs6B1mdZ4AD6arzM%2FPaZ6%2FxkYDaadvcYhVvEphp6qfCeqx%2FX3y1vvh9asbCy4EkQt7IDsXZmZ4PpK%2BjKUu8yvViytKBuJPf6jGmpbgGYSfl1ppjGIYA0fhZsHSqwU%2BIBeF9netPpt23GXK894wKMbKlIuxy7IV5BnzJ67zrl4iO%2BdDZCh%2BoCsG0MEwApmTPy88ctS%2FjsF1mxNPpkRLxiddExCmEek9Q4HHrCyAUztemEudqlbNabEFZZMRnXnmHc8J3RkYx0M7eu7%2B1RQHbPYJmIQDYut%2B7n1E%2Fak1uzbAg6OoVuI3C4cCdMalbQQMRc%2BJDcQhTfBu%2BFzwUegTMx6PLtgw%2FtCgeC6YVOxxfLf9x8K4M0pkjjYLD5eKYjQEU3AKidPc3nrD64Y7fjtHsDNLuwajxDDgdxusixnJEuaADc8e%2BUcs8pHzr1fA8ndPFjfq1abY2U42C2yJkrcJs1CVUk7YNWcuk77E2hIFQ%2F8%2B%2B6E6BmaLdY1e6ZATjD0W%2BXxKGGtmAG2VhKWNrTMZeaTlLG7ZA04pLREUNjMeZjY20Z3tavH%2FdBvHctYTub1gqF5LOooF8f%2FM5OrjOy8aMheNOhCQCtleUhHM8F2iXcS0gJgJjVRMMGETPLhF%2B5gosi7wOBrYg%2BECoA6n9qqu2NJtSMEIvNWj8LY6rVwW%2Fc09NfYg3Q5IvFRAxpqzNUGRu5Odvmno5yZj%2F2rMoZqoIM1tXYS1SOBw%2FLHCswqOsGq%2B0slUrEtwvitJRy8wLD3Y8lbMT2zHA3SWQu8bFd%2B%2B%2Bjn3c%2BVTSb2FkE6hWbPoXp4VzceD%2Fo3AgkgsmCGFpOlRWt0wnGOcsK6s0oQ%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx0abnpizrj5oq3m00",
type:"0",
url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4&amp;weixinadkey=3cd216b7f0cabb3fd88ead2f48df5b44d3906580063ce9c182d4571e9e24ea657458ed9501be0ffec77716211c50162f&amp;ticket=2t3fxa7gwijlf&amp;gdt_vid=wx0abnpizrj5oq3m00&amp;md5sum=&amp;weixinadinfo=14690166.wx0abnpizrj5oq3m00.0.1",
watermark_type:0
},
pt_103x2:{
ad_desc:"",
aid:"14690166",
app_info:{
apk_name:"com.vipshop.iphone",
apk_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
app_id:417200582,
app_md5:"",
app_name:"唯品会 - 全球精选 正品特卖",
app_rating:4.5,
app_size:177868800,
app_type:0,
appinfo_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
category:["购物","生活"],
channel_id:"",
desc:"",
down_count:0,
icon_url:"http://mmbiz.qpic.cn/mmbiz_jpg/QxcpzGS56acDgouyWHPicmB7uddoozlibww6EFq9dxplGGnTm89rxMYxGSvO6MPwABPI6fUxaZKzxcJBqbNqsR8Q/0",
new_feature:"",
signature_md5:"",
snap_shots:"",
url_scheme:"vipshop://goHome?tra_from=tra%3Atlkelyf1%3A%3A%3A%3A",
version_code:0
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=U1yjZ%2BxwYQbCgbvSiCl7sdIQbkIlw%2BK38Q87PiH%2B2A0U147V7yYHvMdwUgyY3rxyxyCzKNTxp1d7SuvgHltNZfl5KO10DjFvngfguSdBSGEX1mrrezc%2FSM757ZuoeLmOkKbwz1L1IXV54smUztL3iElnrcrFJO5YnsnxJYBEidtS1J%2FKTgkNsgP%2BBFHbXVc4FeAdrzscb5%2F7U0%2B5Q9lz8mipql9wAChjCOJRE5XxDDMys8Ugu9cVFDueqZmsS9bs6B1mdZ4AD6arzM%2FPaZ6%2FxkYDaadvcYhVvEphp6qfCeqx%2FX3y1vvh9asbCy4EkQt7IDsXZmZ4PpK%2BjKUu8yvViytKBuJPf6jGmpbgGYSfl1ppjGIYA0fhZsHSqwU%2BIBeF9netPpt23GXK894wKMbKlIuxy7IV5BnzJ67zrl4iO%2BdDZCh%2BoCsG0MEwApmTPy88ctS%2FjsF1mxNPpkRLxiddExCmEek9Q4HHrCyAUztemEudqlbNabEFZZMRnXnmHc8J3RkYx0M7eu7%2B1RQHbPYJmIQDYut%2B7n1E%2Fak1uzbAg6OoVuI3C4cCdMalbQQMRc%2BJDcQhTfBu%2BFzwUegTMx6PLtgw%2FtCgeC6YVOxxfLf9x8K4M0pkjjYLD5eKYjQEU3AKidPc3nrD64Y7fjtHsDNLuwajxDDgdxusixnJEuaADc8e%2BUcs8pHzr1fA8ndPFjfq1abY2U42C2yJkrcJs1CVUk7YNWcuk77E2hIFQ%2F8%2B%2B6E6BmaLdY1e6ZATjD0W%2BXxKGGtmAG2VhKWNrTMZeaTlLG7ZA04pLREUNjMeZjY20Z3tavH%2FdBvHctYTub1gqF5LOooF8f%2FM5OrjOy8aMheNOhCQCtleUhHM8F2iXcS0gJgJjVRMMGETPLhF%2B5gosi7wOBrYg%2BECoA6n9qqu2NJtSMEIvNWj8LY6rVwW%2Fc09NfYg3Q5IvFRAxpqzNUGRu5Odvmno5yZj%2F2rMoZqoIM1tXYS1SOBw%2FLHCswqOsGq%2B0slUrEtwvitJRy8wLD3Y8lbMT2zHA3SWQu8bFd%2B%2B%2Bjn3c%2BVTSb2FkE6hWbPoXp4VzceD%2Fo3AgkgsmCGFpOlRWt0wnGOcsK6s0oQ%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"IOS-牛仔单品-0408",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d040253480410ff8ee6a9e5086ee741f3fb674cf6f39702026d7f0400&amp;hy=SH&amp;storeid=32303137303832353034333232323030306132666331313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:103,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=U1yjZ%2BxwYQbCgbvSiCl7sdIQbkIlw%2BK38Q87PiH%2B2A0U147V7yYHvMdwUgyY3rxyxyCzKNTxp1d7SuvgHltNZfl5KO10DjFvngfguSdBSGEX1mrrezc%2FSM757ZuoeLmOkKbwz1L1IXV54smUztL3iElnrcrFJO5YnsnxJYBEidtS1J%2FKTgkNsgP%2BBFHbXVc4FeAdrzscb5%2F7U0%2B5Q9lz8mipql9wAChjCOJRE5XxDDMys8Ugu9cVFDueqZmsS9bs6B1mdZ4AD6arzM%2FPaZ6%2FxkYDaadvcYhVvEphp6qfCeqx%2FX3y1vvh9asbCy4EkQt7IDsXZmZ4PpK%2BjKUu8yvViytKBuJPf6jGmpbgGYSfl1ppjGIYA0fhZsHSqwU%2BIBeF9netPpt23GXK894wKMbKlIuxy7IV5BnzJ67zrl4iO%2BdDZCh%2BoCsG0MEwApmTPy88ctS%2FjsF1mxNPpkRLxiddExCmEek9Q4HHrCyAUztemEudqlbNabEFZZMRnXnmHc8J3RkYx0M7eu7%2B1RQHbPYJmIQDYut%2B7n1E%2Fak1uzbAg6OoVuI3C4cCdMalbQQMRc%2BJDcQhTfBu%2BFzwUegTMx6PLtgw%2FtCgeC6YVOxxfLf9x8K4M0pkjjYLD5eKYjQEU3AKidPc3nrD64Y7fjtHsDNLuwajxDDgdxusixnJEuaADc8e%2BUcs8pHzr1fA8ndPFjfq1abY2U42C2yJkrcJs1CVUk7YNWcuk77E2hIFQ%2F8%2B%2B6E6BmaLdY1e6ZATjD0W%2BXxKGGtmAG2VhKWNrTMZeaTlLG7ZA04pLREUNjMeZjY20Z3tavH%2FdBvHctYTub1gqF5LOooF8f%2FM5OrjOy8aMheNOhCQCtleUhHM8F2iXcS0gJgJjVRMMGETPLhF%2B5gosi7wOBrYg%2BECoA6n9qqu2NJtSMEIvNWj8LY6rVwW%2Fc09NfYg3Q5IvFRAxpqzNUGRu5Odvmno5yZj%2F2rMoZqoIM1tXYS1SOBw%2FLHCswqOsGq%2B0slUrEtwvitJRy8wLD3Y8lbMT2zHA3SWQu8bFd%2B%2B%2Bjn3c%2BVTSb2FkE6hWbPoXp4VzceD%2Fo3AgkgsmCGFpOlRWt0wnGOcsK6s0oQ%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx0abnpizrj5oq3m00",
type:"0",
url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4&amp;weixinadkey=3cd216b7f0cabb3fd88ead2f48df5b44d3906580063ce9c182d4571e9e24ea657458ed9501be0ffec77716211c50162f&amp;ticket=2t3fxa7gwijlf&amp;gdt_vid=wx0abnpizrj5oq3m00&amp;md5sum=&amp;weixinadinfo=14690166.wx0abnpizrj5oq3m00.0.1",
watermark_type:0
},
pt_104:{
ad_desc:"",
aid:"10824252",
app_info:{
apk_name:"com.dushe.movie",
apk_url:"http://imtt.dd.qq.com/16891/B957D57DF9BA262E7ED8588E746E3B6F.apk?fsname=com.dushe.movie_1.0.10_12.apk&amp;csr=1bca",
app_id:1105719791,
app_md5:"B957D57DF9BA262E7ED8588E746E3B6F",
app_name:"毒舌电影",
app_rating:4.95802,
app_size:14312989,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/B957D57DF9BA262E7ED8588E746E3B6F.apk?fsname=com.dushe.movie_1.0.10_12.apk&amp;csr=1bca",
category:[],
channel_id:"000116083635343432333337",
desc:"挑选好片拒绝烂片、千万影迷聚集的影视社区！1、评电影：这里提供真实、无水军的电影评分，看片前查一下，从此告别烂片；2、找汁源：海量视频资源，找你想看的片，从此不再苦苦求种；3、喷电影：一群毒舌家族老司机，陪你神侃各类影视话题，由浅入深，渐入佳境；4、毒舌影评：毒舌家族每日推荐有料的影视播报，以毒舌刻薄的作风，保证片片优质；5、我的想看：想看的电影，售票时间、影评资讯等消息让你抢先知道，不再错过。---用户评价摘选---关注毒舌电影以来帮我省了不少钱，好片推荐烂片预警！ -by 生命如墙这样说真话不怕得罪人的app我真是第一次见，选片前刷一下很有必要 -by 鬼叫影评独到，不偏不倚，推荐的影片还提供资源，很棒。 -by Wayne虽然叫“毒舌”两字，却是影评界的一道清流，不做作，必看影评！-by tianxie相信毒舌不会让热爱电影的朋友失望，中国影评的评分标杆！ -by 凡人小康app的开机电影就让我爱上了！评分制度、功能编排、电影预告等都很用心在做，以后电影评分来这里了 -by 桐桐桐铜内容和功能都很不错，很喜欢UI，nice App! -by DryLhcl公众号：毒舌电影微博：@毒舌电影网址：www.dushemovie.com反馈邮箱：support@youhaoxi.cn",
down_count:364220,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_52414231_1493103610/256",
new_feature:"1.1.4版本特性1、全新首页—查找内容更爽了，各种分类一目了然；2、影评、视频增加快捷入口，历史／热门内容清晰呈现；",
signature_md5:"93850477387C9C3E7381EE4A1CB9A702",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_52414231_1_1498021362/330|http://pp.myapp.com/ma_pic2/0/shot_52414231_2_1498021362/330|http://pp.myapp.com/ma_pic2/0/shot_52414231_3_1498021362/330|http://pp.myapp.com/ma_pic2/0/shot_52414231_4_1498021362/330|http://pp.myapp.com/ma_pic2/0/shot_52414231_5_1498021362/330",
url_scheme:"",
version_code:12
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=EUK6sIITQ%2BIiZgPsXYcyFSLopRX%2BTrpH2F3CF7L%2BTekYp3IvCiBsRaVsRD9fH5fFjeHDFUV50Bg4pAAo6txt4VZMsQ97th8VwccNUbOKyPgtc0iCJW0zreAllxM5u4s8ajB08xXisvtL1zgv9Bw4%2FwSbjo%2FdjoAJM%2FINrWWbbRlH0GKQejxRh1HnUdZ0KnAdGCn5tGakYtL8anfAjq3uJpHjqtZd4JczeHnnT9lMbTnJskpMqmCjP5xmhV6mDt%2FLY3HkTq9QGPPPLqTJKtSQMpTSmgYqtQmfnjtWEr9L%2FBn4rxR6MFJg3AIxf6fUylI%2B5FSuMZKmTx4moN1YK8FYuyy1dNQRRXU022PGpM7vbIZWrPn0MM5Mbo8QGeWj5CBykWWfacC3lBIjut1HwPSJHeHDjhQOhaNQSBG27FGkad6g3LR6ZPlW6A6adVbtRC4jnojBO53yq5Cq4FnhWQdVPOpprYpwF3gbf%2Fh%2FdNJRD7tivQK1WdApXnC%2BzOXT5BGLONzUBoWzii097jlR0bLddaL8YTribN8eft9f1rmy4uVSbViXQK9o0xmPqqSW5nJ9rMLybyBKTnWnVzcCLk4ou3%2BE7PARc5G%2FSxPyh7894cIqocbF5nzNlqntYKlk%2FzFEgpoRRy0anSIsZZ7NmNDsOeLDi3kVd8yyzLDxLhmMPqpfCnzEg9Elcni6fnhddlRm2XHkVkb8Hde27BZDr1DOk21rrDg5jCkVJ0FvlH30s3MXZBoF03Fbvwl%2B5qvleiqbp86Bcu%2F6mhMjZa%2BbcanMlw22QydRW%2Bvg3hVs%2BfsKMrPlumQ7ZEZwMl5LDsrH7cSKg%2BbX7GQLhWMBmT3U%2FmA3JiVBwMg%2FAlo9XrPi4Lqav9QOHBN%2FxCM%2B7ZBQmUiLeUTU7hvPK11npdV0XeOfz1RUO3SvDvY3BaA9s2uGPPpTZFArzGQlIFLGYEHKXHQgXUVZ3a%2FgWbyTV4lj8cAMOZcdQl6z4uC6mr%2FU",
biz_appid:"",
group_id:"",
hint_txt:"毒舌安卓-0425",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d04025348041087654e9c4648f82e7956612b4c5ee3c5020271b00400&amp;hy=SH&amp;storeid=32303137303432353038313431343030306262326663313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:104,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=EUK6sIITQ%2BIiZgPsXYcyFSLopRX%2BTrpH2F3CF7L%2BTekYp3IvCiBsRaVsRD9fH5fFjeHDFUV50Bg4pAAo6txt4VZMsQ97th8VwccNUbOKyPgtc0iCJW0zreAllxM5u4s8ajB08xXisvtL1zgv9Bw4%2FwSbjo%2FdjoAJM%2FINrWWbbRlH0GKQejxRh1HnUdZ0KnAdGCn5tGakYtL8anfAjq3uJpHjqtZd4JczeHnnT9lMbTnJskpMqmCjP5xmhV6mDt%2FLY3HkTq9QGPPPLqTJKtSQMpTSmgYqtQmfnjtWEr9L%2FBn4rxR6MFJg3AIxf6fUylI%2B5FSuMZKmTx4moN1YK8FYuyy1dNQRRXU022PGpM7vbIZWrPn0MM5Mbo8QGeWj5CBykWWfacC3lBIjut1HwPSJHeHDjhQOhaNQSBG27FGkad6g3LR6ZPlW6A6adVbtRC4jnojBO53yq5Cq4FnhWQdVPOpprYpwF3gbf%2Fh%2FdNJRD7tivQK1WdApXnC%2BzOXT5BGLONzUBoWzii097jlR0bLddaL8YTribN8eft9f1rmy4uVSbViXQK9o0xmPqqSW5nJ9rMLybyBKTnWnVzcCLk4ou3%2BE7PARc5G%2FSxPyh7894cIqocbF5nzNlqntYKlk%2FzFEgpoRRy0anSIsZZ7NmNDsOeLDi3kVd8yyzLDxLhmMPqpfCnzEg9Elcni6fnhddlRm2XHkVkb8Hde27BZDr1DOk21rrDg5jCkVJ0FvlH30s3MXZBoF03Fbvwl%2B5qvleiqbp86Bcu%2F6mhMjZa%2BbcanMlw22QydRW%2Bvg3hVs%2BfsKMrPlumQ7ZEZwMl5LDsrH7cSKg%2BbX7GQLhWMBmT3U%2FmA3JiVBwMg%2FAlo9XrPi4Lqav9QOHBN%2FxCM%2B7ZBQmUiLeUTU7hvPK11npdV0XeOfz1RUO3SvDvY3BaA9s2uGPPpTZFArzGQlIFLGYEHKXHQgXUVZ3a%2FgWbyTV4lj8cAMOZcdQl6z4uC6mr%2FU",
ticket:"2mkwms35zbept",
traceid:"wx0xqjkdkhmcohlk00",
type:"0",
url:"http://mp.weixin.qq.com/mp/ad_app_info?app_id=1105719791&amp;weixinadkey=5d88339b5cfb77fadd16963a27c22be50cd646e79a1276b85299ae7c7ea395d9536df4d6b3b0ad4a0c6de9943af1b328&amp;ticket=2mkwms35zbept&amp;gdt_vid=wx0xqjkdkhmcohlk00&amp;channel_id=000116083635343432333337&amp;md5sum=B957D57DF9BA262E7ED8588E746E3B6F&amp;weixinadinfo=10824252.wx0xqjkdkhmcohlk00.0.1#wechat_redirect",
watermark_type:0
},
pt_105:{
hint_txt:"80元优惠券你领了吗-ios",
url:"https://mp.weixin.qq.com/mp/ad_biz_info?__biz=MzAwMzIwNDA5NA==&sn=b649ca44a99325d90147a954abd57c08&weixinadkey=f8597c40a1e1d9b133e3da0a9c4cb10ebb0657fabcb11b4faaee411dd00cdd0061ecacfbb361101c212434c607091057&ticket=2tkzedhfavvnh&gdt_vid=wx0ystdughnrwkeg00&weixinadinfo=14883338.wx0ystdughnrwkeg00.0.1#wechat_redirect",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=3zgXCdMPKdJy%2BCQSBW9ArACqYTwyMmlVq8olKeVviDZKfHlHsAS7tVrHrzSh7nduOcqOhf2%2FzrTaV4e3I2%2F0B5HpazXfnl1q5sI%2Bf27kr5FYovuDu5ZeUCz2k95%2B8gTFSMBCkyV5s790Mbt5pB%2BPKX6asfAkwkNGZ9lzFXhNFQUGoIkL8%2FehLI5UPJfnGNgdUN%2F0rNjjLeIcuXsILLv5%2FzfzgUMcTT9mAdkmyW%2FiSbVxy91lEC3GnMkz1Z126D%2B59mH51Kg%2BcdjeR%2BG2%2FZ87PX9JzoU4iQn%2Bt2OxQzX24HYSlG5R7eiMqlzltHaEw9FuuHD34hluU41PN6xX4nUpetU06Nc0U3cYMSaVIOGFWcSMPhFx4tl8xhnGXYOIf4jh8%2Bhz14wlu%2Fvglcn0YLGZuxOXREweMOACXyu02iP4l8Daud5%2BvJOfFvM930NL9yE%2Fwcw6TRWRPD1uEHP%2F1byGbMjW4GO2K2STTi%2F8B3W3ZDaocDit6G3kP4oiVhge8Ft5xcf%2FmcKebkWqNEZsmJrl68vrY4dXwrl1u6wXKhjOOhwEGHOkSkCFwXHOBICsNLAlODu3oo8R%2BQ1Wj7g715VYIv8ZNW3WoeaHWKvX6Zvpf1EgKLRj1FxIZ5joFi2eOkOU2jYWih9JBKuuT8sPMlmWeRQFMgaZ5Rvdt1wjMwD%2BVZ9XnXvE8ipEP9v2UQfhg4TDBxjkX13nsA7%2B1Tt7%2B%2FAi7wQoattaw5CWx7juwYCKcY%2FJgtFgM4wKhdKZalAyGx3Z%2BIUU%2Bew8o2lZeqnRemvGXT9HrPIP2O0VY5vHBPlQLtZuZeoHYfO5lpjduNlrHu%2Fxdd5SjNp75PWGdBA%2BcyBtKulCYSv5KoMxC6hYWxs8eoeTXEWBQtduZI2nd%2Ftmxgxem4p30GululT7jNTjunuNap%2FUFbKbgN2%2Bh9z9nFArWCH2muXmA17KRWmh88CUH3zRo2xgJF2XgsFwvbByrWINS%2FKT%2BXSCPey77nOkQx2R3O0uFePCLKlbXTf9cqsRiM%2BLdSyBCrN9j8ee1yN0faEW7tkjPeVRDpmkUONNr7dYgFtS%2BaJrjxnRx8wf4cxsJrqFHhqo5ma6o83SqAUEsPpftCh%2Bwn52cLUO7XepeqA7ZtU%3D",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=3zgXCdMPKdJy%2BCQSBW9ArACqYTwyMmlVq8olKeVviDZKfHlHsAS7tVrHrzSh7nduOcqOhf2%2FzrTaV4e3I2%2F0B5HpazXfnl1q5sI%2Bf27kr5FYovuDu5ZeUCz2k95%2B8gTFSMBCkyV5s790Mbt5pB%2BPKX6asfAkwkNGZ9lzFXhNFQUGoIkL8%2FehLI5UPJfnGNgdUN%2F0rNjjLeIcuXsILLv5%2FzfzgUMcTT9mAdkmyW%2FiSbVxy91lEC3GnMkz1Z126D%2B59mH51Kg%2BcdjeR%2BG2%2FZ87PX9JzoU4iQn%2Bt2OxQzX24HYSlG5R7eiMqlzltHaEw9FuuHD34hluU41PN6xX4nUpetU06Nc0U3cYMSaVIOGFWcSMPhFx4tl8xhnGXYOIf4jh8%2Bhz14wlu%2Fvglcn0YLGZuxOXREweMOACXyu02iP4l8Daud5%2BvJOfFvM930NL9yE%2Fwcw6TRWRPD1uEHP%2F1byGbMjW4GO2K2STTi%2F8B3W3ZDaocDit6G3kP4oiVhge8Ft5xcf%2FmcKebkWqNEZsmJrl68vrY4dXwrl1u6wXKhjOOhwEGHOkSkCFwXHOBICsNLAlODu3oo8R%2BQ1Wj7g715VYIv8ZNW3WoeaHWKvX6Zvpf1EgKLRj1FxIZ5joFi2eOkOU2jYWih9JBKuuT8sPMlmWeRQFMgaZ5Rvdt1wjMwD%2BVZ9XnXvE8ipEP9v2UQfhg4TDBxjkX13nsA7%2B1Tt7%2B%2FAi7wQoattaw5CWx7juwYCKcY%2FJgtFgM4wKhdKZalAyGx3Z%2BIUU%2Bew8o2lZeqnRemvGXT9HrPIP2O0VY5vHBPlQLtZuZeoHYfO5lpjduNlrHu%2Fxdd5SjNp75PWGdBA%2BcyBtKulCYSv5KoMxC6hYWxs8eoeTXEWBQtduZI2nd%2Ftmxgxem4p30GululT7jNTjunuNap%2FUFbKbgN2%2Bh9z9nFArWCH2muXmA17KRWmh88CUH3zRo2xgJF2XgsFwvbByrWINS%2FKT%2BXSCPey77nOkQx2R3O0uFePCLKlbXTf9cqsRiM%2BLdSyBCrN9j8ee1yN0faEW7tkjPeVRDpmkUONNr7dYgFtS%2BaJrjxnRx8wf4cxsJrqFHhqo5ma6o83SqAUEsPpftCh%2Bwn52cLUO7XepeqA7ZtU%3D",
traceid:"wx0ystdughnrwkeg00",
group_id:"",
ticket:"2tkzedhfavvnh",
aid:"14883338",
pt:105,
image_url:"",
ad_desc:"",
biz_appid:"wxfe55a3afa49537b6",
biz_info:{
user_name:"gh_974472b359a3",
nick_name:"每日优鲜会员店",
is_subscribed:1,
head_img:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM5O1JC938qZ9IIBmUnlW6QAvyIEuIkn2YcwAHCKVqibzZQ/0",
biz_uin:3003204094
},
pos_type:0,
watermark_type:0,
logo:"",
card_info:{
card_logo_url:"http://mmbiz.qpic.cn/mmbiz/fVRBnicEsiceRpwp7fIX8NmIBEWKXicAEyT8to01Wd8f49bdFMRB24CsA71Hs7asnfBMqZEOlbsjDpELNBP3XGfIQ/0?wx_fmt=jpeg",
card_title:"来就送，全场不限购",
card_brand_name:"每日优鲜",
card_id:"pLdaCt1yKL9u8auHF9Pl5MX9V3Jc",
card_outer_id:"wx0ystdughnrwkeg00_14883338_14883339",
card_ext:'{"code":"","timestamp":1504008556,"signature":"bc543819d991d6df1b446e1cbd52b43693ae0320","openid":"","source_scene":"SOURCE_SCENE_APPMSG_JSAPI","outer_id":0,"unique_id":"","outer_str":"","user_card":{}}'
},
is_cpm:0,
dest_type:0
},
pt_107:{
hint_txt:"香港",
url:"http://clickc.admaster.com.cn/c/a90369,b1882040,c2132,i0,m101,8a2,8b2,h?weixinadkey=b8edb659e79a4c21932d4d5d919b363863a8b6fc1e403d13274587beab13366c0fc8b26e60a6b4b418a4703d9c7ad495&gdt_vid=wx0rvwt6sm654f6200&weixinadinfo=14884284.wx0rvwt6sm654f6200.0.1",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=MxsJYgnw6iZWfQYjtG9x4aaLEaVH%2FrkkV%2Bs8ttfNZRnOUrbNLRNSMQNOgrzWshG7E57vLfXXbE6hmpkHgIlBzyAJowHYjDT8NsBWh1WrdXi2Y587%2FaZJPLWRn9wjcYJ0XjlYoB2ey6pHq8HT%2BtVkO%2B7stg9mmEvJ%2BNcK61TluidVdPGMsIMGqhBQRP%2BcRs4IaLWRqbqo18FgKEpDgRrjfz82gTMJ0qKcC1UQjQ28JFmPCKZvEbKVjWWQ5DwGpTmMc8oqi%2BnnB87tb3ZRJYx5advhI7s3%2FKAZVviZdkod6YaJzgJR9mm7cp8l1GR3Gld6ysesphqyNARtt9C4LVN%2FuAHTc3E5kH6lvrlAc9s0AM8%2B%2BLOBLjd0ltYVEzu2mkBblGyBmj%2BqvDqej15qeQZZUxwFGg6WlK5FEOZArSBaJEPgZFunxoYwbcpo%2Fz95cmusktYLSbccA9DNORhz8VvHffii3GSqSywZ4hLyne0YNp8o0jwWARw0DYlmnrd36nOsG6u37jkQrjKXCO1OEfGA00lZpKbLghVR06PUtfgGU%2FsceHwpSVYpRtqkpn4QnIoKngOG1%2FFr6VJdj%2BkauF94pWd7emXic2d7qcCyNh%2B1jcLOCR4SfcV33gXq%2FbGE41cCHjH3POIcS17ZnxMdMyaMw0SQQYsgTfByZPSFMWKy3%2FAT6DQLrHX9RoxGzv%2Bae7Cbo3VOlcvrX5ZU08Js%2FtEqFFTB3DOMV%2Bkz6%2BdFxSY2firnG9AsZuwsosu7toBW4wQQLoxf3pWCHsire4%2F6uO7SojOqzTyReH%2BxmR%2BiZ4bZq1ikH1ie5WKVgTUWC71fRKHDc0N6S5Vox0O%2BrfHU3Ew0%2FHyHaIh4tzRsSHjfedzNAYNh5bMppchpPpxfmOlA12aUN0P2DEW83bpJjHuq6Yb5whpG0RSsHOjYORxh46JvuJ%2F3ttAqijAnDZ5K5TokwYC6UCkcQL6ZlYUezONHfEcYPZCimrSryDHEu5hJqCuz2xa12jG1UWru22WSWUp9Mh20dN2oBgQy1V0Va14s4AvtnSld1bbFx8ywEuk5RKPSZMSHL%2F%2BnGfIsX4S8Qdl9Pg%2BxrR%2BjnMhasek%3D",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=MxsJYgnw6iZWfQYjtG9x4aaLEaVH%2FrkkV%2Bs8ttfNZRnOUrbNLRNSMQNOgrzWshG7E57vLfXXbE6hmpkHgIlBzyAJowHYjDT8NsBWh1WrdXi2Y587%2FaZJPLWRn9wjcYJ0XjlYoB2ey6pHq8HT%2BtVkO%2B7stg9mmEvJ%2BNcK61TluidVdPGMsIMGqhBQRP%2BcRs4IaLWRqbqo18FgKEpDgRrjfz82gTMJ0qKcC1UQjQ28JFmPCKZvEbKVjWWQ5DwGpTmMc8oqi%2BnnB87tb3ZRJYx5advhI7s3%2FKAZVviZdkod6YaJzgJR9mm7cp8l1GR3Gld6ysesphqyNARtt9C4LVN%2FuAHTc3E5kH6lvrlAc9s0AM8%2B%2BLOBLjd0ltYVEzu2mkBblGyBmj%2BqvDqej15qeQZZUxwFGg6WlK5FEOZArSBaJEPgZFunxoYwbcpo%2Fz95cmusktYLSbccA9DNORhz8VvHffii3GSqSywZ4hLyne0YNp8o0jwWARw0DYlmnrd36nOsG6u37jkQrjKXCO1OEfGA00lZpKbLghVR06PUtfgGU%2FsceHwpSVYpRtqkpn4QnIoKngOG1%2FFr6VJdj%2BkauF94pWd7emXic2d7qcCyNh%2B1jcLOCR4SfcV33gXq%2FbGE41cCHjH3POIcS17ZnxMdMyaMw0SQQYsgTfByZPSFMWKy3%2FAT6DQLrHX9RoxGzv%2Bae7Cbo3VOlcvrX5ZU08Js%2FtEqFFTB3DOMV%2Bkz6%2BdFxSY2firnG9AsZuwsosu7toBW4wQQLoxf3pWCHsire4%2F6uO7SojOqzTyReH%2BxmR%2BiZ4bZq1ikH1ie5WKVgTUWC71fRKHDc0N6S5Vox0O%2BrfHU3Ew0%2FHyHaIh4tzRsSHjfedzNAYNh5bMppchpPpxfmOlA12aUN0P2DEW83bpJjHuq6Yb5whpG0RSsHOjYORxh46JvuJ%2F3ttAqijAnDZ5K5TokwYC6UCkcQL6ZlYUezONHfEcYPZCimrSryDHEu5hJqCuz2xa12jG1UWru22WSWUp9Mh20dN2oBgQy1V0Va14s4AvtnSld1bbFx8ywEuk5RKPSZMSHL%2F%2BnGfIsX4S8Qdl9Pg%2BxrR%2BjnMhasek%3D",
traceid:"wx0rvwt6sm654f6200",
group_id:"",
ticket:"",
aid:"14884284",
pt:107,
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d04025348041097f8416e7dba80185eb1ce3584b92b3402030119700400&hy=SH&storeid=32303137303832393038343831383030306162333336313336666664393337313561333230613030303030303664&bizid=1023",
ad_desc:"",
biz_appid:"",
pos_type:0,
watermark_type:2,
logo:"",
is_cpm:0,
dest_type:1
},
pt_108:{
hint_txt:"",
url:"http://www.bmw.com.cn/zh/all-models/5-series/sedan/2017/campaign.html?bmw=dis:G38-launch:G30:m_wechhx_17-g38-pd-g38-soc_hxa_am_kol12&weixinadkey=c3e62068f8f6b72b3dfc3a80ea462979a552431fd42aaae1dfffd5c4184a9fc5a6d6788fb07ea9834ea46f0979708832&gdt_vid=wx0bm4j5xpmdnsnw00&weixinadinfo=10464868.wx0bm4j5xpmdnsnw00.1.1",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=jAt%2BjtzubuFN%2FlLgCHrg2VDh7mykjsR9eRRCq4rl4diohJDfjJVbYwz6t%2BdFfbCXPPs2X3F%2BDexoo%2FXRTEtXKb5B%2BbuCK2mldAwsBMe7w4TrtbdFJdXPvcyL8kYqHCmjjlVy8SjjSjQBboxdpEY1rSeq8Npv0CHN3I1FyHm0vWSkbTvHQ4LvkBJJrw0UGvnLdAy7g4S1InwJeFrW4Cwv9E7rSmPd%2FU9lQwOIdrshIiYlVpRJuQ0yYcI9dJ%2BvnLfN5RlSzXYYbyxlsbZZDslHoEzWwuKfgg7ytoxYlIdXzguHqfawMW90v7vm5v7GTgjRnwdYBEHyrhKliLIFEzWGL5VFhgVD%2B9jKxi%2FphBFPqv0oS7oJUpLThQ8lYP%2FUzspxRTHvPV0ihF1lemXfZ4q7LY3NSXOYsHY%2BtdbEmbXa7EaCmS63bi6GGQTzduFRB5MgpdhSjTPE%2Fq9HqsNU63tU2z2VOUfpXlf0ZL4x%2BaV0UZFKFVc8gfUJCThLk2g37XOiiK%2Bh07p3%2BEI7%2FBiSEfTwDGTqDo9aAOjSYFIq7nGgPhfANjbLPloSeALLlzeulZY9HiiViaV%2BXAlI2zo5GzLSYJNp6bVtimJufEwro7Q0dP5MWfVbREhJ0fZnR3ZYB42VlYSvSLHzn5SjpNwCGfeMGFeR6s9M1C48goH83kChTbHtgaWGXDEyDw5LbZagYZvBGfze1%2BS1G9TLbavn4YvSOgpN6P55wBzx3jgaba%2BmblOoq9QHTNNGuOv9g4X3x7ikFXXmomdM4FpeZWQV4RPByLH2HXs3ntmqpKxcJfXD1VD5XaTYBOcBHcS%2FRXrECMv%2F3bN8%2BBLko%2B66w9yGQsFoxdsRJCgDhOTxRzodVdFfN%2FAFB%2FiJx89rJhinepZi3X00OLJWQTVs4Ro%3D",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=jAt%2BjtzubuFN%2FlLgCHrg2VDh7mykjsR9eRRCq4rl4diohJDfjJVbYwz6t%2BdFfbCXPPs2X3F%2BDexoo%2FXRTEtXKb5B%2BbuCK2mldAwsBMe7w4TrtbdFJdXPvcyL8kYqHCmjjlVy8SjjSjQBboxdpEY1rSeq8Npv0CHN3I1FyHm0vWSkbTvHQ4LvkBJJrw0UGvnLdAy7g4S1InwJeFrW4Cwv9E7rSmPd%2FU9lQwOIdrshIiYlVpRJuQ0yYcI9dJ%2BvnLfN5RlSzXYYbyxlsbZZDslHoEzWwuKfgg7ytoxYlIdXzguHqfawMW90v7vm5v7GTgjRnwdYBEHyrhKliLIFEzWGL5VFhgVD%2B9jKxi%2FphBFPqv0oS7oJUpLThQ8lYP%2FUzspxRTHvPV0ihF1lemXfZ4q7LY3NSXOYsHY%2BtdbEmbXa7EaCmS63bi6GGQTzduFRB5MgpdhSjTPE%2Fq9HqsNU63tU2z2VOUfpXlf0ZL4x%2BaV0UZFKFVc8gfUJCThLk2g37XOiiK%2Bh07p3%2BEI7%2FBiSEfTwDGTqDo9aAOjSYFIq7nGgPhfANjbLPloSeALLlzeulZY9HiiViaV%2BXAlI2zo5GzLSYJNp6bVtimJufEwro7Q0dP5MWfVbREhJ0fZnR3ZYB42VlYSvSLHzn5SjpNwCGfeMGFeR6s9M1C48goH83kChTbHtgaWGXDEyDw5LbZagYZvBGfze1%2BS1G9TLbavn4YvSOgpN6P55wBzx3jgaba%2BmblOoq9QHTNNGuOv9g4X3x7ikFXXmomdM4FpeZWQV4RPByLH2HXs3ntmqpKxcJfXD1VD5XaTYBOcBHcS%2FRXrECMv%2F3bN8%2BBLko%2B66w9yGQsFoxdsRJCgDhOTxRzodVdFfN%2FAFB%2FiJx89rJhinepZi3X00OLJWQTVs4Ro%3D",
traceid:"wx0bm4j5xpmdnsnw00",
group_id:"",
ticket:"",
aid:"10464868",
pt:108,
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410843862ace59d7f54684e8636e547179d02030107250400&hy=SH&storeid=32303137303431313130333130363030303433643732313336666664393336663561333230613030303030303664&bizid=1023",
ad_desc:"",
biz_appid:"wx32aa823f78e5f6ad",
biz_info:{
user_name:"gh_f917083b43f6",
nick_name:"宝马中国",
is_subscribed:0,
head_img:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM76uydt9p5uZibiapePLb7Fq9uohicmOyqphtUVfBAapY6Bg/0",
biz_uin:2399998701
},
pos_type:3,
watermark_type:2,
logo:"",
is_cpm:1,
dest_type:0
},
pt_112:{
ad_desc:"",
aid:"14693949",
app_info:{
apk_name:"com.vipshop.iphone",
apk_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
app_id:417200582,
app_md5:"",
app_name:"唯品会 - 全球精选 正品特卖",
app_rating:4.5,
app_size:177868800,
app_type:0,
appinfo_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
category:["购物","生活"],
channel_id:"",
desc:"",
down_count:0,
icon_url:"http://mmbiz.qpic.cn/mmbiz_jpg/QxcpzGS56acDgouyWHPicmB7uddoozlibww6EFq9dxplGGnTm89rxMYxGSvO6MPwABPI6fUxaZKzxcJBqbNqsR8Q/0",
new_feature:"",
signature_md5:"",
snap_shots:"",
url_scheme:"",
version_code:0
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=dzPi6nSDBnUeIy2F22yf%2BRcXSt9Mowsho0QDRtu7vZ99upmzsmxqZNyoOHuOD9PlyAWcottz9uYBorF30lIRkKpMxis%2BAEYckXqka%2F3BkAvAC5QAOfjWW2BWRrDMLFjYbHNaw3CCKFLAjpcBvPCp1QDTKBwGB6zaPDnDi94Y4K0Cjb3SOYLvW1SZbDbjDeMnPePjvx0QbhEUGNVqjlKKN1es23L4fsxA%2F7iL%2FNAj0YDS4IneMCe2M2T%2Fq49a7lwX8dchCyJ6g6qTE5yLXRPfHK0AklwHe9lam1Bp2ECs6DMBqbSVrs2%2BHP9G0HGevSBpM%2Fzsdzk6cWBaD2ZgL6RumRPxPwUeyJ2AHkY2u105cdsFfbHsUYNASgKvnaO4X38Y1Z2QuPH9amrHlVXyGuiZvO5uR2yT3rKLzjTd%2F6fKWWqT%2Fazr0rxYjo2oSYdzLG01lOh8zuFlYOojcRjeEsgaOTF03wnD6TK%2FhT7bA8dAtUjV7l%2F8asbPKW0RhJFodllHwPsm8%2FHOP3%2FfF29R9AyPcR6GD0vQSfjR5iwjhNa5F07aGlqWUtNAixvC7DY51sJluBMMf1PJ9p2itkjbLHA52vXt0l9WuLraoPM6LbR8zocssCDSlbant2mAKEIAB%2F8N4DLQGTrsPSBIE90VhE%2BRpaZWkBI%2FuhnCzDJoC7x4LtCmj01YRwFFMoCL8VT71z2f4buxqsqLSsE0t3fvQRn8YXuUv1X1vHEIVnD14ixD0gOkWIFJkpBH%2BV91S7ZP%2BbALie4LjkzxumDWj2RDBraUPogOn2yEm8H7zoAMs%2F%2B0WN0R8iMNuM79OcZqGMsDS2n5r4NBztFcuhXdi3Sr8hMhMfqLc2YLbwSbUGzWEbCq1OH01DTPn2uwHy2vBUf5pT4mVvTHjXYNLKmoSfisbnBCiv1pnU2kh09zaJacDRyCmjOkOmDMZgt1HjtCpwcR5tFQ%2FmMhGkHqy%2FFe6lWqggbiaj%2FT04oR7Btlfd51astFioXTHtmtUVyqwlTRftjl%2ByRyKZ9%2F3ZuWxWRgJNQX%2FaSsgAVggxTZp18neL1rVS21a%2F3fIDNk5EUlhBqTsHzjGStOQwG2YvVSQOk%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"IOS-牛仔单品-0408",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d04025348041003cbda0b46790c0aaabd593d59a13048020300c2780400&amp;hy=SH&amp;storeid=32303137303832353035353332333030306433313263313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:112,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=dzPi6nSDBnUeIy2F22yf%2BRcXSt9Mowsho0QDRtu7vZ99upmzsmxqZNyoOHuOD9PlyAWcottz9uYBorF30lIRkKpMxis%2BAEYckXqka%2F3BkAvAC5QAOfjWW2BWRrDMLFjYbHNaw3CCKFLAjpcBvPCp1QDTKBwGB6zaPDnDi94Y4K0Cjb3SOYLvW1SZbDbjDeMnPePjvx0QbhEUGNVqjlKKN1es23L4fsxA%2F7iL%2FNAj0YDS4IneMCe2M2T%2Fq49a7lwX8dchCyJ6g6qTE5yLXRPfHK0AklwHe9lam1Bp2ECs6DMBqbSVrs2%2BHP9G0HGevSBpM%2Fzsdzk6cWBaD2ZgL6RumRPxPwUeyJ2AHkY2u105cdsFfbHsUYNASgKvnaO4X38Y1Z2QuPH9amrHlVXyGuiZvO5uR2yT3rKLzjTd%2F6fKWWqT%2Fazr0rxYjo2oSYdzLG01lOh8zuFlYOojcRjeEsgaOTF03wnD6TK%2FhT7bA8dAtUjV7l%2F8asbPKW0RhJFodllHwPsm8%2FHOP3%2FfF29R9AyPcR6GD0vQSfjR5iwjhNa5F07aGlqWUtNAixvC7DY51sJluBMMf1PJ9p2itkjbLHA52vXt0l9WuLraoPM6LbR8zocssCDSlbant2mAKEIAB%2F8N4DLQGTrsPSBIE90VhE%2BRpaZWkBI%2FuhnCzDJoC7x4LtCmj01YRwFFMoCL8VT71z2f4buxqsqLSsE0t3fvQRn8YXuUv1X1vHEIVnD14ixD0gOkWIFJkpBH%2BV91S7ZP%2BbALie4LjkzxumDWj2RDBraUPogOn2yEm8H7zoAMs%2F%2B0WN0R8iMNuM79OcZqGMsDS2n5r4NBztFcuhXdi3Sr8hMhMfqLc2YLbwSbUGzWEbCq1OH01DTPn2uwHy2vBUf5pT4mVvTHjXYNLKmoSfisbnBCiv1pnU2kh09zaJacDRyCmjOkOmDMZgt1HjtCpwcR5tFQ%2FmMhGkHqy%2FFe6lWqggbiaj%2FT04oR7Btlfd51astFioXTHtmtUVyqwlTRftjl%2ByRyKZ9%2F3ZuWxWRgJNQX%2FaSsgAVggxTZp18neL1rVS21a%2F3fIDNk5EUlhBqTsHzjGStOQwG2YvVSQOk%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx0yep5orkdfvofu00",
type:"0",
url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4&amp;weixinadkey=b562294f6542f5f06567317aef77f34650af02b6f13068dd9194cc80ea5d8fd177047dd133d89ad6e4eb8f6aba73ce96&amp;ticket=2t3fxa7gwijlf&amp;gdt_vid=wx0yep5orkdfvofu00&amp;md5sum=&amp;weixinadinfo=14693949.wx0yep5orkdfvofu00.0.1",
watermark_type:0
},
pt_112x1:{
ad_desc:"",
aid:"14693949",
app_info:{
apk_name:"com.vipshop.iphone",
apk_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
app_id:417200582,
app_md5:"",
app_name:"唯品会 - 全球精选 正品特卖",
app_rating:4.5,
app_size:177868800,
app_type:0,
appinfo_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
category:["购物","生活"],
channel_id:"",
desc:"",
down_count:0,
icon_url:"http://mmbiz.qpic.cn/mmbiz_jpg/QxcpzGS56acDgouyWHPicmB7uddoozlibww6EFq9dxplGGnTm89rxMYxGSvO6MPwABPI6fUxaZKzxcJBqbNqsR8Q/0",
new_feature:"",
signature_md5:"",
snap_shots:"",
url_scheme:"vipshop://goHome?tra_from=tra%3Atlkelyf1%3A%3A%3A%3A",
version_code:0
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=dzPi6nSDBnUeIy2F22yf%2BRcXSt9Mowsho0QDRtu7vZ99upmzsmxqZNyoOHuOD9PlyAWcottz9uYBorF30lIRkKpMxis%2BAEYckXqka%2F3BkAvAC5QAOfjWW2BWRrDMLFjYbHNaw3CCKFLAjpcBvPCp1QDTKBwGB6zaPDnDi94Y4K0Cjb3SOYLvW1SZbDbjDeMnPePjvx0QbhEUGNVqjlKKN1es23L4fsxA%2F7iL%2FNAj0YDS4IneMCe2M2T%2Fq49a7lwX8dchCyJ6g6qTE5yLXRPfHK0AklwHe9lam1Bp2ECs6DMBqbSVrs2%2BHP9G0HGevSBpM%2Fzsdzk6cWBaD2ZgL6RumRPxPwUeyJ2AHkY2u105cdsFfbHsUYNASgKvnaO4X38Y1Z2QuPH9amrHlVXyGuiZvO5uR2yT3rKLzjTd%2F6fKWWqT%2Fazr0rxYjo2oSYdzLG01lOh8zuFlYOojcRjeEsgaOTF03wnD6TK%2FhT7bA8dAtUjV7l%2F8asbPKW0RhJFodllHwPsm8%2FHOP3%2FfF29R9AyPcR6GD0vQSfjR5iwjhNa5F07aGlqWUtNAixvC7DY51sJluBMMf1PJ9p2itkjbLHA52vXt0l9WuLraoPM6LbR8zocssCDSlbant2mAKEIAB%2F8N4DLQGTrsPSBIE90VhE%2BRpaZWkBI%2FuhnCzDJoC7x4LtCmj01YRwFFMoCL8VT71z2f4buxqsqLSsE0t3fvQRn8YXuUv1X1vHEIVnD14ixD0gOkWIFJkpBH%2BV91S7ZP%2BbALie4LjkzxumDWj2RDBraUPogOn2yEm8H7zoAMs%2F%2B0WN0R8iMNuM79OcZqGMsDS2n5r4NBztFcuhXdi3Sr8hMhMfqLc2YLbwSbUGzWEbCq1OH01DTPn2uwHy2vBUf5pT4mVvTHjXYNLKmoSfisbnBCiv1pnU2kh09zaJacDRyCmjOkOmDMZgt1HjtCpwcR5tFQ%2FmMhGkHqy%2FFe6lWqggbiaj%2FT04oR7Btlfd51astFioXTHtmtUVyqwlTRftjl%2ByRyKZ9%2F3ZuWxWRgJNQX%2FaSsgAVggxTZp18neL1rVS21a%2F3fIDNk5EUlhBqTsHzjGStOQwG2YvVSQOk%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"IOS-牛仔单品-0408",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d04025348041003cbda0b46790c0aaabd593d59a13048020300c2780400&amp;hy=SH&amp;storeid=32303137303832353035353332333030306433313263313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:112,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=dzPi6nSDBnUeIy2F22yf%2BRcXSt9Mowsho0QDRtu7vZ99upmzsmxqZNyoOHuOD9PlyAWcottz9uYBorF30lIRkKpMxis%2BAEYckXqka%2F3BkAvAC5QAOfjWW2BWRrDMLFjYbHNaw3CCKFLAjpcBvPCp1QDTKBwGB6zaPDnDi94Y4K0Cjb3SOYLvW1SZbDbjDeMnPePjvx0QbhEUGNVqjlKKN1es23L4fsxA%2F7iL%2FNAj0YDS4IneMCe2M2T%2Fq49a7lwX8dchCyJ6g6qTE5yLXRPfHK0AklwHe9lam1Bp2ECs6DMBqbSVrs2%2BHP9G0HGevSBpM%2Fzsdzk6cWBaD2ZgL6RumRPxPwUeyJ2AHkY2u105cdsFfbHsUYNASgKvnaO4X38Y1Z2QuPH9amrHlVXyGuiZvO5uR2yT3rKLzjTd%2F6fKWWqT%2Fazr0rxYjo2oSYdzLG01lOh8zuFlYOojcRjeEsgaOTF03wnD6TK%2FhT7bA8dAtUjV7l%2F8asbPKW0RhJFodllHwPsm8%2FHOP3%2FfF29R9AyPcR6GD0vQSfjR5iwjhNa5F07aGlqWUtNAixvC7DY51sJluBMMf1PJ9p2itkjbLHA52vXt0l9WuLraoPM6LbR8zocssCDSlbant2mAKEIAB%2F8N4DLQGTrsPSBIE90VhE%2BRpaZWkBI%2FuhnCzDJoC7x4LtCmj01YRwFFMoCL8VT71z2f4buxqsqLSsE0t3fvQRn8YXuUv1X1vHEIVnD14ixD0gOkWIFJkpBH%2BV91S7ZP%2BbALie4LjkzxumDWj2RDBraUPogOn2yEm8H7zoAMs%2F%2B0WN0R8iMNuM79OcZqGMsDS2n5r4NBztFcuhXdi3Sr8hMhMfqLc2YLbwSbUGzWEbCq1OH01DTPn2uwHy2vBUf5pT4mVvTHjXYNLKmoSfisbnBCiv1pnU2kh09zaJacDRyCmjOkOmDMZgt1HjtCpwcR5tFQ%2FmMhGkHqy%2FFe6lWqggbiaj%2FT04oR7Btlfd51astFioXTHtmtUVyqwlTRftjl%2ByRyKZ9%2F3ZuWxWRgJNQX%2FaSsgAVggxTZp18neL1rVS21a%2F3fIDNk5EUlhBqTsHzjGStOQwG2YvVSQOk%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx0yep5orkdfvofu00",
type:"0",
url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4&amp;weixinadkey=b562294f6542f5f06567317aef77f34650af02b6f13068dd9194cc80ea5d8fd177047dd133d89ad6e4eb8f6aba73ce96&amp;ticket=2t3fxa7gwijlf&amp;gdt_vid=wx0yep5orkdfvofu00&amp;md5sum=&amp;weixinadinfo=14693949.wx0yep5orkdfvofu00.0.1",
watermark_type:0
},
pt_113:{
ad_desc:"",
aid:"10708726",
app_info:{
apk_name:"hk.socap.tigercoach",
apk_url:"http://imtt.dd.qq.com/16891/CAB8BFEC6A56A568B019AAAD8359154E.apk?fsname=hk.socap.tigercoach_1.0_1.apk&amp;csr=97c2",
app_id:1105677653,
app_md5:"CAB8BFEC6A56A568B019AAAD8359154E",
app_name:"老虎教练",
app_rating:5,
app_size:15414811,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/CAB8BFEC6A56A568B019AAAD8359154E.apk?fsname=hk.socap.tigercoach_1.0_1.apk&amp;csr=97c2",
category:[],
channel_id:"",
desc:"#约课记录 按时提醒# 高效管理会员约课情况，60秒帮你轻松搞定所有工作安排#数据报告 一键分享# 各项智能、精准的数据报告，供你多渠道任性分享#排行目标 数据说话# 更直观的对比，更有效的激励，教练有实力、会员进步大，我们在用数据说话",
down_count:10091,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_42368321_1492425259/256",
new_feature:"#约课记录 按时提醒# 高效管理会员约课情况，60秒帮你轻松搞定所有工作安排#数据报告 一键分享# 各项智能、精准的数据报告，供你多渠道任性分享#排行目标 数据说话# 更直观的对比，更有效的激励，教练有实力、会员进步大，我们在用数据说话",
signature_md5:"56561B3882F1704E6C070855DFCA0419",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_42368321_1_1493898503/330|http://pp.myapp.com/ma_pic2/0/shot_42368321_2_1493898503/330|http://pp.myapp.com/ma_pic2/0/shot_42368321_3_1493898503/330|http://pp.myapp.com/ma_pic2/0/shot_42368321_4_1493898503/330|http://pp.myapp.com/ma_pic2/0/shot_42368321_5_1493898503/330",
url_scheme:"",
version_code:1
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=dIFwHXIFg1LnLplm4XFpVvOsBLGRuJMlJpKQQevQAxvNSC3qXhDqEExWurQSh7n0coc2om8S3leZNkUSl%2BWyS3IsDIA4V20O9zzXMs%2Bfy5cFQiBqNUyLSJgXnsguJHhymSX%2FVsi3JO42WEZjZPI%2BUC6s8WNf2DqBd6efhGVxgEY3h6Tk%2BbHtCl7PKnYU7GAyfZDzZnXokAesrahNHgLHbDTLdtOjgKEYQBiBoU8GEMWXkBFPR3sZvhSwAPYX9o7qFDsu2JjpyEM0mGjG0BAnfWrBMQYixHUvWi%2B4aJlZlrTa%2B2sUIuV8bBGgk6%2B%2BFhhbtAks%2BmyyxHLJTpt9udAmE%2FDh6N535fNoFLXO1KHmA6i7GoANQ2CrMhLMYUewwPrEJ2WIWjfk7BdHPYwRLlBraqE%2B1jxX64GgtTg7lvuhDfM3aJYZEpFAi3uIMpzQvK%2BLeTzjR9q45WCNVPWDf4KpXLANcyN%2BCIjoUm0H0bpy7FVXs07M98Ezlk6xen%2FRZVGU1KoZ3EnGWh951rt8Mi4hkZFc43E6ePY0RP2dHc5JprBI2JZ0nr9b%2F4NJUw1%2FnPeaQHlZWWDmKmrjQuJN%2BMLnDUX%2Fqr3Gfos%2FlWWYBCf3Zrojn1i0k64b6wU4ivkh1wubQV54dt0fGLZo3gIHd0QGX15a8QkBa8QqWhzfNMiADzGUqQUAXNfQpRdk3t9ijhSJcoRCYgyQmf8zbx%2FwV5L8mdbexOoUUnmFJtDYoRKRRmn%2FD0cNDXMVGSJBfvvpKnZLAOwpyItrZigifitX9NzpdnU9KTh7J4dk%2BS5eB3s61yFzh98RqkevaZ2nqRZSR8bXoFLSGVfsPAOa0kx3BkxmEB4HAdqKszeGrymjrP3VyDi0%2BjY%2B2sA62rXA%2FtPz7xXiwtAYYexWEJZ1gQVIbgaxfNB32kVqtaMG63nfP76O9yu7JEReIc6%2FCiAX7lXbBfqKxSk5VsPKfKEZoX7M9KIUUq8po6z91cg4",
biz_appid:"",
group_id:"",
hint_txt:"健身教练的黑科技|生成精美训练记录",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d04025348041029a2949fb496566907ee0d9ed2067be2020221350400&amp;hy=SH&amp;storeid=32303137303432303039353134393030303933623462313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:113,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=dIFwHXIFg1LnLplm4XFpVvOsBLGRuJMlJpKQQevQAxvNSC3qXhDqEExWurQSh7n0coc2om8S3leZNkUSl%2BWyS3IsDIA4V20O9zzXMs%2Bfy5cFQiBqNUyLSJgXnsguJHhymSX%2FVsi3JO42WEZjZPI%2BUC6s8WNf2DqBd6efhGVxgEY3h6Tk%2BbHtCl7PKnYU7GAyfZDzZnXokAesrahNHgLHbDTLdtOjgKEYQBiBoU8GEMWXkBFPR3sZvhSwAPYX9o7qFDsu2JjpyEM0mGjG0BAnfWrBMQYixHUvWi%2B4aJlZlrTa%2B2sUIuV8bBGgk6%2B%2BFhhbtAks%2BmyyxHLJTpt9udAmE%2FDh6N535fNoFLXO1KHmA6i7GoANQ2CrMhLMYUewwPrEJ2WIWjfk7BdHPYwRLlBraqE%2B1jxX64GgtTg7lvuhDfM3aJYZEpFAi3uIMpzQvK%2BLeTzjR9q45WCNVPWDf4KpXLANcyN%2BCIjoUm0H0bpy7FVXs07M98Ezlk6xen%2FRZVGU1KoZ3EnGWh951rt8Mi4hkZFc43E6ePY0RP2dHc5JprBI2JZ0nr9b%2F4NJUw1%2FnPeaQHlZWWDmKmrjQuJN%2BMLnDUX%2Fqr3Gfos%2FlWWYBCf3Zrojn1i0k64b6wU4ivkh1wubQV54dt0fGLZo3gIHd0QGX15a8QkBa8QqWhzfNMiADzGUqQUAXNfQpRdk3t9ijhSJcoRCYgyQmf8zbx%2FwV5L8mdbexOoUUnmFJtDYoRKRRmn%2FD0cNDXMVGSJBfvvpKnZLAOwpyItrZigifitX9NzpdnU9KTh7J4dk%2BS5eB3s61yFzh98RqkevaZ2nqRZSR8bXoFLSGVfsPAOa0kx3BkxmEB4HAdqKszeGrymjrP3VyDi0%2BjY%2B2sA62rXA%2FtPz7xXiwtAYYexWEJZ1gQVIbgaxfNB32kVqtaMG63nfP76O9yu7JEReIc6%2FCiAX7lXbBfqKxSk5VsPKfKEZoX7M9KIUUq8po6z91cg4",
ticket:"2mkwms35zbept",
traceid:"wx0v7mxghuorbrlw00",
type:"0",
url:"http://mp.weixin.qq.com/mp/ad_app_info?app_id=1105677653&amp;weixinadkey=1ac83a824aee4692ead6e7d74359bdd06013385b1b5b3a7b3391054132701a381a2bbdfbf07d98e2ba4e6ab0b2c4b280&amp;ticket=2mkwms35zbept&amp;gdt_vid=wx0v7mxghuorbrlw00&amp;md5sum=CAB8BFEC6A56A568B019AAAD8359154E&amp;weixinadinfo=10708726.wx0v7mxghuorbrlw00.0.1#wechat_redirect",
watermark_type:0,
advertisement_num:1
},
pt_114:{
ad_desc:"",
aid:"10905397",
app_info:{
apk_name:"com.tencent.tmgp.dhqy.rww",
apk_url:"http://imtt.dd.qq.com/16891/149A641FAEBE52386459BA5D983BE882.apk?fsname=com.tencent.tmgp.dhqy.rww_3.0.0_20.apk&amp;csr=1bca",
app_id:1105907773,
app_md5:"149A641FAEBE52386459BA5D983BE882",
app_name:"大话奇缘",
app_rating:0,
app_size:184561734,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/149A641FAEBE52386459BA5D983BE882.apk?fsname=com.tencent.tmgp.dhqy.rww_3.0.0_20.apk&amp;csr=1bca",
category:[],
channel_id:"000116083635353932373736",
desc:"大话奇缘是一款画风Q萌的仙侠玄幻类RPG角色扮演手游，游戏以西游为题材，剧情丰富，画质精美，任务Q萌，技能华丽，感兴趣的小伙伴快来下载吧！特色玩法： 免费福利——飞行坐骑，上古神兵，免费获得，多重福利天天送！ 情怀再现——百位伙伴，自由搭配，打造最强：西游战队！ 激情策略——阵法相生，属性相克，战斗策略，完美呈现！ 剧情跌宕——西游无间道，谁才是终极BOSS？等你揭晓！真人社交——实时语音，轻松撩妹，战斗协同，玩转西游！",
down_count:1020,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_52459198_1493292084/256",
new_feature:"大话奇缘是一款画风Q萌的仙侠玄幻类RPG角色扮演手游，游戏以西游为题材，剧情丰富，画质精美，任务Q萌，技能华丽，感兴趣的小伙伴快来下载吧！特色玩法： 免费福利——飞行坐骑，上古神兵，免费获得，多重福利天天送！ 情怀再现——百位伙伴，自由搭配，打造最强：西游战队！ 激情策略——阵法相生，属性相克，战斗策略，完美呈现！ 剧情跌宕——西游无间道，谁才是终极BOSS？等你揭晓！真人社交——实时语音，轻松撩妹，战斗协同，玩转西游！",
signature_md5:"8C6830E0A094F25D33234BE821177A13",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_52459198_1_1493105480/330|http://pp.myapp.com/ma_pic2/0/shot_52459198_2_1493105480/330|http://pp.myapp.com/ma_pic2/0/shot_52459198_3_1493105480/330|http://pp.myapp.com/ma_pic2/0/shot_52459198_4_1493105480/330|http://pp.myapp.com/ma_pic2/0/shot_52459198_5_1493105480/330",
url_scheme:"",
version_code:20
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=SNN8szKTYJrVr0PUTMzYSyxLAUCqEMMoyjDPVclvxwIy1wJBdvESAM5soxT%2F5DZyl90WVyu7Kueft0Y97DeZo9u3w6Y1uUvD4VG8DdQq0mmEu9GHB%2Fn552HMJIlK%2FWSD7c8sHv4tA%2BatzhoV9k4cIs6lwbr1GXn7Jz4ilM7aBBkZfso61d5VnAwbIXKpg77sflvq1s0mAh2%2Bbwuwn1kTKi88KRtOqelM2SglvE2ApYua3vPkVnav1avSGeJm%2BE3%2FpLh9z0sdxKpUK7S57kn4Ts9V1MOvh3LFWy3Y%2FiTVylBKyqsqTVPFo9VoFjm6GkL0FRcnQxqSJfOtZDR64G2LZTmvda%2BCvDGbE57LGgQ74p75W8bsN2YwqSJYGFpMUJqnCzXQWth%2Bgr%2FWBeRAhEiUJ%2B9VFc%2Blj311ajdz%2BoZ9jNDbxKo9mnYgPSVPjqciyjYGH%2F3GN%2F7bs6Bc7b0YjNosS54XVXesnEL3%2BykGnp5%2BFFpzOu8VyOmxoBBKBC%2FKHBIUtdz8jUeP3mHgPOkmhaLyU9yIN%2Bs0ExHTy6VGexzN4kZwgOCO3peL4DqsPW%2Fu02WnMp6FcnZQQ2M%2Fy%2FQ%2BIxLkZXGtmcxZSgwGc0wVSywPlf7ZssvTyvrs1lAb6JNMGgiyH5crCnF9TKGHtjgkvjOC1bOmlyFHKmPN0rAGmbBXr3Qb30pOMDghWnrTwHdN%2FIKo7P4Xa3PoH655PcXl992CmX7a%2Bfb%2FCH%2FfFEm1ENn3JfHUZkd%2BrfVRHgRvneXU4diIYDNH9Q864XNit63YwEx5s%2BRoYQXWurwI7XdF7lIUN2vEIAd6mgIXwUd%2FoGaq7zWabp7vOHoy%2BvsL6jO8IdQaz4GS0ehruct4kzixVeHKIEXDTxTWZz%2Fg%2F64udCyNYFSkf1OOZKQ%2B4ijc4wEQf%2BCp1T1EpkkC%2BpArpTfqv%2FJHgPNkO3DFFD%2BdTER9Z7I%2F757e6o9GN%2BOn3YQn6hTttlpCW3hLzMOlo2J8%2FcIEdAsltJo%3D",
biz_appid:"",
group_id:"",
hint_txt:"修仙江湖安卓再营销1",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410b7986e563774afe71a689178232845cb020300bcd90400&amp;hy=SH&amp;storeid=32303137303432373131343631303030303161393963313336666664393331333630333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:114,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=SNN8szKTYJrVr0PUTMzYSyxLAUCqEMMoyjDPVclvxwIy1wJBdvESAM5soxT%2F5DZyl90WVyu7Kueft0Y97DeZo9u3w6Y1uUvD4VG8DdQq0mmEu9GHB%2Fn552HMJIlK%2FWSD7c8sHv4tA%2BatzhoV9k4cIs6lwbr1GXn7Jz4ilM7aBBkZfso61d5VnAwbIXKpg77sflvq1s0mAh2%2Bbwuwn1kTKi88KRtOqelM2SglvE2ApYua3vPkVnav1avSGeJm%2BE3%2FpLh9z0sdxKpUK7S57kn4Ts9V1MOvh3LFWy3Y%2FiTVylBKyqsqTVPFo9VoFjm6GkL0FRcnQxqSJfOtZDR64G2LZTmvda%2BCvDGbE57LGgQ74p75W8bsN2YwqSJYGFpMUJqnCzXQWth%2Bgr%2FWBeRAhEiUJ%2B9VFc%2Blj311ajdz%2BoZ9jNDbxKo9mnYgPSVPjqciyjYGH%2F3GN%2F7bs6Bc7b0YjNosS54XVXesnEL3%2BykGnp5%2BFFpzOu8VyOmxoBBKBC%2FKHBIUtdz8jUeP3mHgPOkmhaLyU9yIN%2Bs0ExHTy6VGexzN4kZwgOCO3peL4DqsPW%2Fu02WnMp6FcnZQQ2M%2Fy%2FQ%2BIxLkZXGtmcxZSgwGc0wVSywPlf7ZssvTyvrs1lAb6JNMGgiyH5crCnF9TKGHtjgkvjOC1bOmlyFHKmPN0rAGmbBXr3Qb30pOMDghWnrTwHdN%2FIKo7P4Xa3PoH655PcXl992CmX7a%2Bfb%2FCH%2FfFEm1ENn3JfHUZkd%2BrfVRHgRvneXU4diIYDNH9Q864XNit63YwEx5s%2BRoYQXWurwI7XdF7lIUN2vEIAd6mgIXwUd%2FoGaq7zWabp7vOHoy%2BvsL6jO8IdQaz4GS0ehruct4kzixVeHKIEXDTxTWZz%2Fg%2F64udCyNYFSkf1OOZKQ%2B4ijc4wEQf%2BCp1T1EpkkC%2BpArpTfqv%2FJHgPNkO3DFFD%2BdTER9Z7I%2F757e6o9GN%2BOn3YQn6hTttlpCW3hLzMOlo2J8%2FcIEdAsltJo%3D",
ticket:"2mkwms35zbept",
traceid:"wx0dzohrsr4j7ad200",
type:"0",
url:"http://mp.weixin.qq.com/mp/ad_app_info?app_id=1105907773&amp;weixinadkey=e359b1e7499e785130bda691aece8642ca35a75b0c70edde44eb07d0426f18f591cfbe09b7aa0a0eb33820487b26ae34&amp;ticket=2mkwms35zbept&amp;gdt_vid=wx0dzohrsr4j7ad200&amp;channel_id=000116083635353932373736&amp;md5sum=149A641FAEBE52386459BA5D983BE882&amp;weixinadinfo=10905397.wx0dzohrsr4j7ad200.0.1#wechat_redirect",
watermark_type:0
},
pt_114x1:{
ad_desc:"",
aid:"14725306",
app_info:{
apk_name:"com.achievo.vipshop",
apk_url:"http://imtt.dd.qq.com/16891/23B8B81AD9270BDB3310FACCA8B8B3B3.apk?fsname=com.achievo.vipshop_6.5.3_733.apk&amp;csr=1bca",
app_id:1101072624,
app_md5:"23B8B81AD9270BDB3310FACCA8B8B3B3",
app_name:"唯品会",
app_rating:4.35158,
app_size:42632348,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/23B8B81AD9270BDB3310FACCA8B8B3B3.apk?fsname=com.achievo.vipshop_6.5.3_733.apk&amp;csr=1bca",
category:[],
channel_id:"000116083636323838363139",
desc:"唯品会，全球精选，正品特卖！唯品会提供1折起的深度折扣，从此再也不用担心买不起正品大牌啦！ 1、深度折扣 限时特卖 品类齐全 每天早10点&amp;晚8点上新品 全场大牌深度折扣，1折起售，全网最实惠 服饰、美妆、亲子、居家多种品类，满足您的一站式购物需求 2、购物体验有保障 支持货到付款，先看实物再给钱 七天无条件退货，退货返还运费 3、全球知名特卖电商，美国上市公司，百分百正品保障 品牌直签授权，从根源杜绝假货 4、七成用户成为回头客 每天帮助两亿会员节省数亿元，享受“尊贵不贵”超过70%的会员买了又买，日日约会 5、直播.发现惊喜无处不在 为你精选最热时尚资讯、好玩活动，更有明星达人直播——穿搭、美妆、生活、母婴各类干货轻松GET！6、开通唯品花，分期付款0压力，3/6/9/12/18期，随心分期！立即下载，开启省钱之旅吧！ 【意见反馈】 官方微博：@唯品会 官方微信：“唯品会特卖“ 时刻倾听你的声音。",
down_count:287579385,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_8588_1503540559/256",
new_feature:"【活动预告】夏末刚走秋燥杀到！别忘了给肌肤添置保湿好物！唯品会905秋季美妆节，面膜精华和面霜超优惠！满199减100！更有0元领商品限量抢购！9月4日晚8点准时开抢，快来把秋冬美妆爆款抢回家！【近期更新】1、丰富首页品牌展示形式，帮你发现更多惊喜品牌；2、全新好物•签到，十万用户帮你选，视频30秒极速种草，深扒唯品会好物；3、详情页推出口红试妆功能，打开摄像头就可以在线试妆哦！颜色合不合适试试就知道啦；4、新增服务进度反馈，以后咨询过的问题进度可以在消息中心查看啦；5、增加了用户自助查询客服工单的功能，可快速查询工单进度。",
signature_md5:"0572A236AE97F777609471D99C118331",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_8588_1_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_2_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_3_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_4_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_5_1503975667/330",
url_scheme:"",
version_code:733
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=AGft%2FmcDKo9BVCqkzg57z2F3StLr6dwCcmiInStspj6ckzUQanM%2BLORkRPhfA5%2FkdbsPrq5xm3oXxPFONqEfImD1bmOOWWx93%2FCvt%2Ff0ikqtrP3q01iRMYoTgG6%2B8wCwXBdT8ctVl9MYWPfhwYK5tUl3Mppn0HfnOCTv3tA6y57r63x3bbuyqcAONLiOK%2Bo2EsEAoRXu2RGT%2BK3YiYqiGXag%2B4J44KLnRhZE0IwHhgbFh1vxXk4CfdlqUAjjF8LiKIw3U5G3MtlaNtpXUPBkuOYkXg2hVIGPg%2BpbCOCWTw6t8GijgfwpU5tXFGO5buAp3AtMX14GkvZ1FT83uJsWWXf3bIjUbJ02FAwFdmGmFGb%2BBGlsN6Onvb5vDjMfIjHWMsHsH%2FgV93kcctYk5fFHzaI1jcmqe%2BJ5lIxhEDT7rhL7fH6aEkFXrSaflT16yTtOjPOWIFnwqD816krNqX4peIEgwR%2FR2f8rLR%2BaUNP0IXCHXHyLNx8jpnyt%2FQSuwh1bcVCR7JXB9KeVEhDBfjs%2B77Dz2eb0PtEl7cJ3rLe8iwdk4HmNTt4GoqU1dIndeapxZhoqPzqxcKWWV901G08XFyn2FUV4z7%2Bisu6l286UzxZg7HBhyGhn663YjPAM29mI7oUD8RfVgR%2FXiqoRYWTMgf58RWoc1eQE5LHJlkXzehLvMKodaAmkSOEnao89d00x21q2i06GoLv4C9HsMQ%2BzwiU5tpZ9s0lvtAncw1bukMXKvIx7LD00uQ%2FWnsVF7BMlz0qHEy45NzfULJwdIe5opwFoqJS%2BxI1qUupdmzkdDQXd%2BfMIzbG%2B3G9AMcusfNXLbQWnCGqXpWF0kvkolC1V6aennoR0zYleSXMLNwspPrLq2yySKT0uAj1K6TjydVIHltFKC5VBjt6J%2BsSwvglTh23L6HH5MqOvKpjPVhYTU4QydmfMFB%2FK0HutVATvlkBJ6ChsQ00kCAPDlyEcOVN6L5gDSdglhzPDqFfG21wXH0rmt02dcdYIQzGOwOrPMnnM%2BJNUwlv0Y2BawwjcrmKoA%2B3kmR5s0SzFkUEpXV6d01hJ5Le7%2BP4LJ9yUBKEDVRvhpoU2bWy0THo%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"02包-单卡-双人长裙-0805",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d04025348041059e5cc48f3c3f284f7ffc2315ef55e78020300c4b40400&amp;hy=SH&amp;storeid=32303137303832353130323333323030303531363235313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:114,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=AGft%2FmcDKo9BVCqkzg57z2F3StLr6dwCcmiInStspj6ckzUQanM%2BLORkRPhfA5%2FkdbsPrq5xm3oXxPFONqEfImD1bmOOWWx93%2FCvt%2Ff0ikqtrP3q01iRMYoTgG6%2B8wCwXBdT8ctVl9MYWPfhwYK5tUl3Mppn0HfnOCTv3tA6y57r63x3bbuyqcAONLiOK%2Bo2EsEAoRXu2RGT%2BK3YiYqiGXag%2B4J44KLnRhZE0IwHhgbFh1vxXk4CfdlqUAjjF8LiKIw3U5G3MtlaNtpXUPBkuOYkXg2hVIGPg%2BpbCOCWTw6t8GijgfwpU5tXFGO5buAp3AtMX14GkvZ1FT83uJsWWXf3bIjUbJ02FAwFdmGmFGb%2BBGlsN6Onvb5vDjMfIjHWMsHsH%2FgV93kcctYk5fFHzaI1jcmqe%2BJ5lIxhEDT7rhL7fH6aEkFXrSaflT16yTtOjPOWIFnwqD816krNqX4peIEgwR%2FR2f8rLR%2BaUNP0IXCHXHyLNx8jpnyt%2FQSuwh1bcVCR7JXB9KeVEhDBfjs%2B77Dz2eb0PtEl7cJ3rLe8iwdk4HmNTt4GoqU1dIndeapxZhoqPzqxcKWWV901G08XFyn2FUV4z7%2Bisu6l286UzxZg7HBhyGhn663YjPAM29mI7oUD8RfVgR%2FXiqoRYWTMgf58RWoc1eQE5LHJlkXzehLvMKodaAmkSOEnao89d00x21q2i06GoLv4C9HsMQ%2BzwiU5tpZ9s0lvtAncw1bukMXKvIx7LD00uQ%2FWnsVF7BMlz0qHEy45NzfULJwdIe5opwFoqJS%2BxI1qUupdmzkdDQXd%2BfMIzbG%2B3G9AMcusfNXLbQWnCGqXpWF0kvkolC1V6aennoR0zYleSXMLNwspPrLq2yySKT0uAj1K6TjydVIHltFKC5VBjt6J%2BsSwvglTh23L6HH5MqOvKpjPVhYTU4QydmfMFB%2FK0HutVATvlkBJ6ChsQ00kCAPDlyEcOVN6L5gDSdglhzPDqFfG21wXH0rmt02dcdYIQzGOwOrPMnnM%2BJNUwlv0Y2BawwjcrmKoA%2B3kmR5s0SzFkUEpXV6d01hJ5Le7%2BP4LJ9yUBKEDVRvhpoU2bWy0THo%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx06ounuusvh332400",
type:"0",
url:"https://mp.weixin.qq.com/tp/ad_detail_info?page_key=d1ea7c579aa826b20831deeb2be29c24500b804c66d92198e217944f4ffc04343537d38c9c5edaef83117494d4bd03fa&amp;app_id=1101072624&amp;weixinadkey=c8dea834686b79294dabb8fc0d936f9000b26672b3b6d23cca9d8d2a2e886ec8270990708c5fde3ec574b5a2f3df1358&amp;ticket=2t3fxa7gwijlf&amp;gdt_vid=wx06ounuusvh332400&amp;channel_id=000116083636323838363139&amp;md5sum=23B8B81AD9270BDB3310FACCA8B8B3B3&amp;weixinadinfo=14725306.wx06ounuusvh332400.0.1#wechat_redirect",
watermark_type:0
},
pt_114x2:{
ad_desc:"",
aid:"14725306",
app_info:{
apk_name:"com.achievo.vipshop",
apk_url:"http://imtt.dd.qq.com/16891/23B8B81AD9270BDB3310FACCA8B8B3B3.apk?fsname=com.achievo.vipshop_6.5.3_733.apk&amp;csr=1bca",
app_id:1101072624,
app_md5:"23B8B81AD9270BDB3310FACCA8B8B3B3",
app_name:"唯品会",
app_rating:4.35158,
app_size:42632348,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/23B8B81AD9270BDB3310FACCA8B8B3B3.apk?fsname=com.achievo.vipshop_6.5.3_733.apk&amp;csr=1bca",
category:[],
channel_id:"000116083636323838363139",
desc:"唯品会，全球精选，正品特卖！唯品会提供1折起的深度折扣，从此再也不用担心买不起正品大牌啦！ 1、深度折扣 限时特卖 品类齐全 每天早10点&amp;晚8点上新品 全场大牌深度折扣，1折起售，全网最实惠 服饰、美妆、亲子、居家多种品类，满足您的一站式购物需求 2、购物体验有保障 支持货到付款，先看实物再给钱 七天无条件退货，退货返还运费 3、全球知名特卖电商，美国上市公司，百分百正品保障 品牌直签授权，从根源杜绝假货 4、七成用户成为回头客 每天帮助两亿会员节省数亿元，享受“尊贵不贵”超过70%的会员买了又买，日日约会 5、直播.发现惊喜无处不在 为你精选最热时尚资讯、好玩活动，更有明星达人直播——穿搭、美妆、生活、母婴各类干货轻松GET！6、开通唯品花，分期付款0压力，3/6/9/12/18期，随心分期！立即下载，开启省钱之旅吧！ 【意见反馈】 官方微博：@唯品会 官方微信：“唯品会特卖“ 时刻倾听你的声音。",
down_count:287579385,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_8588_1503540559/256",
new_feature:"【活动预告】夏末刚走秋燥杀到！别忘了给肌肤添置保湿好物！唯品会905秋季美妆节，面膜精华和面霜超优惠！满199减100！更有0元领商品限量抢购！9月4日晚8点准时开抢，快来把秋冬美妆爆款抢回家！【近期更新】1、丰富首页品牌展示形式，帮你发现更多惊喜品牌；2、全新好物•签到，十万用户帮你选，视频30秒极速种草，深扒唯品会好物；3、详情页推出口红试妆功能，打开摄像头就可以在线试妆哦！颜色合不合适试试就知道啦；4、新增服务进度反馈，以后咨询过的问题进度可以在消息中心查看啦；5、增加了用户自助查询客服工单的功能，可快速查询工单进度。",
signature_md5:"0572A236AE97F777609471D99C118331",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_8588_1_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_2_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_3_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_4_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_5_1503975667/330",
url_scheme:"vipshop://showGoodsDetail?pid=277250153&goodType=1&tra_from=tra%3A0xuoe90q%3A%3A%3A%3A",
version_code:733
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=AGft%2FmcDKo9BVCqkzg57z2F3StLr6dwCcmiInStspj6ckzUQanM%2BLORkRPhfA5%2FkdbsPrq5xm3oXxPFONqEfImD1bmOOWWx93%2FCvt%2Ff0ikqtrP3q01iRMYoTgG6%2B8wCwXBdT8ctVl9MYWPfhwYK5tUl3Mppn0HfnOCTv3tA6y57r63x3bbuyqcAONLiOK%2Bo2EsEAoRXu2RGT%2BK3YiYqiGXag%2B4J44KLnRhZE0IwHhgbFh1vxXk4CfdlqUAjjF8LiKIw3U5G3MtlaNtpXUPBkuOYkXg2hVIGPg%2BpbCOCWTw6t8GijgfwpU5tXFGO5buAp3AtMX14GkvZ1FT83uJsWWXf3bIjUbJ02FAwFdmGmFGb%2BBGlsN6Onvb5vDjMfIjHWMsHsH%2FgV93kcctYk5fFHzaI1jcmqe%2BJ5lIxhEDT7rhL7fH6aEkFXrSaflT16yTtOjPOWIFnwqD816krNqX4peIEgwR%2FR2f8rLR%2BaUNP0IXCHXHyLNx8jpnyt%2FQSuwh1bcVCR7JXB9KeVEhDBfjs%2B77Dz2eb0PtEl7cJ3rLe8iwdk4HmNTt4GoqU1dIndeapxZhoqPzqxcKWWV901G08XFyn2FUV4z7%2Bisu6l286UzxZg7HBhyGhn663YjPAM29mI7oUD8RfVgR%2FXiqoRYWTMgf58RWoc1eQE5LHJlkXzehLvMKodaAmkSOEnao89d00x21q2i06GoLv4C9HsMQ%2BzwiU5tpZ9s0lvtAncw1bukMXKvIx7LD00uQ%2FWnsVF7BMlz0qHEy45NzfULJwdIe5opwFoqJS%2BxI1qUupdmzkdDQXd%2BfMIzbG%2B3G9AMcusfNXLbQWnCGqXpWF0kvkolC1V6aennoR0zYleSXMLNwspPrLq2yySKT0uAj1K6TjydVIHltFKC5VBjt6J%2BsSwvglTh23L6HH5MqOvKpjPVhYTU4QydmfMFB%2FK0HutVATvlkBJ6ChsQ00kCAPDlyEcOVN6L5gDSdglhzPDqFfG21wXH0rmt02dcdYIQzGOwOrPMnnM%2BJNUwlv0Y2BawwjcrmKoA%2B3kmR5s0SzFkUEpXV6d01hJ5Le7%2BP4LJ9yUBKEDVRvhpoU2bWy0THo%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"02包-单卡-双人长裙-0805",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d04025348041059e5cc48f3c3f284f7ffc2315ef55e78020300c4b40400&amp;hy=SH&amp;storeid=32303137303832353130323333323030303531363235313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:114,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=AGft%2FmcDKo9BVCqkzg57z2F3StLr6dwCcmiInStspj6ckzUQanM%2BLORkRPhfA5%2FkdbsPrq5xm3oXxPFONqEfImD1bmOOWWx93%2FCvt%2Ff0ikqtrP3q01iRMYoTgG6%2B8wCwXBdT8ctVl9MYWPfhwYK5tUl3Mppn0HfnOCTv3tA6y57r63x3bbuyqcAONLiOK%2Bo2EsEAoRXu2RGT%2BK3YiYqiGXag%2B4J44KLnRhZE0IwHhgbFh1vxXk4CfdlqUAjjF8LiKIw3U5G3MtlaNtpXUPBkuOYkXg2hVIGPg%2BpbCOCWTw6t8GijgfwpU5tXFGO5buAp3AtMX14GkvZ1FT83uJsWWXf3bIjUbJ02FAwFdmGmFGb%2BBGlsN6Onvb5vDjMfIjHWMsHsH%2FgV93kcctYk5fFHzaI1jcmqe%2BJ5lIxhEDT7rhL7fH6aEkFXrSaflT16yTtOjPOWIFnwqD816krNqX4peIEgwR%2FR2f8rLR%2BaUNP0IXCHXHyLNx8jpnyt%2FQSuwh1bcVCR7JXB9KeVEhDBfjs%2B77Dz2eb0PtEl7cJ3rLe8iwdk4HmNTt4GoqU1dIndeapxZhoqPzqxcKWWV901G08XFyn2FUV4z7%2Bisu6l286UzxZg7HBhyGhn663YjPAM29mI7oUD8RfVgR%2FXiqoRYWTMgf58RWoc1eQE5LHJlkXzehLvMKodaAmkSOEnao89d00x21q2i06GoLv4C9HsMQ%2BzwiU5tpZ9s0lvtAncw1bukMXKvIx7LD00uQ%2FWnsVF7BMlz0qHEy45NzfULJwdIe5opwFoqJS%2BxI1qUupdmzkdDQXd%2BfMIzbG%2B3G9AMcusfNXLbQWnCGqXpWF0kvkolC1V6aennoR0zYleSXMLNwspPrLq2yySKT0uAj1K6TjydVIHltFKC5VBjt6J%2BsSwvglTh23L6HH5MqOvKpjPVhYTU4QydmfMFB%2FK0HutVATvlkBJ6ChsQ00kCAPDlyEcOVN6L5gDSdglhzPDqFfG21wXH0rmt02dcdYIQzGOwOrPMnnM%2BJNUwlv0Y2BawwjcrmKoA%2B3kmR5s0SzFkUEpXV6d01hJ5Le7%2BP4LJ9yUBKEDVRvhpoU2bWy0THo%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx06ounuusvh332400",
type:"0",
url:"https://mp.weixin.qq.com/tp/ad_detail_info?page_key=d1ea7c579aa826b20831deeb2be29c24500b804c66d92198e217944f4ffc04343537d38c9c5edaef83117494d4bd03fa&amp;app_id=1101072624&amp;weixinadkey=c8dea834686b79294dabb8fc0d936f9000b26672b3b6d23cca9d8d2a2e886ec8270990708c5fde3ec574b5a2f3df1358&amp;ticket=2t3fxa7gwijlf&amp;gdt_vid=wx06ounuusvh332400&amp;channel_id=000116083636323838363139&amp;md5sum=23B8B81AD9270BDB3310FACCA8B8B3B3&amp;weixinadinfo=14725306.wx06ounuusvh332400.0.1#wechat_redirect",
watermark_type:0
},
pt_115:{
hint_txt:"0818T1-1",
url:"https://mp.weixin.qq.com/mp/ad_biz_info?__biz=MzIyMjk2Njg2MA==&sn=f821cb9abd03c959eff7b3ffba906285&weixinadkey=93cea84ba7269f607ae7ee423d52add76b3f8054e06d8f1fa86b5ce3ac2bad86a93d71e8b1d945abf9c93107aae0a840&ticket=2tkzedhfavvnh&gdt_vid=wx0oos4rrnqayqba00&weixinadinfo=14889617.wx0oos4rrnqayqba00.0.1#wechat_redirect",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=mo%2F5irZnv0N04Au6tjLMXWWtZywtaaXCRFujSawbYqbcfg4%2B3M2Sdj2CvZd%2BtskYD2XUZWVPG2vNi0FI5QSJ5ztmvDiBKrC58q2Kyh8UXpp3xvrE44xt0BylT9NNv%2FWZEd8LLym%2FKC%2FYtAYaOgos37IMV2jucPefIZu1Ft0LF8ZEb523l34gjqd0kCJmlehjS0UuNT%2F8wXjj%2BteGnhLRzjBkiQtMr2L4GjR6Z1lvHg2I0smF5Ab%2FNKsy4BLaeFuEYQvacy0Y11MkTEPaqtpw2l71wcpU%2B1fp3tdJYoz%2B%2FucOCyw%2BmUhC9wWs9QMJWkybXzk8Wc5znweluGHkdQ2ZN%2BeBZZ9xgzcZJp5fXu6bfHzJZUniE0JqNgQqdvmJCLOrONUcVIO1%2BxTJXnISMswyNrgt10hr2M%2FC%2FuJEUeHzrjKac3EoQjVWmau7n2qIFvkVeC9Tor1%2F2Tef2fG26qpkrJ2VLOjB6MlAmEsSXlZkDe8QEltcgoTToeWOLrA%2FDcXKxXc2k6Ny0HHIpoHbpIo1Y9sKRsgmyoTfxDTMdzaWDBaoDTZtg%2BD3PjA1vi0Ox7RsDvaxqnxH3N%2FloseOVxhK6xBozlns0V0QC3pEJJTnwZdVTrLdBJTBWzPzRWbLHx2aMiew%2Bx6CqhkAT9h3Xjv64xKE4nUYEeheXIMFHOCXwMPWqMJ%2FAsIUz77V3X%2FhGDLGFBLBw2fPRVYl2%2BQLFobafcoKo6V1EBj4rFjW4ZSB8Et5qF16FwkLb22sVEh9LFk25YpqdWZzdUWZ25v50KF4Qjk0GgZ6bFYPYdM4C1E7BRqyPBjx8zgaAPYqhylYFkTewfa4Rqir%2BJhmmJtR7dU8cGKWHIaE4pfH2w405kFDDFPS7SflUb%2BM0WYk5YfYfP6Z0BwFN9S9MqCdCH132H4HF3djZOIcrKcObqi33pZOeYhUKoQFQA0HrPFRHpo0zFbN9xPn7eRwRzyYB%2BA5em9cw%2BS3FjCDrCtcHo3B7j01A2t9zxIBNLdVoE3GnEa%2BKePTLiV6FX0ijo4oSf7bbywakIvnu8sit1XqROG6p7nd5VuRrIEEeeJP5INrNor6XYkWzDLyqFGbI0gKoj2AgzzIOZw37zU8ooKz",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=mo%2F5irZnv0N04Au6tjLMXWWtZywtaaXCRFujSawbYqbcfg4%2B3M2Sdj2CvZd%2BtskYD2XUZWVPG2vNi0FI5QSJ5ztmvDiBKrC58q2Kyh8UXpp3xvrE44xt0BylT9NNv%2FWZEd8LLym%2FKC%2FYtAYaOgos37IMV2jucPefIZu1Ft0LF8ZEb523l34gjqd0kCJmlehjS0UuNT%2F8wXjj%2BteGnhLRzjBkiQtMr2L4GjR6Z1lvHg2I0smF5Ab%2FNKsy4BLaeFuEYQvacy0Y11MkTEPaqtpw2l71wcpU%2B1fp3tdJYoz%2B%2FucOCyw%2BmUhC9wWs9QMJWkybXzk8Wc5znweluGHkdQ2ZN%2BeBZZ9xgzcZJp5fXu6bfHzJZUniE0JqNgQqdvmJCLOrONUcVIO1%2BxTJXnISMswyNrgt10hr2M%2FC%2FuJEUeHzrjKac3EoQjVWmau7n2qIFvkVeC9Tor1%2F2Tef2fG26qpkrJ2VLOjB6MlAmEsSXlZkDe8QEltcgoTToeWOLrA%2FDcXKxXc2k6Ny0HHIpoHbpIo1Y9sKRsgmyoTfxDTMdzaWDBaoDTZtg%2BD3PjA1vi0Ox7RsDvaxqnxH3N%2FloseOVxhK6xBozlns0V0QC3pEJJTnwZdVTrLdBJTBWzPzRWbLHx2aMiew%2Bx6CqhkAT9h3Xjv64xKE4nUYEeheXIMFHOCXwMPWqMJ%2FAsIUz77V3X%2FhGDLGFBLBw2fPRVYl2%2BQLFobafcoKo6V1EBj4rFjW4ZSB8Et5qF16FwkLb22sVEh9LFk25YpqdWZzdUWZ25v50KF4Qjk0GgZ6bFYPYdM4C1E7BRqyPBjx8zgaAPYqhylYFkTewfa4Rqir%2BJhmmJtR7dU8cGKWHIaE4pfH2w405kFDDFPS7SflUb%2BM0WYk5YfYfP6Z0BwFN9S9MqCdCH132H4HF3djZOIcrKcObqi33pZOeYhUKoQFQA0HrPFRHpo0zFbN9xPn7eRwRzyYB%2BA5em9cw%2BS3FjCDrCtcHo3B7j01A2t9zxIBNLdVoE3GnEa%2BKePTLiV6FX0ijo4oSf7bbywakIvnu8sit1XqROG6p7nd5VuRrIEEeeJP5INrNor6XYkWzDLyqFGbI0gKoj2AgzzIOZw37zU8ooKz",
traceid:"wx0oos4rrnqayqba00",
group_id:"",
ticket:"2tkzedhfavvnh",
aid:"14889617",
pt:115,
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d04025348041080238f1cbb0dcd94d712c9bb4445b9fc020276060400&hy=SH&storeid=32303137303832393039333732333030303433366364313336666664393337313561333230613030303030303664&bizid=1023",
ad_desc:"",
biz_appid:"wxfab026d124c60311",
biz_info:{
user_name:"gh_471c30ca73ec",
nick_name:"轻松学彩铅画",
is_subscribed:0,
head_img:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM5GQibEnamPFlfoPCN8KqL04KjNeZ1A4RtpicPp1U8HR6Rw/0",
biz_uin:3222966860
},
pos_type:0,
watermark_type:0,
logo:"",
is_cpm:0,
dest_type:0
},
pt_116:{
ad_desc:"",
aid:"14076581",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=9u9Aw6%2FwMWEVo4a1mdoAYHzEl05e6WG1fx2sR5sbof9XpUdbc0ELf6w2KzosSymK3VzIhNjMSwrGIHlDPPMX9PUFxiXWVS3jBqPkrMXlQApQFO8aNBAJYlQ3RXZsvwpdPQuKUFDOwsTFzswX0x1Xyz0MFJ2FE%2Bjf%2B%2FpxJ3gxTOQ8YHi9RMfmbwFu9nT%2BhbaIJHwEEw6wTgw2zfLzJ3p8DQ%2FQwolEiPBiLS%2FdA7Y8C39TEYdPngh0spATFk3gao6l%2Bin0BFyibGMgBDfS%2BqPR3s7RTfXmCyR7QR3xRZi2wHYltGJmzPY20FIHfZ2ly21nmqGihcw1TAGVOgk1rVzP0Hf%2FwarGe8Y3m5IEcPAWOGHCzs%2FSl1bgFh8VtSjmo%2FBVIAM%2BKxfFXe0NXIottOVHrwBEW1GVVSULP2gZK4Jm%2BBnSql23UHKEdjB7uN3YJRFI%2B3EuPmtCyipsQsyy2tiAtCa%2FRmx1kWhLeZbgY3BNKihiA0R8V%2F9RQTKkF8ICH2CUfKK%2Fg0qRcY2VJBrFU462iPPjSGVWvpSdaPNPks0IVtfSidAc7IqKg9QNV0o%2FgzUMbd7X2TS8fM9IwVcGpc%2Bzdt4BSCSslhST7btQdsQiYlqxPaUFTjXFcso3gN4uPc7jzEM%2BfxPLnHDCshG0IYduAQDQl5FZGoygzEPOHC1ajJrYkqBU9FhPGIuJKuStquBQHWzqNhT9C3KoOV0nDkn661Qs2HzhD6O%2FlV%2BBQNUNXW62T8%2F80wcIVWpxmBrdGMcuv9IlfuhI413oMGuWLiiHVNhv6RgTzxN3WZgSYquVUHKZn0CQjxnbTiXWxcl8gK5Z7FmXhM1pPpWROqK9c9%2BSIb%2Bof6l%2BzeJn",
biz_appid:"wxb43647c46f347835",
biz_info:{
biz_uin:3098260700,
head_img:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM5SEBQsOxicWxVSl1WRpArKVydT7AWtzsIoL0XBBtZqIKQ/0",
is_subscribed:0,
nick_name:"广汽本田",
user_name:"gh_59ca0f11a65d"
},
dest_type:1,
group_id:"",
hint_txt:"",
image_url:"",
is_cpm:1,
logo:"",
pos_type:3,
pt:116,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=9u9Aw6%2FwMWEVo4a1mdoAYHzEl05e6WG1fx2sR5sbof9XpUdbc0ELf6w2KzosSymK3VzIhNjMSwrGIHlDPPMX9PUFxiXWVS3jBqPkrMXlQApQFO8aNBAJYlQ3RXZsvwpdPQuKUFDOwsTFzswX0x1Xyz0MFJ2FE%2Bjf%2B%2FpxJ3gxTOQ8YHi9RMfmbwFu9nT%2BhbaIJHwEEw6wTgw2zfLzJ3p8DQ%2FQwolEiPBiLS%2FdA7Y8C39TEYdPngh0spATFk3gao6l%2Bin0BFyibGMgBDfS%2BqPR3s7RTfXmCyR7QR3xRZi2wHYltGJmzPY20FIHfZ2ly21nmqGihcw1TAGVOgk1rVzP0Hf%2FwarGe8Y3m5IEcPAWOGHCzs%2FSl1bgFh8VtSjmo%2FBVIAM%2BKxfFXe0NXIottOVHrwBEW1GVVSULP2gZK4Jm%2BBnSql23UHKEdjB7uN3YJRFI%2B3EuPmtCyipsQsyy2tiAtCa%2FRmx1kWhLeZbgY3BNKihiA0R8V%2F9RQTKkF8ICH2CUfKK%2Fg0qRcY2VJBrFU462iPPjSGVWvpSdaPNPks0IVtfSidAc7IqKg9QNV0o%2FgzUMbd7X2TS8fM9IwVcGpc%2Bzdt4BSCSslhST7btQdsQiYlqxPaUFTjXFcso3gN4uPc7jzEM%2BfxPLnHDCshG0IYduAQDQl5FZGoygzEPOHC1ajJrYkqBU9FhPGIuJKuStquBQHWzqNhT9C3KoOV0nDkn661Qs2HzhD6O%2FlV%2BBQNUNXW62T8%2F80wcIVWpxmBrdGMcuv9IlfuhI413oMGuWLiiHVNhv6RgTzxN3WZgSYquVUHKZn0CQjxnbTiXWxcl8gK5Z7FmXhM1pPpWROqK9c9%2BSIb%2Bof6l%2BzeJn",
ticket:"",
traceid:"wx0wufunvuk63xfw00",
type:"0",
url:"http://www.ghac.cn/vehicles/honda/odyssey?weixinadkey=0c52ad5fd45796439b24582df9a6167361d5ab1e4457b2c9e96a29d5a19e3d1bc8bbf0e5df7591508a76757470b14928&amp;gdt_vid=wx0wufunvuk63xfw00&amp;weixinadinfo=14076581.wx0wufunvuk63xfw00.1.1",
video_info:{
displayHeight:540,
displayWidth:960,
thumbUrl:"http://wxsnsdythumb.video.qq.com/109/20250/snsvideodownload?filekey=30270201010420301e02016d040253480410192dd121d864094a06fcbf6ec03970380203017f900400&amp;hy=SH&amp;storeid=32303137303831313130303834353030306438353437313336666664393330323561333230613030303030303664&amp;bizid=1023",
videoUrl:"http://wxsnsdy.video.qq.com/105/20210/snsdyvideodownload?m=ae0e93b5b2522f71f468a5436b069b88&amp;filekey=30270201010420301e020169040253480410ae0e93b5b2522f71f468a5436b069b88020316f0e30400&amp;hy=SH&amp;storeid=32303137303831313130303834353030306463393866313336666664393330323561333230613030303030303639&amp;bizid=1023"
},
watermark_type:0
},
pt_118:{
ad_desc:"",
aid:"14764746",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=vhLToc08YoIbLWeWei4Bg7pV%2BwHRfxuAOVNgyFSkMcOWEahu%2BZjQS3OlU0CkEmbCIi3AGYy%2F4XSsY4vpWTITZhVT9yFbmKtfn%2BzsTUZ5R9w8l42vo8SoYn83DVVvkIlEhq0%2F4%2FpMscg9rAwHL1fyBkzASVOIdQ%2BPQFdogjbEYE%2B41dDXFxL%2B6D2UHDaFFS3AjC%2B%2Bpj9WNc8aX9AM%2FvU9qW6rTUNAsMOfUX7aL4rPhQ0tczOaUJLsxMiduhyvjV6aFlKpIXO5IXMkcr1Fu2GuT28DRpREydZKU9AW9c9oSs3R6qJdg1Fqw6DOpzy9pTdyKVsXm0sGOTGhlS6T9xkNiDkPgF%2BlFR%2Bneiwai4rzpJJFn5HPtu1vj120jbWODlJiCCrpkePbGIMXP0VC%2BQnvIzsqUDxm6EPYNJ49GKXUYKMsF8GYIBUfwrrx0W9OaQ%2B5U3tdiA7lxCtDJNLA21afqjm5UB5HjS5AVhPG8Wm2gdRIDjNBxmUeOQukF0djgecmuDKRQ3k8qChVVRIL8XoIlUuDVNs16BriQVuo3vC%2BWT7K5cYDE8QH%2BNqu33Ps2B1SsEtb1d7R0oTGkc7udyjo5Qdp%2BHbLjBqfPau2kXbVEsD%2FTbhb9lw%2F6dGult72nSSKMyqjDHiKqE51z7%2FMcwebV8A0pPdjS8U%2FHO5S6n4L%2B%2F9eZTpQmQR0VTw%2BQpJXg0EgzKGYPuG5BKdIF5YemAiZKpq6l7kooPSZU7XSzJxhGvKEQq5vKiweA7uArQuTvs4IcmPxyyP59pX6VLKLkOeHzJxbJWrkP%2BTT3s%2BGg3wwiAhr61XKCsa2iH2Xzud2%2B3eN5ommp6mJQxG%2FMfUFDIJTSV3%2BZq1Qec0MdxDLc%2BV6Dar%2FddfWZ543fQn6M92c2TQxwHWhAvfLnZDYzO7VbCFHfxCLV%2F6CvVz5MlKLW53y5fzFgx5kFhhAPmPmwv6WY%2Fqc%2FKWqVhcr3N9OUIQbc5KdewwSXGRQ8Xza%2Fm9JAZAXZw4FFdgE7mdjYRQ7wSaukFERlkWtcQcsO9BjioteQqEi6rp8gMqb2keyycsk0OC0LqfRYkG9q5SFOQ%3D%3D",
biz_appid:"",
dest_type:6,
group_id:"",
hint_txt:"电商推广-20170703-垃圾袋测试1",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410d51122abd9413058beee4748b45cdd640203013ca10400&amp;hy=SH&amp;storeid=32303137303832363135353434383030303231323435313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:4,
pt:119,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=vhLToc08YoIbLWeWei4Bg7pV%2BwHRfxuAOVNgyFSkMcOWEahu%2BZjQS3OlU0CkEmbCIi3AGYy%2F4XSsY4vpWTITZhVT9yFbmKtfn%2BzsTUZ5R9w8l42vo8SoYn83DVVvkIlEhq0%2F4%2FpMscg9rAwHL1fyBkzASVOIdQ%2BPQFdogjbEYE%2B41dDXFxL%2B6D2UHDaFFS3AjC%2B%2Bpj9WNc8aX9AM%2FvU9qW6rTUNAsMOfUX7aL4rPhQ0tczOaUJLsxMiduhyvjV6aFlKpIXO5IXMkcr1Fu2GuT28DRpREydZKU9AW9c9oSs3R6qJdg1Fqw6DOpzy9pTdyKVsXm0sGOTGhlS6T9xkNiDkPgF%2BlFR%2Bneiwai4rzpJJFn5HPtu1vj120jbWODlJiCCrpkePbGIMXP0VC%2BQnvIzsqUDxm6EPYNJ49GKXUYKMsF8GYIBUfwrrx0W9OaQ%2B5U3tdiA7lxCtDJNLA21afqjm5UB5HjS5AVhPG8Wm2gdRIDjNBxmUeOQukF0djgecmuDKRQ3k8qChVVRIL8XoIlUuDVNs16BriQVuo3vC%2BWT7K5cYDE8QH%2BNqu33Ps2B1SsEtb1d7R0oTGkc7udyjo5Qdp%2BHbLjBqfPau2kXbVEsD%2FTbhb9lw%2F6dGult72nSSKMyqjDHiKqE51z7%2FMcwebV8A0pPdjS8U%2FHO5S6n4L%2B%2F9eZTpQmQR0VTw%2BQpJXg0EgzKGYPuG5BKdIF5YemAiZKpq6l7kooPSZU7XSzJxhGvKEQq5vKiweA7uArQuTvs4IcmPxyyP59pX6VLKLkOeHzJxbJWrkP%2BTT3s%2BGg3wwiAhr61XKCsa2iH2Xzud2%2B3eN5ommp6mJQxG%2FMfUFDIJTSV3%2BZq1Qec0MdxDLc%2BV6Dar%2FddfWZ543fQn6M92c2TQxwHWhAvfLnZDYzO7VbCFHfxCLV%2F6CvVz5MlKLW53y5fzFgx5kFhhAPmPmwv6WY%2Fqc%2FKWqVhcr3N9OUIQbc5KdewwSXGRQ8Xza%2Fm9JAZAXZw4FFdgE7mdjYRQ7wSaukFERlkWtcQcsO9BjioteQqEi6rp8gMqb2keyycsk0OC0LqfRYkG9q5SFOQ%3D%3D",
ticket:"",
traceid:"wx0tgj5o4czvigfw00",
type:"0",
url:"/pages/detail/pages/pintuan/index?itemId=1k5o5oe&amp;activityId=1c3wby&amp;ptp=_qd._tengxun__4459884.152.1.0&amp;weixinadkey=bf9951d70e454c6438d959cbbea3735a227eebf2e96952441d1f0e26a0e758d51c82d4e9e270e0de56da8b15765db589&amp;gdt_vid=wx0tgj5o4czvigfw00&amp;weixinadinfo=14764746.wx0tgj5o4czvigfw00.1.1",
watermark_type:0,
weapp_info:{
original_id:"gh_78b4a2eb5f09"
}
},
pt_119:{
ad_desc:"",
aid:"11514588",
app_info:{
category:[],
url_scheme:""
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=JQl2DdYu2F7fedkmJMakuuz%2BcbjoYoLUkJpH4XNZmVm0HWz2TPzJ%2FUlM8oa9NRFc3LMhVYq7q0yx%2BpPIQHYhATPRmvWjJ%2FhQQ5448hZZ5IJgDUCW9pn9x6Oe6O5i4d94en4UyMt0amQR2vmmlvRpF8UeLC1GuYDNdwDxam5BYXHi6skDlCWX%2FqMBEx8U5oQ3rHOb%2F8C%2Bwi6dFuvehEcmmkgd%2BPXlC04faEgJaBioyZNQHNYbMoCHb9t0RyIyOsgZ0W50x0RCSKC5otfFA2EGByKcI2LsoWf52iA0HNtX7NS5BvJGapKD2hlq8XX8CPcOQuGtbyhZiVHLSRRkerxLLnygcFbxRWWI%2FLd%2FetjUrcER2vmmlvRpF8UeLC1GuYDNg6IebWC%2FQqg68WT3P8Rn3n81qcn%2FW05WniqeNPAjKXrEnXiVI5mJHq8Hq82QGeop5fsVLSzmhl6mj7L2YYJZsA6zOHkDNuAvdoZQCcICQLzLrq9T%2FfwpH5rrbM7MG0HhST%2BaKtynO5Zd3pDcTqoFzTJPd8nH7k1BAjLS75VSeovYjRJp%2BeK%2FGtueC%2BcYZ39GGcV%2F00UbYwWdGWbbwwx11UdxkwG4evYL%2FI85Qn5gKwatZ7zuhar29YXnFOdzMAG2bNNXXrZKs6ZkwY6zBR49ZY%2BRQQO0j6%2B9ZbC0F6yIi%2B93xrRiBWbzBg%3D%3D",
biz_appid:"",
dest_type:6,
group_id:"",
hint_txt:"ddd",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410cb06ce928fae4ffe0201207b80095469020300bdce0400&amp;hy=SH&amp;storeid=32303137303830373038313935303030303232316539313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:119,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=JQl2DdYu2F7fedkmJMakuuz%2BcbjoYoLUkJpH4XNZmVm0HWz2TPzJ%2FUlM8oa9NRFc3LMhVYq7q0yx%2BpPIQHYhATPRmvWjJ%2FhQQ5448hZZ5IJgDUCW9pn9x6Oe6O5i4d94en4UyMt0amQR2vmmlvRpF8UeLC1GuYDNdwDxam5BYXHi6skDlCWX%2FqMBEx8U5oQ3rHOb%2F8C%2Bwi6dFuvehEcmmkgd%2BPXlC04faEgJaBioyZNQHNYbMoCHb9t0RyIyOsgZ0W50x0RCSKC5otfFA2EGByKcI2LsoWf52iA0HNtX7NS5BvJGapKD2hlq8XX8CPcOQuGtbyhZiVHLSRRkerxLLnygcFbxRWWI%2FLd%2FetjUrcER2vmmlvRpF8UeLC1GuYDNg6IebWC%2FQqg68WT3P8Rn3n81qcn%2FW05WniqeNPAjKXrEnXiVI5mJHq8Hq82QGeop5fsVLSzmhl6mj7L2YYJZsA6zOHkDNuAvdoZQCcICQLzLrq9T%2FfwpH5rrbM7MG0HhST%2BaKtynO5Zd3pDcTqoFzTJPd8nH7k1BAjLS75VSeovYjRJp%2BeK%2FGtueC%2BcYZ39GGcV%2F00UbYwWdGWbbwwx11UdxkwG4evYL%2FI85Qn5gKwatZ7zuhar29YXnFOdzMAG2bNNXXrZKs6ZkwY6zBR49ZY%2BRQQO0j6%2B9ZbC0F6yIi%2B93xrRiBWbzBg%3D%3D",
ticket:"",
traceid:"wx0rugvht6pygczc00",
type:"0",
url:"/pages/detail/detail?id=1112&amp;share=true&amp;weixinadkey=e6945e4066ec2c5f5a7368948a8716eac2bde11af126a8f051891696e2017fcf12e5f5b0fa6672bc31acc2552727a77d&amp;gdt_vid=wx0rugvht6pygczc00&amp;weixinadinfo=11514588.wx0rugvht6pygczc00.0.1",
watermark_type:2,
weapp_info:{
original_id:"gh_6ee8536f381b"
}
}
};
return{
getAd:p
};
});define("appmsg/reward_entry.js",["biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","rt/appmsg/getappmsgext.rt.js"],function(e,t,n,r){
"use strict";
function a(e){
e&&(e.style.display="block");
}
function o(e){
e&&(e.style.display="none");
}
function i(){
p({
url:"/mp/getappmsgext?&f=json"+(window.send_time?"&send_time="+send_time:""),
data:{
__biz:biz,
appmsg_type:appmsg_type,
mid:mid,
sn:sn,
idx:idx,
scene:source,
title:encodeURIComponent(msg_title.htmlDecode()),
ct:ct,
devicetype:devicetype.htmlDecode(),
version:version.htmlDecode(),
is_need_reward:is_need_reward,
reward_uin_count:is_need_reward?3*w:0,
r:Math.random()
},
type:"post",
dataType:"json",
async:!0,
rtId:27613,
rtKey:50,
rtDesc:f,
success:function(e){
e&&(document.getElementById("js_reward_link")&&u.off(document.getElementById("js_reward_link"),"click",x),
s({
reward_total:e.reward_total_count,
reward_head_imgs:e.reward_head_imgs||[],
can_reward:e.can_reward,
timestamp:e.timestamp
}));
}
});
}
function d(e){
return function(t){
return"0"==window.wx_user_can_reward?void r("你已成为该公众号的黑名单用户，暂时无法赞赏。"):(t.preventDefault(),
void g.invoke("openUrlWithExtraWebview",{
url:e
},function(t){
t.err_msg.indexOf(":ok")>-1||(location.href=e);
}));
};
}
function s(e){
var t=window.innerWidth||document.documentElement.innerWidth,n=(Math.ceil((h-188)/42)+1)*Math.floor((t-15)/42);
_="http://mp.weixin.qq.com/mp/reward?act=getrewardheads&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&offset=0&count="+n+"&source=1#wechat_redirect";
var r="#wechat_redirect",s="https://mp.weixin.qq.com/bizmall/reward?act=showpage&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&timestamp="+e.timestamp+"&showwxpaytitle=1"+r,l=document.getElementById("js_reward_link");
l&&(g.on("activity:state_change",function(e){
if("onResume"==e.state_change||"onResume"==e.state){
var t=(new Date).valueOf();
if(-1!=navigator.userAgent.indexOf("Android")&&localStorage.getItem("lastOnresumeTime")&&t-parseInt(localStorage.getItem("lastOnresumeTime"))<=j)return;
localStorage.setItem("lastOnresumeTime",t),g.invoke("setNavigationBarColor",{
actionCode:"1"
}),i();
}
}),x=d(s),u.on(l,"click",x)),y=e.reward_head_imgs;
var w=c();
v.reward&&1==e.can_reward?(a(v.reward),u.on(window,"load",function(){
m&&(u.off(window,"scroll",m),u.on(window,"scroll",m));
})):o(v.reward);
var p=document.getElementById("js_reward_inner");
p&&w>0&&a(p);
var f=document.getElementById("js_reward_total");
f&&(f.innerText=e.reward_total,f.setAttribute("href",_));
}
function l(e,t){
var n=document.createElement("span");
n.className="reward_user_avatar";
var r=new Image;
return r.onload=function(){
window.logs&&window.logs.reward_heads_total++,r.onload=r.onerror=null;
},r.onerror=function(){
window.logs&&window.logs.reward_heads_total++,window.logs&&window.logs.reward_heads_fail++,
r.onload=r.onerror=null;
},r.src=t,n.appendChild(r),e.appendChild(n),n;
}
function c(){
if(y.length){
var e=document.getElementById("js_reward_list"),t=0,n=document.createDocumentFragment();
if(e){
for(var r=0,a=y.length;a>r&&(t++,l(n,y[r]),t!=3*w);++r);
t>w&&(e.className+=" tl"),e.innerHTML="",e.appendChild(n);
}
return t;
}
}
function m(){
var e=window.pageYOffset||document.documentElement.scrollTop;
e+h>v.reward.offsetTop&&(p({
type:"GET",
url:"/bizmall/reward?act=report&__biz="+biz+"&appmsgid="+mid+"&idx="+idx,
async:!0
}),u.off(window,"scroll",m),m=null);
}
var w,_,u=e("biz_common/dom/event.js"),p=e("biz_wap/utils/ajax.js"),g=e("biz_wap/jsapi/core.js"),f=e("rt/appmsg/getappmsgext.rt.js"),h=window.innerHeight||document.documentElement.clientHeight,v={
reward:document.getElementById("js_reward_area")
},y=[],j=500;
window.logs&&(window.logs.reward_heads_total=0,window.logs.reward_heads_fail=0);
var x=function(){};
return{
handle:function(e,t){
w=t,s(e);
},
render:function(e){
w=e,c();
}
};
});define("appmsg/comment.js",["biz_common/dom/class.js","appmsg/cmt_tpl.html.js","biz_common/utils/wxgspeedsdk.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/utils/string/html.js","biz_common/tmpl.js","biz_wap/utils/fakehash.js","appmsg/log.js","appmsg/comment_tpl.html.js","appmsg/my_comment_tpl.html.js","appmsg/emotion/emotion.js","appmsg/emotion/dom.js"],function(e,t,n,o){
"use strict";
function m(e,t){
e&&(e.style.display=t?t:"block");
}
function i(e){
e&&(e.style.display="none");
}
function s(){
setTimeout(function(){
m(X.toast);
},750),setTimeout(function(){
i(X.toast);
},1500);
}
function c(e){
return e.replace(/^\s+|\s+$/g,"");
}
function a(e,t){
if(!(Math.random()<.999)){
var n=window.location.protocol,o=9;
"https:"==n&&(o=18),z.saveSpeeds({
uin:uin,
pid:o,
speeds:[{
sid:29,
time:e
},{
sid:30,
time:t
}]
}),z.send();
}
}
function l(e,t){
if("undefined"!=typeof e){
var n=new Image;
n.src=A.idkey?"//mp.weixin.qq.com/mp/jsmonitor?idkey="+(A.idkey+"_"+e+"_1")+"&t="+Math.random():"http://mp.weixin.qq.com/mp/jsreport?key="+e+"&content="+(t||"")+"&r="+Math.random();
}
}
function d(){
var e=window.innerHeight||document.documentElement.clientHeight,t=window.pageYOffset||document.documentElement.scrollTop,n=document.documentElement.scrollHeight;
if(t+e+100>n&&H.off(window,"scroll",d),!!L&&console.log("onscroll,isLoading:"+Y+";offset:"+F+";scrollHeight:"+n+";scrollTop:"+t+";innerHeight:"+e),
!(Y||-1==F||F>0&&n-t-e>500)){
var o=+new Date;
Y=!0,i(X.tips),m(X.loading);
var s="/mp/appmsg_comment?action=getcomment&scene="+A.scene+"&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+M+"&offset="+F+"&limit="+P+(window.send_time?"&send_time="+send_time:"");
try{
W++,W>1&&l(A.moreList,encodeURIComponent(s)),K.indexOf(s)>-1&&l(A.repeatList,encodeURIComponent(s)),
K.push(s);
}catch(c){}
!!L&&console.log("[Appmsg comment] start get comment data:"+s),N("[Appmsg comment] start get comment data, url:"+s),
R({
url:s,
type:"get",
success:function(e){
var t=+new Date,n=t-o,m={};
try{
m=window.eval.call(window,"("+e+")");
}catch(i){}
var c=m.base_resp&&m.base_resp.ret;
if(0==c){
r(m);
var d=+new Date-t;
a(n,d);
}else l(A.errList,"type:resperr;url:"+encodeURIComponent(s)+";ret="+c);
N("[Appmsg comment] get comment success, text: "+e);
},
error:function(){
l(A.errList,"type:ajaxerr;url:"+encodeURIComponent(s)),N("[Appmsg comment] get comment ajax error");
},
complete:function(){
Y=!1,i(X.loading),H.off(window,"scroll",k);
}
});
}
}
function r(e){
var t,n=document.createDocumentFragment();
V++,V>1&&l(A.handleList,encodeURIComponent(JSON.stringify({
comment_id:M,
offset:F,
url:location.href
}))),"undefined"!=typeof e.only_fans_can_comment?window.can_fans_comment_only=e.only_fans_can_comment:"undefined"==typeof window.can_fans_comment_only&&(window.can_fans_comment_only=0),
1!=e.enabled?(x&&(x.style.display="none"),e.elected_comment=[],e.elected_comment_total_cnt=0):x&&(x.style.display="block"),
0==F?(J=e.logo_url,G=e.nick_name,t=e.elected_comment,t&&t.length?(g(t,n,"elected"),
X.list.appendChild(n),m(X.main),0==window.can_fans_comment_only||1==window.can_fans_comment_only&&1==e.is_fans?m(document.getElementById("js_cmt_addbtn1")):m(document.getElementById("js_cmt_nofans1"),"block"),
e.elected_comment_total_cnt<=10&&(m(document.getElementById("js_cmt_statement")),
m(document.getElementById("js_cmt_qa")))):(i(X.main),0==window.can_fans_comment_only||1==window.can_fans_comment_only&&1==e.is_fans?m(document.getElementById("js_cmt_addbtn2")):m(document.getElementById("js_cmt_nofans2"),"block")),
function(){
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=(document.getElementById("img-content"),
document.getElementById("js_cmt_area"));
if(e&&t&&t.offsetTop){
var n=t.offsetTop;
window.scrollTo(0,n-25);
}
}()):(t=e.elected_comment,t&&t.length&&(g(t,n,"elected"),X.list.appendChild(n))),
0==e.elected_comment_total_cnt?(F=-1,i(document.getElementById("js_cmt_loading")),
i(document.getElementById("js_cmt_statement")),i(document.getElementById("js_cmt_qa"))):F+P>=e.elected_comment_total_cnt?(F=-1,
i(document.getElementById("js_cmt_loading")),m(document.getElementById("js_cmt_statement")),
m(document.getElementById("js_cmt_qa"))):F+=e.elected_comment.length;
}
function _(){
S.log("tag1");
var e=c(X.input.value);
if(S.log("tag2"),!B.hasClass(X.submit,"btn_disabled")){
if(S.log("tag3"),e.length<1)return f("留言不能为空");
if(S.log("tag4"),e.length>600)return f("字数不能多于600个");
S.log("tag5"),B.addClass(X.submit,"btn_disabled"),S.log("tag6");
var t=document.getElementById("activity-name");
S.log("tag7"),et!=e&&(tt=+new Date);
var n="/mp/appmsg_comment?action=addcomment&scene="+A.scene+"&comment_id="+M+"&__biz="+biz+"&idx="+idx+"&appmsgid="+appmsgid+"&sn="+sn;
R({
url:n,
data:{
content:e,
title:t&&c(t.innerText),
head_img:J,
nickname:G,
client_id:tt
},
type:"POST",
success:function(t){
S.log("tag8"),U.hidePannel();
var o={},i=document.createDocumentFragment();
try{
o=window.eval.call(window,"("+t+")");
}catch(c){}
switch(+o.ret){
case 0:
s(),g([{
content:e,
nick_name:G,
create_time:(new Date).getTime()/1e3|0,
is_elected:0,
logo_url:J,
like_status:0,
content_id:0,
like_num_format:0,
like_num:0,
is_from_friend:0,
is_from_me:1,
my_id:o.my_id
}],i,"mine"),X.mylist.insertBefore(i,X.mylist.firstChild),m(X.mylist.parentNode),
X.input.value="";
break;

case-6:
f("你留言的太频繁了，休息一下吧");
break;

case-7:
f("你还未关注该公众号，不能参与留言");
break;

case-10:
f("字数不能多于600个");
break;

case-15:
f("留言已关闭");
break;

default:
et=e,f("系统错误，请重试");
}
0!=o.ret&&l(A.addCommentErr,"type:resperr;url:"+encodeURIComponent(n)+";ret="+o.ret);
},
error:function(e){
S.log("shit;"+e.status+";"+e.statusText),l(A.addCommentErr,"type:ajaxerr;url:"+encodeURIComponent(n));
},
complete:function(){
""!=X.input.value&&B.removeClass(X.submit,"btn_disabled");
}
});
}
}
function p(){
if(0==Q){
var e="/mp/appmsg_comment?action=getmycomment&scene="+A.scene+"&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+M,t=document.getElementById("js_mycmt_loading");
Q=1,m(t),R({
url:e,
type:"get",
success:function(t){
var n={};
try{
n=window.eval.call(window,"("+t+")");
}catch(o){}
var i=n.base_resp&&n.base_resp.ret;
if(0==i){
var s=n.my_comment,c=document.createDocumentFragment();
s&&s.length&&(g(s,c,"mine"),X.mylist.appendChild(c),m(X.mylist.parentNode)),Q=2;
}else Q=0,l(A.errComment,"type:resperr;url:"+encodeURIComponent(e)+";ret="+i);
},
error:function(){
Q=0,l(A.errComment,"type:ajaxerr;url:"+encodeURIComponent(e));
},
complete:function(){
i(t);
}
});
}
}
function u(e){
var t=(new Date).getTime(),n=new Date;
n.setDate(n.getDate()+1),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n=n.getTime();
var o=t/1e3-e,m=n/1e3-e,i=new Date(n).getFullYear(),s=new Date(1e3*e);
return 3600>o?Math.ceil(o/60)+"分钟前":86400>m?Math.floor(o/60/60)+"小时前":172800>m?"昨天":604800>m?Math.floor(m/24/60/60)+"天前":s.getFullYear()==i?s.getMonth()+1+"月"+s.getDate()+"日":s.getFullYear()+"年"+(s.getMonth()+1)+"月"+s.getDate()+"日";
}
function g(e,t,n){
var o,m="",i=document.createElement("div"),s="http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiak6fjSeA7cianwo25C0CIt5ib8nAcZjW7QT1ZEmUo4r5iazzAKhuQibEXOReDGmXzj8rNg/0";
$={};
for(var c,a=0;c=e[a];++a){
c.time=u(c.create_time),c.status="",c.logo_url=c.logo_url||s,c.logo_url=-1!=c.logo_url.indexOf("wx.qlogo.cn")?c.logo_url.replace(/\/132$/,"/96"):c.logo_url,
c.content=c.content.htmlDecodeLite().htmlEncodeLite(),c.nick_name=c.nick_name.htmlDecodeLite().htmlEncodeLite(),
c.like_num_format=parseInt(c.like_num)>=1e4?(c.like_num/1e4).toFixed(1)+"万":c.like_num,
c.is_from_friend=c.is_from_friend||0,c.is_from_me="mine"==n?1:c.is_from_me||0,c.reply=c.reply||{
reply_list:[]
},c.is_mine=n?!1:!0,c.is_elected="elected"==n?1:c.is_elected,c.reply.reply_list.length>0&&(c.reply.reply_list[0].time=u(c.reply.reply_list[0].create_time),
c.reply.reply_list[0].content=(c.reply.reply_list[0].content||"").htmlEncodeLite(),
c.reply.reply_list[0].reply_like_status=c.reply.reply_list[0].reply_like_status||0,
c.reply.reply_list[0].reply_like_num=c.reply.reply_list[0].reply_like_num||0,c.reply.reply_list[0].reply_like_num_format=parseInt(c.reply.reply_list[0].reply_like_num)>=1e4?(c.reply.reply_list[0].reply_like_num/1e4).toFixed(1)+"万":c.reply.reply_list[0].reply_like_num),
c.new_appmsg=window.new_appmsg,m+=O.tmpl(D,c);
try{
var d=c.nick_name+c.content,r=!1,_=A.repeatContentID;
$[d]&&(r=!0,_=A.repeatContent),Z.indexOf(c.content_id)>-1&&(r=!0,_=A.repeatContentID),
Z.push(c.content_id),$[d]=!0,r&&l(_,encodeURIComponent(JSON.stringify({
comment_id:M,
content_id:c.content_id,
offset:F,
length:e.length,
url:location.href
})));
}catch(p){}
}
for(i.innerHTML=m,y(i);o=i.children.item(0);)t.appendChild(o);
}
function y(e){
S.each(e.querySelectorAll("div.discuss_message_content"),function(e){
e.innerHTML=U.encode(e.innerHTML);
});
}
function f(e){
return setTimeout(function(){
o(e);
});
}
function w(){
var e="1"===T.getParam("js_my_comment");
e&&h(!0);
}
function h(e){
i(X.article),m(X.mine),window.scrollTo(0,0),p(),e||S.later(function(){
X.input.focus();
});
}
function j(){
i(X.mine),m(X.article),window.scrollTo(0,document.documentElement.scrollHeight),
X.input.blur();
}
function b(e){
var t=e.delegatedTarget||e.srcElement,n=null;
if(B.hasClass(t,"js_comment_praise")&&(n=t),n){
var o=parseInt(n.dataset.status),m=0==o?1:0,i=n.dataset.contentId,s="/mp/appmsg_comment?action=likecomment&scene="+A.scene+"&like="+m+"&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+M+"&content_id="+i;
I(n),R({
url:s,
type:"GET"
});
}
}
function v(e){
var t=e.delegatedTarget,n=parseInt(t.dataset.status),o=n?0:1,m=t.dataset.contentId,i=t.dataset.replyId;
I(t),R({
url:"/mp/appmsg_comment?action=like_author_reply&scene="+A.scene,
type:"post",
data:{
comment_id:M,
content_id:m,
reply_id:i,
like:o
}
});
}
function I(e){
var t=B.hasClass(e,"praised"),n=e.querySelector(".praise_num"),o=n.innerHTML,m=o.indexOf("万"),i=parseInt(o)?parseInt(o):0;
t?(-1==m&&(n.innerHTML=i-1>0?i-1:""),B.removeClass(e,"praised"),e.dataset.status=0):(-1==m&&(n.innerHTML=i+1),
B.addClass(e,"praised"),e.dataset.status=1);
}
function E(e){
var t=e.delegatedTarget,n=t.getAttribute("data-my-id"),s="/mp/appmsg_comment?action=delete&scene="+A.scene+"&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+M+"&my_id="+n;
confirm("确定删除吗？")&&R({
url:s,
success:function(e){
var s,c=t;
try{
e=JSON.parse(e);
}catch(a){
e={};
}
if(0==e.ret){
for(;c&&(c.nodeType!=c.ELEMENT_NODE||"li"!=c.tagName.toLowerCase());)c=c.parentNode;
c&&(c.parentNode.removeChild(c),s=document.getElementById("cid"+n),s&&s.parentNode.removeChild(s),
0==X.list.children.length&&(i(X.main),i(document.getElementById("js_cmt_statement")),
i(document.getElementById("js_cmt_qa")),m(document.getElementById("js_cmt_addbtn2"))),
0==X.mylist.children.length&&i(X.mylist.parentNode));
}else o("删除失败，请重试");
},
error:function(){
o("网络错误，请重试");
}
});
}
function k(){
try{
var e=X.loading.getBoundingClientRect(),t=Math.random()<1;
e.top<window.innerHeight&&Y&&t&&((new Image).src="//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_45_1&lc=1&log0",
H.off(window,"scroll",k));
}catch(n){}
}
function C(e){
var t=document.createElement("a");
t.setAttribute("href",e),this.el=t,this.parser=this.el,this.getParam=function(e){
var t=new RegExp("([?&])"+e+"=([^&#]*)([&#])?"),n=this.el.search.match(t);
return n?n[2]:null;
};
}
var B=e("biz_common/dom/class.js"),D=e("appmsg/cmt_tpl.html.js"),x=document.getElementById("js_cmt_area"),T=new C(window.location.href),z=e("biz_common/utils/wxgspeedsdk.js"),L=location.href.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1?!0:!1,M=0;
if(window._has_comment=!0,"undefined"!=typeof window.comment_id?M=window.comment_id:window.cgiData&&"undefined"!=typeof window.cgiData.comment_id&&(M=window.cgiData.comment_id),
!!L&&console.log("comment_id:"+M+";uin:"+uin+";key:"+key),-1==navigator.userAgent.indexOf("MicroMessenger")&&(x&&(x.style.display="none"),
M=0,window._has_comment=!1),0==M||!uin||!key)return void(window._has_comment=!1);
var H=e("biz_common/dom/event.js"),R=e("biz_wap/utils/ajax.js"),O=(e("biz_common/utils/string/html.js"),
e("biz_common/tmpl.js")),q=e("biz_wap/utils/fakehash.js"),N=e("appmsg/log.js"),A={
scene:0,
idkey:"",
moreList:27,
repeatList:25,
errList:18,
handleList:26,
addCommentErr:19,
errComment:18,
repeatContent:24,
repeatContentID:23
};
window.__commentReportData&&window.__commentReportData.idkey&&(!!L&&console.log("init reportData"),
A=window.__commentReportData),function(){
if(x){
var t=e("appmsg/comment_tpl.html.js");
x.innerHTML=O.tmpl(t,{
new_appmsg:window.new_appmsg
});
}
}(),function(){
var t=e("appmsg/my_comment_tpl.html.js"),n=document.createElement("div");
n.innerHTML=O.tmpl(t,{
new_appmsg:window.new_appmsg
}),document.body.appendChild(n);
}();
var U=e("appmsg/emotion/emotion.js"),S=e("appmsg/emotion/dom.js"),F=(new Image,0),P=100,Y=!1,J="",G="我",Q=0,X={
article:document.getElementById("js_article"),
mine:document.getElementById("js_cmt_mine"),
main:document.getElementById("js_cmt_main"),
input:document.getElementById("js_cmt_input"),
submit:document.getElementById("js_cmt_submit"),
addbtn:document.getElementById("js_cmt_addbtn"),
list:document.getElementById("js_cmt_list"),
mylist:document.getElementById("js_cmt_mylist"),
morelist:document.getElementById("js_cmt_morelist"),
toast:document.getElementById("js_cmt_toast"),
tips:document.getElementById("js_cmt_tips"),
loading:document.getElementById("js_cmt_loading")
},Z=[],$={},K=(new Image,[]),W=0,V=0,et=null,tt=+new Date;
!function(){
d(),w(),U.init();
}(),q.on("comment",function(){
!!L&&console.log("FakeHash on comment"),h();
}),q.on(function(e){
"comment"==e&&j();
}),H.on(X.input,"input",function(){
var e=c(X.input.value);
e.length<1?B.addClass(X.submit,"btn_disabled"):B.removeClass(X.submit,"btn_disabled");
}),H.on(X.list,"tap",".js_comment_praise",b),H.on(X.mylist,"tap",".js_comment_praise",b),
H.on(X.list,"tap",".js_reply_praise",v),H.on(X.list,"tap",".js_del",E),H.on(X.mylist,"tap",".js_del",E),
H.on(X.list,"tap",".js_del",function(e){
e.preventDefault();
}),H.on(X.mylist,"tap",".js_del",function(e){
e.preventDefault();
}),H.on(X.submit,"tap",_),H.on(X.submit,"click",function(e){
e.preventDefault();
}),H.on(window,"scroll",d),H.on(window,"scroll",k),H.on(document.getElementById("js_cmt_write1"),"click",function(e){
e.preventDefault(),!!L&&console.log("push comment"),q.push("comment");
}),H.on(document.getElementById("js_cmt_write2"),"click",function(e){
e.preventDefault(),!!L&&console.log("push comment"),q.push("comment");
});
});define("appmsg/like.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","appmsg/log.js"],function(require,exports,module,alert){
"use strict";
function like_report(e){
log("[Appmsg] click like");
var tmpAttr=el_like.getAttribute("like"),tmpHtml=el_likeNum.innerHTML,isLike=parseInt(tmpAttr)?parseInt(tmpAttr):0,like=isLike?0:1,likeNum=parseInt(tmpHtml)?parseInt(tmpHtml):0;
ajax({
url:"/mp/appmsg_like?__biz="+biz+"&mid="+mid+"&idx="+idx+"&like="+like+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
data:{
is_temp_url:window.is_temp_url||0
},
type:"POST",
success:function(res){
var data=eval("("+res+")");
log("[Appmsg] like ajax succ"+data.base_resp.ret),0==data.base_resp.ret&&(isLike?(Class.removeClass(el_like,"praised"),
el_like.setAttribute("like",0),likeNum>0&&"100000+"!==tmpHtml&&(el_likeNum.innerHTML=likeNum-1==0?"赞":likeNum-1)):(el_like.setAttribute("like",1),
Class.addClass(el_like,"praised"),"100000+"!==tmpHtml&&(el_likeNum.innerHTML=likeNum+1)));
},
async:!0
});
}
var DomEvent=require("biz_common/dom/event.js"),Class=require("biz_common/dom/class.js"),ajax=require("biz_wap/utils/ajax.js"),log=require("appmsg/log.js"),el_toolbar=document.getElementById("js_toobar3");
if(el_toolbar&&el_toolbar.querySelector){
var el_like=el_toolbar.querySelector("#like3"),el_likeNum=el_toolbar.querySelector("#likeNum3"),el_readNum=el_toolbar.querySelector("#readNum3");
DomEvent.on(el_like,"click",function(e){
return like_report(e),!1;
});
}
});define("pages/version4video.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/device.js","new_video/ctl.js"],function(e){
"use strict";
function i(e,i){
i=i||"",i=["uin:"+top.window.user_uin,"resp:"+i].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+i+"&r="+Math.random();
}
function o(){
return document.domain="qq.com",-1!=top.location.href.indexOf("&_newvideoplayer=0")?!1:-1!=top.location.href.indexOf("&_newvideoplayer=1")?!0:1!=top.window.is_login?!1:top.window.use_tx_video_player?!1:d.canSupportVideo&&_.inWechat?_.is_ios||_.is_android&&_.is_x5||_.is_xweb&&_.xweb_version>=16?!0:!1:(top.window._hasReportCanSupportVideo||d.canSupportVideo||!_.inWechat||(top.window._hasReportCanSupportVideo=!0,
i(44)),!1);
}
function n(){
{
var e=top.location.href,i=window.location.href;
top.sn||"";
}
return-1==e.indexOf("&_videoad=0")||"5a2492d450d45369cd66e9af8ee97dbd"!=top.sn&&"f62e1cb98630008303667f77c17c43d7"!=top.sn&&"30c609ee11a3a74a056e863f0e20cae2"!=top.sn?-1!=e.indexOf("&_videoad=1")?!0:-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")?!1:"54"==top.window.appmsg_type?!1:-1!=i.indexOf("&xd=1")?!1:top.window.__appmsgCgiData&&top.window.__appmsgCgiData.can_use_page&&(_.is_ios||_.is_android)?!0:p.showAd()?!0:!1:!1;
}
function t(){
var e=top.location.href;
if(!top.window.user_uin)return!1;
if(-1!=e.indexOf("&_proxy=1"))return!0;
if(-1!=e.indexOf("&_proxy=0"))return!1;
if(-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show"))return!1;
var i=(new Date).getHours();
return i>=9&&14>=i?!1:_.inWechat&&_.is_android&&_.is_x5&&_.wechatVer>="6.2.2"?!0:_.inWechat&&_.is_android&&_.is_xweb&&_.xweb_version>=16?!0:_.inWechat&&_.is_ios&&(-1!=w.indexOf("MicroMessenger/6.2.4")||_.wechatVer>="6.2.4")?!0:!1;
}
function s(){
return c.networkType;
}
var a=e("biz_common/dom/event.js"),r=e("biz_wap/jsapi/core.js"),d=e("biz_wap/utils/device.js"),p=e("new_video/ctl.js"),w=top.window.navigator.userAgent,c={
networkType:""
},_={};
return function(e){
var i=d.os;
_.is_ios=/(iPhone|iPad|iPod|iOS)/i.test(e),_.is_android=!!i.android,_.is_wp=!!i.phone,
_.is_pc=!(i.phone||!i.Mac&&!i.windows),_.inWechat=/MicroMessenger/.test(e),_.inWindowWechat=/WindowsWechat/i.test(e),
_.inMacWechat=/wechat.*mac os/i.test(e),_.is_android_phone=_.is_android&&/Mobile/i.test(e),
_.is_android_tablet=_.is_android&&!/Mobile/i.test(e),_.ipad=/iPad/i.test(e),_.iphone=!_.ipad&&/(iphone)\sos\s([\d_]+)/i.test(e),
_.is_x5=/TBS\//.test(e)&&/MQQBrowser/i.test(e);
var o,n=/XWEB\/([\d\.]+)/i,t=e.match(n);
t&&t[1]&&(o=parseInt(t[1])),_.is_xweb=!!t,_.xweb_version=o;
var s=e.match(/MicroMessenger\/((\d+)(\.\d+)*)/);
_.wechatVer=s&&s[1]||0,a.on(window,"load",function(){
if(""==c.networkType&&_.inWechat){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
r.invoke("getNetworkType",{},function(i){
c.networkType=e[i.err_msg]||"fail";
});
}
},!1);
}(top.window.navigator.userAgent),"undefined"==typeof top.window._hasReportCanSupportVideo&&(top.window._hasReportCanSupportVideo=!1),
{
device:_,
isShowMpVideo:o,
isUseProxy:t,
isUseAd:n,
getNetworkType:s
};
});define("a/a.js",["biz_wap/utils/mmversion.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","a/a_report.js","biz_wap/utils/ajax.js","biz_wap/utils/position.js","a/card.js","a/wxopen_card.js","a/mpshop.js","biz_wap/jsapi/core.js","biz_common/tmpl.js","a/a_tpl.html.js","a/sponsor_a_tpl.html.js","a/cpc_a_tpl.html.js","biz_common/utils/report.js","biz_common/dom/class.js","biz_wap/utils/storage.js","appmsg/log.js","appmsg/cdn_img_lib.js","a/profile.js","a/android.js","a/ios.js","a/app_card.js","a/sponsor.js"],function(require,exports,module,alert){
"use strict";
function report(e,a){
Report("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+e+a);
}
function getWindowHeight(){
return"CSS1Compat"===document.compatMode?document.documentElement.clientHeight:document.body.clientHeight;
}
function checkNeedAds(){
var is_need_ad=1,_adInfo=null,screen_num=0,inwindowwx=-1!=navigator.userAgent.indexOf("WindowsWechat");
if(!document.getElementsByClassName||-1==navigator.userAgent.indexOf("MicroMessenger")||inwindowwx)is_need_ad=0,
js_sponsor_ad_area.style.display="none",js_top_ad_area.style.display="none",js_bottom_ad_area.style.display="none",
js_cpc_area&&js_cpc_area.style&&(js_cpc_area.style.display="none");else{
var adLS=new LS("ad");
if(window.localStorage)try{
var key=[biz,sn,mid,idx].join("_"),_ad=adLS.get(key);
_adInfo=_ad.info;
try{
_adInfo=eval("("+_adInfo+")");
}catch(e){
_adInfo=null;
}
var _adInfoSaveTime=_ad.time,_now=+new Date;
_adInfo&&18e4>_now-1*_adInfoSaveTime&&1*_adInfo.advertisement_num>0?is_need_ad=0:adLS.remove(key),
log("[Ad] is_need_ad: "+is_need_ad+" , adData:"+JSON.stringify(_ad));
}catch(e){
is_need_ad=1,_adInfo=null;
}
}
return{
is_need_ad:is_need_ad,
both_ad:0,
_adInfo:_adInfo
};
}
function afterGetAdData(e,a){
var t={},i=e.is_need_ad,o=e._adInfo;
if(0==i)t=o,t||(t={
advertisement_num:0
});else{
if(a.advertisement_num>0&&a.advertisement_info){
var p=a.advertisement_info;
t.advertisement_info=saveCopy(p);
}
t.advertisement_num=a.advertisement_num;
}
1==i&&(window._adRenderData=t),t=t||{
advertisement_num:0
};
var n=!1;
if(!t.flag&&t.advertisement_num>0){
var r=t.advertisement_num,_=t.advertisement_info;
window.adDatas.num=r;
for(var d=0;r>d;++d){
var s=null,c=_[d];
if(c.exp_info=c.exp_info||{},c.is_cpm=c.is_cpm||0,c.biz_info=c.biz_info||{},c.app_info=c.app_info||{},
c.pos_type=c.pos_type||0,c.logo=c.logo||"",100==c.pt||115==c.pt){
for(var l=c.exp_info.exp_value||[],m=!1,u=0,f=0;f<l.length;++f){
var g=l[f]||{};
if(1==g.exp_type&&(u=g.comm_attention_num,m=u>0),2==g.exp_type){
m=!1,u=0;
break;
}
}
c.biz_info.show_comm_attention_num=m,c.biz_info.comm_attention_num=u,s={
usename:c.biz_info.user_name,
pt:c.pt,
url:c.url,
traceid:c.traceid,
adid:c.aid,
ticket:c.ticket,
is_appmsg:!0
};
}else if(102==c.pt)s={
appname:c.app_info.app_name,
versioncode:c.app_info.version_code,
pkgname:c.app_info.apk_name,
androiddownurl:c.app_info.apk_url,
md5sum:c.app_info.app_md5,
signature:c.app_info.version_code,
rl:c.rl,
traceid:c.traceid,
pt:c.pt,
ticket:c.ticket,
type:c.type,
adid:c.aid,
is_appmsg:!0
};else if(101==c.pt)s={
appname:c.app_info.app_name,
app_id:c.app_info.app_id,
icon_url:c.app_info.icon_url,
appinfo_url:c.app_info.appinfo_url,
rl:c.rl,
traceid:c.traceid,
pt:c.pt,
ticket:c.ticket,
type:c.type,
adid:c.aid,
is_appmsg:!0
};else if(103==c.pt||104==c.pt||2==c.pt&&c.app_info){
var y=c.app_info.down_count||0,h=c.app_info.app_size||0,v=c.app_info.app_name||"",w=c.app_info.category,j=["万","百万","亿"];
if(y>=1e4){
y/=1e4;
for(var k=0;y>=10&&2>k;)y/=100,k++;
y=y.toFixed(1)+j[k]+"次";
}else y=y.toFixed(1)+"次";
h=formSize(h),w=w?w[0]||"其他":"其他",v=formName(v),c.app_info._down_count=y,c.app_info._app_size=h,
c.app_info._category=w,c.app_info.app_name=v,s={
appname:c.app_info.app_name,
app_rating:c.app_info.app_rating||0,
icon_url:c.app_info.icon_url,
app_id:c.app_info.app_id,
channel_id:c.app_info.channel_id,
md5sum:c.app_info.app_md5,
rl:c.rl,
pkgname:c.app_info.apk_name,
url_scheme:c.app_info.url_scheme,
androiddownurl:c.app_info.apk_url,
versioncode:c.app_info.version_code,
appinfo_url:c.app_info.appinfo_url,
traceid:c.traceid,
pt:c.pt,
url:c.url,
ticket:c.ticket,
type:c.type,
adid:c.aid,
is_appmsg:!0
};
}else if(105==c.pt){
var x=c.card_info.card_id||"",b=c.card_info.card_ext||"";
b=b.htmlDecode();
try{
b=JSON.parse(b),b.outer_str=c.card_info.card_outer_id||"",b=JSON.stringify(b);
}catch(I){
b="{}";
}
s={
card_id:x,
card_ext:b,
pt:c.pt,
ticket:c.ticket||"",
url:c.url,
rl:c.rl,
tid:c.traceid,
traceid:c.traceid,
type:c.type,
adid:c.aid,
is_appmsg:!0
};
}else if(106==c.pt){
var E=c.mp_shop_info.pid||"",z=c.mp_shop_info.outer_id||"";
s={
pid:E,
outer_id:z,
pt:c.pt,
url:c.url,
rl:c.rl,
tid:c.traceid,
traceid:c.traceid,
type:c.type,
adid:c.aid,
is_appmsg:!0
};
}else if(108==c.pt||109==c.pt||110==c.pt||116==c.pt||117==c.pt)s={
pt:c.pt,
ticket:c.ticket||"",
url:c.url,
traceid:c.traceid,
adid:c.aid,
is_appmsg:!0
},c.video_info&&(s.displayWidth=c.video_info.displayWidth,s.displayHeight=c.video_info.displayHeight,
s.thumbUrl=c.video_info.thumbUrl,s.videoUrl=c.video_info.videoUrl,s.rl=c.rl);else if(111==c.pt||113==c.pt||114==c.pt||112==c.pt){
var h=c.app_info.app_size||0,v=c.app_info.app_name||"";
h=formSize(h),v=formName(v),c.app_info.app_size=h,c.app_info.app_name=v,s={
appname:c.app_info.app_name,
app_rating:c.app_info.app_rating||0,
app_id:c.app_info.app_id,
icon_url:c.app_info.icon_url,
channel_id:c.app_info.channel_id,
md5sum:c.app_info.app_md5,
rl:c.rl,
pkgname:c.app_info.apk_name,
url_scheme:c.app_info.url_scheme,
androiddownurl:c.app_info.apk_url,
versioncode:c.app_info.version_code,
appinfo_url:c.app_info.appinfo_url,
traceid:c.traceid,
pt:c.pt,
url:c.url,
ticket:c.ticket,
type:c.type,
adid:c.aid,
source:source||"",
is_appmsg:!0
};
}else 118==c.pt?(s=c,n=!0):(119==c.pt||120==c.pt)&&(s=c);
var q=c.image_url;
require("appmsg/cdn_img_lib.js"),q&&q.isCDN()&&(q=q.replace(/\/0$/,"/640"),q=q.replace(/\/0\?/,"/640?"),
c.image_url=ParseJs.addParam(q,"wxfrom","50",!0)),adDatas.ads["pos_"+c.pos_type]={
a_info:c,
adData:s
},localStorage&&localStorage.setItem&&c.app_info&&c.app_info.url_scheme&&localStorage.setItem("__WXLS__a_url_schema_"+c.traceid,c.app_info.url_scheme);
}
c.has_installed=!1,c&&(104==c.pt||113==c.pt||114==c.pt||2==c.pt)&&c.app_info.url_scheme&&JSAPI.invoke("getInstallState",{
packageName:c.app_info.apk_name
},function(e){
var a=e.err_msg;
a.indexOf("get_install_state:yes")>-1&&(c.has_installed=!0,document.getElementById("js_promotion_tag")&&(document.getElementById("js_promotion_tag").innerHTML="进入应用"));
});
var C=function(){
var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,a=document.documentElement.clientHeight||window.innerHeight;
js_sponsor_ad_area.offsetTop<e+a&&(Class.addClass(document.getElementById("js_ad_area"),"show"),
DomEvent.off(window,"scroll",C));
},T=adDatas.ads;
for(var B in T)if(0==B.indexOf("pos_")){
var s=T[B],c=!!s&&s.a_info;
if(s&&c){
if(0==c.pos_type){
if(c.new_appmsg=window.new_appmsg,js_bottom_ad_area.innerHTML=TMPL.tmpl(a_tpl,c),
111==c.pt||112==c.pt||113==c.pt||114==c.pt){
var A=document.getElementsByClassName("js_download_app_card")[0],D=A.offsetWidth,S=Math.floor(D/2.875);
S>0&&(A.style.height=S+"px");
}
}else if(3==c.pos_type){
var A=document.createElement("div");
A.appendChild(document.createTextNode(c.image_url)),c.image_url=A.innerHTML,c.new_appmsg=window.new_appmsg,
js_sponsor_ad_area.innerHTML=TMPL.tmpl(sponsor_a_tpl,c),js_sponsor_ad_area.style.display="block";
var O=js_sponsor_ad_area.clientWidth;
108==c.pt||109==c.pt||110==c.pt?document.getElementById("js_main_img").style.height=O/1.77+"px":116==c.pt||117==c.pt,
DomEvent.on(window,"scroll",C),C(0);
}else 4==c.pos_type&&_checkShowCpc()&&(js_cpc_area.innerHTML=TMPL.tmpl(cpc_a_tpl,c));
lazyLoadAdImg({
aid:c.aid,
type:c.pt
}),checkAdImg(c);
}
}
mmversion.isIOS&&c.app_info&&c.app_info.url_scheme&&0==c.app_info.url_scheme.indexOf("http")&&(document.getElementById("js_promotion_tag")&&(document.getElementById("js_promotion_tag").innerHTML="查看应用"),
document.getElementsByClassName("js_ad_btn")&&document.getElementsByClassName("js_ad_btn").length>0&&(document.getElementsByClassName("js_ad_btn")[0].innerHTML="查看")),
bindAdOperation();
}
is_temp_url&&document.getElementsByTagName("mpcpc").length>0&&_checkShowCpc()&&!n&&(js_cpc_area.innerHTML=TMPL.tmpl(cpc_a_tpl,{
type:"",
ticket:"",
url:"",
rl:"",
aid:"",
pt:"",
traceid:"",
group_id:"",
apurl:"",
is_cpm:"",
image_url:"https://mmbiz.qlogo.cn/mmbiz_png/cVgP5bCElFiaPhsbHe4ctnlUllMCDCEIJib69wX3BUX42XagNypd2JcgyEiaoFRu4KicKF3avfRgVnWPABVTjtPRwQ/0?wx_fmt=png"
}));
}
function _checkShowCpc(){
if(js_cpc_area){
var e=(document.documentElement.clientHeight||window.innerHeight)/2,a=js_cpc_area.offsetTop,t=document.getElementById("js_content").offsetHeight;
return console.log(e,a,t,e>a||e>t-a),e>a||e>t-a?!1:!0;
}
}
function lazyLoadAdImg(e){
for(var a=document.getElementsByClassName("js_alazy_img"),t=0;t<a.length;t++){
var i=a[t];
a[t].onload=function(){
window.__addIdKeyReport("28307",54),i.src.indexOf("retry")>-1&&window.__addIdKeyReport("28307",69);
},a[t].onerror=function(){
if(-1==i.src.indexOf("retry"))i.src=ParseJs.addParam(i.src,"retry",1);else{
window.__addIdKeyReport("28307",98);
var a="other";
mmversion.isIOS?a="iphone":mmversion.isAndroid&&(a="android"),window.setTimeout(function(){
var t=window.networkType||"unknow";
ajax({
url:"http://mp.weixin.qq.com/tp/datacenter/report?cmd=report&id=900023&os="+a+"&uin=777&aid="+e.aid+"&image_url="+encodeURIComponent(i.src)+"&type="+e.type+"&network="+t,
type:"GET",
async:!0
});
},500);
}
window.__addIdKeyReport("28307",57);
},a[t].src=a[t].dataset.src;
}
}
function getHost(e){
if(!e)return"";
var a=document.createElement("a");
return a.href=e,a.hostname;
}
function checkAdImg(e){
if(e){
var a=["wximg.qq.com","wximg.gtimg.com","pgdt.gtimg.cn","mmsns.qpic.cn","mmbiz.qpic.cn","vweixinthumb.tc.qq.com","pp.myapp.com","wx.qlog.cn","mp.weixin.qq.com"],t=e.image_url||"",i=getHost(t);
return void(i&&-1==a.indexOf(i)&&window.__addIdKeyReport("28307",58));
}
}
function saveCopyArr(e){
for(var a=[],t=0;t<e.length;++t){
var i=e[t],o=typeof i;
i="string"==o?i.htmlDecode():i,"object"==o&&(i="[object Array]"==Object.prototype.toString.call(i)?saveCopyArr(i):saveCopy(i)),
a.push(i);
}
return a;
}
function saveCopy(e){
var a={};
for(var t in e)if(e.hasOwnProperty(t)){
var i=e[t],o=typeof i;
i="string"==o?i.htmlDecode():i,"object"==o&&(i="[object Array]"==Object.prototype.toString.call(i)?saveCopyArr(i):saveCopy(i)),
a[t]=i;
}
return a;
}
function formName(e){
for(var a=[" ","-","(",":",'"',"'","：","（","—","－","“","‘"],t=-1,i=0,o=a.length;o>i;++i){
var p=a[i],n=e.indexOf(p);
-1!=n&&(-1==t||t>n)&&(t=n);
}
return-1!=t&&(e=e.substring(0,t)),e;
}
function formSize(e){
return"number"!=typeof e?e:(e>=1024?(e/=1024,e=e>=1024?(e/1024).toFixed(2)+"MB":e.toFixed(2)+"KB"):e=e.toFixed(2)+"B",
e);
}
function seeAds(){
var adDatas=window.adDatas;
if(adDatas&&adDatas.num>0){
var onScroll=function(){
for(var scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,has_report=!1,i=0;total_pos_type>i;++i)!function(i){
var pos_key="pos_"+i,gdt_a=gdt_as[pos_key];
if(gdt_a=!!gdt_a&&gdt_a[0],!gdt_a||!gdt_a.dataset||!gdt_a.dataset.apurl)return void(!has_report&&gdt_a&&gdt_a.dataset&&!gdt_a.dataset.apurl&&(imgReport(4),
has_report=!0));
var gid=gdt_a.dataset.gid,tid=gdt_a.dataset.tid,aid=gdt_a.dataset.aid,apurl=gdt_a.dataset.apurl,is_cpm=1*gdt_a.dataset.is_cpm,ads=adDatas.ads,a_info=ads[pos_key].a_info||{},exp_info=a_info.exp_info||{},exp_id=exp_info.exp_id||"",exp_value=exp_info.exp_value||[],pos_type=adDatas.ads[pos_key].a_info.pos_type,gdt_area=el_gdt_areas[pos_key],offsetTop=gdt_area.offsetTop,adHeight=gdt_a.clientHeight,adOffsetTop=offsetTop+gdt_a.offsetTop,gh_id="";
adDatas.ads[pos_key]&&adDatas.ads[pos_key].a_info&&adDatas.ads[pos_key].a_info.weapp_info&&adDatas.ads[pos_key].a_info.weapp_info.original_id&&(gh_id=adDatas.ads[pos_key].a_info.weapp_info.original_id),
adDatas.ads[pos_key].ad_engine=0;
try{
exp_value=JSON.stringify(exp_value);
}catch(e){
exp_value="[]";
}
if(-1!=apurl.indexOf("ad.wx.com")&&(adDatas.ads[pos_key].ad_engine=1),function(){
try{
var e=window.__report,a=ping_test_apurl[pos_key],t=new Date,i=t.getHours(),o=ping_test_apurl_random&&i>=12&&18>=i&&0==pos_type;
!a[0]&&o&&scrollTop+innerHeight>offsetTop&&(a[0]=!0,e(81)),!a[1]&&o&&scrollTop+innerHeight>offsetTop+40&&(a[1]=!0,
e(82));
}catch(p){}
}(),!ping_apurl[pos_key]&&(!window.__ad_test_exposure&&(0==pos_type||3==pos_type||4==pos_type)&&scrollTop+innerHeight_new>offsetTop&&(window.__ad_test_exposure=!0,
window.__addIdKeyReport("68064",6)),0==pos_type&&scrollTop+innerHeight>offsetTop||1==pos_type&&(10>=scrollTop||scrollTop-10>=offsetTop)||4==pos_type&&scrollTop+innerHeight>offsetTop||3==pos_type&&scrollTop+innerHeight>offsetTop)){
ping_apurl[pos_key]=!0,window.__ad_has_exposure=!0;
try{
var report_arg="trace_id="+tid+"&product_type="+adDatas.ads[pos_key].a_info.pt+"&logtype=2&url="+encodeURIComponent(location.href)+"&apurl="+encodeURIComponent(apurl);
tid&&mmversion.gtVersion("6.3.22",!0)&&JSAPI.invoke("adDataReport",{
ad_info:report_arg
},function(){});
}catch(e){}
log("[Ad] seeAd, tid="+tid+", aid="+aid+", pos_type="+pos_type),ajax({
url:"/mp/advertisement_report?report_type=1&tid="+tid+"&aid="+aid+"&gh_id="+gh_id+"&adver_group_id="+gid+"&apurl="+encodeURIComponent(apurl)+"&__biz="+biz+"&pos_type="+pos_type+"&exp_id="+exp_id+"&exp_value="+exp_value+"&r="+Math.random(),
mayAbort:!0,
success:function(res){
log("[Ad] seeAd report success, tid="+tid+", aid="+aid+", pos_type="+pos_type);
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret?(ping_apurl[pos_key]=!1,imgReport(5)):(window.__addIdKeyReport("68064",8),
ping_apurl.pos_0&&ping_apurl.pos_1);
},
error:function(){
log("[Ad] seeAd report error, tid="+tid+", aid="+aid+", pos_type="+pos_type),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_27_1";
},
async:!0
});
}
var ping_cpm_apurl_obj=ping_cpm_apurl[pos_key];
if(is_cpm&&!ping_cpm_apurl_obj.hasPing){
var rh=.5;
scrollTop+innerHeight>=adOffsetTop+adHeight*rh&&adOffsetTop+adHeight*(1-rh)>=scrollTop?3==pos_type?(ping_cpm_apurl_obj.hasPing=!0,
ajax({
url:"/mp/advertisement_report?report_type=1&tid="+tid+"&aid="+aid+"&gh_id="+gh_id+"&adver_group_id="+gid+"&apurl="+encodeURIComponent(apurl+"&viewable=true")+"&__biz="+biz+"&pos_type="+pos_type+"&r="+Math.random(),
mayAbort:!0,
success:function(res){
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret&&(ping_cpm_apurl_obj.hasPing=!1);
},
async:!0
})):ping_cpm_apurl_obj.clk||(ping_cpm_apurl_obj.clk=setTimeout(function(){
ping_cpm_apurl_obj.hasPing=!0,ajax({
url:"/mp/advertisement_report?report_type=1&tid="+tid+"&aid="+aid+"&gh_id="+gh_id+"&adver_group_id="+gid+"&apurl="+encodeURIComponent(apurl+"&viewable=true")+"&__biz="+biz+"&pos_type="+pos_type+"&exp_id="+exp_id+"&exp_value="+exp_value+"&r="+Math.random(),
mayAbort:!0,
success:function(res){
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret&&(ping_cpm_apurl_obj.hasPing=!1);
},
async:!0
});
},1001)):3!=pos_type&&ping_cpm_apurl_obj.clk&&(clearTimeout(ping_cpm_apurl_obj.clk),
ping_cpm_apurl_obj.clk=null);
}
}(i);
};
DomEvent.on(window,"scroll",onScroll),onScroll();
}
}
function imgReport(e){
(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=68064_"+e+"_1&r="+Math.random();
}
function imgReportBadJs(e){
var a=Math.random();
.5>a&&((new Image).src="https://badjs.weixinbridge.com/badjs?id=102&level=4&from="+encodeURIComponent(location.host)+"&msg="+encodeURIComponent(e));
}
function ad_click(e,a,t,i,o,p,n,r,_,d,s,c,l,m,u,f,g){
if(!has_click[o]){
has_click[o]=!0;
var y=document.getElementById("loading_"+o);
y&&(y.style.display="inline");
var h=g.exp_info||{},v=h.exp_id||"",w=h.exp_value||[];
try{
w=JSON.stringify(w);
}catch(j){
w="[]";
}
var k="";
c&&c.weapp_info&&c.weapp_info.original_id&&(k=c.weapp_info.original_id),AdClickReport({
click_pos:1,
report_type:2,
type:e,
exp_id:v,
exp_value:w,
url:encodeURIComponent(a),
tid:o,
aid:r,
rl:encodeURIComponent(t),
__biz:biz,
pos_type:d,
pt:_,
pos_x:l,
pos_y:m,
ad_w:u,
ad_h:f,
gh_id:k
},function(){
if(has_click[o]=!1,y&&(y.style.display="none"),"5"==e)location.href="/mp/profile?source=from_ad&tousername="+a+"&ticket="+p+"&uin="+uin+"&key="+key+"&__biz="+biz+"&mid="+mid+"&idx="+idx+"&tid="+o;else{
if("105"==_&&c)return void Card.openCardDetail(c.card_id,c.card_ext,c);
if("106"==_&&c)return void(location.href=ParseJs.join(a,{
outer_id:c.outer_id
}));
if("118"==_||"119"==_||"120"==_)return void Wxopen_card.openWxopen(c);
if(g&&g.has_installed&&("104"==_||"113"==_||"114"==_||"2"==_&&-1==a.indexOf("itunes.apple.com"))&&g.app_info.url_scheme)return void JSAPI.invoke("launchApplication",{
schemeUrl:g.app_info.url_scheme
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=g.app_info.url_scheme);
});
if(0==a.indexOf("https://itunes.apple.com/")||0==a.indexOf("http://itunes.apple.com/"))return g.app_info&&g.app_info.url_scheme&&mmversion.gtVersion("6.5.6",!0)?JSAPI.invoke("launchApplication",{
schemeUrl:g.app_info.url_scheme
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=a);
}):JSAPI.invoke("downloadAppInternal",{
appUrl:a
},function(e){
e.err_msg&&-1!=e.err_msg.indexOf("ok")||(location.href="http://"+location.host+"/mp/ad_redirect?url="+encodeURIComponent(a)+"&ticket="+p+"#wechat_redirect");
}),!1;
if(-1==a.indexOf("mp.weixin.qq.com"))a="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(a);else if(-1==a.indexOf("mp.weixin.qq.com/s")&&-1==a.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var t={
source:4,
tid:o,
idx:idx,
mid:mid,
appuin:biz,
pt:_,
aid:r,
ad_engine:s,
pos_type:d
},i=window.__report;
if(("104"==_||"113"==_||"114"==_)&&c||-1!=a.indexOf("mp.weixin.qq.com/mp/ad_app_info")){
var n="",l="";
c&&(n=c.pkgname&&c.pkgname.replace(/\./g,"_"),l=c.channel_id||""),t={
source:4,
tid:o,
traceid:o,
mid:mid,
idx:idx,
appuin:biz,
pt:_,
channel_id:l,
aid:r,
engine:s,
pos_type:d,
pkgname:n
};
}
a=URL.join(a,t),(0==a.indexOf("http://mp.weixin.qq.com/promotion/")||0==a.indexOf("https://mp.weixin.qq.com/promotion/"))&&(a=URL.join(a,{
traceid:o,
aid:r,
engine:s
})),!r&&i&&i(80,a);
}
location.href=a;
}
});
}
}
function bindAdOperation(){
seeAds();
for(var e=0;total_pos_type>e;++e)!function(e){
var a="pos_"+e,t=el_gdt_areas[a];
if(!t)return!1;
if(!t.getElementsByClassName&&t.style)return t.style.display="none",!1;
var i=t.getElementsByClassName("js_ad_link")||[],o=adDatas.ads[a];
if(o){
for(var p=o.adData,n=o.a_info,r=n.pos_type,_=o.ad_engine,d=0,s=i.length;s>d;++d)!function(e,a){
var t=i[e],o=t.dataset;
if(o&&3!=n.pos_type){
var p=o.type,d=o.url,s=o.rl,c=o.apurl,l=o.tid,m=o.ticket,u=o.group_id,f=o.aid,g=o.pt;
DomEvent.on(t,"click",function(e){
var t=!!e&&e.target;
if(!t||!t.className||-1==t.className.indexOf("js_ad_btn")&&-1==t.className.indexOf("btn_processor_value")){
if(a){
a.adid=window.adid||a.adid;
var i="&tid="+a.traceid+"&uin="+uin+"&key="+key+"&ticket="+(a.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+a.adid+"&ad_engine="+_+"&pos_type="+r+"&r="+Math.random();
n&&n.has_installed&&("104"==a.pt||"113"==a.pt||"114"==a.pt||"2"==a.pt)?report(114,i):"103"==a.pt||"111"==a.pt||"112"==a.pt?report(23,i):("104"==a.pt||"113"==a.pt||"114"==a.pt)&&report(25,i);
}
var o,y,h,v;
return o=position.getX(t,"js_ad_link")+e.offsetX,y=position.getY(t,"js_ad_link")+e.offsetY,
h=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientWidth,
v=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientHeight,
ad_click(p,d,s,c,l,m,u,f,g,r,_,a,o,y,h,v,n),log("[Ad] ad_click: type="+p+", url="+d+", rl="+s+", apurl="+c+", traceid="+l+", ticket="+m+", group_id="+u+", aid="+f+", pt="+g+", pos_type="+r+", ad_engine="+_),
!1;
}
},!0);
}
}(d,p);
if(p){
p.adid=window.adid||p.adid;
var c=n.exp_info||{},l=c.exp_id||"",m=c.exp_value||[];
try{
m=JSON.stringify(m);
}catch(u){
m="[]";
}
var f="&tid="+p.traceid+"&uin="+uin+"&key="+key+"&ticket="+(p.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+p.adid+"&ad_engine="+_+"&pos_type="+r+"&exp_id="+l+"&exp_value="+m+"&r="+Math.random();
if(p.report_param=f,"100"==p.pt||"115"==p.pt){
var g=require("a/profile.js");
return void new g({
btnViewProfile:document.getElementById("js_view_profile_"+r),
btnAddContact:document.getElementById("js_add_contact_"+r),
adData:p,
pos_type:r,
report_param:f,
aid:p.adid,
ad_engine:_
});
}
if("102"==p.pt){
var y=require("a/android.js"),h=15,v=p.pkgname&&p.pkgname.replace(/\./g,"_");
return void new y({
btn:document.getElementById("js_app_action_"+r),
adData:p,
report_param:f,
task_ext_info:[p.adid,p.traceid,v,source,h,_].join("."),
via:[p.traceid,p.adid,v,source,h,_].join(".")
});
}
if("101"==p.pt){
var w=require("a/ios.js");
return void new w({
btn:document.getElementById("js_app_action_"+r),
adData:p,
ticket:p.ticket,
report_param:f
});
}
if("105"==p.pt)return void new Card({
btn:document.getElementById("js_card_action_"+r),
adData:p,
report_param:f,
pos_type:r
});
if("106"==p.pt)return void new MpShop({
btn:document.getElementById("js_shop_action_"+r),
adData:p,
report_param:f,
pos_type:r
});
if("103"==p.pt||"104"==p.pt||"111"==p.pt||"112"==p.pt||"113"==p.pt||"114"==p.pt){
var j=require("a/app_card.js"),h=15,v=p.pkgname&&p.pkgname.replace(/\./g,"_");
return void new j({
btn:document.getElementById("js_appdetail_action_"+r),
js_app_rating:document.getElementById("js_app_rating_"+r),
adData:p,
report_param:f,
pos_type:r,
url_scheme:p.url_scheme,
via:[p.traceid,p.adid,v,source,h,_].join("."),
ticket:p.ticket,
appdetail_params:["&aid="+p.adid,"traceid="+p.traceid,"pkgname="+v,"source="+source,"type="+h,"engine="+_,"appuin="+biz,"pos_type="+r,"ticket="+p.ticket,"scene="+scene].join("&"),
engine:_
});
}
if("108"==p.pt||"109"==p.pt||"110"==p.pt||"116"==p.pt||"117"==p.pt){
var k=require("a/sponsor.js");
new k({
adDetailBtn:document.getElementById("js_ad_detail"),
adMoreBtn:document.getElementById("js_ad_more"),
adAbout:document.getElementById("js_btn_about"),
adImg:document.getElementById("js_main_img"),
adMessage:document.getElementById("js_ad_message"),
adVideo:document.getElementById("js_video_container"),
adData:p,
a_info:n,
pos_type:r,
report_param:f
});
}
"118"==n.pt&&(p.report_param=f);
}
}
}(e);
}
var mmversion=require("biz_wap/utils/mmversion.js"),js_bottom_ad_area=document.getElementById("js_bottom_ad_area"),js_top_ad_area=document.getElementById("js_top_ad_area"),js_sponsor_ad_area=document.getElementById("js_sponsor_ad_area"),js_cpc_area=document.getElementsByTagName("mpcpc"),gdt_pos_4={};
js_cpc_area.length>0?(js_cpc_area=document.getElementsByTagName("mpcpc")[0],gdt_pos_4=js_cpc_area.getElementsByClassName("js_ad_link")):js_cpc_area=void 0;
var pos_type=window.pos_type||0,__report=window.__report,total_pos_type=5,el_gdt_areas={
pos_4:js_cpc_area,
pos_3:js_sponsor_ad_area,
pos_1:js_top_ad_area,
pos_0:js_bottom_ad_area
},gdt_as={
pos_4:gdt_pos_4,
pos_3:js_sponsor_ad_area.getElementsByClassName("js_ad_link"),
pos_1:js_top_ad_area.getElementsByClassName("js_ad_link"),
pos_0:js_bottom_ad_area.getElementsByClassName("js_ad_link")
},isScroll=!1,isSee=!1;
window.adDatas={
ads:{},
num:0
};
var adDatas=window.adDatas,has_click={},DomEvent=require("biz_common/dom/event.js"),URL=require("biz_common/utils/url/parse.js"),AReport=require("a/a_report.js"),AdClickReport=AReport.AdClickReport,ajax=require("biz_wap/utils/ajax.js"),position=require("biz_wap/utils/position.js"),Card=require("a/card.js"),Wxopen_card=require("a/wxopen_card.js"),MpShop=require("a/mpshop.js"),JSAPI=require("biz_wap/jsapi/core.js"),ParseJs=require("biz_common/utils/url/parse.js"),TMPL=require("biz_common/tmpl.js"),a_tpl=require("a/a_tpl.html.js"),sponsor_a_tpl=require("a/sponsor_a_tpl.html.js"),cpc_a_tpl=require("a/cpc_a_tpl.html.js"),Report=require("biz_common/utils/report.js"),Class=require("biz_common/dom/class.js"),LS=require("biz_wap/utils/storage.js"),ParseJs=require("biz_common/utils/url/parse.js"),log=require("appmsg/log.js"),ping_apurl={
pos_0:!1,
pos_1:!1,
pos_3:!1,
pos_4:!1
},ping_cpm_apurl={
pos_0:{},
pos_1:{},
pos_3:{},
pos_4:{}
},ping_test_apurl={
pos_0:[],
pos_1:[],
pos_3:[],
pos_4:[]
},ping_test_apurl_random=Math.random()<.3,innerHeight=window.innerHeight||document.documentElement.clientHeight,innerHeight_new=getWindowHeight(),ad_engine=0,keyOffset="https:"==top.location.protocol?5:0;
return{
checkNeedAds:checkNeedAds,
afterGetAdData:afterGetAdData
};
});define("rt/appmsg/getappmsgext.rt.js",[],function(){
"use strict";
return{
base_resp:{
ret:"number",
errmsg:"string",
wxtoken:"number"
},
advertisement_num:"number",
advertisement_info:[{
hint_txt_R:"string",
url_R:"string",
type_R:"string",
rl_R:"string",
apurl_R:"string",
traceid_R:"string",
group_id_R:"string",
ticket:"string",
aid:"string",
pt:"number",
image_url:"string",
ad_desc:"string",
biz_appid:"string",
pos_type:"number",
watermark_type:"number",
logo:"string",
app_info:{},
biz_info:{},
card_info:{}
}],
comment_enabled:"number",
appmsgticket:{
ticket:"string"
},
self_head_imgs:"string",
appmsgstat:{
ret:"number",
show:"boolean",
is_login:"boolean",
like_num:"number",
liked:"boolean",
read_num:"number",
real_read_num:"number"
},
timestamp:"number",
reward_total_count:"number",
reward_head_imgs:["string"]
};
});define("biz_wap/utils/storage.js",[],function(){
"use strict";
function t(t){
if(!t)throw"require function name.";
this.key=t,this.init();
}
var e="__WXLS__",n=window.localStorage||{
getItem:function(){},
setItem:function(){},
removeItem:function(){},
key:function(){},
length:0
};
return t.getItem=function(t){
return t=e+t,n.getItem(t);
},t.setItem=function(i,r){
i=e+i;
for(var a=3;a--;)try{
n.setItem(i,r);
break;
}catch(o){
t.clear();
}
},t.clear=function(){
var t,i;
for(t=n.length-1;t>=0;t--)i=n.key(t),0==i.indexOf(e)&&n.removeItem(i);
},t.prototype={
constructor:t,
init:function(){
this.check();
},
getData:function(){
var e=t.getItem(this.key)||"{}";
try{
e=JSON.parse(e);
}catch(n){
e={};
}
return e;
},
check:function(){
var e,n,i=this.getData(),r={},a=+new Date;
for(e in i)n=i[e],+n.exp>a&&(r[e]=n);
t.setItem(this.key,JSON.stringify(r));
},
set:function(e,n,i){
var r=this.getData();
r[e]={
val:n,
exp:i||+new Date
},t.setItem(this.key,JSON.stringify(r));
},
get:function(t){
var e=this.getData();
return e=e[t],e?e.val||null:null;
},
remove:function(e){
var n=this.getData();
n[e]&&delete n[e],t.setItem(this.key,JSON.stringify(n));
}
},t;
});define("biz_common/tmpl.js",[],function(){
"use strict";
var e=function(e,r,t){
var n="";
n=e.replace(/[\r\t\n]/g," ").split("<#").join("	").replace(/((^|#>)[^\t]*)'/g,"$1\r"),
n=t?n.replace(/\t==(.*?)#>/g,"',$1,'").replace(/\t=(.*?)#>/g,"', String($1).replace(/&/g,'&amp;').replace(/\"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;') ,'"):n.replace(/\t=(.*?)#>/g,"',$1,'"),
n=n.split("	").join("');").split("#>").join("p.push('").split("\r").join("\\'");
var p=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+n+"');}return p.join('');");
return p(r);
},r=function(r,t,n){
var p=document.getElementById(r);
return p?e(p.innerHTML,t,n):"";
};
return{
render:r,
tmpl:e
};
});define("appmsg/share_tpl.html.js",[],function(){
return'<div class="rich_media_extra">\n    <a href="<#= url #>" class="share_appmsg_container appmsg_card_context flex_context">\n        <div class="flex_hd">\n            <i class="share_appmsg_icon"> </i>\n        </div>\n        <div class="flex_bd">\n            <div class="share_appmsg_title">分享给订阅用户</div>\n            <p class="share_appmsg_desc">可快速分享原创文章给你的公众号订阅用户</p>\n        </div>\n    </a>\n</div>\n';
});define("appmsg/img_copyright_tpl.html.js",[],function(){
return'<span class="original_img_wrp">            \n    <span class="tips_global">来自: <#=source_nickname#></span>\n</span>    ';
});