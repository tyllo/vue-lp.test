(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],l=0,p=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function s(t){return i.p+"js/"+({"chat-messages":"chat-messages",chats:"chats",empty:"empty"}[t]||t)+"."+{"chat-messages":"9970454c",chats:"5a5e9878",empty:"fa917e4e"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0554":function(t,e,n){var r=n("96a4");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("499e").default;o("17611838",r,!0,{sourceMap:!1,shadowMode:!1})},"0974":function(t,e,n){var r={"./ru":"957c","./ru.js":"957c"};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="0974"},"17d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));Object.freeze({LAYOUT:"chats",LIST:"chats.list",toString(){return this.LAYOUT}});const r=Object.freeze({LAYOUT:"chat-messages",LIST:"chat-messages.list",toString(){return this.LAYOUT}}),o="empty"},"1bf8":function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return b}));var r=n("5530"),o=n("2f62"),a=n("365c"),s=n("959c"),i=n("a994"),c=n("fd60");class u extends s["a"]{getAll(t,e){let n=super.getAll(t,e);return n=n.catch(i["a"].bind(null,3e3)).then(()=>c["b"](t.chat_id)),n}addMessage(t){let e=this.api.create(t);return e=e.catch(i["a"].bind(null,void 0)).then(()=>c["a"](t)),e}}const l=new a["a"],d=new u({api:l}),p=Object(s["c"])({adapter:d});p.actions=Object(r["a"])({},p.actions,{async addMessage({commit:t,state:e},n){const r=await d.addMessage(n);return t(s["b"].SET_LIST,r),e.list}});const f="chat-messages",h=Object(o["a"])(f),b=t=>t.store.registerModule(f,p)},"343a":function(t,e,n){t.exports=n.p+"fonts/TTNorms-Regular.33f150c6.woff"},"365c":function(t,e,n){"use strict";n.d(e,"b",(function(){return g})),n.d(e,"a",(function(){return y})),n.d(e,"c",(function(){return w}));n("ddb0");var r=n("ade3"),o=n("5530"),a=n("bc3a"),s=n.n(a),i=n("9553"),c=n.n(i),u=n("9b02"),l=n.n(u);const d=()=>(t={})=>{const e=l()(t,"response.data")||{},n=e.error||Object(o["a"])({},t,{message:t.message},t.response);return Promise.reject(n)},p=(t,e)=>{const n=d(t);return e.interceptors.response.use(null,n),e};class f{constructor(t,e={}){Object(r["a"])(this,"http",null),Object(r["a"])(this,"url",":action");const n=Object(o["a"])({baseURL:"//test.api.url"},e);t&&(this.url=t),this.http=s.a.create(n),this.setInterceptors()}get(t,e={}){const n=t||this.getBasePath();return this.http.get(n,e)}post(t,e,n={}){const r=t||this.getBasePath();return this.http.post(r,e,n)}put(t,e,n={}){const r=t||this.getBasePath();return this.http.put(r,e,n)}patch(t,e,n={}){const r=t||this.getBasePath();return this.http.patch(r,e,n)}delete(t,e={}){const n=t||this.getBasePath();return this.http.delete(n,e)}setInterceptors(){p(f,this.http)}getBasePath(t={}){try{const e=new c.a(this.url),n=e.stringify(t);return n}catch(e){const t=this.constructor.name||f,n=`[App warn]: error method in ${t}.getBasePath`;return console.warn(n,e),this.url}}}const h={page:1,per_page:100},b={};class m extends f{getAll(t=h,e={}){const n=this.getBasePath(t);return this.get(n,Object(o["a"])({params:t},e))}getOne(t,e={},n={}){const r=this.getBasePath(Object(o["a"])({id:t},e));return this.get(r,Object(o["a"])({},b,{},n))}create(t,e={}){const n=this.getBasePath(t);return this.post(n,t,Object(o["a"])({},b,{},e))}update(t,e,n={}){const r=this.getBasePath(Object(o["a"])({id:t},e));return this.put(r,e,Object(o["a"])({},b,{},n))}remove(t,e={},n={}){const r=this.getBasePath(Object(o["a"])({id:t},e));return this.delete(r,n)}}class g extends m{constructor(...t){super(...t),Object(r["a"])(this,"url","chats(/:id)(/:action)")}}class y extends m{constructor(...t){super(...t),Object(r["a"])(this,"url","chat-messages(/:id)(/:action)")}}class w extends m{constructor(...t){super(...t),Object(r["a"])(this,"url","profile(/:action)")}}},"56d7":function(t,e,n){"use strict";n.r(e);n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("aside",{staticClass:"app__aside"},[n("router-view",{attrs:{name:"aside"}})],1),n("main",{staticClass:"app__main"},[n("router-view",{attrs:{name:"main"}})],1)])},a=[],s=n("5530"),i=n("2f62"),c={name:"app",created(){this.getProfile()},methods:Object(s["a"])({},Object(i["c"])(["getProfile"]))},u=c,l=(n("5c0b"),n("2877")),d=Object(l["a"])(u,o,a,!1,null,null,null),p=d.exports,f=n("c1df"),h=n.n(f);h.a.locale("ru");const b=()=>{};var m=n("8c4f"),g=(n("0481"),n("4069"),n("ac0b"));const y=()=>[],w=t=>(Object(g["b"])(t),y());var x=w,v=n("1bf8"),T=n("17d9");const O=()=>[{path:"/chart-messages/:chat_id(\\d+)",name:T["a"].LAYOUT,redirect:{name:T["a"].LIST},components:{aside:()=>n.e("chats").then(n.bind(null,"a1d5")),main:{name:"chat-messages-layout",render:t=>t("router-view")}},children:[{path:"list",name:T["a"].LIST,props:({params:t})=>({chat_id:+t.chat_id}),component:()=>n.e("chat-messages").then(n.bind(null,"4df6"))}]}],j=t=>(Object(v["b"])(t),O());var _=j;const S=()=>[{path:"/",name:T["b"],components:{aside:()=>n.e("chats").then(n.bind(null,"a1d5")),main:()=>n.e("empty").then(n.bind(null,"13b0"))},children:[]}];var k=S,E=[{path:"*",redirect:{name:T["b"]}}];const P=(t,e)=>{const n=e.reduce((e,n)=>(n="function"===typeof n?n(t):n,e.concat(n)),[]);return n},M=t=>P(t,[k,x,_,E]).filter(Boolean).flat();r["a"].use(m["a"]);const z=t=>{const e=new m["a"]({mode:"hash",base:"/",scrollBehavior:(t,e,n)=>t.path!==e.path&&(n||{y:0}),routes:M(t)});return e};var A=n("365c"),N=n("a994"),B=n("fd60");const L=new A["c"],U={SET_PROFILE:"SET_PROFILE"},R=()=>({profile:null}),I={profile:t=>t.profile},C={async getProfile({state:t,commit:e}){let n=L.get();n=n.catch(N["a"].bind(null,1e3)).then(()=>Object(B["e"])());const r=await n;return e(U.SET_PROFILE,r),t.profile}},Y={[U.SET_PROFILE](t,e){t.profile=e}};var D={state:R,getters:I,actions:C,mutations:Y};r["a"].use(i["b"]);const F=()=>new i["b"].Store({modules:{profile:D}});n("7e7d");const G=F(),$=z({store:G});r["a"].config.productionTip=!0;const H={router:$,store:G,render:t=>t(p)};b({Vue:r["a"],app:H,router:$,store:G}),new r["a"](H).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("0554"),o=n.n(r);o.a},"7d37":function(t,e,n){t.exports=n.p+"fonts/TTNorms-Bold.7695fb09.eot"},"7e7d":function(t,e,n){var r=n("9573");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("499e").default;o("4be516cc",r,!0,{sourceMap:!1,shadowMode:!1})},"83bd":function(t,e,n){t.exports=n.p+"fonts/TTNorms-Bold.1009f033.woff"},8549:function(t,e,n){t.exports=n.p+"fonts/TTNorms-Bold.7695fb09.eot"},9573:function(t,e,n){var r=n("24fb"),o=n("1de5"),a=n("8549"),s=n("7d37"),i=n("83bd"),c=n("e401"),u=n("b331"),l=n("de1e"),d=n("343a"),p=n("dc8f");e=r(!1);var f=o(a),h=o(s,{hash:"?#iefix"}),b=o(i),m=o(c),g=o(u),y=o(l,{hash:"?#iefix"}),w=o(d),x=o(p);e.push([t.i,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:initial;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:initial}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:initial}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}*,:after,:before,html{box-sizing:border-box}body,html{height:100%;margin:0}body{font-size:14px;line-height:141.62%;color:#475453;letter-spacing:normal}body,button,input,select,textarea{font-family:TT Norms,Arial,sans-serif}.app-custom-scroll::-webkit-scrollbar{position:absolute;width:10px;background-color:transparent;-webkit-border-radius:100px}.app-custom-scroll::-webkit-scrollbar:hover{background-color:#f3f6f8}.app-custom-scroll::-webkit-scrollbar-thumb:vertical{min-height:10px;background-color:#e9edf2;background-clip:padding-box;border:2px solid transparent;-webkit-border-radius:100px}.app-custom-scroll::-webkit-scrollbar-thumb:vertical:active{background:#e9edf2;-webkit-border-radius:100px}@font-face{src:url("+f+');src:local("TT Norms Bold"),local("TTNorms-Bold"),url('+h+') format("embedded-opentype"),url('+b+') format("woff"),url('+m+') format("truetype");font-family:TT Norms;font-style:normal;font-weight:900}@font-face{src:url('+g+');src:local("TT Norms Regular"),local("TTNorms-Regular"),url('+y+') format("embedded-opentype"),url('+w+') format("woff"),url('+x+') format("truetype");font-family:TT Norms;font-style:normal;font-weight:400}*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}',""]),t.exports=e},"959c":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return d}));var r={};n.r(r),n.d(r,"SET_LIST",(function(){return a}));var o=n("5530");const a="SET_LIST",s=t=>Object(o["a"])({},t.state?t.state:{},{list:null}),i=t=>{const{adapter:e}=t;return{async getAll(t,n){const{state:r,commit:o}=t,s=await e.getAll(n,t);return o(a,s),r.list}}},c=()=>({[a](t,e){t.list=e}});var u=n("ade3");class l{constructor(t){Object(u["a"])(this,"api",null),this.api=t.api}getAll(t){return this.api.getAll(t,{params:t})}}function d(t){return{namespaced:!0,state:s(t),actions:i(t),mutations:c(t)}}},"96a4":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".app{display:flex;flex-wrap:wrap;min-height:100%}.app__aside{width:300px;background-color:#f3f6f8}.app__main{z-index:10;display:flex;flex-grow:1;flex-wrap:wrap;max-width:calc(100% - 300px);background-color:#fff;box-shadow:0 0 20px rgba(0,0,0,.1)}",""]),t.exports=e},a994:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const r=2e3,o=(t=r)=>new Promise(e=>setTimeout(e,t*Math.random()))},ac0b:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return g}));n("ddb0");var r=n("5530"),o=n("2f62"),a=n("365c"),s=n("959c"),i=n("a994"),c=n("fd60");class u extends s["a"]{getAll(...t){let e=super.getAll(...t);return e=e.catch(i["a"].bind(null,void 0)).then(c["d"]),e}getCountUnreadMessages(){const t=new a["a"],e={type:"new",per_page:1};let n=t.getAll(e);return n=n.catch(i["a"].bind(null,1e3)).then(c["c"]),n}}const l={SET_COUNT_UNREAD_MESSAGES:"SET_COUNT_UNREAD_MESSAGES"},d=new a["b"],p={countUnreadMessages:0},f=new u({api:d}),h=Object(s["c"])({adapter:f,state:p});h.actions=Object(r["a"])({},h.actions,{async getCountUnreadMessages({commit:t}){const e=await f.getCountUnreadMessages();t(l.SET_COUNT_UNREAD_MESSAGES,e)}}),h.mutations=Object(r["a"])({},h.mutations,{[l.SET_COUNT_UNREAD_MESSAGES](t,e){t.countUnreadMessages=e}});const b="chats",m=Object(o["a"])(b),g=t=>t.store.registerModule(b,h)},b331:function(t,e,n){t.exports=n.p+"fonts/TTNorms-Regular.c585352c.eot"},dc8f:function(t,e,n){t.exports=n.p+"fonts/TTNorms-Regular.eb6edc39.ttf"},de1e:function(t,e,n){t.exports=n.p+"fonts/TTNorms-Regular.c585352c.eot"},e401:function(t,e,n){t.exports=n.p+"fonts/TTNorms-Bold.64f8b35b.ttf"},fd60:function(t,e,n){"use strict";n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return h}));var r=n("5530"),o=n("c1df"),a=n.n(o),s=n("4416"),i=n.n(s);const c="vasiliy",u=[{id:1,subject:"Простой запрос",created:"2019-08-01 23:59",parts:[{id:1,author:c,text:"Привет, как дела?",created:"2019-08-01 23:59"},{id:2,author:"petya",created:"2019-08-02 01:20",text:"Привет, все хорошо, спасибо!"},{id:3,author:"petya",created:"2019-08-02 05:20",text:"А у тебя?"}]},{id:2,subject:"Вопрос по домену",created:"2016-03-02 14:19",parts:[{id:1,author:"petr",created:"2019-08-06 12:20",text:"Здравствуйте, тут есть кто-нибудь?"},{id:2,author:c,created:"2019-08-06 12:34",text:"Да, я вас слушаю!"},{id:3,author:"petr",created:"2019-08-06 12:38",text:"Помогите мне настроить домен!"}]}],l=()=>({id:c,name:c}),d=()=>u.map(t=>Object(r["a"])({},t,{parts:void 0,last_part:i()(t.parts)})),p=t=>{const e=u.find(e=>e.id===t.chat_id),n=Object(r["a"])({},t,{id:i()(e.parts).id+1,author:c,created:a()().format("YYYY-MM-DD HH:mm")});return e.parts.push(n),e.parts},f=t=>{const e=u.find(e=>e.id===t);return e?e.parts:null},h=()=>151}});