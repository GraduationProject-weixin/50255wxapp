(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0cc4":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.goodslist4,(function(n,e){var o=t.__get_orig(n),r=n.goodsPhoto?n.goodsPhoto.split(","):null;return{$orig:o,g0:r}}))),o=t.__map(t.goodslist,(function(n,e){var o=t.__get_orig(n),r=n.goodsPhoto?n.goodsPhoto.split(","):null;return{$orig:o,g1:r}})),r=t.__map(t.goodslist3,(function(n,e){var o=t.__get_orig(n),r=n.goodsPhoto?n.goodsPhoto.split(","):null;return{$orig:o,g2:r}})),i=t.__map(t.goodslist2,(function(n,e){var o=t.__get_orig(n),r=n.goodsPhoto?n.goodsPhoto.split(","):null;return{$orig:o,g3:r}}));t.$mp.data=Object.assign({},{$root:{l0:e,l1:o,l2:r,l3:i}})},i=[]},2520:function(t,n,e){"use strict";e.r(n);var o=e("a637"),r=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=r.a},3709:function(t,n,e){"use strict";(function(t){e("0310");o(e("66fd"));var n=o(e("8804"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},3875:function(t,n,e){"use strict";var o=e("b89d"),r=e.n(o);r.a},8804:function(t,n,e){"use strict";e.r(n);var o=e("0cc4"),r=e("2520");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("3875");var a,u=e("f0c5"),s=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=s.exports},a637:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,n){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=a(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return u=t.done,t},e:function(t){s=!0,i=t},f:function(){try{u||null==e.return||e.return()}finally{if(s)throw i}}}}function a(t,n){if(t){if("string"===typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function s(t,n,e,o,r,i,a){try{var u=t[i](a),s=u.value}catch(l){return void e(l)}u.done?n(s):Promise.resolve(s).then(o,r)}function l(t){return function(){var n=this,e=arguments;return new Promise((function(o,r){var i=t.apply(n,e);function a(t){s(i,o,r,a,u,"next",t)}function u(t){s(i,o,r,a,u,"throw",t)}a(void 0)}))}}e("1aa2");var c=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("b804"))}.bind(null,e)).catch(e.oe)},d={components:{uniIcons:c},data:function(){return{queryList:[{queryName:"商品名称"}],queryIndex:0,searchForm:{goodsName:""},CustomBar:"0",autoplaySwiper:!1,intervalSwiper:5e3,swiperList:[],goodslist:[],goodslist2:[],goodslist3:[],goodslist4:[],news:[]}},onShow:function(){var t=this;return l(o.default.mark((function n(){var e,r,a,u,s;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e=[],n.next=3,t.$api.page("config",{page:1,limit:5});case 3:r=n.sent,a=i(r.data.list);try{for(a.s();!(u=a.n()).done;)s=u.value,s.name.indexOf("picture")>=0&&s.value&&""!=s.value&&null!=s.value&&e.push({img:s.value})}catch(o){a.e(o)}finally{a.f()}return e&&(t.swiperList=e),n.next=9,t.$api.page("news",{page:1,limit:3});case 9:return r=n.sent,t.news=r.data.list,n.next=13,t.$api.page("goods",{page:1,limit:3});case 13:return r=n.sent,t.goodslist=r.data.list,n.next=17,t.$api.page("goods",{page:1,limit:3,orderBy:"insert_time"});case 17:return r=n.sent,t.goodslist2=r.data.list,n.next=21,t.$api.page("goods",{page:1,limit:3,goodsTemaiTypes:1});case 21:return r=n.sent,t.goodslist3=r.data.list,n.next=25,t.$api.page("goods",{page:1,limit:3,orderBy:"goods_click_number"});case 25:r=n.sent,t.goodslist4=r.data.list;case 27:case"end":return n.stop()}}),n)})))()},methods:{queryChange:function(t){this.queryIndex=t.detail.value,this.searchForm.goodsName=""},onSwiperTap:function(t){},onNewsDetailTap:function(t){this.$utils.jump("../news/detail?id=".concat(t))},onDetailTap:function(t,n){this.$utils.jump("../".concat(t,"/detail?id=").concat(n))},onPageTap:function(n){0==this.queryIndex&&(t.setStorageSync("indexQueryCondition",this.searchForm.goodsName),this.searchForm.goodsName=""),t.navigateTo({url:"../".concat(n,"/list"),fail:function(){t.switchTab({url:"../".concat(n,"/list")})}})}}};n.default=d}).call(this,e("543d")["default"])},b89d:function(t,n,e){}},[["3709","common/runtime","common/vendor"]]]);