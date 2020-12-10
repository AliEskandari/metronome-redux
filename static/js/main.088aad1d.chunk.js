(this["webpackJsonpmetronome-redux"]=this["webpackJsonpmetronome-redux"]||[]).push([[0],{28:function(e,t,n){e.exports=n(41)},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),l=n(3),s=n(14),i=n(1),u={playStatus:!1,volume:.5,bpm:100,mspb:600,tick:-1,timeElapsed:0,dateTime:null},p={playStatus:!1,tick:-1,timeElapsed:0,dateTime:null};function m(){return{type:"TOGGLE_PLAY_STATUS"}}function d(e){return{type:"TICK",dateTime:e}}n(38),n(39);var b=n(42),f=n(43),v=n(44),h=n(45),y=n(4),E=n(5),j=n(7),O=n(6),g=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){var e=this.props.playStatus;return r.a.createElement(h.a,{variant:"",onKeyDown:function(e){return e.preventDefault()},size:"lg",onClick:this.props.togglePlayStatus},e?"Stop":"Play")}}]),n}(r.a.Component),x={togglePlayStatus:m,tick:d},k=Object(l.b)((function(e){return{playStatus:e.playStatus}}),x)(g),T=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleVolumeChange=function(t){console.log("setting volume"),e.props.setVolume(parseFloat(t.target.value))},e}return Object(E.a)(n,[{key:"render",value:function(){var e=this.props.volume;return r.a.createElement("input",{type:"range",className:"vert-input",min:"0.0",max:"1.0",step:"0.05",value:e,onChange:this.handleVolumeChange})}}]),n}(r.a.Component),S={setVolume:function(e){return{type:"SET_VOLUME",volume:e}}},w=Object(l.b)((function(e){return{volume:e.volume}}),S)(T),N=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleBpmInputChange=function(t){var n=t.target.value;""===n&&e.props.setBpm(0);var a=parseInt(n);if(!isNaN(a)){var r=a;r>0&&r<=200&&e.props.setBpm(r)}},e}return Object(E.a)(n,[{key:"render",value:function(){return 0===this.props.bpm?this.bpmInputValue="":this.bpmInputValue=parseInt(this.props.bpm),r.a.createElement("input",{value:this.bpmInputValue,className:"input-bpm",onChange:this.handleBpmInputChange})}}]),n}(r.a.Component),C={setBpm:function(e){return{type:"SET_BPM",bpm:e}}},I=Object(l.b)((function(e){return{bpm:e.bpm,playStatus:e.playStatus}}),C)(N),_=n(21);function B(){var e=Object(_.a)(["\n    height: 50px;\n    width: 50px;\n    background-color: ",";\n    border-radius: 50%;\n    display: inline-block;\n"]);return B=function(){return e},e}var D=n(22).a.span(B(),(function(e){return e.active?"#000":"#ececec"})),P=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.active!==e.active}},{key:"render",value:function(){return console.log("Light rendering"),r.a.createElement(D,{active:this.props.active})}}]),n}(a.Component),A=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(y.a)(this,n),(a=t.call(this,e)).setActiveIndex=function(){-1===a.props.tick?a.activeIndex=-1:a.activeIndex=a.props.tick%a.props.length},a.activeIndex=-1,a.sound=new Audio("/clickSound.mp3"),a}return Object(E.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.tick!==e.tick}},{key:"render",value:function(){this.setActiveIndex(),console.log("MetronomeLightController: Render:",{tick:this.props.tick,activeIndex:this.activeIndex}),this.sound.volume=this.props.volume,-1!==this.props.tick&&this.sound.play();for(var e=[],t=0;t<this.props.length;t++){var n=this.activeIndex===t;e.push(r.a.createElement(P,{key:t,active:n}))}return r.a.createElement("span",{className:"d-flex justify-content-between"},e)}}]),n}(r.a.Component),L=Object(l.b)((function(e){return{volume:e.volume,tick:e.tick}}))(A),V=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).startTimer=function(){e.interval=setInterval((function(){e.props.tick(Date.now())}))},e.stopTimer=function(){clearInterval(e.interval)},e}return Object(E.a)(n,[{key:"render",value:function(){return this.props.playStatus?this.startTimer():this.stopTimer(),null}}]),n}(r.a.Component),M={tick:d},K=Object(l.b)((function(e){return{playStatus:e.playStatus}}),M)(V),U=n(26),z=n.n(U);var R=Object(l.b)(null,{togglePlayStatus:m,incrementBpm:function(e){return{type:"INCREMENT_BPM",delta:e}}})((function(e){var t=function(e){e.preventDefault()};return r.a.createElement(b.a,{className:"d-flex align-items-center justify-content-between flex-wrap"},r.a.createElement(z.a,{handleKeys:["space"],onKeyEvent:e.togglePlayStatus,handleFocusableElements:!0}),r.a.createElement(f.a,null,r.a.createElement(v.a,{md:2,className:"d-none d-sm-none d-md-block"}),r.a.createElement(v.a,{xs:12,md:8},r.a.createElement(f.a,{className:"d-flex align-items-center justify-content-between"},r.a.createElement(v.a,{xs:{span:3,order:2},lg:{span:1,order:1},className:"d-flex px-3 px-lg-0 justify-content-center"},r.a.createElement(h.a,{variant:"",size:"lg",block:!0,onKeyDown:t,onClick:function(t){return e.incrementBpm(-5)}},"-5")),r.a.createElement(v.a,{xs:{span:3,order:3},lg:{span:1,order:2},className:"d-flex px-3 px-lg-0 justify-content-center"},r.a.createElement(h.a,{variant:"",size:"lg",block:!0,onKeyDown:t,onClick:function(t){return e.incrementBpm(-1)}},"-")),r.a.createElement(v.a,{xs:{span:12,order:1},lg:{span:6,order:3},className:"text-center"},r.a.createElement(I,null)),r.a.createElement(v.a,{xs:{span:3,order:4},lg:{span:1,order:4},className:"d-flex px-3 px-lg-0 justify-content-center"},r.a.createElement(h.a,{variant:"",size:"lg",block:!0,onKeyDown:t,onClick:function(t){return e.incrementBpm(1)}},"+")),r.a.createElement(v.a,{xs:{span:3,order:5},lg:{span:1,order:5},className:"d-flex px-3 px-lg-0 justify-content-center"},r.a.createElement(h.a,{variant:"",size:"lg",block:!0,onKeyDown:t,onClick:function(t){return e.incrementBpm(5)}},"+5"))),r.a.createElement(f.a,{className:"d-flex justify-content-center row-metronome-lights mt-5 mt-lg-0"},r.a.createElement(v.a,{xs:8,sm:6,md:8,lg:6,className:""},r.a.createElement(L,{length:4}))),r.a.createElement(f.a,{className:"d-flex justify-content-center"},r.a.createElement(v.a,{xs:6,className:"d-flex justify-content-center"},r.a.createElement(k,null)))),r.a.createElement(v.a,{xs:12,md:{span:1,offset:1},className:"d-flex justify-content-center py-4"},r.a.createElement(w,null))),r.a.createElement(K,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=Object(s.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_PLAY_STATUS":return e.playStatus?Object(i.a)(Object(i.a)({},e),p):Object(i.a)(Object(i.a)({},e),{},{playStatus:!0,dateTime:Date.now()});case"PLAY":return Object(i.a)(Object(i.a)({},e),{},{playStatus:!0,dateTime:t.dateTime});case"STOP":return Object(i.a)(Object(i.a)({},e),p);case"TICK":var n=e.timeElapsed+(t.dateTime-e.dateTime),a=Math.floor(n/e.mspb);return Object(i.a)(Object(i.a)({},e),{},{timeElapsed:n,tick:a,dateTime:t.dateTime});case"SET_VOLUME":return Object(i.a)(Object(i.a)({},e),{},{volume:t.volume});case"SET_BPM":return Object(i.a)(Object(i.a)({},e),{},{bpm:t.bpm,mspb:6e4/t.bpm});case"INCREMENT_BPM":var r=e.bpm+t.delta;return r>=200&&(r=200),r<=5&&(r=5),Object(i.a)(Object(i.a)({},e),{},{bpm:r,mspb:6e4/r});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(l.a,{store:G},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.088aad1d.chunk.js.map