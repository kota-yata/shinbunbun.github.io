(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(t,o,n){"use strict";var e=n(1),r=n(164),c=n(165),l=n.n(c);n(250),e.a.use(r.a,{error:"/images/NotFound.jpg",loading:"/images/NowLoading.jpg",observer:!0}),e.a.component("light-box",l.a)},142:function(t,o,n){var content=n(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("4e8213bc",content,!0,{sourceMap:!1})},143:function(t,o,n){var content=n(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("2f61aa80",content,!0,{sourceMap:!1})},144:function(t,o,n){var content=n(220);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("6ade8454",content,!0,{sourceMap:!1})},145:function(t,o,n){var content=n(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("40ff003e",content,!0,{sourceMap:!1})},146:function(t,o,n){var content=n(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("303318b2",content,!0,{sourceMap:!1})},147:function(t,o,n){var content=n(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("5a12f04a",content,!0,{sourceMap:!1})},148:function(t,o,n){var content=n(228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("0a3ffe54",content,!0,{sourceMap:!1})},149:function(t,o,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("59c7825e",content,!0,{sourceMap:!1})},150:function(t,o,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("9629e9c0",content,!0,{sourceMap:!1})},167:function(t,o,n){"use strict";n(215),n(217);var e=n(8),component=Object(e.a)({},(function(){var t=this.$createElement,o=this._self._c||t;return o("div",[o("MyHeader"),this._v(" "),o("Nuxt"),this._v(" "),o("MyFooter")],1)}),[],!1,null,null,null);o.a=component.exports;installComponents(component,{MyHeader:n(253).default,MyFooter:n(254).default})},168:function(t,o,n){"use strict";n.r(o);var e={props:{data:{type:Object,required:!0}}},r=(n(225),n(8)),component=Object(r.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return t.data.modal?n("div",{staticClass:"homeCard"},[n("div",{staticClass:"card rounded h-100",class:t.data.title,style:{"border-color":t.data.color}},[n("div",{on:{click:function(o){return t.$emit("openModal",t.data)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 col-3"},[n("img",{attrs:{src:t.data.src,alt:""}})]),t._v(" "),n("div",{staticClass:"card-body col-md-12 col-9"},[n("p",{staticClass:"card_title"},[t._v("\n            "+t._s(t.data.title)+"\n          ")])])])])])]):n("div",{staticClass:"homeCard"},[t.data.internal?n("div",{staticClass:"card rounded h-100",class:t.data.title,style:{"border-color":t.data.color}},[n("NuxtLink",{attrs:{to:t.data.to}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 col-3"},[n("img",{attrs:{src:t.data.src,alt:""}})]),t._v(" "),n("div",{staticClass:"card-body col-md-12 col-9"},[n("p",{staticClass:"card_title"},[t._v("\n            "+t._s(t.data.title)+"\n          ")])])])])],1):n("div",{staticClass:"card rounded h-100",class:t.data.title,style:{"border-color":t.data.color}},[n("a",{attrs:{href:t.data.to,target:"_blank"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 col-3"},[n("img",{attrs:{src:t.data.src,alt:""}})]),t._v(" "),n("div",{staticClass:"card-body col-md-12 col-9"},[n("p",{staticClass:"card_title"},[t._v("\n            "+t._s(t.data.title)+"\n          ")])])])])])])}),[],!1,null,"95b0f6dc",null);o.default=component.exports},169:function(t,o,n){"use strict";n.r(o);n(227),n(229);var e=n(8),component=Object(e.a)({},(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("transition",{attrs:{name:"modal",appear:""}},[n("div",{staticClass:"modal modal-overlay",on:{click:function(o){return o.target!==o.currentTarget?null:t.$emit("close")}}},[n("div",{staticClass:"modal-window"},[n("div",{staticClass:"modal-content"},[t._t("default")],2)])])])}),[],!1,null,"295af86b",null);o.default=component.exports},170:function(t,o,n){"use strict";n.r(o);var e={data:function(){return{modal:!1,links:[{src:"/images/twitter.png",title:"Twitter",to:"https://twitter.com/shinbunbun_"},{src:"/images/facebook.png",title:"Facebook",to:"https://www.facebook.com/yuto.takamune.77"},{src:"/images/favicon.png",title:"Qiita",to:"https://qiita.com/shinbunbun_"},{src:"/images/GitHub-Mark-120px-plus.png",title:"GitHub",to:"https://github.com/shinbunbun"},{src:"/images/lapras.png",title:"Lapras",to:"https://lapras.com/public/HNWZIHB"},{src:"/images/connpass_logo_3.png",title:"connpass",to:"https://connpass.com/user/unix_yuto/"}]}},methods:{openLink:function(t){window.open(t,"_blank")},openModal:function(){this.modal=!0},closeModal:function(){this.modal=!1}}},r=(n(223),n(8)),component=Object(r.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return t.modal?n("MyModal",{on:{close:t.closeModal}},[n("span",{staticClass:"material-icons colse-button",on:{click:t.closeModal}},[t._v("\n    close\n  ")]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"container modal-container"},[n("div",{staticClass:"row row-cols-md-4 row-cols-sm-2 row-cols-1 justify-content-center"},t._l(t.links,(function(o){return n("div",{key:o.title},[n("HomeCard",{attrs:{data:o},on:{openModal:t.openModal}})],1)})),0)])]):t._e()}),[],!1,null,"68e799c0",null);o.default=component.exports;installComponents(component,{HomeCard:n(168).default,MyModal:n(169).default})},171:function(t,o,n){n(172),t.exports=n(173)},215:function(t,o,n){"use strict";n(142)},216:function(t,o,n){(o=n(13)(!1)).push([t.i,"@media screen and (min-width:768px){.card{transition-duration:.3s;transition-property:transform}.card:hover{transform:scale(1.1)}}",""]),t.exports=o},217:function(t,o,n){"use strict";n(143)},218:function(t,o,n){(o=n(13)(!1)).push([t.i,"html{font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}:root{--nuxt-green:#00c58e;--background-color:#f0f5f5;--fot-color:#4d4d4d;--card-color:#fafcfc;--card-shadow-color:#babfbf}body{background-color:#f0f5f5;background-color:var(--background-color);color:#4d4d4d!important}",""]),t.exports=o},219:function(t,o,n){"use strict";n(144)},220:function(t,o,n){(o=n(13)(!1)).push([t.i,".navbar[data-v-21aee32d]{font-size:130%;background-color:var(--background-color)}.nav-item[data-v-21aee32d]{padding-left:20px!important}img[data-v-21aee32d]{max-width:200px;max-height:65px}",""]),t.exports=o},221:function(t,o,n){"use strict";n(145)},222:function(t,o,n){(o=n(13)(!1)).push([t.i,"",""]),t.exports=o},223:function(t,o,n){"use strict";n(146)},224:function(t,o,n){(o=n(13)(!1)).push([t.i,".colse-button[data-v-68e799c0]{font-size:45px}",""]),t.exports=o},225:function(t,o,n){"use strict";n(147)},226:function(t,o,n){(o=n(13)(!1)).push([t.i,"@media screen and (min-width:768px){.icon[data-v-95b0f6dc]{font-size:120px}img[data-v-95b0f6dc]{height:120px;padding-top:15px;max-width:100%}}@media screen and (max-width:768px){.icon[data-v-95b0f6dc]{font-size:80px;padding-left:5px}img[data-v-95b0f6dc]{height:80px;padding:10px}.card[data-v-95b0f6dc]{height:88px}}.card_title[data-v-95b0f6dc]{font-size:25px}.card[data-v-95b0f6dc]{text-align:center;border-radius:5px;box-shadow:0 2px 5px var(--card-shadow-color);background-color:var(--card-color)}a[data-v-95b0f6dc]{color:var(--font-color);text-decoration:none}.Lapras img[data-v-95b0f6dc]{width:110%;height:110%;max-height:120px;-o-object-fit:cover;object-fit:cover}.homeCard[data-v-95b0f6dc]{padding-bottom:20px}",""]),t.exports=o},227:function(t,o,n){"use strict";n(148)},228:function(t,o,n){(o=n(13)(!1)).push([t.i,".modal.modal-overlay[data-v-295af86b]{display:flex;align-items:center;justify-content:center;position:fixed;z-index:30;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5)}.modal-window[data-v-295af86b]{background:#fff;border-radius:4px;overflow:hidden}.modal-content[data-v-295af86b]{padding:10px 20px}.modal-footer[data-v-295af86b]{background:#ccc;padding:10px;text-align:right}.modal-enter-active[data-v-295af86b],.modal-leave-active[data-v-295af86b]{transition:opacity .3s}.modal-enter-active .modal-window[data-v-295af86b],.modal-leave-active .modal-window[data-v-295af86b]{transition:opacity .3s,transform .3s}.modal-leave-active[data-v-295af86b]{transition:opacity .4s ease .2s}.modal-enter[data-v-295af86b],.modal-leave-to[data-v-295af86b]{opacity:0}.modal-enter .modal-window[data-v-295af86b],.modal-leave-to .modal-window[data-v-295af86b]{opacity:0;transform:translateY(-20px)}.modal-window[data-v-295af86b]{max-width:90%;margin-top:70px;margin-bottom:30px;max-height:calc(100% - 100px);overflow:scroll}@media screen and (min-width:1111px){.modal-window[data-v-295af86b]{min-width:1000px}}@media screen and (min-width:768px) and (max-width:1111px){.modal-window[data-v-295af86b]{width:90%}}",""]),t.exports=o},229:function(t,o,n){"use strict";n(149)},230:function(t,o,n){(o=n(13)(!1)).push([t.i,".modal-content[data-v-295af86b]{background-color:var(--background-color)}",""]),t.exports=o},231:function(t,o,n){"use strict";n(150)},232:function(t,o,n){(o=n(13)(!1)).push([t.i,"body{min-height:100vh;position:relative;padding-bottom:60px;box-sizing:border-box}footer{position:absolute;bottom:0;text-align:center;width:100%}",""]),t.exports=o},253:function(t,o,n){"use strict";n.r(o);var e={data:function(){return{path:""}},mounted:function(){this.path=this.$route.path},methods:{openModal:function(){this.$refs.LinksModal.openModal()}}},r=(n(219),n(221),n(8)),component=Object(r.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("div",{staticClass:"py-4"}),t._v(" "),n("nav",{staticClass:"navbar fixed-top navbar-expand-lg navbar-light"},[n("div",{staticClass:"container"},[n("NuxtLink",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{attrs:{src:"/images/ポートフォリオサイトロゴ.png",alt:""}})]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[n("div",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"}),t._v(" "),n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",class:{active:"/"===t.path},attrs:{"aria-current":"page",to:"/"}},[t._v("\n              Home\n            ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",class:{active:"/about"===t.path},attrs:{to:"/about"}},[t._v("\n              About Me\n            ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",class:{active:"/products"===t.path},attrs:{to:"/products"}},[t._v("\n              Products\n            ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("span",{staticClass:"nav-link",staticStyle:{cursor:"pointer"},on:{click:t.openModal}},[t._v("\n              Links\n            ")])]),t._v(" "),n("LinksModal",{ref:"LinksModal"})],1)])],1)])])}),[function(){var t=this.$createElement,o=this._self._c||t;return o("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[o("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,"21aee32d",null);o.default=component.exports;installComponents(component,{LinksModal:n(170).default})},254:function(t,o,n){"use strict";n.r(o);n(231);var e=n(8),component=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"footerFixed"},[o("div",{staticClass:"py-4"}),this._v(" "),o("footer",[o("p",[this._v("©︎2020 しんぶんぶん")])])])}],!1,null,null,null);o.default=component.exports}},[[171,8,1,9]]]);