(window["webpackJsonpreact-chrome-extension-boilerplate"]=window["webpackJsonpreact-chrome-extension-boilerplate"]||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(1),r=t.n(i),c=(t(9),t(10),t(3)),l=function(){return{windowPosition:{x:100,y:100}}},u=a.a.createContext({}),d=function(e){var n=e.children,t=l().windowPosition,i=Object(o.useState)(void 0),r=Object(c.a)(i,2),d=r[0],s=r[1];return Object(o.useEffect)((function(){window.addEventListener("message",(function(e){e.source===window&&e.data.type&&"EXTENSION_ID_RESULT"===e.data.type&&s(e.data.extensionId)}))}),[]),a.a.createElement(u.Provider,{value:{extensionId:d,getExtensionId:function(){window.postMessage({type:"GET_EXTENSION_ID"},"*")},windowPosition:t}},n)},s=function(){return a.a.createElement("h1",null,"Hello world")};var w=function(){return a.a.createElement(d,null,a.a.createElement(s,null))};r.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement(w,null)),document.getElementById("modal-window"))},4:function(e,n,t){e.exports=t(11)},9:function(e,n,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.fa0104ad.chunk.js.map