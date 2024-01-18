import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="modulepreload",p=function(_,i){return new URL(_,i).href},O={},o=function(i,s,l){let e=Promise.resolve();if(s&&s.length>0){const t=document.getElementsByTagName("link");e=Promise.all(s.map(r=>{if(r=p(r,l),r in O)return;O[r]=!0;const c=r.endsWith(".css"),E=c?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const u=t[a];if(u.href===r&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${E}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":d,c||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),c)return new Promise((a,u)=>{n.addEventListener("load",a),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>i()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,m=R({page:"preview"});f.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const P={"./src/stories/Button.stories.ts":async()=>o(()=>import("./Button.stories-hU8lE1w4.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./src/stories/Configure.mdx":async()=>o(()=>import("./Configure-ALm1hwDE.js"),__vite__mapDeps([6,2,3,4,7,8,9,10,11,12]),import.meta.url),"./src/stories/Header.stories.ts":async()=>o(()=>import("./Header.stories-GoDwFnon.js"),__vite__mapDeps([13,14,2,3,4,1,5,15]),import.meta.url),"./src/stories/MyLabel.stories.ts":async()=>o(()=>import("./MyLabel.stories-aVNC46Ad.js"),__vite__mapDeps([16,2,3,4,17]),import.meta.url),"./src/stories/Page.stories.ts":async()=>o(()=>import("./Page.stories-3hqx3pC8.js"),__vite__mapDeps([18,2,3,4,14,1,5,15,19]),import.meta.url)};async function T(_){return P[_]()}const{composeConfigs:w,PreviewWeb:L,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,v=async()=>{const _=await Promise.all([o(()=>import("./entry-preview-PSo23f1w.js"),__vite__mapDeps([20,3,4,21,8]),import.meta.url),o(()=>import("./entry-preview-docs-JZpfVWBz.js"),__vite__mapDeps([22,10,4,11,3]),import.meta.url),o(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([23,9]),import.meta.url),o(()=>import("./preview-6gmgJNdV.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([24,11]),import.meta.url),o(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([25,11]),import.meta.url),o(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([26,11]),import.meta.url),o(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-37XjEtlT.js"),__vite__mapDeps([27,4]),import.meta.url),o(()=>import("./preview-mEb2NEJf.js"),__vite__mapDeps([]),import.meta.url)]);return w(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:T,getProjectAnnotations:v});export{o as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Button.stories-hU8lE1w4.js","./Button-EUUPKjRI.js","./jsx-runtime-AgcCsxC8.js","./index-XiNr8FW2.js","./_commonjsHelpers-5-cIlDoe.js","./Button-X8hm4PDT.css","./Configure-ALm1hwDE.js","./index-QY9SERtS.js","./index-9vG4XYWr.js","./index-ogXoivrg.js","./index-mLPG47JP.js","./index-PPLHz8o0.js","./index-7MmEg4M7.js","./Header.stories-GoDwFnon.js","./Header--iP-Eu2q.js","./Header-Yyx952jD.css","./MyLabel.stories-aVNC46Ad.js","./MyLabel-MtWA2JNq.css","./Page.stories-3hqx3pC8.js","./Page-fZ7a-HXz.css","./entry-preview-PSo23f1w.js","./react-18-sFOusbzT.js","./entry-preview-docs-JZpfVWBz.js","./preview-VI2eoWmp.js","./preview-OnO0tzRj.js","./preview-FekBEZxm.js","./preview-u8M_OEO2.js","./preview-37XjEtlT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
