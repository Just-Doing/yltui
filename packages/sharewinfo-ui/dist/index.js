!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.sharewinfo=t():e.sharewinfo=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";n.r(t),n.d(t,"jsonForm",(function(){return a}));var r={};n.r(r),n.d(r,"panels",(function(){return f})),n.d(r,"number",(function(){return b})),n.d(r,"checkbox",(function(){return m})),n.d(r,"file",(function(){return p})),n.d(r,"hidden",(function(){return v})),n.d(r,"image",(function(){return h})),n.d(r,"option",(function(){return g})),n.d(r,"password",(function(){return y})),n.d(r,"reset",(function(){return k})),n.d(r,"select",(function(){return w})),n.d(r,"submit",(function(){return C})),n.d(r,"textbox",(function(){return E})),n.d(r,"textarea",(function(){return x})),n.d(r,"checkboxGroup",(function(){return O})),n.d(r,"radio",(function(){return A})),n.d(r,"radioGroup",(function(){return j})),n.d(r,"col",(function(){return o})),n.d(r,"text",(function(){return S})),n.d(r,"color",(function(){return B})),n.d(r,"colorGroup",(function(){return L})),n.d(r,"radioblockGroup",(function(){return N})),n.d(r,"toggle",(function(){return J})),n.d(r,"switchBox",(function(){return H})),n.d(r,"theme",(function(){return D}));var a={};n.r(a),n.d(a,"render",(function(){return Y}));var o=function(e){if(!e.span)throw"col 必须请提供span数量";var t="".concat(e.span/24*100,"%"),n=document.createElement("div");return n.setAttribute("style","width: ".concat(t)),e.class&&n.setAttribute("class",e.class),n};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(e,t,n){var r=document.createElement("div");if(r.setAttribute("class","text-waper"),e){var a=o({span:e.span||12,class:e.class});a.setAttribute("class","label-waper"),a.innerText=e.text||"",r.appendChild(a)}if(t){var c=o({span:t.span||12,class:t.class});c.setAttribute("class","control-waper"),c.appendChild(n),r.appendChild(c)}else r.appendChild(n);return r};function l(e,t){return e=Math.min(t,Math.max(0,e)),Math.abs(e-t)<1e-6?1:e%t/~~t}var u=function(e,t,n){var r="#";return[e,t,n].forEach((function(e){var t=e.toString(16);t.length<2&&(t="0"+t),r+=t})),r},s=function(e){return void 0!==e&&!isNaN(+e)&&0<=+e&&+e<=1?+e:1};function d(){if(navigator.userAgent.indexOf("UCBrowser")>-1)return!1;for(var e=0,t=new Array("Chrome","MQQBrowser","QQ","TBS","wxwork","MicroMessenger","T7","baiduboxapp","baidubrowser","MiuiBrowser","NetType","OPR"),n=0;n<t.length;n++)navigator.userAgent.indexOf(t[n])>-1&&(e=1);if(1!=e&&(navigator.userAgent.indexOf("HUAWEIEVA")>-1||navigator.userAgent.indexOf("HUAWEIVTR")>-1))return!1;try{return window.localStorage.setItem("test","testValue"),window.localStorage.removeItem("test"),!0}catch(e){return!1}}var f=function(e){if(!e.text)throw"panel 必须请提供text";var t=document.createElement("div");t.classList.add("panel"),e.class&&t.classList.add("class",e.class);var n=document.createElement("div");n.setAttribute("class","panel-header"),n.innerHTML='<svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-right" width="1em" height="1em" style="transform: rotate(90deg); fill="currentColor" aria-hidden="true" style=""><path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path></svg>\n      <span>'.concat(e.text,"</span>\n    ");var r=document.createElement("div");r.setAttribute("class","panel-body panel-expaned");var a=document.createElement("div");a.setAttribute("class","panel-body-content");var o=document.createElement("span");return o.setAttribute("class","back-default"),o.innerText="还原为默认值",o.onclick=function(){var n=t.body.defaultValue;if(function e(t){for(var n=Object.keys(t),r=0;r<n.length;r++){var a=n[r];switch(t[a].controlType){case"textbox":case"number":case"select":document.getElementsByName(a)[0].value=t[a].value;break;case"checkbox":document.getElementsByName(a)[0].checked=t[a].value;break;case"switchBox":var o=document.querySelector("[name='".concat(a,"']"));t[a].value?o.classList.add("jsonform-switch-checked"):o.classList.remove("jsonform-switch-checked");break;case"checkboxGroup":case"radioGroup":for(var i=document.getElementsByName(a),l=t[a].value,u=0;u<i.length;u++)i[u].checked=l.indexOf(i[u].value)>-1;break;case"radioblockGroup":for(i=document.getElementsByName(a),l=t[a].value,u=0;u<i.length;u++){var s=i[u].getAttribute("value");l.indexOf(s)>-1?i[u].classList.add("radio-block-checked"):i[u].classList.remove("radio-block-checked")}break;case"color":document.getElementsByName(a)[0].style.backgroundColor=t[a].value;break;case"colorGroup":var d=document.getElementsByName(a),f=t[a].value;for(u=d.length-1;u>=0;u--)u>f.length-1?d[u].parentNode.remove():d[u].style.backgroundColor=f[u];break;case"toggle":var m=document.getElementsByName(a)[0],b=m.childNodes[1],p=m.childNodes[2];b.style.display="",p.style.display="none";var v=b.getAttribute("value");v=v?JSON.parse(v):"";var h=p.getAttribute("value");h=h?JSON.parse(h):"";var g=b.getAttribute("controlType"),y=p.getAttribute("controlType");e(c({},a+"0",{controlType:g,value:v})),e(c({},a+"1",{controlType:y,value:h}))}}}(n),e.fieldChange){var r={};Object.keys(n).forEach((function(e){return r[e]=n[e].value})),e.fieldChange(r)}},a.appendChild(o),r.appendChild(a),t.appendChild(n),t.appendChild(r),t.body=a,n.onclick=function(){r.orgHeight||(r.orgHeight="".concat(r.offsetHeight,"px")),r.offsetHeight<1?(n.childNodes[0].style="transform: rotate(90deg);",r.style.height=r.orgHeight,r.classList.add("panel-expaned"),r.classList.remove("panel-close")):(n.childNodes[0].style="",r.style.height="0",r.classList.add("panel-close"),r.classList.remove("panel-expaned"))},t};var m=function(e){if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);var t=document.createElement("label");t.setAttribute("class","checkbox-label-waper");var n=document.createElement("div");n.setAttribute("class","checkbox-waper");var r=document.createElement("input");r.setAttribute("type","checkbox"),r.setAttribute("name",e.name),r.setAttribute("id",e.id),r.setAttribute("value",e.value),e.checked&&r.setAttribute("checked","checked"),e.fieldChange&&(r.onchange=function(t){return e.fieldChange((n={},r=e.name,a=t.target.checked,r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n));var n,r,a});var a=document.createElement("span");return a.innerText=e.text||"",n.appendChild(r),t.appendChild(n),t.appendChild(a),i(e.label,e.waper,t)};var b=function(e){if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);var t=document.createElement("input");if(t.setAttribute("class","jsonform-textbox"),t.setAttribute("type","number"),t.setAttribute("name",e.name),t.setAttribute("value",e.value||""),e.fieldChange&&(t.onchange=function(t){return e.fieldChange((n={},r=e.name,a=t.target.value,r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n));var n,r,a}),e.unit){var n=document.createElement("div");return n.classList.add("input-with-unit"),n.innerHTML='<span class="input-unit">'.concat(e.unit,"</span>"),n.appendChild(t),i(e.label,e.waper,n)}return i(e.label,e.waper,t)},p=function(){if(!option.name)throw"json 指定name 属性："+JSON.stringify(option);var e=document.createElement("input");return e.setAttribute("type","file"),e.setAttribute("name",option.name),e},v=function(e){if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);var t=document.createElement("input");return t.setAttribute("type","hidden"),t.setAttribute("name",e.name),t.setAttribute("value",e.value),t},h=function(e){var t=document.createElement("img");return t.setAttribute("src",e.src),e.width&&t.setAttribute("width",e.width),e.height&&t.setAttribute("height",e.height),t},g=function(e){var t=document.createElement("option");return t.setAttribute("value",e.value),t.innerText=e.text,e.checked&&t.setAttribute("selected","selected"),t},y=function(e){if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);var t=document.createElement("input");return t.setAttribute("style","width: calc(100% - 8px)"),t.setAttribute("type","password"),t.setAttribute("name",e.name),t.setAttribute("value",e.value||""),i(e.label,e.waper,t)};var A=function(e){if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);var t=document.createElement("label");t.setAttribute("class","radio-label-waper");var n=document.createElement("div");n.setAttribute("class","radio-waper");var r=document.createElement("input");r.setAttribute("type","radio"),r.setAttribute("name",e.name),r.setAttribute("id",e.id),r.setAttribute("value",e.value),e.checked&&r.setAttribute("checked","checked"),e.fieldChange&&(r.onchange=function(t){return e.fieldChange((n={},r=e.name,a=t.target.checked,r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n));var n,r,a});var a=document.createElement("span");return a.innerText=e.text||"",n.appendChild(r),t.appendChild(n),t.appendChild(a),i(e.label,e.waper,t)},k=function(e){var t=document.createElement("input");return t.setAttribute("type","reset"),t};var w=function(e){if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);var t=document.createElement("div");t.setAttribute("class","select-box"),t.setAttribute("name",e.name),t.setAttribute("rel","");var n=document.createElement("p");n.innerHTML="选择",n.setAttribute("style","font-size:12px;font-weight:normal");var r=document.createElement("ul"),a=document.createElement("div");a.className="parentBox",a.appendChild(r);var o=document.createElement("span");o.setAttribute("class","icon"),o.innerHTML='\n  <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">\n    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>\n  </svg>',(e.items||[]).forEach((function(e){var t=document.createElement("li");t.setAttribute("rel",e.value||""),t.innerHTML=e.text,t.setAttribute("style","text-align:left"),r.appendChild(t)})),t.appendChild(n);var c=document.getElementById("baseOptionArea");c.style.position="relative",c.appendChild(a),t.appendChild(o);var l=1;function u(){"block"==r.style.display&&3===(l+=1)&&(r.style.display="none",o.childNodes[1].style.transform="rotate(0deg)",document.body.removeEventListener("click",u))}return r.onclick=function(r){var a,o,c;"li"===r.target.tagName.toLowerCase()&&(e.fieldChange&&e.fieldChange((a={},o=e.name,c=r.target.getAttribute("rel"),o in a?Object.defineProperty(a,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[o]=c,a)),n.innerHTML=r.target.textContent,t.setAttribute("rel",r.target.getAttribute("rel")))},t.onclick=function(e){if(2!==l){var n=t.getBoundingClientRect().x-c.getBoundingClientRect().x,i=t.getBoundingClientRect().y-c.getBoundingClientRect().y+t.offsetHeight,s=t.offsetWidth;r.setAttribute("style","width:"+s+"px"),a.setAttribute("style","position:absolute;left:"+n+"px;top:"+i+"px"),console.log(r.style.display),"block"!==r.style.display&&(r.style.display="block",l=1,o.childNodes[1].style.transform="rotate(180deg)",document.body.addEventListener("click",u))}else 2===l&&u()},i(e.label,e.waper,t)},C=function(e){var t=document.createElement("input");return t.setAttribute("type","submit"),t.setAttribute("value",e.value),t};var E=function(e){if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);var t=document.createElement("input");return t.setAttribute("class","jsonform-textbox"),t.setAttribute("type","text"),t.setAttribute("name",e.name),t.setAttribute("value",e.value||""),e.fieldChange&&(t.onchange=function(t){return e.fieldChange((n={},r=e.name,a=t.target.value,r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n));var n,r,a}),i(e.label,e.waper,t)};var x=function(e){if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);var t=document.createElement("textarea");return t.setAttribute("style","width: calc(100% - 8px);height:150px"),t.setAttribute("type","text"),t.setAttribute("name",e.name),t.setAttribute("value",e.value||""),e.fieldChange&&(t.onchange=function(t){return e.fieldChange((n={},r=e.name,a=t.target.value,r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n));var n,r,a}),i(e.label,e.waper,t)};var O=function(e){if(!e.name)throw"json 中必须指定name 属性："+JSON.stringify(e);var t=document.createElement("div"),n=null;return e.fieldChange&&(n=function(){for(var t,n,r,a=document.getElementsByName(e.name),o=[],c=0;c<a.length;c++)a[c].checked&&o.push(a[c].value);e.fieldChange((t={},n=e.name,r=o,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))}),t.setAttribute("class","checkbox-list"),(e.items||[]).forEach((function(r){r.name=e.name,n&&(r.fieldChange=n),e.value&&(r.checked=e.value.indexOf(r.value)>-1);var a=m(r);t.appendChild(a)})),i(e.label,e.waper,t)};var j=function(e){if(!e.name)throw"json 中必须指定name 属性："+JSON.stringify(e);var t=document.createElement("div"),n=null;return e.fieldChange&&(n=function(){for(var t,n,r,a=document.getElementsByName(e.name),o=[],c=0;c<a.length;c++)a[c].checked&&o.push(a[c].value);e.fieldChange((t={},n=e.name,r=o.length?o[0]:"",n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))}),t.setAttribute("class","radio-list"),(e.items||[]).forEach((function(r){r.name=e.name,n&&(r.fieldChange=n),r.checked=r.value===e.value[0];var a=A(r);t.appendChild(a)})),i(e.label,e.waper,t)};var N=function(e){function t(t){var n=document.createElement("div");return n.setAttribute("class","radio-block"),t.checked&&n.classList.add("radio-block-checked"),n.setAttribute("name",t.name),n.setAttribute("type",t.type),n.setAttribute("value",t.value||t.text),n.innerText=t.text||t.value,n.onclick=function(n){var r,a,o,c=document.querySelector("[name='".concat(t.name,"'].radio-block-checked")),i=c?c.getAttribute("value"):"",l=n.target.getAttribute("value");n.target.parentNode.querySelectorAll(n.target.tagName).forEach((function(e){e.removeAttribute("checked"),e.classList.remove("radio-block-checked")})),n.target.setAttribute("checked","checked"),n.target.classList.add("radio-block-checked"),e.fieldChange&&i!==l&&e.fieldChange((r={},a=e.name,o=l,a in r?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o,r)),i=l},n}if(!e.name)throw"json 中必须指定name 属性："+JSON.stringify(e);var n=document.createElement("div");return n.setAttribute("class","radio-block-list"),(e.items||[]).forEach((function(r){r.name=e.name,r.checked=r.value===e.value;var a=t(r);n.appendChild(a)})),i(e.label,e.waper,n)},S=function(e){var t=document.createElement("div");return e.class&&t.setAttribute("class",e.class),e.style&&t.setAttribute("style",e.style),t.innerHTML=e.value,t};var B=function(e){if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);var t=d(),n=t?220:180,r=[["#ffffff","#000000","#118dff","#12239e","#e66c37","#6b007b","#e044a7","#744ec2","#d9b300","#d64550"],["#e6e6e6","#999999","#a0d1ff","#a0a7d8","#f5c4af","#c499ca","#f3b4dc","#c7b8e7","#f0e199","#efb5b9"],["#CCCCCC","#666666","#70BBFF","#717BC5","#F0A787","#A666B0","#EC8FCA","#AC95DA","#E8D166","#E68F96"],["#B3B3B3","#333333","#41A4FF","#414FB1","#EB895F","#893395","#E669B9","#9071CE","#E1C233","#DE6A73"],["#808080","#1A1A1A","#0D6ABF","#0E1A77","#AD5129","#50005C","#A8337D","#573B92","#A38600","#A1343C"],["#666666","#000000","#094780","#09124F","#73361C","#36003E","#702254","#3A2761","#6D5A00","#6B2328"]],a=document.createElement("div"),o=document.createElement("div"),c=function e(t){if("colorbox"!=t.target.className&&"color-bord"!=t.target.className&&"color-bar"!=t.target.className&&"color-input"!=t.target.id&&"customerColorBtn"!=t.target.id){var n=document.querySelector("#color-input");n&&n.value&&f(n.value),o.remove(),document.body.removeEventListener("click",e)}};function f(t){var n,r,o;if(e.fieldChange&&e.fieldChange((n={},r=e.name,o=t,r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n)),a.setAttribute("style","background-color: "+t),d()){var c=JSON.parse(window.localStorage.getItem("stageColor")||"[]");c.splice(c.indexOf(t),c.indexOf(t)>-1?1:0),(c=c.slice(0,10)).unshift(t),window.localStorage.setItem("stageColor",JSON.stringify(c))}}function m(e){var i=e.pageX+190>document.body.clientWidth?e.pageX-190:e.pageX,d=e.pageY+n>document.body.clientHeight?e.pageY-n:e.pageY;o.innerHTML=function(e,r,a){var o='<div class="defaultcolor-list"  style="height:'.concat(n,"px; top: ").concat(e,"px; left: ").concat(r,'px;">\n                      <div class="defaultcolor-list-title"><div style="margin-left: 15px">主题颜色</div></div>');if(a.forEach((function(e){o+='<div class="colors">',e.forEach((function(e){return o+='<div class="colorSpan" color="'.concat(e,'" style="background-color: ').concat(e,'" ></div>')})),o+="</div>"})),t){var c=JSON.parse(window.localStorage.getItem("stageColor")||"[]");c=c.slice(0,10),o+='<div class="defaultcolor-list-title"><div style="margin-left: 15px">最近颜色</div></div>',o+='<div class="colors">',c.forEach((function(e){return o+='<div class="colorSpan" color="'.concat(e,'" style="background-color: ').concat(e,'" ></div>')})),o+="</div>"}return(o+='<div class="customer-color"><button id="customerColorBtn">自定义颜色</button></div>')+"</div>"}(d,i,r),document.body.appendChild(o),document.querySelectorAll(".colorSpan").forEach((function(e){e.addEventListener("click",(function(e){f(e.target.getAttribute("color"))}))})),document.getElementById("customerColorBtn").onclick=function(){!function(e){var t=e.pageX+122>document.body.clientWidth?e.pageX-122:e.pageX,n=e.pageY+130>document.body.clientHeight?e.pageY-130:e.pageY;o.innerHTML=(r=n,i=t,'<div class="colorpick" style=" top: '.concat(r,"px; left: ").concat(i,'px;">\n                      <div class="color-bord" style="background-color: hsl(360, 100%, 50%);">\n                        <div class="color-point"></div>\n                      </div>\n                      <div class="color-bar">\n                        <div class="color-bar-porint"></div>\n                      </div>\n                      <div class="color-input"><input type="text" id="color-input" /></div>\n                      <div class="color-ok">OK</div>\n                    </div>'));var r,i;var d=document.querySelector(".color-bord"),f=document.querySelector(".color-bar"),m=document.querySelector(".color-point"),b=document.querySelector(".color-bar-porint"),p=document.querySelector(".color-ok"),v=document.querySelector("#color-input"),h=a.style.backgroundColor,g={h:255,s:255,v:255};if(h){var y=/rgb\((\d*), (\d*), (\d*)\)/.exec(h),A=y[1],k=y[2],w=y[3],C=100-(g=function(e,t,n,r){e=l(e,255),t=l(t,255),n=l(n,255);var a,o,c=Math.max(e,t,n),i=Math.min(e,t,n),u=c,d=c-i;if(o=0===c?0:d/c,c===i)a=0;else{switch(c){case e:a=(t-n)/d+(t<n?6:0);break;case t:a=(n-e)/d+2;break;case n:a=(e-t)/d+4}a/=6}return{h:360*a,s:o,v:u,a:s(r)}}(A,k,w)).h/360*100;b.style.top="".concat(C,"px");var E=Math.round(100*g.s),x=Math.round(100*(1-g.v));m.style.top="".concat(x,"px"),m.style.left="".concat(E,"px"),v.value=u(parseInt(A),parseInt(k),parseInt(w)),d.setAttribute("style","background-color: hsl("+g.h+", 100%, 50%);")}function O(){var e=function(e,t,n){e=l(e,360),t=l(100*t,100);var r=~~(6*e),a=6*e-r,o=(n=l(100*n,100))*(1-t),c=n*(1-a*t),i=n*(1-(1-a)*t),u=0,s=0,d=0;switch(r%6){case 0:u=n,s=i,d=o;break;case 1:u=c,s=n,d=o;break;case 2:u=o,s=n,d=i;break;case 3:u=o,s=c,d=n;break;case 4:u=i,s=o,d=n;break;case 5:u=n,s=o,d=c}var f=function(e){return Math.round(255*e)};return{r:f(u),g:f(s),b:f(d)}}(g.h,g.s,g.v),t=u(e.r,e.g,e.b);v.value=t,a.setAttribute("style","background-color: "+t+";")}function j(e){var t=e.pageX-d.offsetParent.offsetLeft,n=e.pageY-d.offsetParent.offsetTop;m.setAttribute("style","top:"+n+"px;left: "+t+"px"),g.s=Math.round(t/100*100)/100,g.v=Math.round(100*(1-n/100))/100,O()}function N(e){var t=e.pageY-f.offsetParent.offsetTop;b.setAttribute("style","top:"+t+"px;"),g.h=(100-t)/100*360,d.setAttribute("style","background-color: hsl("+g.h+", 100%, 50%);"),O()}p.onclick=c,d.onclick=j,d.onmousedown=function(){d.addEventListener("mousemove",j)},d.onmouseup=function(){d.removeEventListener("mousemove",j)},f.onclick=N,f.onmousedown=function(){f.addEventListener("mousemove",N)},f.onmouseup=function(){f.removeEventListener("mousemove",N)}}(e)},document.body.addEventListener("click",c)}return a.setAttribute("name",e.name),a.setAttribute("type",e.type),a.setAttribute("class","colorbox"),a.setAttribute("style","background-color: "+e.value||!1),a.onclick=function(e){m(e)},i(e.label,e.waper,a)};var L=function(e){if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);var t=null;e.fieldChange&&(t=function(){for(var t,n,r,a=document.getElementsByName(e.name),o=[],c=0;c<a.length;c++)a[c].style.backgroundColor&&o.push(a[c].style.backgroundColor);e.fieldChange((t={},n=e.name,r=o,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))});var n=document.createElement("div"),r=document.createElement("div");if(r.setAttribute("class","color-list"),(e.items||[]).forEach((function(n){n.name=e.name,t&&(n.fieldChange=t);var a=B(n,n.value);r.appendChild(a)})),e.addOrReduce){var a=document.createElement("span");a.setAttribute("class","color-plus"),a.innerText="+";var o=document.createElement("span");o.setAttribute("class","color-reduce"),o.innerText="-",n.appendChild(a),n.appendChild(o),a.onclick=function(){var n={name:e.name};t&&(n.fieldChange=t),n.value="#fff";var a=B(n);r.appendChild(a),r.appendChild(a)},o.onclick=function(){r.lastChild.remove()}}return n.appendChild(r),i(e.label,e.waper,n)};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=function(e){if(!e.name)throw"json 中必须指定name 属性："+JSON.stringify(e);if(!e.controls||2!==e.controls.length)throw"json 中必须指定controls 长度为2的控件数量："+JSON.stringify(e);var t=document.createElement("div");t.setAttribute("name",e.name);var n=T(T({},e.controls[0]),{},{name:"".concat(e.name,"0")}),a=T(T({},e.controls[1]),{},{name:"".concat(e.name,"1")});t.setAttribute("value",n.value||""),n.fieldChange=function(n){var r=n["".concat(e.name,"0")];t.setAttribute("value",r),e.fieldChange(M({},e.name,r))},a.fieldChange=function(n){var r=n["".concat(e.name,"1")];t.setAttribute("value",r),e.fieldChange(M({},e.name,r))};var o=r[e.controls[0].type](n),c=r[e.controls[1].type](a);c.style.display="none",o.setAttribute("controlType",n.type),c.setAttribute("controlType",a.type),o.setAttribute("value",JSON.stringify(n.value||"")),c.setAttribute("value",JSON.stringify(a.value||""));var l=document.createElement("button");l.innerText="自定义",l.onclick=function(){var e=o.style.display,t=c.style.display;o.style.display=""===e?"none":"",c.style.display=""===t?"none":""},t.setAttribute("class","toggle-list");var u=document.createElement("div");return u.setAttribute("class","toggle-btn-waper"),u.appendChild(l),t.appendChild(u),t.appendChild(o),t.appendChild(c),i(e.label,e.waper,t)};var H=function(e){if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);var t=document.createElement("div");t.setAttribute("class","checkbox-waper");var n=document.createElement("button");n.setAttribute("class","jsonform-switch"),n.setAttribute("name",e.name),n.setAttribute("id",e.id),n.setAttribute("value",e.value),e.checked&&n.classList.add("jsonform-switch-checked"),n.onclick=function(){var t,r,a;n.classList.contains("jsonform-switch-checked")?n.classList.remove("jsonform-switch-checked"):n.classList.add("jsonform-switch-checked"),e.fieldChange&&e.fieldChange((t={},r=e.name,a=n.classList.contains("jsonform-switch-checked"),r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t))};var r=document.createElement("div");return r.setAttribute("class","jsonform-switch-handle"),n.appendChild(r),t.appendChild(n),i(e.label,e.waper,t)};var D=function(e){if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);var t=document.createElement("div");return t.setAttribute("class","jsonform-theme-waper"),t.setAttribute("name",e.name),(e.items||[]).forEach((function(n){var r=document.createElement("div");r.setAttribute("value",n.value),r.setAttribute("style","background-color: ".concat(n.bak)),r.setAttribute("class","jsonform-theme"),(n.colors||[]).forEach((function(e){var t=document.createElement("div");t.setAttribute("style","background-color: ".concat(e)),t.setAttribute("class","jsonform-theme-color"),r.appendChild(t)})),r.onclick=function(){var t,a,o,c=document.querySelector(".jsonform-theme-checked"),i=c?c.getAttribute("value"):"",l=r.getAttribute("value");r.parentNode.childNodes.forEach((function(e){e.classList.remove("jsonform-theme-checked")})),r.classList.add("jsonform-theme-checked"),e.fieldChange&&i!==l&&e.fieldChange((t={},a=e.name,o=n.value,a in t?Object.defineProperty(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o,t))},t.appendChild(r)})),i(e.label,e.waper,t)};function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t,n,a){(t||[]).forEach((function(t){var o=function(e){return r[e.type](e)}(F(F({},t),{},{fieldChange:n}));t.child&&t.child.length&&("panels"===t.type?(o.body.defaultValue={},I(o.body,t.child,n,a)):I(o,t.child,n,a)),t.name&&(a[t.name]=t.type,e.defaultValue&&(e.defaultValue[t.name]={controlType:t.type,value:t.value})),e.appendChild(o)}))}function Y(e,t,n){var r=function(){var e=document.createElement("div");return e.setAttribute("style","width: 100%; display: flex;flex-flow: row wrap"),e.setAttribute("class","json-form"),e}(),a={};return I(r,t,n,a),e.appendChild(r),{getData:function(){for(var e={},t=Object.keys(a),n=0;n<t.length;n++){var r=t[n];switch(a[r]){case"textbox":case"number":case"radioGroup":e[r]=document.getElementsByName(r)[0].value;break;case"select":e[r]=document.getElementsByName(r)[0].getAttribute("rel");break;case"radioblockGroup":var o=document.querySelector("[name='".concat(r,"'].radio-block-checked"));e[r]=o?o.getAttribute("value"):"";break;case"checkbox":e[r]=document.getElementsByName(r)[0].checked;break;case"switchBox":e[r]=document.getElementsByName(r)[0].classList.contains("jsonform-switch-checked");break;case"checkboxGroup":for(var c=document.getElementsByName(r),i=[],l=0;l<c.length;l++)c[l].checked&&i.push(c[l].value);e[r]=i;break;case"color":e[r]=document.getElementsByName(r)[0].style.backgroundColor;break;case"colorGroup":var u=document.getElementsByName(r),s=[];for(l=0;l<u.length;l++)s.push(u[l].style.backgroundColor);e[r]=s;break;case"toggle":e[r]=document.getElementsByName(r)[0].getAttribute("value")}}return e}}}}])}));