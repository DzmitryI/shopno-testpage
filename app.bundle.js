!function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=46)}([function(t,e,i){"use strict";var o,n=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),a={};function s(t,e,i){for(var o=0;o<e.length;o++){var n={css:e[o][1],media:e[o][2],sourceMap:e[o][3]};a[t][o]?a[t][o](n):a[t].push(f(n,i))}}function l(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var n=i.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,p=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function d(t,e,i,o){var n=i?"":o.css;if(t.styleSheet)t.styleSheet.cssText=p(e,n);else{var r=document.createTextNode(n),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function m(t,e,i){var o=i.css,n=i.media,r=i.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var u=null,g=0;function f(t,e){var i,o,n;if(e.singleton){var r=g++;i=u||(u=l(e)),o=d.bind(null,i,r,!1),n=d.bind(null,i,r,!0)}else i=l(e),o=m.bind(null,i,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}t.exports=function(t,e,i){return(i=i||{}).singleton||"boolean"==typeof i.singleton||(i.singleton=n()),t=i.base?t+i.base:t,e=e||[],a[t]||(a[t]=[]),s(t,e,i),function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){a[t]||(a[t]=[]),s(t,e,i);for(var o=e.length;o<a[t].length;o++)a[t][o]();a[t].length=e.length,0===a[t].length&&delete a[t]}}}},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",o=t[3];if(!o)return i;if(e&&"function"==typeof btoa){var n=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[i].concat(r).concat([n]).join("\n")}var a,s,l;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,o){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(n[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&n[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),e.push(l))}},e}},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/work1.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/work2.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/work3.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/work4.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/work5.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/work6.jpg"},function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,i){var o=i(0),n=i(10);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},a=(o(t.i,n,r),n.locals?n.locals:{});t.exports=a},function(t,e,i){var o=i(1),n=i(8),r=i(11),a=i(12),s=i(13),l=i(14),c=i(15),p=i(16),d=i(17),m=i(18),u=i(19),g=i(20),f=i(21),x=i(22),h=i(23),_=i(24),y=i(25),b=i(26),w=i(2),k=i(3),v=i(4),M=i(5),j=i(6),R=i(7),S=i(27),q=i(28);e=o(!1);var z=n(r),E=n(a),L=n(s),B=n(l),F=n(c),C=n(p),P=n(d),A=n(m),N=n(u),O=n(g),T=n(g,{hash:"#iefix"}),I=n(f),$=n(x),D=n(h),U=n(_,{hash:"#fontello"}),H=n(y),J=n(b),Q=n(w),X=n(k),G=n(v),K=n(M),V=n(j),W=n(R),Y=n(S),Z=n(q);e.push([t.i,"@font-face{font-family:'Merriweather-Bold';src:url("+z+") format(\"truetype\")}@font-face{font-family:'Merriweather-Regular';src:url("+E+") format(\"truetype\")}@font-face{font-family:'Merriweather-Italic';src:url("+L+") format(\"truetype\")}@font-face{font-family:'Montserrat-Bold';src:url("+B+") format(\"truetype\")}@font-face{font-family:'Montserrat-Regular';src:url("+F+") format(\"truetype\")}@font-face{font-family:'Raleway-Medium';src:url("+C+") format(\"truetype\")}@font-face{font-family:'Raleway-Regular';src:url("+P+") format(\"truetype\")}@font-face{font-family:'MyriadRegular';src:url("+A+") format(\"truetype\")}@font-face{font-family:'MyriadProRegular';src:url("+N+") format(\"truetype\")}@font-face{font-family:'fontello';src:url("+O+");src:url("+T+') format("embedded-opentype"),url('+I+') format("woff2"),url('+$+') format("woff"),url('+D+') format("truetype"),url('+U+") format(\"svg\");font-weight:normal;font-style:normal}[class^=\"icon-\"]:before,[class*=\" icon-\"]:before{font-family:\"fontello\";font-style:normal;font-weight:normal;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon--mail:before{content:'\\e800'}.icon--twitter:before{content:'\\f099'}.icon--facebook:before{content:'\\f09a'}.icon--dribbble:before{content:'\\f17d'}.icon--pinterest:before{content:'\\f231'}body{width:100%;margin:0 auto;max-width:1440px;background:no-repeat center center;background-image:url("+H+')}.container{width:100%;overflow:hidden}h1,h2,h3{margin:0;text-align:center}.header{height:807px;position:relative;background-color:#EFF0F2;font-family:"Montserrat-Bold", "MyriadProRegular"}.header__section{margin:0 auto;display:flex;max-width:1138px;justify-content:space-between;align-items:center;padding-top:62px;margin-bottom:192px}.logo{width:102px;height:39px;border:5px solid black;display:flex;align-items:center;justify-content:center}.logo--span{font-size:19px;color:#77EFE5}.logo__caption{font-size:17px}.nav{margin-top:10px}.nav--trigger{display:inline-block;margin:3px;cursor:pointer}.nav--trigger i{display:block;width:30px;height:5px;margin:4px auto;background:#222}.header__caption{margin-bottom:142px}.caption{font-size:45px;letter-spacing:1.8px}.caption--span{background-color:#77EFE5;font-family:"Montserrat-Bold", "MyriadProRegular"}.header__button{display:block;margin:auto;width:232px;height:53px;border:2px solid black;font-size:18px;font-family:"Montserrat-Regular", "MyriadRegular";letter-spacing:2px;transition:width 2s, height 2s, background-color 2s, transform 2s}.header__button:hover{cursor:pointer;border:2px solid #6ff4e9;color:#6ff4e9;transform:scale(1.1)}.header--icon{width:75px;height:92px;position:absolute;left:78%;top:72%;background:no-repeat center center;background-image:url('+J+')}.title{font-family:"Montserrat-Bold", "MyriadProRegular";font-size:38px;text-align:center;line-height:0.8;letter-spacing:0.5px;word-spacing:3px}.subtitle{font-family:"Merriweather-Regular", "MyriadRegular";font-size:18px;color:#5f5f5f;text-align:center;line-height:0.9;word-spacing:5px;letter-spacing:0.5px}.aboutus{height:986px;background-color:#F8FAFA}.aboutus__title{margin-bottom:15px;margin-left:17px;padding-top:127px}.aboutus__subtitle{margin-bottom:152px}.aboutus__inner{display:flex;justify-content:space-between;max-width:1066px;margin:0 auto}.aboutus__slider{margin-top:30px;position:relative;width:479px;height:412px;background-color:#EDEEF0}.aboutus__content{max-width:474px}.aboutus__content__title1,.aboutus__content__title2,.items-know-more__title,.items-description__title{font-size:20px;font-family:"Merriweather-Bold", "MyriadProRegular";line-height:0.8;letter-spacing:1.3px;text-align:left}.aboutus__content__title1{margin:0;margin-bottom:24px}.aboutus__content__title2{margin-top:19px;margin-bottom:20px;font-size:17px}.aboutus__content__text,.items-description__text,.quote__text,.content__text{margin:0;font-family:"Raleway-Regular", "MyriadRegular";font-size:16px;line-height:28px;letter-spacing:1px;word-spacing:0.4px}.aboutus__content__text{margin-bottom:36px}.works{height:1163px;background-color:#ffffff}.works__title{padding-top:125px;margin-left:38px;margin-bottom:16px}.works__subtitle{margin-bottom:120px;font-size:17px}.works__inner{display:grid;grid-column-gap:14px;grid-template-columns:1fr 1fr 1fr;max-width:1134px;min-height:751px;margin:0 auto}.works__item{max-width:371px;height:360px;background:no-repeat center center}.works__item:hover{max-width:369px;height:358px;cursor:pointer;border:2px solid #6FF6EB}.works__item1{background-image:url('+Q+")}.works__item2{background-image:url("+X+")}.works__item3{background-image:url("+G+")}.works__item4{background-image:url("+K+")}.works__item5{background-image:url("+V+")}.works__item6{background-image:url("+W+")}.services{min-height:1619px;background-color:#F9FBFB}.services__title{padding-top:123px;margin-bottom:14px}.services__subtitle{margin-bottom:122px;font-size:17px}.theysays{min-height:924px;background-color:#F9FBFB}.theysays__title{padding-top:118px;margin-bottom:14px}.theysays__subtitle{margin-bottom:161px;font-size:17px}.theysays__inner{display:flex;justify-content:space-between;margin:0 auto;max-width:1136px}.theysays__slader__inner{position:relative;width:393px;height:362px;background-color:#EAEBED;border-radius:3px}.content{position:relative;background-color:#eaebed;width:666px;height:362px;border-radius:3px}.footer{min-height:1403px}.footer--brands{margin:0 auto;margin-top:108px;margin-bottom:225px;max-width:1133px;height:172px;background:no-repeat center center;background-image:url("+Y+')}.footer__inner{display:flex;justify-content:space-around;max-width:1162px;margin:0 auto;margin-bottom:123px}.form{width:615px;height:461px;background-color:rgba(2,22,35,0.7)}fieldset{border:none;padding:0;margin-top:42px;margin-left:29px}input,textarea{font-family:"Raleway-Regular", "MyriadProRegular";width:550px;height:35px;font-size:15px;line-height:51px;padding-left:5px;color:#B5BCC0;background:rgba(68,86,97,0);border-bottom:1px solid #B5BCC0;border-top:none;border-left:none;border-right:none}input[type="text"]::placeholder,input[type="email"]::placeholder,input[name="subject"]::placeholder,textarea::placeholder{color:#B5BCC0}input[type="text"]{margin-top:-7px;margin-bottom:24px;height:39px}input[type="email"]{margin-bottom:8px}input[name="subject"]{margin-bottom:18px;padding-left:6px}textarea{height:119px;padding-top:8px;resize:none}.button-submit{margin-top:35px;margin-left:2px;width:244px;height:53px;border:none;font-size:12px;text-align:center;text-decoration:none;background:#6EEEE4;font-family:"Montserrat-Regular", "MyriadProRegular";font-size:18px;font-weight:bold;letter-spacing:2px;transition:width 2s, height 2s, background-color 2s, transform 2s}.button-submit:hover{cursor:pointer;background:#bebebe;transform:scale(1.1)}.footer__desc{width:500px;height:461px;background:rgba(2,22,35,0.7)}.footer__adress{margin-top:31px;margin-bottom:23px;padding-left:32px;font-size:15px;line-height:24px;font-family:"Raleway-Regular", "MyriadRegular";color:#B5BCC0}.footer__adress li{list-style-type:none}.footer__adress li:nth-child(4){margin-bottom:20px}.footer__map{max-width:455px;height:224px;background-color:#ffffff;background:no-repeat center center;background-image:url('+Z+');margin:0 auto}.end{height:317px;background-color:#262B2E}.end__title{padding-top:85px;margin-bottom:14px;text-align:center;color:#D4D5D5;font-size:16px;line-height:25px;font-family:"Raleway-Regular", "MyriadRegular"}.end__socialList{display:flex;justify-content:space-around;max-width:214px;margin:0 auto;padding:0}.end__socialList li{width:45px;height:40px;background-color:#3f4244;list-style-type:none;transition:.5s}.end__socialList li:hover{transform:scale(1.2);background-color:#6eeee4}.end .icon--social{display:flex;text-decoration:none;align-items:center;font-size:23px;justify-content:center;width:100%;height:100%;color:#bbb8b9}.end .icon--social:hover{color:#070e0d}@media (max-width: 1140px){.aboutus__inner{justify-content:space-around}.aboutus__slider{width:48%}.aboutus__content{width:48%}.theysays__inner{justify-content:space-around}.theysays__slader__inner{width:40%}.content{width:55%}.form{width:50%}.footer__desc{width:45%}input,textarea{width:90%}}@media (max-width: 800px){.works{height:1380px}.works__inner{grid-template-columns:1fr 1fr;grid-gap:6px}.main-sectionTeam-inner{grid-template-columns:1fr 1fr;grid-template-rows:auto}}@media (max-width: 600px){.header__section{margin-bottom:70px}.header--icon{display:none}.caption{font-size:35px;margin:0 5px}.aboutus{height:auto}.aboutus__inner{flex-wrap:wrap}.aboutus__slider{width:95%}.aboutus__content{width:65%;margin-top:100px}.aboutus__content__title1,.aboutus__content__title2{line-height:normal;text-align:center}.title{line-height:1;margin-left:0}.subtitle{line-height:1.3}.works{height:auto}.works__inner{grid-template-columns:1fr}.works__item{max-width:none;margin:10px}.works__item:hover{max-width:none}.theysays{height:1300px}.theysays__inner{flex-wrap:wrap}.theysays__slader__inner{width:95%;margin-bottom:12px}.content{width:95%;margin-top:60px}.footer__inner{flex-wrap:wrap}.form{width:90%;margin-bottom:10px}.footer__desc{width:90%}.footer__adress{padding-left:0;margin:10px auto;width:90%}fieldset{margin:30px auto;width:90%}}@media (max-width: 350px){.theysays{height:1400px}.button-submit{display:block;margin:40px auto;width:90%}input,textarea{width:100%}}\n',""]),t.exports=e},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/Merriweather-Bold.ttf"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/Merriweather-Regular.ttf"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/Merriweather-Italic.ttf"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/Montserrat-Bold.ttf"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/Montserrat-Regular.ttf"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/Raleway-Medium.ttf"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/Raleway-Regular.ttf"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/MyriadRegular.ttf"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/MyriadPro-Regular.ttf"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/fontello.eot"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/fontello.woff2"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/fontello.woff"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/fontello.ttf"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/fontello.svg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/background.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/glass.png"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/brands.png"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/map.jpg"},function(t,e,i){var o=i(0),n=i(30);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},a=(o(t.i,n,r),n.locals?n.locals:{});t.exports=a},function(t,e,i){var o=i(1),n=i(8),r=i(31),a=i(32),s=i(33),l=i(34),c=i(35);e=o(!1);var p=n(r),d=n(a),m=n(s),u=n(l),g=n(c);e.push([t.i,".team{min-height:1315px;background-color:#FFFFFF}.team__title{padding-top:120px;margin-bottom:14px;font-size:38px}.team__subtitle{margin-bottom:121px;font-size:17px}.team__inner{max-width:1135px;min-height:892px;display:grid;grid-column-gap:14px;grid-row-gap:15px;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr 1fr;margin:0 auto}.team__item{position:relative;background:no-repeat center center;min-height:440px}.team__item:hover>.quote{display:block}.team__item1,.team__item6{background-image:url("+p+")}.team__item2{position:relative;background-image:url("+d+')}.quote{display:none;width:335px;height:241px;position:absolute;background-color:#6FF6EB;margin-top:187px;margin-left:18px}.quote:after{border-left:14px solid transparent;border-right:14px solid transparent;border-bottom:29px solid #6FF6EB;content:"";height:0;width:0;position:absolute;left:9%;top:-22px;transform:translateX(-50%)}.quote__inner{max-width:250px;height:50px;margin-top:38px;margin-left:32px}.quote__title{max-width:246px;font-family:"Merriweather-Bold", "MyriadProRegular";margin-bottom:19px;margin-left:7px;word-spacing:3.1px;letter-spacing:1px}.quote__title--span{font-family:"Merriweather-Italic", "MyriadProRegular";font-size:15px;font-weight:100;letter-spacing:1px;color:#7e7e7e}.quote__text{margin-bottom:34px;line-height:24px}.sociallist{display:flex;justify-content:space-around;max-width:99px;height:13px;padding:0;list-style-type:none}.icon--social{display:flex;text-decoration:none;align-items:center;font-size:13px;justify-content:center;width:100%;height:100%;color:#214946;transition:width 2s, height 2s, background-color 2s, transform 2s}.icon--social:hover{color:#bbb8b9;font-size:14px;transform:rotate(360deg)}.team__item3{background-image:url('+m+")}.team__item4{background-image:url("+u+")}.team__item5{background-image:url("+g+")}@media (max-width: 1140px){.quote{width:90%}.quote__inner{margin:0 auto;padding-top:38px}}@media (max-width: 800px){.team{min-height:1760px}.team__inner{min-height:1365px;grid-template-columns:1fr 1fr;grid-template-rows:auto;grid-gap:1px}.quote__title{font-size:15px}.quote__text{font-size:12px}}@media (max-width: 600px){.team__item{margin:3px}}@media (max-width: 400px){.team__inner{grid-template-columns:1fr}}\n",""]),t.exports=e},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/team1_6.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/team2.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/team3.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/team4.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/team5.jpg"},function(t,e,i){var o=i(0),n=i(37);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},a=(o(t.i,n,r),n.locals?n.locals:{});t.exports=a},function(t,e,i){(e=i(1)(!1)).push([t.i,".slider{max-width:391px;position:absolute;margin-top:-47px;margin-left:44px;height:483px}.slider__item img{object-fit:cover;width:100%;height:494px;border:none !important;box-shadow:none !important}.dots{text-align:center;margin-top:487px}.dots--slide{cursor:pointer;height:10px;width:10px;margin:0 2px;background-color:#d0d0d0;border-radius:25%;display:inline-block;transition:background-color 0.6s ease}.active,.dots--slide:hover{background-color:#71f6eb}.slider .slider__item{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}@-webkit-keyframes fade{from{opacity:.4}to{opacity:1}}@keyframes fade{from{opacity:.4}to{opacity:1}}@media (max-width: 1140px){.slider{position:static;margin:-47px auto}.dots{margin-top:80px}}\n",""]),t.exports=e},function(t,e,i){var o=i(0),n=i(39);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},a=(o(t.i,n,r),n.locals?n.locals:{});t.exports=a},function(t,e,i){(e=i(1)(!1)).push([t.i,".modal{display:block;width:400px;max-width:100%;height:400px;max-height:100%;position:fixed;z-index:100;left:50%;top:50%;transform:translate(-50%, -50%);background:wheat;box-shadow:0 0 60px 10px rgba(0,0,0,0.9)}.closed{display:none}.modal__overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:50;background:rgba(0,0,0,0.6)}.modal__guts{position:absolute;background:#ffffff;left:0;width:100%;height:100%;overflow:auto;padding:0;margin:0;display:flex;border:4px solid #6FF6EB}.modal__guts--img{width:100%}@media (max-width: 600px){.modal{width:60%;height:40%}}\n",""]),t.exports=e},function(t,e,i){var o=i(0),n=i(41);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},a=(o(t.i,n,r),n.locals?n.locals:{});t.exports=a},function(t,e,i){(e=i(1)(!1)).push([t.i,'.services__inner{margin:0 auto;max-width:1138px;min-height:1183px;display:grid;grid-template-columns:1fr 0.37fr 1fr;grid-column-gap:7px;grid-row-gap:12px}.items-know-more{position:relative;background-color:#000000}.items-know-more--img{position:absolute;width:100%;height:100%;z-index:3;opacity:0.6}.items-know-more__text{font-family:"Raleway-Regular", "MyriadRegular";font-size:16px;line-height:25px}.items-know-more__inner{position:relative;z-index:4;color:#ffffff}.items-know-more__link,.items-description__link{display:inline-block;font-family:"Raleway-Medium", "MyriadPRORegular";font-size:18px;line-height:0.8;transition:1s linear}.items-know-more__link:hover,.items-description__link:hover{font-size:20px;cursor:pointer;transform:scale(0.8)}.item1-know-more{grid-column-start:1;grid-column-end:3;max-width:653px;height:423px}.item2-know-more{max-width:475px;height:423px}.item1-know-more__inner,.item2-know-more__inner{max-width:312px;height:180px;margin-top:184px;margin-left:67px}.item1-know-more__title,.item2-know-more__title{margin-bottom:22px}.item1-know-more__text,.item2-know-more__text{margin-bottom:54px}.item3-know-more{grid-row-start:2;grid-column-start:1;grid-column-end:3;max-width:653px;height:372px}.item3-know-more__inner{max-width:428px;height:153px;margin-top:166px;margin-left:63px}.item3-know-more__title{margin-bottom:20px}.item3-know-more__text{margin-bottom:50px}.item4-know-more{max-width:475px;height:372px}.item4-know-more__inner{max-width:305px;height:152px;margin-top:163px;margin-left:66px}.item4-know-more__title{margin-bottom:24px}.item4-know-more__text{margin-bottom:48px}.item5-know-more{max-width:473px;height:371px}.item5-know-more__inner{max-width:276px;height:183px;margin-top:130px;margin-left:64px}.item5-know-more__title{margin-bottom:24px}.item5-know-more__text{margin-bottom:78px}.item6-know-more{grid-row-start:3;grid-column-start:2;grid-column-end:4;max-width:652px;height:371px}.item6-know-more__inner{max-width:403px;height:184px;margin-top:130px;margin-left:72px}.item6-know-more__title{margin-bottom:24px}.item6-know-more__text{margin-bottom:55px}.items-description__inner{display:none;max-width:470px;height:304px;margin-top:63px;margin-left:67px;color:#000000}.item2-description__inner,.item4-description__inner,.item5-description__inner{margin-left:20px;margin-right:10px}.items-description__title{font-size:19px;margin-bottom:30px;line-height:1;word-spacing:5px;letter-spacing:1px}.items-description__text{margin-bottom:69px}.item2-description__text,.item4-description__text,.item5-description__text{margin-bottom:30px}.item3-description__text,.item6-description__text{margin-bottom:60px}.items-description__link{font-size:24px}@media (max-width: 1100px){.items-description__inner{margin-top:25px}.items-description__title{margin-bottom:15px}}@media (max-width: 900px){.items-know-more__inner{margin:0;max-width:310px;height:150px}.services__inner{grid-template-columns:1fr}.item1-know-more,.item2-know-more,.item3-know-more,.item4-know-more,.item5-know-more,.item6-know-more{grid-column-start:auto;grid-column-end:auto;display:flex;justify-content:center;align-items:center;min-height:300px;height:auto;max-width:none;width:90%;margin:0 auto}.items-know-more__title{line-height:1;margin-bottom:15px}.items-know-more__text{margin-bottom:20px}.items-description__text{margin-bottom:20px}.items-description__inner{margin-left:10px;margin-top:10px;height:auto}}\n',""]),t.exports=e},function(t,e,i){var o=i(0),n=i(43);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},a=(o(t.i,n,r),n.locals?n.locals:{});t.exports=a},function(t,e,i){(e=i(1)(!1)).push([t.i,".theysays__slider{max-width:319px;position:absolute;margin-top:-24px;margin-left:37px;height:410px}.theysays__slider .theysays__item img{object-fit:cover;width:100%;height:100%;border:none !important;box-shadow:none !important}.theysays__dots{text-align:center;margin-top:429px}.theysays__dots--slide{cursor:pointer;height:10px;width:10px;background-color:#d0d0d0;border-radius:25%;display:inline-block;transition:background-color 0.6s ease}.active,.theysays__dots--slide:hover{background-color:#71f6eb}.theysays__slider .theysays__item{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}@-webkit-keyframes fade{from{opacity:.4}to{opacity:1}}@keyframes fade{from{opacity:.4}to{opacity:1}}@media (max-width: 1140px){.theysays__slider{position:static;margin:-24px auto}.theysays__dots{margin-top:40px}}\n",""]),t.exports=e},function(t,e,i){var o=i(0),n=i(45);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},a=(o(t.i,n,r),n.locals?n.locals:{});t.exports=a},function(t,e,i){(e=i(1)(!1)).push([t.i,'.content__inner{max-width:500px;height:195px;margin-top:97px;margin-left:85px}.content__title{display:block;max-width:300px;margin:0 auto;margin-bottom:19px;font-family:"Merriweather-Bold", "MyriadProRegular";letter-spacing:2.6px;padding-left:26px;word-spacing:1.5px}.content__title--span{font-family:"Merriweather-Italic", "MyriadProRegular";font-size:15px;font-weight:100;letter-spacing:1px;color:#7e7e7e}.content__text{margin-bottom:21px;text-align:center}.theysays__text{line-height:27px;text-align:center;margin-bottom:23px}.content--star{text-align:center;color:#f2da3b;height:15px;line-height:27px;font-size:20px;font-weight:bold}.prev__inner,.prev__next{position:absolute;display:flex;align-items:center;justify-content:center;width:53px;height:53px;background-color:#ffffff;top:392px;border-radius:1px;box-shadow:6px 2px 11px rgba(0,0,0,0.1)}.prev__next{right:0}.prev__inner{right:82px}.prev__inner:hover,.prev__next:hover{cursor:pointer;background-color:#71f6eb}.prev,.next{cursor:pointer;color:#b2b2b2;font-weight:bold;font-size:16px;transition:0.6s ease;border-radius:0 3px 3px 0}.prev:hover,.next:hover{color:#25514d}.content__inner{animation-name:fade;animation-duration:1.5s}@-webkit-keyframes fade{from{opacity:.4}to{opacity:1}}@keyframes fade{from{opacity:.4}to{opacity:1}}@media (max-width: 1140px){.content__inner{padding-top:97px;margin:0 auto}}@media (max-width: 600px){.content__title{padding-left:0}}@media (max-width: 350px){.content__inner{padding-top:10px}}\n',""]),t.exports=e},function(t,e,i){"use strict";i.r(e);i(9),i(29),i(36);var o=i.p+"assets/slader1.jpg";document.querySelector(".slider__item--slide1").src=o,document.querySelector(".slider__item--slide2").src=o,document.querySelector(".slider__item--slide3").src=o,document.querySelector(".slider__item--slide4").src=o;let n=1;const r=document.querySelectorAll(".slider__item"),a=document.querySelectorAll(".dots--slide");function s(t){let e,i;for("number"!=typeof t?("dots--slide1"===t.target.classList[0]?i=1:"dots--slide2"===t.target.classList[0]?i=2:"dots--slide3"===t.target.classList[0]?i=3:"dots--slide4"===t.target.classList[0]&&(i=4),n=i):i=t,i>r.length&&(n=1),i<1&&(n=r.length),e=0;e<r.length;e+=1)r[e].style.display="none";for(e=0;e<a.length;e+=1)a[e].className=a[e].className.replace(" active","");r[n-1].style.display="block",a[n-1].className+=" active"}s(n),[].forEach.call(a,t=>{t.addEventListener("click",s)});i(38);var l=i(2),c=i(3),p=i(4),d=i(5),m=i(6),u=i(7);const g=document.querySelector(".modal"),f=document.querySelector(".modal__overlay");function x(t){g.classList.toggle("closed"),f.classList.toggle("closed"),t.stopImmediatePropagation()}function h({target:t}){const e=document.querySelector(".modal__guts--img");switch(t.classList[0]){case"works__item1":e.src=l.default;break;case"works__item2":e.src=c.default;break;case"works__item3":e.src=p.default;break;case"works__item4":e.src=d.default;break;case"works__item5":e.src=m.default;break;case"works__item6":e.src=u.default}g.classList.toggle("closed"),f.classList.toggle("closed"),g.addEventListener("click",x),f.addEventListener("click",x)}const _=document.querySelectorAll(".works__item");[].forEach.call(_,t=>{t.addEventListener("click",h)}),g.classList.toggle("closed"),f.classList.toggle("closed");i(40);var y=i.p+"assets/service1.jpg",b=i.p+"assets/service2.jpg",w=i.p+"assets/service3.jpg",k=i.p+"assets/service4.jpg",v=i.p+"assets/service5.jpg",M=i.p+"assets/service6.jpg";function j({target:t}){const e=t.classList[0].slice(0,5);document.querySelector(`.${e}-know-more--img`).style.display="none",document.querySelector(`.${e}-know-more__inner`).style.display="none",document.querySelector(`.${e}-description__inner`).style.display="block",document.querySelector(`.${e}-know-more`).style.background="#6ff4e9"}function R({target:t}){const e=t.classList[0].slice(0,5);document.querySelector(`.${e}-know-more--img`).style.display="block",document.querySelector(`.${e}-know-more__inner`).style.display="block",document.querySelector(`.${e}-description__inner`).style.display="none",document.querySelector(`.${e}-know-more`).style.background="#000000"}document.querySelector(".item1-know-more--img").src=y,document.querySelector(".item2-know-more--img").src=b,document.querySelector(".item3-know-more--img").src=w,document.querySelector(".item4-know-more--img").src=k,document.querySelector(".item5-know-more--img").src=v,document.querySelector(".item6-know-more--img").src=M;const S=document.querySelectorAll(".items-know-more__link");[].forEach.call(S,t=>{t.addEventListener("click",j)});const q=document.querySelectorAll(".items-description__link");[].forEach.call(q,t=>{t.addEventListener("click",R)});i(42);var z=i.p+"assets/slader2.jpg";document.querySelector(".theysays__item--slide1").src=z,document.querySelector(".theysays__item--slide2").src=z,document.querySelector(".theysays__item--slide3").src=z,document.querySelector(".theysays__item--slide4").src=z;let E=1;const L=document.querySelectorAll(".theysays__item"),B=document.querySelectorAll(".theysays__dots--slide");function F(t){let e,i;for("number"!=typeof t?("theysays__dots--slide1"===t.target.classList[0]?i=1:"theysays__dots--slide2"===t.target.classList[0]?i=2:"theysays__dots--slide3"===t.target.classList[0]?i=3:"theysays__dots--slide4"===t.target.classList[0]&&(i=4),E=i):i=t,i>L.length&&(E=1),i<1&&(E=L.length),e=0;e<L.length;e+=1)L[e].style.display="none";for(e=0;e<B.length;e+=1)B[e].className=B[e].className.replace(" active","");L[E-1].style.display="block",B[E-1].className+=" active"}F(E),[].forEach.call(B,t=>{t.addEventListener("click",F)});i(44);const C=document.querySelector(".prev__inner"),P=document.querySelector(".prev__next");let A=1;function N(t){let e;const i=document.getElementsByClassName("content__inner");for(t>i.length&&(A=1),t<1&&(A=i.length),e=0;e<i.length;e+=1)i[e].style.display="none";i[A-1].style.display="block"}N(A),C.addEventListener("click",()=>{N(A+=1)}),P.addEventListener("click",()=>{N(A-=1)})}]);