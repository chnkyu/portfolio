"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[5338],{4203:(e,a,o)=>{o.d(a,{a:()=>d,d:()=>l,loadImage:()=>c});var n=o(5706);const r=0,t=1,i=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;async function c(e){return new Promise((a=>{e.loading=!0;const o=new Image;e.element=o,o.addEventListener("load",(()=>{e.loading=!1,a()})),o.addEventListener("error",(()=>{e.element=void 0,e.error=!0,e.loading=!1,(0,n.tZ)().error("".concat(n.dI," loading image: ").concat(e.source)),a()})),o.src=e.source}))}async function d(e){if("svg"!==e.type)return void await c(e);e.loading=!0;const a=await fetch(e.source);a.ok?e.svgData=await a.text():((0,n.tZ)().error("".concat(n.dI," Image not found")),e.error=!0),e.loading=!1}function l(e,a,o,d){var l,s;const g=function(e,a,o){const{svgData:t}=e;if(!t)return"";const c=(0,n.LC)(a,o);if(t.includes("fill"))return t.replace(i,(()=>c));const d=t.indexOf(">");return"".concat(t.substring(r,d),' fill="').concat(c,'"').concat(t.substring(d))}(e,o,null!==(l=null===(s=d.opacity)||void 0===s?void 0:s.value)&&void 0!==l?l:t),u={color:o,gif:a.gif,data:{...e,svgData:g},loaded:!1,ratio:a.width/a.height,replaceColor:a.replaceColor,source:a.src};return new Promise((a=>{const o=new Blob([g],{type:"image/svg+xml"}),n=URL||window.URL||window.webkitURL||window,r=n.createObjectURL(o),t=new Image;t.addEventListener("load",(()=>{u.loaded=!0,u.element=t,a(u),n.revokeObjectURL(r)}));t.addEventListener("error",(()=>{(async()=>{n.revokeObjectURL(r);const o={...e,error:!1,loading:!0};await c(o),u.loaded=!0,u.element=o.element,a(u)})()})),t.src=r}))}},5338:(e,a,o)=>{o.d(a,{loadImageShape:()=>i});var n=o(4203),r=o(5706);const t=3;async function i(e){let a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];!function(e){e.loadImage||(e.loadImage=async a=>{if(!a.name&&!a.src)throw new Error("".concat(r.dI," no image source provided"));if(e.images||(e.images=[]),!e.images.find((e=>e.name===a.name||e.source===a.src)))try{var i,c;const r={gif:null!==(i=a.gif)&&void 0!==i&&i,name:null!==(c=a.name)&&void 0!==c?c:a.src,source:a.src,type:a.src.substring(a.src.length-t),error:!1,loading:!0,replaceColor:a.replaceColor,ratio:a.width&&a.height?a.width/a.height:void 0};let d;if(e.images.push(r),a.gif){const{loadGifImage:e}=await o.e(459).then(o.bind(o,459));d=e}else d=a.replaceColor?n.a:n.loadImage;await d(r)}catch{var d;throw new Error("".concat(r.dI," ").concat(null!==(d=a.name)&&void 0!==d?d:a.src," not found"))}})}(e);const{ImagePreloaderPlugin:i}=await o.e(1441).then(o.bind(o,1441)),{ImageDrawer:c}=await o.e(2558).then(o.bind(o,2558)),d=new i(e);await e.addPlugin(d,a),await e.addShape(["image","images"],new c(e),a)}}}]);
//# sourceMappingURL=5338.e5a27ba4.chunk.js.map