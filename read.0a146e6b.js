function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequire12f5;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequire12f5=i),i.register("kyEFX",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"jewIc":"read.0a146e6b.js","2h93M":"error_screen_min.4023487f.png","41eNB":"error_screen_x2.39288cc7.png","eGI0r":"error_mobile_min.58218a7d.png","gwbTd":"error_mobile_x2.abc25851.png","hsf41":"error_tablet_min.c64e72d1.png","6U0Iy":"error_tablet_x2.f001dae6.png"}'));var l;l=new URL(i("kyEFX").resolve("2h93M"),import.meta.url).toString();var s;s=new URL(i("kyEFX").resolve("41eNB"),import.meta.url).toString();var a;a=new URL(i("kyEFX").resolve("eGI0r"),import.meta.url).toString();var c;c=new URL(i("kyEFX").resolve("gwbTd"),import.meta.url).toString();var d;d=new URL(i("kyEFX").resolve("hsf41"),import.meta.url).toString();var u;function _(){return`<section class="error">\n  <h2 class="error-text">We haven’t found news from this category</h2>\n  <picture class="error-image">\n    <source\n      srcset="\n        ${t(l)} 1x,\n        ${t(s)} 2x\n      "\n      media="(min-width: 1200px)"\n    />\n    <source\n      srcset="\n        ${t(d)} 1x,\n        ${t(u)} 2x\n      "\n      media="(min-width: 768px)"\n    />\n    <source\n      srcset="\n        ${t(a)} 1x,\n        ${t(c)} 2x\n      "\n      media="(max-width: 767px)"\n    />\n    <img\n      src=${t(l)}\n      alt="Error page"\n      width="601"\n    />\n  </picture>\n</section>`}u=new URL(i("kyEFX").resolve("6U0Iy"),import.meta.url).toString();const f={KEY_LOCAL_STORAGE:"news-state-local-storage"};function m(e){return e.map((({img:e,title:t,text:n,date:r,link:o,section:i})=>`\n    <li class="home__list-item ">\n      <div class="home__list-top">\n          <p class="home__list-section">${i}</p>\n          <img width="353" height="395" class="home__list-img" src=${e} alt=${t}>\n          <button type="button" id="like" class="add-btn ">Add to favorite</button>\n          <button type="button" id="dislike" class="remove-button invisible-button">Remove from favorite</button>\n      </div>\n      <div class="home__list-description">\n        <h2 class="home__list-title">${t}</h2>\n        <p class="home__list-text">${n}</p>\n      </div>\n      <div class="home__list-footer">\n        <p class="home__list-date">${r}</p>\n        <a href=${o} class="home__list-link">Read more</a>\n      </div>\n    </li>\n    `)).join("")}const g=document.querySelector("main"),p=document.querySelector(".readPage-list");function h(){return new Date(Date.now()).toLocaleString().split(",")[0]}p.addEventListener("click",(function(e){if(e.preventDefault(),"A"!==e.target.nodeName)return;const t=function(e){const t=e.querySelector(".home__list-section").textContent,n=e.querySelector(".home__list-img").src,r=e.querySelector(".home__list-img").alt,o=e.querySelector(".home__list-title").textContent,i=e.querySelector(".home__list-text").textContent,l=e.querySelector(".home__list-date").textContent,s=e.querySelector(".home__list-link").href,a=h(),c={section:t,img:n,alt:r,title:o,text:i,date:l,link:s,isRead:!0,dateOfRead:a};return console.log(c),c}(e.target.parentNode.parentNode);try{const e=JSON.parse(localStorage.getItem(f.KEY_LOCAL_STORAGE));if(null===e)return void localStorage.setItem(f.KEY_LOCAL_STORAGE,JSON.stringify([t]));if(null!==e){for(const n of e)if(n.link===t.link)return void(n.dateOfRead=h());e.push(t),localStorage.setItem(f.KEY_LOCAL_STORAGE,JSON.stringify(e))}}catch(e){console.log(g),g.innerHTML=_()}})),function(){try{const e=JSON.parse(localStorage.getItem(f.KEY_LOCAL_STORAGE));!function(e){function t(e,t){return m(t.filter((t=>t.dateOfRead===e)))}const n=e.flatMap((e=>e.dateOfRead)).filter(((e,t,n)=>n.indexOf(e)===t)).map((n=>`<li class="readPage-list__item"><h2 class="readPage-list__title">${n.replaceAll(".","/")}</h2><svg class="readPage-list__svg" aria-label="open news" width="20px" height="20px">\n        <use href="/icons.adfc4680.svg#dilka-bottom"></use>\n    </svg><ul class="readPage-list__list  home__list">${t(n,e)}</ul></li>`)).join("");p.insertAdjacentHTML("beforeend",n)}(e.reduce(((e,t)=>(t.isRead&&e.push(t),e)),[]))}catch(e){console.log(g),g.innerHTML=_()}}(),p.addEventListener("click",(function(e){if("H2"!==e.target.nodeName)return;e.target.nextSibling.nextSibling.classList.toggle("visually-hidden")}));
//# sourceMappingURL=read.0a146e6b.js.map
