!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.sharewinfo=e():t.sharewinfo=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return t[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)n.d(r,u,function(e){return t[e]}.bind(null,u));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){"use strict";n.r(e),n.d(e,"render",(function(){return x}));var r={};n.r(r),n.d(r,"checkbox",(function(){return u})),n.d(r,"file",(function(){return c})),n.d(r,"hidden",(function(){return o})),n.d(r,"image",(function(){return i})),n.d(r,"option",(function(){return a})),n.d(r,"password",(function(){return s})),n.d(r,"redio",(function(){return l})),n.d(r,"reset",(function(){return d})),n.d(r,"select",(function(){return m})),n.d(r,"submit",(function(){return p})),n.d(r,"textbox",(function(){return f})),n.d(r,"textarea",(function(){return b})),n.d(r,"checkboxGroup",(function(){return h})),n.d(r,"radioGroup",(function(){return v})),n.d(r,"col",(function(){return A})),n.d(r,"text",(function(){return y}));var u=(t,e)=>{const n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("name",t.name),n.setAttribute("id",t.id),n.setAttribute("value",t.value),e&&n.setAttribute("checked","checked");const r=document.createElement("label");return r.appendChild(n),r},c=()=>{const t=document.createElement("input");return t.setAttribute("type","file"),t.setAttribute("name",option.name),t},o=t=>{const e=document.createElement("input");return e.setAttribute("type","hidden"),e.setAttribute("name",t.name),e.setAttribute("value",t.value),e},i=t=>{const e=document.createElement("img");return e.setAttribute("src",t.src),t.width&&e.setAttribute("width",t.width),t.height&&e.setAttribute("height",t.height),e},a=(t,e)=>{const n=document.createElement("option");return n.setAttribute("value",t.value),e&&n.setAttribute("checked","checked"),n},s=t=>{const e=document.createElement("input");return e.setAttribute("type","password"),e.setAttribute("name",t.name),e.setAttribute("value",t.value),e},l=(t,e)=>{const n=document.createElement("input");n.setAttribute("type","radio"),n.setAttribute("name",t.name),n.setAttribute("value",t.value),e&&n.setAttribute("checked","checked");const r=document.createElement("label");return r.appendChild(n),r},d=t=>{const e=document.createElement("input");return e.setAttribute("type","reset"),e},m=t=>{const e=document.createElement("select");return e.setAttribute("name",t.name),(t.items||[]).forEach(n=>{const r=a(n,n.value===t.value);e.appendChild(r)}),e},p=t=>{const e=document.createElement("input");return e.setAttribute("type","submit"),e.setAttribute("value",t.value),e},f=t=>{const e=document.createElement("div");e.setAttribute("style","width: 100%");const n=document.createElement("div");n.setAttribute("style","float: left");const r=document.createElement("div");r.setAttribute("style","float: left"),n.innerHTML=t.label;const u=document.createElement("input");return u.setAttribute("type","txt"),u.setAttribute("name",t.name),u.setAttribute("value",t.value),r.appendChild(u),e.appendChild(n),e.appendChild(r),e},b=t=>{const e=document.createElement("textarea");return e.setAttribute("name",t.name),e.setAttribute("value",t.value),e},h=t=>{const e=document.createElement("span");return(t.items||[]).forEach(t=>{const n=u(t,t.value===n.value);e.appendChild(n)}),e},v=(t,e)=>{const n=document.createElement("span");return(t.items||[]).forEach(t=>{const e=l(t,t.value===e.value);n.appendChild(e)}),n},A=t=>{if(!t.span)throw"col 必须请提供span数量";const e=t.span/24*100+"%",n=document.createElement("div");return n.setAttribute("style","width: "+e),t.class&&n.setAttribute("class",t.class),n},y=t=>{const e=document.createElement("div");return t.class&&e.setAttribute("class",t.class),t.style&&e.setAttribute("style",t.style),e.innerHTML=t.value,e};function E(t,e){(e||[]).forEach(e=>{const n=function(t){return r[t.type](t)}(e);e.child&&e.child.length&&E(n,e.child),t.appendChild(n)})}function x(t,e){const n=function(){const t=document.createElement("div");return t.setAttribute("style","width: 100%; display: flex;flex-flow: row wrap"),t}();E(n,e),t.appendChild(n)}}])}));