(function(t){function e(e){for(var r,o,u=e[0],i=e[1],c=e[2],p=0,l=[];p<u.length;p++)o=u[p],s[o]&&l.push(s[o][0]),s[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);d&&d(e);while(l.length)l.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},s={app:0},a=[];function u(t){return i.p+"js/"+({host:"host",post:"post",user:"user"}[t]||t)+"."+{host:"b402400c",post:"db51125d",user:"91a57f79"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={host:1,post:1,user:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({host:"host",post:"post",user:"user"}[t]||t)+"."+{host:"b9cce629",post:"601ef77a",user:"8beed2f6"}[t]+".css",s=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=a[u],p=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(p===r||p===s))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){c=l[u],p=c.getAttribute("data-href");if(p===r||p===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||s,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.request=r,delete o[t],d.parentNode.removeChild(d),n(a)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){o[t]=0}));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise(function(e,n){r=s[t]=[e,n]});e.push(r[2]=a);var c,p=document.createElement("script");p.charset="utf-8",p.timeout=120,i.nc&&p.setAttribute("nonce",i.nc),p.src=u(t),c=function(e){p.onerror=p.onload=null,clearTimeout(l);var n=s[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}s[t]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:p})},12e4);p.onerror=p.onload=c,document.head.appendChild(p)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=p;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1d7d":function(t,e,n){},2528:function(t,e,n){"use strict";var r=n("1d7d"),o=n.n(r);o.a},3123:function(t,e,n){"use strict";var r=n("82c4"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"inverted",attrs:{id:"header"}},[r("div",{staticClass:"content-width"},[r("router-link",{staticClass:"header-logo",attrs:{to:"/"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05"),width:"50",height:"50"}})]),r("h1",[t._v("Delta Defense Placeholder Blog")])],1)]),r("div",{staticClass:"content-width",attrs:{id:"main"}},[t.isLoading?r("div",{staticClass:"main-loading-bar"},[r("loading-bar",{attrs:{loading:!0}})],1):r("router-view")],1)])},s=[],a=n("795b"),u=n.n(a),i=(n("ac6a"),n("5df3"),n("96cf"),n("3b8d")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-bar",class:{loading:t.loading}},[n("span")])},p=[],l={name:"loading-bar",props:["loading"]},d=l,f=(n("2528"),n("2877")),h=Object(f["a"])(d,c,p,!1,null,"aae667d4",null),m=h.exports,g={name:"app",components:{LoadingBar:m},data:function(){return{isLoading:!1}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,u.a.all([this.$store.dispatch("getPosts"),this.$store.dispatch("getUsers"),this.$store.dispatch("getComments")]);case 3:this.isLoading=!1;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},v=g,b=(n("3123"),Object(f["a"])(v,o,s,!1,null,null,null)),w=b.exports,y=n("e814"),x=n.n(y),j=n("8c4f");r["a"].use(j["a"]);var O=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return n.e("host").then(n.bind(null,"f5b8"))}},{path:"/post/:id",name:"post",component:function(){return n.e("post").then(n.bind(null,"0b18"))},props:function(t){return{id:x()(t.params.id,10)}}},{path:"/user/:id",name:"user",component:function(){return n.e("user").then(n.bind(null,"1de2"))},props:function(t){return{id:x()(t.params.id,10)}}}]}),k=(n("7514"),n("2f62")),P=n("f499"),C=n.n(P),E="http://jsonplaceholder.typicode.com/",T=function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,n,r){var o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(E+n,{method:e,body:r?C()(r):null});case 2:return o=t.sent,t.abrupt("return",o.json());case 4:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}(),_=T;r["a"].use(k["a"]);var R=new k["a"].Store({state:{posts:[],users:[],comments:[]},getters:{userById:function(t){return function(e){return t.users.find(function(t){return t.id===e})}},commentsForPostId:function(t){return function(e){return t.comments.filter(function(t){return t.postId===e})}},postById:function(t){return function(e){return t.posts.find(function(t){return t.id===e})}},postsByUserId:function(t){return function(e){return t.posts.filter(function(t){return t.userId===e})}}},mutations:{},actions:{getPosts:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,t.next=3,_("GET","posts");case 3:return r=t.sent,n.posts=r,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getUsers:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,t.next=3,_("GET","users");case 3:return r=t.sent,n.users=r,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getComments:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,t.next=3,_("GET","comments");case 3:return r=t.sent,n.comments=r,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}});r["a"].config.productionTip=!1,new r["a"]({router:O,store:R,render:function(t){return t(w)}}).$mount("#app"),window.store=R},"82c4":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.8bd35cde.js.map