var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function i(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,e,i){if(t){const o=c(t,n,e,i);return t[0](o)}}function c(t,e,i,o){return t[1]&&o?n(i.ctx.slice(),t[1](o(e))):i.ctx}function a(t,n,e,i,o,l,r){const s=function(t,n,e,i){if(t[2]&&i){const o=t[2](i(e));if(void 0===n.dirty)return o;if("object"==typeof o){const t=[],e=Math.max(n.dirty.length,o.length);for(let i=0;i<e;i+=1)t[i]=n.dirty[i]|o[i];return t}return n.dirty|o}return n.dirty}(n,i,o,l);if(s){const o=c(n,e,i,r);t.p(o,s)}}function u(t,n){t.appendChild(n)}function f(t,n,e){t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function d(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function h(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function m(){return g(" ")}function y(){return g("")}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t,n){for(const e in n)b(t,e,n[e])}function x(t,n,e,i){t.style.setProperty(n,e,i?"important":"")}function w(t,n,e){t.classList[e?"add":"remove"](n)}let z;function k(t){z=t}function _(t){(function(){if(!z)throw new Error("Function called outside component initialization");return z})().$$.on_mount.push(t)}const N=[],M=[],j=[],C=[],q=Promise.resolve();let E=!1;function H(t){j.push(t)}let T=!1;const S=new Set;function V(){if(!T){T=!0;do{for(let t=0;t<N.length;t+=1){const n=N[t];k(n),B(n.$$)}for(k(null),N.length=0;M.length;)M.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];S.has(n)||(S.add(n),n())}j.length=0}while(N.length);for(;C.length;)C.pop()();E=!1,T=!1,S.clear()}}function B(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const L=new Set;let A;function O(){A={r:0,c:[],p:A}}function I(){A.r||o(A.c),A=A.p}function P(t,n){t&&t.i&&(L.delete(t),t.i(n))}function D(t,n,e,i){if(t&&t.o){if(L.has(t))return;L.add(t),A.c.push((()=>{L.delete(t),i&&(e&&t.d(1),i())})),t.o(n)}}const F="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function J(t,n){const e={},i={},o={$$scope:1};let l=t.length;for(;l--;){const r=t[l],s=n[l];if(s){for(const t in r)t in s||(i[t]=1);for(const t in s)o[t]||(e[t]=s[t],o[t]=1);t[l]=s}else for(const t in r)o[t]=1}for(const t in i)t in e||(e[t]=void 0);return e}function U(t){t&&t.c()}function W(t,n,i){const{fragment:r,on_mount:s,on_destroy:c,after_update:a}=t.$$;r&&r.m(n,i),H((()=>{const n=s.map(e).filter(l);c?c.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(H)}function G(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function K(t,n){-1===t.$$.dirty[0]&&(N.push(t),E||(E=!0,q.then(V)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Q(n,e,l,r,s,c,a=[-1]){const u=z;k(n);const f=e.props||{},d=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:i(),dirty:a,skip_bound:!1};let h=!1;if(d.ctx=l?l(n,f,((t,e,...i)=>{const o=i.length?i[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&K(n,t)),e})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!r&&r(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();e.intro&&P(n.$$.fragment),W(n,e.target,e.anchor),V()}k(u)}class R{$destroy(){G(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function X(e){let i,o,l=[{key:o="path-"+e[0]},e[1]],r={};for(let t=0;t<l.length;t+=1)r=n(r,l[t]);return{c(){i=$("path"),v(i,r)},m(t,n){f(t,i,n)},p(t,[n]){v(i,r=J(l,[1&n&&o!==(o="path-"+t[0])&&{key:o},2&n&&t[1]]))},i:t,o:t,d(t){t&&p(i)}}}function Y(t,n,e){let{id:i=""}=n,{data:o={}}=n;return t.$$set=t=>{"id"in t&&e(0,i=t.id),"data"in t&&e(1,o=t.data)},[i,o]}class Z extends R{constructor(t){super(),Q(this,t,Y,X,r,{id:0,data:1})}}function tt(e){let i,o,l=[{key:o="polygon-"+e[0]},e[1]],r={};for(let t=0;t<l.length;t+=1)r=n(r,l[t]);return{c(){i=$("polygon"),v(i,r)},m(t,n){f(t,i,n)},p(t,[n]){v(i,r=J(l,[1&n&&o!==(o="polygon-"+t[0])&&{key:o},2&n&&t[1]]))},i:t,o:t,d(t){t&&p(i)}}}function nt(t,n,e){let{id:i=""}=n,{data:o={}}=n;return t.$$set=t=>{"id"in t&&e(0,i=t.id),"data"in t&&e(1,o=t.data)},[i,o]}class et extends R{constructor(t){super(),Q(this,t,nt,tt,r,{id:0,data:1})}}function it(n){let e;return{c(){e=$("g")},m(t,i){f(t,e,i),e.innerHTML=n[0]},p(t,[n]){1&n&&(e.innerHTML=t[0])},i:t,o:t,d(t){t&&p(e)}}}function ot(t,n,e){let i,o=870711;let{data:l}=n;function r(t){if(!t||!t.raw)return null;let n=t.raw;const e={};return n=n.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,((t,n)=>{const i=(o+=1,`fa-${o.toString(16)}`);return e[n]=i,` id="${i}"`})),n=n.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,((t,n,i,o)=>{const l=n||o;return l&&e[l]?`#${e[l]}`:t})),n}return t.$$set=t=>{"data"in t&&e(1,l=t.data)},t.$$.update=()=>{2&t.$$.dirty&&e(0,i=r(l))},[i,l]}class lt extends R{constructor(t){super(),Q(this,t,ot,it,r,{data:1})}}function rt(t){let n,e,i,o;const l=t[13].default,r=s(l,t,t[12],null);return{c(){n=$("svg"),r&&r.c(),b(n,"version","1.1"),b(n,"class",e="fa-icon "+t[0]+" svelte-1dof0an"),b(n,"x",t[8]),b(n,"y",t[9]),b(n,"width",t[1]),b(n,"height",t[2]),b(n,"aria-label",t[11]),b(n,"role",i=t[11]?"img":"presentation"),b(n,"viewBox",t[3]),b(n,"style",t[10]),w(n,"fa-spin",t[4]),w(n,"fa-pulse",t[6]),w(n,"fa-inverse",t[5]),w(n,"fa-flip-horizontal","horizontal"===t[7]),w(n,"fa-flip-vertical","vertical"===t[7])},m(t,e){f(t,n,e),r&&r.m(n,null),o=!0},p(t,[s]){r&&r.p&&4096&s&&a(r,l,t,t[12],s,null,null),(!o||1&s&&e!==(e="fa-icon "+t[0]+" svelte-1dof0an"))&&b(n,"class",e),(!o||256&s)&&b(n,"x",t[8]),(!o||512&s)&&b(n,"y",t[9]),(!o||2&s)&&b(n,"width",t[1]),(!o||4&s)&&b(n,"height",t[2]),(!o||2048&s)&&b(n,"aria-label",t[11]),(!o||2048&s&&i!==(i=t[11]?"img":"presentation"))&&b(n,"role",i),(!o||8&s)&&b(n,"viewBox",t[3]),(!o||1024&s)&&b(n,"style",t[10]),17&s&&w(n,"fa-spin",t[4]),65&s&&w(n,"fa-pulse",t[6]),33&s&&w(n,"fa-inverse",t[5]),129&s&&w(n,"fa-flip-horizontal","horizontal"===t[7]),129&s&&w(n,"fa-flip-vertical","vertical"===t[7])},i(t){o||(P(r,t),o=!0)},o(t){D(r,t),o=!1},d(t){t&&p(n),r&&r.d(t)}}}function st(t,n,e){let{$$slots:i={},$$scope:o}=n,{class:l}=n,{width:r}=n,{height:s}=n,{box:c}=n,{spin:a=!1}=n,{inverse:u=!1}=n,{pulse:f=!1}=n,{flip:p=null}=n,{x:d}=n,{y:h}=n,{style:$}=n,{label:g}=n;return t.$$set=t=>{"class"in t&&e(0,l=t.class),"width"in t&&e(1,r=t.width),"height"in t&&e(2,s=t.height),"box"in t&&e(3,c=t.box),"spin"in t&&e(4,a=t.spin),"inverse"in t&&e(5,u=t.inverse),"pulse"in t&&e(6,f=t.pulse),"flip"in t&&e(7,p=t.flip),"x"in t&&e(8,d=t.x),"y"in t&&e(9,h=t.y),"style"in t&&e(10,$=t.style),"label"in t&&e(11,g=t.label),"$$scope"in t&&e(12,o=t.$$scope)},[l,r,s,c,a,u,f,p,d,h,$,g,o,i]}class ct extends R{constructor(t){super(),Q(this,t,st,rt,r,{class:0,width:1,height:2,box:3,spin:4,inverse:5,pulse:6,flip:7,x:8,y:9,style:10,label:11})}}function at(t,n,e){const i=t.slice();return i[24]=n[e],i[26]=e,i}function ut(t,n,e){const i=t.slice();return i[27]=n[e],i[26]=e,i}function ft(t){let n,e,i,o,l=t[0].paths&&pt(t),r=t[0].polygons&&ht(t),s=t[0].raw&&gt(t);return{c(){l&&l.c(),n=m(),r&&r.c(),e=m(),s&&s.c(),i=y()},m(t,c){l&&l.m(t,c),f(t,n,c),r&&r.m(t,c),f(t,e,c),s&&s.m(t,c),f(t,i,c),o=!0},p(t,o){t[0].paths?l?(l.p(t,o),1&o&&P(l,1)):(l=pt(t),l.c(),P(l,1),l.m(n.parentNode,n)):l&&(O(),D(l,1,1,(()=>{l=null})),I()),t[0].polygons?r?(r.p(t,o),1&o&&P(r,1)):(r=ht(t),r.c(),P(r,1),r.m(e.parentNode,e)):r&&(O(),D(r,1,1,(()=>{r=null})),I()),t[0].raw?s?(s.p(t,o),1&o&&P(s,1)):(s=gt(t),s.c(),P(s,1),s.m(i.parentNode,i)):s&&(O(),D(s,1,1,(()=>{s=null})),I())},i(t){o||(P(l),P(r),P(s),o=!0)},o(t){D(l),D(r),D(s),o=!1},d(t){l&&l.d(t),t&&p(n),r&&r.d(t),t&&p(e),s&&s.d(t),t&&p(i)}}}function pt(t){let n,e,i=t[0].paths,o=[];for(let n=0;n<i.length;n+=1)o[n]=dt(ut(t,i,n));const l=t=>D(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=y()},m(t,i){for(let n=0;n<o.length;n+=1)o[n].m(t,i);f(t,n,i),e=!0},p(t,e){if(1&e){let r;for(i=t[0].paths,r=0;r<i.length;r+=1){const l=ut(t,i,r);o[r]?(o[r].p(l,e),P(o[r],1)):(o[r]=dt(l),o[r].c(),P(o[r],1),o[r].m(n.parentNode,n))}for(O(),r=i.length;r<o.length;r+=1)l(r);I()}},i(t){if(!e){for(let t=0;t<i.length;t+=1)P(o[t]);e=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)D(o[t]);e=!1},d(t){d(o,t),t&&p(n)}}}function dt(t){let n,e;return n=new Z({props:{id:t[26],data:t[27]}}),{c(){U(n.$$.fragment)},m(t,i){W(n,t,i),e=!0},p(t,e){const i={};1&e&&(i.data=t[27]),n.$set(i)},i(t){e||(P(n.$$.fragment,t),e=!0)},o(t){D(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function ht(t){let n,e,i=t[0].polygons,o=[];for(let n=0;n<i.length;n+=1)o[n]=$t(at(t,i,n));const l=t=>D(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=y()},m(t,i){for(let n=0;n<o.length;n+=1)o[n].m(t,i);f(t,n,i),e=!0},p(t,e){if(1&e){let r;for(i=t[0].polygons,r=0;r<i.length;r+=1){const l=at(t,i,r);o[r]?(o[r].p(l,e),P(o[r],1)):(o[r]=$t(l),o[r].c(),P(o[r],1),o[r].m(n.parentNode,n))}for(O(),r=i.length;r<o.length;r+=1)l(r);I()}},i(t){if(!e){for(let t=0;t<i.length;t+=1)P(o[t]);e=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)D(o[t]);e=!1},d(t){d(o,t),t&&p(n)}}}function $t(t){let n,e;return n=new et({props:{id:t[26],data:t[24]}}),{c(){U(n.$$.fragment)},m(t,i){W(n,t,i),e=!0},p(t,e){const i={};1&e&&(i.data=t[24]),n.$set(i)},i(t){e||(P(n.$$.fragment,t),e=!0)},o(t){D(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function gt(t){let n,e,i;function o(n){t[15].call(null,n)}let l={};return void 0!==t[0]&&(l.data=t[0]),n=new lt({props:l}),M.push((()=>function(t,n,e){const i=t.$$.props[n];void 0!==i&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}(n,"data",o))),{c(){U(n.$$.fragment)},m(t,e){W(n,t,e),i=!0},p(t,i){const o={};var l;!e&&1&i&&(e=!0,o.data=t[0],l=()=>e=!1,C.push(l)),n.$set(o)},i(t){i||(P(n.$$.fragment,t),i=!0)},o(t){D(n.$$.fragment,t),i=!1},d(t){G(n,t)}}}function mt(t){let n;const e=t[14].default,i=s(e,t,t[16],null),o=i||function(t){let n,e,i=t[0]&&ft(t);return{c(){i&&i.c(),n=y()},m(t,o){i&&i.m(t,o),f(t,n,o),e=!0},p(t,e){t[0]?i?(i.p(t,e),1&e&&P(i,1)):(i=ft(t),i.c(),P(i,1),i.m(n.parentNode,n)):i&&(O(),D(i,1,1,(()=>{i=null})),I())},i(t){e||(P(i),e=!0)},o(t){D(i),e=!1},d(t){i&&i.d(t),t&&p(n)}}}(t);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,n){i?i.p&&65536&n&&a(i,e,t,t[16],n,null,null):o&&o.p&&1&n&&o.p(t,n)},i(t){n||(P(o,t),n=!0)},o(t){D(o,t),n=!1},d(t){o&&o.d(t)}}}function yt(t){let n,e;return n=new ct({props:{label:t[6],width:t[7],height:t[8],box:t[10],style:t[9],spin:t[2],flip:t[5],inverse:t[3],pulse:t[4],class:t[1],$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){U(n.$$.fragment)},m(t,i){W(n,t,i),e=!0},p(t,[e]){const i={};64&e&&(i.label=t[6]),128&e&&(i.width=t[7]),256&e&&(i.height=t[8]),1024&e&&(i.box=t[10]),512&e&&(i.style=t[9]),4&e&&(i.spin=t[2]),32&e&&(i.flip=t[5]),8&e&&(i.inverse=t[3]),16&e&&(i.pulse=t[4]),2&e&&(i.class=t[1]),65537&e&&(i.$$scope={dirty:e,ctx:t}),n.$set(i)},i(t){e||(P(n.$$.fragment,t),e=!0)},o(t){D(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function bt(t,n,e){let i,o,l,r,{$$slots:s={},$$scope:c}=n,{class:a=""}=n,{data:u}=n,{scale:f=1}=n,{spin:p=!1}=n,{inverse:d=!1}=n,{pulse:h=!1}=n,{flip:$=null}=n,{label:g=null}=n,{self:m=null}=n,{style:y=null}=n;function b(){let t=1;return void 0!==f&&(t=Number(f)),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*t}function v(){return m?Math.max(m.width,m.height)/16:1}return t.$$set=t=>{"class"in t&&e(1,a=t.class),"data"in t&&e(11,u=t.data),"scale"in t&&e(12,f=t.scale),"spin"in t&&e(2,p=t.spin),"inverse"in t&&e(3,d=t.inverse),"pulse"in t&&e(4,h=t.pulse),"flip"in t&&e(5,$=t.flip),"label"in t&&e(6,g=t.label),"self"in t&&e(0,m=t.self),"style"in t&&e(13,y=t.style),"$$scope"in t&&e(16,c=t.$$scope)},t.$$.update=()=>{14336&t.$$.dirty&&(!function(){if(void 0===u)return;const t=function(t){if("iconName"in t&&"icon"in t){let n={},e=t.icon,i=t.iconName,o={width:e[0],height:e[1],paths:[{d:e[4]}]};return n[i]=o,n}return t}(u),[n]=Object.keys(t),i=t[n];i.paths||(i.paths=[]),i.d&&i.paths.push({d:i.d}),i.polygons||(i.polygons=[]),i.points&&i.polygons.push({points:i.points}),e(0,m=i)}(),e(7,i=m?m.width/v()*b():0),e(8,o=m?m.height/v()*b():0),e(9,l=function(){let t="";null!==y&&(t+=y);let n=b();return 1===n?t:(""===t||t.endsWith(";")||(t+="; "),`${t}font-size: ${n}em`)}()),e(10,r=m?`0 0 ${m.width} ${m.height}`:`0 0 ${i} ${o}`))},[m,a,p,d,h,$,g,i,o,l,r,u,f,y,s,function(t){m=t,e(0,m)},c]}class vt extends R{constructor(t){super(),Q(this,t,bt,yt,r,{class:1,data:11,scale:12,spin:2,inverse:3,pulse:4,flip:5,label:6,self:0,style:13})}}
/*!
     * Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */var xt={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},wt={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};const{document:zt}=F;function kt(t){let n,e,i,o,l,r,s,c,a,d,$,y,v,w,z,k,_,N,M,j,C,q,E,H,T;return zt.title=n=t[0],N=new vt({props:{data:xt,scale:"2",style:"color:#5e81ac"}}),q=new vt({props:{data:wt,scale:"2",style:"color:#5e81ac"}}),{c(){e=h("link"),i=h("link"),o=h("link"),l=m(),r=h("main"),s=h("h1"),s.textContent="Hi, I'm Jiahong.",c=m(),a=h("div"),a.innerHTML='<div style="position:relative;vertical-align:middle;width:600px;text-align:justify">I&#39;m a current undergraduate student at the University of California, San\n    Diego studying Computer Engineering and Mathematics for Scientific\n    Computation. My academic interests lie at the intersection of (discrete and\n    numerical) math and computer science. <br/><br/></div>',d=g("\n\n    This webpage is a work-in-progress! "),$=h("br"),y=h("br"),v=m(),w=h("nav"),z=h("ul"),k=h("li"),_=h("a"),U(N.$$.fragment),M=m(),j=h("li"),C=h("a"),U(q.$$.fragment),E=m(),H=h("li"),H.innerHTML='<a href="https://leetcode.com/j1ah0ng" aria-label="leetcode"><svg style="fill:#5e81ac" viewBox="2 -2 36 36" width="32" height="32"><path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z"></path></svg></a>',b(e,"rel","icon"),b(e,"type","image/png"),b(e,"href","favicon.png"),b(e,"sizes","64x64"),b(i,"rel","shortcut icon"),b(i,"type","image/png"),b(i,"href","fav16.png"),b(i,"sizes","16x16"),b(o,"rel","shortcut icon"),b(o,"type","image/png"),b(o,"href","fav96.png"),b(o,"sizes","96x96"),b(s,"class","svelte-16tq457"),x(a,"display","flex"),x(a,"justify-content","center"),b(_,"href","https://github.com/j1ah0ng"),b(_,"aria-label","github"),b(k,"class","svelte-16tq457"),b(C,"href","https://linkedin.com/in/jiahonglong"),b(C,"aria-label","linkedin"),b(j,"class","svelte-16tq457"),b(H,"class","svelte-16tq457"),b(z,"class","svelte-16tq457"),b(w,"class","svelte-16tq457"),b(r,"class","svelte-16tq457")},m(t,n){u(zt.head,e),u(zt.head,i),u(zt.head,o),f(t,l,n),f(t,r,n),u(r,s),u(r,c),u(r,a),u(r,d),u(r,$),u(r,y),u(r,v),u(r,w),u(w,z),u(z,k),u(k,_),W(N,_,null),u(z,M),u(z,j),u(j,C),W(q,C,null),u(z,E),u(z,H),T=!0},p(t,[e]){(!T||1&e)&&n!==(n=t[0])&&(zt.title=n)},i(t){T||(P(N.$$.fragment,t),P(q.$$.fragment,t),T=!0)},o(t){D(N.$$.fragment,t),D(q.$$.fragment,t),T=!1},d(t){p(e),p(i),p(o),t&&p(l),t&&p(r),G(N),G(q)}}}function _t(t,n,e){let{title:i}=n;return _((()=>{i&&(document.title=i)})),t.$$set=t=>{"title"in t&&e(0,i=t.title)},e(0,i="👋"),[i]}return new class extends R{constructor(t){super(),Q(this,t,_t,kt,r,{title:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
