(()=>{var e,t,r,n,o,a,i,s,c={},l={};function p(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={id:e,loaded:!1,exports:{}};return c[e](r,r.exports,p),r.loaded=!0,r.exports}p.m=c,e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&(e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},o=e=>!--e.r&&e(),a=(e,t)=>e?e.push(t):o(t),p.a=(i,s,c)=>{var l,p,u,d=c&&[],m=i.exports,f=!0,b=!1,h=(t,r,n)=>{b||(b=!0,r.r+=t.length,t.map(((t,o)=>t[e](r,n))),b=!1)},g=new Promise(((e,t)=>{u=t,p=()=>(e(m),n(d),d=0)}));g[t]=m,g[e]=(e,t)=>{if(f)return o(e);l&&h(l,e,t),a(d,e),g.catch(t)},i.exports=g,s((i=>{var s;l=(i=>i.map((i=>{if(null!==i&&"object"==typeof i){if(i[e])return i;if(i.then){var s=[];i.then((e=>{c[t]=e,n(s),s=0}),(e=>{c[r]=e,n(s),s=0}));var c={};return c[e]=(e,t)=>(a(s,e),i.catch(t)),c}}var l={};return l[e]=e=>o(e),l[t]=i,l})))(i);var c=()=>l.map((e=>{if(e[r])throw e[r];return e[t]})),p=new Promise(((e,t)=>{(s=()=>e(c)).r=0,h(l,s,t)}));return s.r?p:c()}),(e=>(e&&u(g[r]=e),p()))),f=!1},p.d=(e,t)=>{for(var r in t)p.o(t,r)&&!p.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},p.f={},p.e=e=>Promise.all(Object.keys(p.f).reduce(((t,r)=>(p.f[r](e,t),t)),[])),p.u=e=>e+".index.js",p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},s="rust-simple-project:",p.l=(e,t,r,n)=>{if(i[e])i[e].push(t);else{var o,a;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==s+r){o=u;break}}o||(a=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,p.nc&&o.setAttribute("nonce",p.nc),o.setAttribute("data-webpack",s+r),o.src=e),i[e]=[t];var d=(t,r)=>{o.onerror=o.onload=null,clearTimeout(m);var n=i[e];if(delete i[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(r))),t)return t(r)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),a&&document.head.appendChild(o)}},p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.v=(e,t,r,n)=>{var o=fetch(p.p+""+r+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,n).then((t=>Object.assign(e,t.instance.exports))):o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,n))).then((t=>Object.assign(e,t.instance.exports)))},(()=>{var e;p.g.importScripts&&(e=p.g.location+"");var t=p.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),p.p=e})(),(()=>{var e={179:0};p.f.j=(t,r)=>{var n=p.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=p.p+p.u(t),i=new Error;p.l(a,(r=>{if(p.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,i,s]=r,c=0;if(a.some((t=>0!==e[t]))){for(n in i)p.o(i,n)&&(p.m[n]=i[n]);s&&s(p)}for(t&&t(r);c<a.length;c++)o=a[c],p.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkrust_simple_project=self.webpackChunkrust_simple_project||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),console.log("test"),async function(){let e=null;try{e=await p.e(235).then(p.bind(p,235))}catch(e){return void console.error(e)}console.log(e);const t=document.getElementById("upload"),r=new FileReader;r.onloadend=()=>{const t=r.result.replace(/^data:image\/(png|jpeg|jpg);base64,/,"");let n=e.grayScale(t);document.getElementById("new-img").setAttribute("src",n)},t.addEventListener("change",(()=>{r.readAsDataURL(t?.files[0])}))}()})();