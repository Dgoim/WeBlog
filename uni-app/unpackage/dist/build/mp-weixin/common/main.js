(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"01e4":function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}))},3358:function(t,e,n){"use strict";var r=n("4e8c"),o=n.n(r);o.a},"3d02":function(t,e,n){"use strict";n.r(e);var r=n("5900"),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=o.a},"4bbb":function(t,e,n){"use strict";n.r(e);var r=n("c5aa"),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=o.a},"4e8c":function(t,e,n){},5900:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("4795"));o(n("66fd")),o(n("72bf"));function o(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,o,u,a){try{var c=t[u](a),i=c.value}catch(f){return void n(f)}c.done?e(i):Promise.resolve(i).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){u(a,r,o,c,i,"next",t)}function i(t){u(a,r,o,c,i,"throw",t)}c(void 0)}))}}var c={methods:{update:function(){var t=wx.getUpdateManager();t.onCheckForUpdate((function(t){console.log("是否有新版本？",t.hasUpdate)})),t.onUpdateReady((function(){wx.showModal({title:"发现新版本",content:"新版本已经准备好，是否重启应用？",success:function(e){e.confirm&&t.applyUpdate()}})}))},init:function(){},login:function(){var e=this;wx.login({success:function(){var n=a(r.default.mark((function n(o){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("尝试登录",o),o.code?wx.getSetting({success:function(){var n=a(r.default.mark((function n(u){var c;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!u.authSetting["scope.userInfo"]){n.next=5;break}console.log("用户已授权",u),wx.getUserInfo({success:function(){var n=a(r.default.mark((function n(u){var a,c;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("尝试获取用户信息",u),a={code:o.code},Object.assign(a,u.userInfo),n.next=5,e.$api.login(a);case 5:c=n.sent,t.setStorageSync("openid",c);case 7:case"end":return n.stop()}}),n)})));function u(t){return n.apply(this,arguments)}return u}()}),n.next=9;break;case 5:return n.next=7,e.$api.login({code:o.code});case 7:c=n.sent,t.setStorageSync("openid",c);case 9:case"end":return n.stop()}}),n)})));function u(t){return n.apply(this,arguments)}return u}()}):console.log("登录失败！"+o.errMsg);case 2:case"end":return n.stop()}}),n)})));function o(t){return n.apply(this,arguments)}return o}()})}},onLaunch:function(){console.log("APP onLaunch"),this.update(),this.init(),this.login()},onHide:function(){console.log("App Hide")}};e.default=c}).call(this,n("543d")["default"])},"5d5b":function(t,e,n){},"7fe0":function(t,e,n){"use strict";var r=n("5d5b"),o=n.n(r);o.a},"8a55":function(t,e,n){},c283:function(t,e,n){"use strict";n.r(e);var r=n("e978"),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=o.a},c48d:function(t,e,n){"use strict";(function(t){n("5b34");var e=a(n("66fd")),r=a(n("f3eb"));n("6029");var o=a(n("da62")),u=a(n("fa5a"));function a(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){n.e("componets/cu-custom").then(function(){return resolve(n("876b"))}.bind(null,n)).catch(n.oe)};e.default.component("cu-custom",s);var l=function(){n.e("componets/tm-footer").then(function(){return resolve(n("c1ad"))}.bind(null,n)).catch(n.oe)};e.default.component("tm-footer",l),e.default.component("home",o.default),e.default.component("about",u.default),r.default.mpType="app";var d=new e.default(i({},r.default));t(d).$mount(),e.default.mixin({onShareAppMessage:function(){return{}}})}).call(this,n("543d")["createApp"])},c4cd:function(t,e,n){"use strict";var r=n("8a55"),o=n.n(r);o.a},c5aa:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("4795"));function o(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,o,u,a){try{var c=t[u](a),i=c.value}catch(f){return void n(f)}c.done?e(i):Promise.resolve(i).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){u(a,r,o,c,i,"next",t)}function i(t){u(a,r,o,c,i,"throw",t)}c(void 0)}))}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={name:"home",data:function(){var t;return t={cardCur:0,swiperList:[],isLoading:!0,curPage:0,postData:[]},c(t,"cardCur",0),c(t,"dotStyle",!1),c(t,"towerStart",0),c(t,"direction",""),t},methods:{goTop:function(){console.log("回到顶部"),t.pageScrollTo({scrollTop:0,duration:300})},toSearch:function(){t.navigateTo({url:"./search/search"})},cardSwiper:function(t){this.cardCur=t.detail.current},formatTime:function(t){return this.$moment.unix(t).fromNow()},loadPost:function(){var e=this;return a(r.default.mark((function n(){var o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.isLoading=!0,e.postData.curPage%10==0&&(e.postData=[]),n.next=4,e.$api.getPost({page:e.curPage+1});case 4:o=n.sent,null!=o&&o.length>0&&(e.postData=e.postData.concat(o),e.curPage++),e.isLoading=!1,t.stopPullDownRefresh();case 8:case"end":return n.stop()}}),n)})))()}},onReady:function(){var t=this;return a(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadPost();case 2:t._observer=wx.createIntersectionObserver(t),t._observer.relativeToViewport({bottom:600}).observe(".action",(function(e){console.log(e),t.loadPost()})),t.$api.getSticky().then((function(e){t.swiperList=e}));case 5:case"end":return e.stop()}}),e)})))()},pageLifetimes:{}};e.default=i}).call(this,n("543d")["default"])},da62:function(t,e,n){"use strict";n.r(e);var r=n("fc35"),o=n("4bbb");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("3358");var a,c=n("f0c5"),i=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"600cd7bc",null,!1,r["a"],a);e["default"]=i.exports},e978:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("4795"));function o(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,o,u,a){try{var c=t[u](a),i=c.value}catch(f){return void n(f)}c.done?e(i):Promise.resolve(i).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){u(a,r,o,c,i,"next",t)}function i(t){u(a,r,o,c,i,"throw",t)}c(void 0)}))}}var c={name:"about",data:function(){return{cid:null,isLoading:!0,Overview:{},postData:{}}},onReady:function(t){var e=this;return a(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.getAboutcid();case 2:return e.cid=t.sent,t.next=5,e.$api.getPostBycid({cid:e.cid});case 5:return e.postData=t.sent,e.isLoading=!1,t.next=9,e.$api.getOverview();case 9:e.Overview=t.sent;case 10:case"end":return t.stop()}}),t)})))()},onShow:function(){}};e.default=c},f3eb:function(t,e,n){"use strict";n.r(e);var r=n("3d02");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("c4cd");var u,a,c,i,f=n("f0c5"),s=Object(f["a"])(r["default"],u,a,!1,null,null,null,!1,c,i);e["default"]=s.exports},fa5a:function(t,e,n){"use strict";n.r(e);var r=n("01e4"),o=n("c283");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("7fe0");var a,c=n("f0c5"),i=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=i.exports},fc35:function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.postData,(function(e,n){var r=t.formatTime(e.created);return{$orig:t.__get_orig(e),m0:r}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},u=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}))}},[["c48d","common/runtime","common/vendor"]]]);