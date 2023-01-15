(()=>{"use strict";var e={206:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(81),i=r.n(t),o=r(645),a=r.n(o)()(i());a.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,600);"]),a.push([e.id,'body {\r\n  margin: 0;\r\n  font-family: "Montserrat", sans-serif;\r\n}\r\n\r\np,\r\nblockquote {\r\n  font-size: 0.9em;\r\n  line-height: 1.6em;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.container {\r\n  text-align: center;\r\n  padding: 0.8em 1.2em;\r\n}\r\n\r\n.logo {\r\n  width: 130px;\r\n}\r\n\r\n.logo-small {\r\n  max-width: 20px;\r\n  position: relative;\r\n  top: 6px\r\n}\r\n\r\n.stroke-text {\r\n  float: right;\r\n  font-size:18px;\r\n  stroke:rgb(0, 0, 0);\r\n  stroke-width:1.8px;\r\n  fill:none;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.hide-mobile {\r\n  display: none;\r\n}\r\n\r\n.menu {\r\n  width: 25px;\r\n  margin-top: 45%;\r\n}\r\n\r\n.server {\r\n  -moz-user-select: none;\r\n  -khtml-user-select: none;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  -moz-user-drag: none;\r\n  -khtml-user-drag: none;\r\n  -webkit-user-drag: none;\r\n  user-drag: none;\r\n  width: 70%;\r\n  margin: 2em auto 2em 25%;\r\n}\r\n\r\n.h1 .subhead {\r\n  position: relative;\r\n  z-index: 3;\r\n}\r\n\r\n.subhead {\r\n  font-size: 1.1em;\r\n}\r\n\r\n.blue-container {\r\n  width: 100%;\r\n  background-color: #00c2ff;\r\n  color: white;\r\n  margin: 15% 0 0;\r\n  padding: 4em 0 2em;\r\n  border-top-left-radius: 40px;\r\n  transform: skewY(-2deg);\r\n}\r\n\r\n.blue-container ul {\r\n  transform: skewY(2deg);\r\n}\r\n\r\n.blue-container p {\r\n  transform: skewY(2deg);\r\n  color: #000000;\r\n}\r\n\r\n.blue-container:before {\r\n  content: "";\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: #00c2ff;\r\n  position: absolute;\r\n  top: -39px;\r\n  right: 0;\r\n  z-index: -2;\r\n}\r\n\r\n.blue-container:after {\r\n  content: "";\r\n  width: 80px;\r\n  height: 80px;\r\n  background-color: white;\r\n  top: -80px;\r\n  position: absolute;\r\n  right: 0;\r\n  border-radius: 50%;\r\n  z-index: -1;\r\n}\r\n\r\n.blue-container ul li {\r\n  margin-bottom: 3em;\r\n}\r\n\r\n.blue-container ul li p {\r\n  padding: 0.5em;\r\n}\r\n\r\n.blue-container img {\r\n  width: 14%;\r\n}\r\n\r\n.blue-container ul li:nth-child(3) img {\r\n  width: 8%;\r\n}\r\n\r\n.blue-container table {\r\n  border: 2px solid;\r\n  border-color: #ffffff;\r\n  border-radius: 30px;\r\n  padding: 2px;\r\n  width: 100%;\r\n  font-size: 1.5em;\r\n  padding-bottom: 50px;\r\n  transform: skewY(2deg);\r\n}\r\n\r\n.blue-container td {\r\n  padding-top: 20px;\r\n  font-size: small;\r\n}\r\n\r\n.blue-container hr {\r\n  width: 80%;\r\n  background-color: #000000;\r\n}\r\n\r\n.blue-container a {\r\n  color: #000000;\r\n  font-weight: bolder;\r\n}\r\n\r\n.grey-container {\r\n  background-color: #f6f6f6;\r\n  padding: 4em 0 2em;\r\n  margin-top: -3%;\r\n}\r\n\r\n.grey-container ul li:first-child {\r\n  margin-bottom: 2em;\r\n}\r\n\r\nfigure {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nfigcaption {\r\n  font-weight: bold;\r\n  color: #00c2ff;\r\n}\r\n\r\nh2 {\r\n  margin-top: 7%;\r\n}\r\n\r\n.cta {\r\n  background-color: #00cc58;\r\n  width: calc(100% - 1em);\r\n  display: block;\r\n  color: white;\r\n  border-radius: 20px;\r\n  padding: 0.5em;\r\n  text-decoration: none;\r\n  font-size: 1.5em;\r\n  margin: 3% auto 7%;\r\n  position: relative;\r\n  z-index: 4;\r\n}\r\n\r\n.footer-container {\r\n  width: 100%;\r\n  background-color: #262626;\r\n  color: #f6f6f6;\r\n  padding: 3em 0;\r\n  border-top-right-radius: 40px;\r\n  transform: skewY(2deg);\r\n}\r\n\r\n.footer-container .container {\r\n  transform: skewY(-2deg);\r\n}\r\n\r\n.footer-container:before {\r\n  content: "";\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: #262626;\r\n  position: absolute;\r\n  top: -39px;\r\n  left: 0;\r\n  z-index: -2;\r\n}\r\n\r\n.footer-container:after {\r\n  content: "";\r\n  width: 80px;\r\n  height: 80px;\r\n  background-color: white;\r\n  position: absolute;\r\n  top: -80px;\r\n  left: 0;\r\n  z-index: -1;\r\n  border-radius: 50%;\r\n}\r\n\r\nul.footer-links {\r\n  margin: 0 auto;\r\n}\r\n\r\nul.footer-links li {\r\n  display: inline-block;\r\n  padding-right: 1%;\r\n}\r\n\r\nul.footer-links li a {\r\n  color: #9d9d9d;\r\n  font-size: 0.8em;\r\n}\r\n\r\nnav ul {\r\n  position: fixed;\r\n  width: 60%;\r\n  top: 0;\r\n  right: 0;\r\n  text-align: left;\r\n  background-color: rgb(36, 41, 44);\r\n  height: 100%;\r\n  z-index: 7;\r\n  padding-top: 3em;\r\n}\r\n\r\nnav ul li a {\r\n  color: white;\r\n  text-decoration: none;\r\n  display: flex;\r\n  width: 100%;\r\n  padding: 1em 2em;\r\n  background-color: rgb(49, 55, 59);\r\n}\r\n\r\nnav ul li a:hover {\r\n  background-color: rgba(65, 73, 78);\r\n}\r\n\r\n.exit-btn {\r\n  margin-bottom: 1em;\r\n  margin-top: -1.3em;\r\n  text-align: right;\r\n  padding: 0 1.4em;\r\n}\r\n\r\n.exit-btn img {\r\n  width: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n@media only screen and (min-width: 650px) {\r\n  .server {\r\n    width: 50%;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 3em;\r\n    margin: 0;\r\n  }\r\n\r\n  .subhead {\r\n    font-size: 1.4em;\r\n    margin-bottom: 12%;\r\n  }\r\n\r\n  .blue-container {\r\n    margin: 0;\r\n  }\r\n  .blue-container img {\r\n    width: 20%;\r\n  }\r\n\r\n  .blue-container ul li:nth-child(3) img {\r\n    width: 10%;\r\n    margin-top: -6px;\r\n  }\r\n\r\n  .blue-container ul {\r\n    display: flex;\r\n    margin-top: -1em;\r\n    align-items: center;\r\n  }\r\n\r\n  .blue-container ul li {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  .blue-container ul li p {\r\n    padding: 0 0.8em;\r\n  }\r\n\r\n  .grey-container ul {\r\n    display: flex;\r\n  }\r\n\r\n  nav ul {\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 875px) {\r\n  .subhead {\r\n    margin-bottom: 15%;\r\n  }\r\n\r\n  .blue-container ul {\r\n    margin: 0 0 4% 0;\r\n  }\r\n\r\n  .grey-container ul {\r\n    margin: 4% 0 0;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n  .cta {\r\n    width: 50%;\r\n  }\r\n\r\n  .container {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .show-desktop {\r\n    display: block;\r\n    margin: 0 auto 13% auto;\r\n  }\r\n\r\n  .hide-desktop {\r\n    display: none;\r\n  }\r\n\r\n  nav ul {\r\n    position: inherit;\r\n    width: auto;\r\n    background: none;\r\n    display: flex;\r\n    padding-top: 0;\r\n  }\r\n\r\n  nav ul li {\r\n    float: left;\r\n  }\r\n\r\n  nav ul li a {\r\n    color: black;\r\n    background-color: inherit;\r\n    text-align: right;\r\n    padding: 1em 2em;\r\n  }\r\n\r\n  nav ul li a:hover {\r\n    background-color: inherit;\r\n  }\r\n\r\n  .scroll {\r\n    width: 30px;\r\n    animation-name: move;\r\n    animation-duration: 1s;\r\n    animation-iteration-count: infinite;\r\n    animation-direction: alternate;\r\n  }\r\n\r\n  @keyframes move {\r\n    from {\r\n      transform: translateY(0px);\r\n    }\r\n    to {\r\n      transform: translateY(20px);\r\n    }\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1600px) {\r\n  .server {\r\n    width: 40%;\r\n    margin: 5em auto 4em 15%;\r\n  }\r\n\r\n  .container {\r\n    width: 70%;\r\n  }\r\n\r\n  .blue-container {\r\n    padding: 7em 0 2em;\r\n  }\r\n\r\n  .blue-container ul li p,\r\n  blockquote {\r\n    font-size: 1.3em;\r\n  }\r\n\r\n  .grey-container {\r\n    padding: 6em 0 4em;\r\n  }\r\n\r\n  h2 {\r\n    margin-top: 4em;\r\n  }\r\n\r\n  .blue-container img {\r\n    width: 8%;\r\n  }\r\n\r\n  .blue-container ul li:nth-child(3) img {\r\n    width: 10%;\r\n    margin-top: -4px;\r\n  }\r\n}\r\n',""]);const l=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(t)for(var l=0;l<this.length;l++){var d=this[l][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);t&&a[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),r&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=r):c[2]=r),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),n.push(c))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var o={},a=[],l=0;l<e.length;l++){var d=e[l],s=t.base?d[0]+t.base:d[0],c=o[s]||0,p="".concat(s," ").concat(c);o[s]=c+1;var u=r(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var m=i(h,t);t.byIndex=l,n.splice(l,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function i(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,i){var o=t(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var l=r(o[a]);n[l].references--}for(var d=t(e,i),s=0;s<o.length;s++){var c=r(o[s]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}o=d}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,i&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,r),o.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.nc=void 0,(()=>{var e=r(379),n=r.n(e),t=r(795),i=r.n(t),o=r(569),a=r.n(o),l=r(565),d=r.n(l),s=r(216),c=r.n(s),p=r(589),u=r.n(p),h=r(206),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=c(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const g=r.p+"300eeade141cb81cf2e6.ico";class f{constructor(){this.name="Header",this.head=document.querySelector("head"),this.title=document.createElement("title"),[{rel:"apple-touch-icon"},{rel:"apple-touch-startup-image"},{rel:"shortcut icon"}].forEach((function(e){let n=document.createElement("link");n.rel=e.rel,n.href=g,this.head.appendChild(n)}),this),this.title.innerText="JRPC Alpha Main Page",this.head.appendChild(this.title)}getHead(){return this.head}getTitle(){return this.title}}class b{constructor(){}renderImage(e,n,r){var t=new Image;return t.src=e,t.alt=n,t.classList.add(r),t}createSVGlogoText(e,n,r,t){var i="http://www.w3.org/2000/svg",o=document.createElementNS(i,"svg");o.setAttributeNS(null,"version","1.1"),o.setAttributeNS(null,"width",e);var a=document.createElementNS(i,"text");return a.innerHTML=n,a.setAttributeNS(null,"x",r),a.setAttributeNS(null,"y",t),a.classList.add("stroke-text"),o.appendChild(a),o}renderText(e,n){var r=document.createElement("p");return null!==n&&r.classList.add(n),r.innerHTML=e,r}createTopSection(e,n){var r=document.createElement("section"),t=document.createElement("img"),i=document.createElement("h1"),o=document.createElement("p"),a=document.createElement("img");return r.appendChild(t),r.appendChild(i),r.appendChild(o),r.appendChild(a),t.classList.add("server"),t.setAttribute("src",e),t.setAttribute("alt","server graphic"),i.innerHTML="This page is still under construction!",o.classList.add("subhead"),o.innerHTML="Scroll down for the list of your generated files.",a.classList.add("scroll"),a.classList.add("hide-mobile"),a.classList.add("show-desktop"),a.setAttribute("src",n),a.setAttribute("alt","scroll down"),r}createNavigation(e,n,r){var t=document.createElement("nav"),i=document.createElement("a"),o=document.createElement("img"),a=document.createElement("ul"),l=document.createElement("img");let d=document.createElement("li");return i.classList.add("hide-desktop"),i.setAttribute("href","#"),o.classList.add("menu"),o.setAttribute("src",e),o.setAttribute("alt","toggle menu"),o.setAttribute("id","menu"),i.appendChild(o),a.classList.add("show-desktop"),a.classList.add("hide-mobile"),a.setAttribute("id","nav"),d.setAttribute("id","exit"),d.classList.add("exit-btn"),d.classList.add("hide-desktop"),l.setAttribute("src",n),l.setAttribute("alt","exit menu"),d.appendChild(l),a.appendChild(d),r.forEach((function(e){let n=document.createElement("li"),r=document.createElement("a");"home"===String(e)?r.setAttribute("href","3d/index.html"):r.setAttribute("href","#"),r.innerHTML=String(e),n.appendChild(r),a.appendChild(n)})),t.appendChild(i),t.appendChild(a),o.addEventListener("click",(function(e){a.classList.toggle("hide-mobile"),e.preventDefault()})),d.addEventListener("click",(function(e){a.classList.add("hide-mobile"),e.preventDefault()})),t}createContainerElement(e){const n=document.createElement("div");return n.classList.add(e),n}generateTable(e){const n=document.createElement("table"),r=document.createElement("th"),t=document.createElement("th");return n.appendChild(r),n.appendChild(t),r.innerHTML="generated files",t.innerHTML="file information",[{link:"iotex-desktop-wallet-1.0.23.AppImage",description:"-rwxrwxrwx 1 jeremi jeremi 4695 Oct 29 22:55"},{link:"iotex-desktop-wallet-1.0.23.AppImage",description:"-rwxrwxrwx 1 jeremi jeremi 4695 Oct 29 22:55"},{link:"iotex-desktop-wallet-1.0.23.AppImage",description:"-rwxrwxrwx 1 jeremi jeremi 4695 Oct 29 22:55"},{link:"iotex-desktop-wallet-1.0.23.AppImage",description:"-rwxrwxrwx 1 jeremi jeremi 4695 Oct 29 22:55"},{link:"iotex-desktop-wallet-1.0.23.AppImage",description:"-rwxrwxrwx 1 jeremi jeremi 4695 Oct 29 22:55"},{link:"iotex-desktop-wallet-1.0.23.AppImage",description:"-rwxrwxrwx 1 jeremi jeremi 4695 Oct 29 22:55"}].forEach((function(e){let r=document.createElement("tr"),t=document.createElement("a"),i=document.createElement("td"),o=document.createElement("td");t.href="iotex-desktop-wallet-1.0.23.AppImage",t.innerHTML=e.link,i.appendChild(t),o.innerHTML=e.description,r.appendChild(i),r.appendChild(o),n.appendChild(r)}),n),n}generateTableInfoParagraph(e,n){e.appendChild(document.createElement("br"));let r=document.createElement("p");r.innerHTML="Cost 1 <img src="+n+' alt="JRPC" class="logo-small" /> JRPC per file. Scroll down to bottom of page to buy JRPC.',e.appendChild(r)}createUnorderedList(e,n){let r=document.createElement("ul");return null!==e&&r.classList.add(e),null!==n&&n.forEach((e=>{null!==e&&r.appendChild(e)}),r),r}createOrderedList(e,n){let r=document.createElement("li");return null!==e&&r.classList.add(e),r.innerHTML=n,r}populateUnorderedList(e){let n=this.createUnorderedList(null,null);return e.forEach((function(e){let r=document.createElement("li"),t=document.createElement("figure"),i=document.createElement("img");i.setAttribute("src",e.img);let o=document.createElement("blockquote");o.innerHTML=e.blockquote;let a=document.createElement("figcaption");a.innerHTML=e.figcaption,r.appendChild(t),t.appendChild(i),t.appendChild(o),t.appendChild(a),n.appendChild(r)}),n),n}}const w=r.p+"0debe3822b1e084f86b8.png",x=r.p+"cdda2bda04f65bfd180d.png",v=r.p+"6d8d16d2b7b6480828a6.svg",y=r.p+"28acb8a196fa45100816.svg",k=r.p+"5686b2ff0f5205642b16.svg",C=r.p+"706052ad8411ef64b709.svg",E=r.p+"de12f0947225b1eb30a8.png",L=r.p+"d4437c55a8ba5ec65ea7.png";class T{constructor(){this.name="Body",this.helpers=new b,this.body=document.querySelector("body"),this.menuList=["home","services","about","contact"],this.bottomHTMLlist=[{img:L,figcaption:"Kobierzyńska 168A/9, Kraków, Poland",blockquote:"For all eqnuires, please send mail to contact@jrpc.pl, or call +48 666 662 346"},{img:E,figcaption:"Jeremi Rynkiewicz",blockquote:"Architect & owner of JRPC, a blockchain services & consulting company"}],this.menu=this.menuSection(),this.itemList=this.itemListSection(),this.companyInfo=this.generateCompanyInfo(this.bottomHTMLlist),this.bottomSection=this.generateBottomSection(),this.body.appendChild(this.menu),this.body.appendChild(this.itemList),this.body.appendChild(this.companyInfo),this.body.appendChild(this.bottomSection)}menuSection(){let e=this.helpers.createContainerElement("container"),n=document.createElement("header");return e.appendChild(n),n.appendChild(this.helpers.renderImage(w,"logo","logo")),n.appendChild(this.helpers.createSVGlogoText("27%","Services","1%","60%")),n.appendChild(this.helpers.createNavigation(v,y,this.menuList)),e.appendChild(this.helpers.createTopSection(k,C)),e}itemListSection(){let e=this.helpers.createContainerElement("blue-container"),n=this.helpers.createContainerElement("container");return e.appendChild(n),n.appendChild(this.helpers.generateTable({})),this.helpers.generateTableInfoParagraph(n,x),e}generateCompanyInfo(e){let n=this.helpers.createContainerElement("grey-container"),r=this.helpers.createContainerElement("container");return r.appendChild(this.helpers.populateUnorderedList(e)),n.appendChild(r),n}generateBottomSection(){let e=this.helpers.createContainerElement("container"),n=document.createElement("h2");n.innerHTML="Get more tokens!",e.appendChild(n);let r=document.createElement("a");return r.setAttribute("href","#"),r.classList.add("cta"),r.innerHTML="Buy JRPC",e.appendChild(r),e}}class A{constructor(){this.helpers=new b,this.name="Footer",this.contactList=[],this.body=document.querySelector("body"),this.footer=this.generateFooter(),this.body.appendChild(this.footer)}createContactLinksList(){return this.contactList[0]=this.helpers.createOrderedList(null,'<a href="#">Terms of Service</a>'),this.contactList[1]=this.helpers.createOrderedList(null,'<a href="#">Policy</a>'),this.helpers.createUnorderedList("footer-links",this.contactList)}generateFooter(){let e=document.createElement("footer"),n=this.helpers.createContainerElement("footer-container"),r=this.helpers.createContainerElement("container");n.appendChild(r);let t=document.createElement("a");return t.setAttribute("href","#"),t.appendChild(this.helpers.renderImage(w,"logo","logo")),r.appendChild(t),r.appendChild(this.helpers.renderText("Jeremi Rynkiewicz<br />Kobierzyńska 168A/9, Kraków, Poland, 30-382",null)),r.appendChild(this.createContactLinksList()),e.appendChild(n),e}}new class{constructor(){this.headerObject=new f,this.bodyObject=new T,this.footerObject=new A,this.name="Elements"}getHeader(){return this.headerObject.getHead()}getBody(){return this.bodyObject}getFooter(){return this.footerObject}}})()})();