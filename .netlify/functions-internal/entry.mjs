import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import { g as deserializeManifest } from './chunks/astro.718b4cdf.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.990cd57a.mjs');const pageMap = new Map([["src/pages/index.astro", _page0]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"const R=\"#fff\";const S=(window.innerWidth+window.innerHeight)/8,x=document.querySelector(\"canvas\"),t=x.getContext(\"2d\");let h=1,o,c,l=[],n={x:0,y:0,tx:0,ty:0,z:5e-4};m();y();O();window.onresize=y;function m(){for(let e=0;e<S;e++)l.push({x:0,y:0,z:.2+Math.random()*(1-.2)})}function f(e){e.x=Math.random()*o,e.y=Math.random()*c}function L(e){let i=\"z\",a=Math.abs(n.x),d=Math.abs(n.y);if(a>1||d>1){let E;a>d?E=Math.random()<a/(a+d)?\"h\":\"v\":E=Math.random()<d/(a+d)?\"v\":\"h\",E===\"h\"?i=n.x>0?\"l\":\"r\":i=n.y>0?\"t\":\"b\"}e.z=.2+Math.random()*(1-.2),i===\"z\"?(e.z=.1,e.x=Math.random()*o,e.y=Math.random()*c):i===\"l\"?(e.x=-50,e.y=c*Math.random()):i===\"r\"?(e.x=o+50,e.y=c*Math.random()):i===\"t\"?(e.x=o*Math.random(),e.y=-50):i===\"b\"&&(e.x=o*Math.random(),e.y=c+50)}function y(){h=window.devicePixelRatio||1,o=window.innerWidth*h,c=window.innerHeight*h,x.width=o,x.height=c,l.forEach(f)}function O(){t.clearRect(0,0,o,c),M(),_(),requestAnimationFrame(O)}function M(){n.tx*=.96,n.ty*=.96,n.x+=(n.tx-n.x)*.8,n.y+=(n.ty-n.y)*.8,l.forEach(e=>{e.x+=n.x*e.z,e.y+=n.y*e.z,e.x+=(e.x-o/2)*n.z*e.z,e.y+=(e.y-c/2)*n.z*e.z,e.z+=n.z,(e.x<-50||e.x>o+50||e.y<-50||e.y>c+50)&&L(e)})}function _(){l.forEach(e=>{t.beginPath(),t.lineCap=\"round\",t.lineWidth=3*e.z*h,t.globalAlpha=.5+.5*Math.random(),t.strokeStyle=R,t.beginPath(),t.moveTo(e.x,e.y);var i=n.x*2,a=n.y*2;Math.abs(i)<.1&&(i=.5),Math.abs(a)<.1&&(a=.5),t.lineTo(e.x+i,e.y+a),t.stroke()})}class T extends HTMLElement{constructor(){super(),document.getElementById(\"img-click\").addEventListener(\"click\",()=>{window.location.assign(this.dataset.message)})}}customElements.define(\"image-click\",T);\n"}],"styles":[{"type":"external","src":"/_astro/index.4c587c7b.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["/home/blust/Projects/Astro/AstroNasaImages/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index.astro.d00f1668.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.990cd57a.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.a4c43198.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.4c587c7b.css","/saturn.png"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
