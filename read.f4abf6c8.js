!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequire12f5;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequire12f5=i),i.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"03q4W":"read.f4abf6c8.js","8J0T8":"error_screen_min.4023487f.png","32Ruo":"error_screen_x2.39288cc7.png","8MCNl":"error_mobile_min.58218a7d.png","8oDjV":"error_mobile_x2.abc25851.png","iRhwk":"error_tablet_min.c64e72d1.png","1hH1h":"error_tablet_x2.f001dae6.png"}'));var a;a=i("aNJCr").getBundleURL("03q4W")+i("iE7OH").resolve("8J0T8");var l;l=i("aNJCr").getBundleURL("03q4W")+i("iE7OH").resolve("32Ruo");var s;s=i("aNJCr").getBundleURL("03q4W")+i("iE7OH").resolve("8MCNl");var c;c=i("aNJCr").getBundleURL("03q4W")+i("iE7OH").resolve("8oDjV");var u;u=i("aNJCr").getBundleURL("03q4W")+i("iE7OH").resolve("iRhwk");var d;function f(){return'<section class="error">\n  <h2 class="error-text">We haven’t found news from this category</h2>\n  <picture class="error-image">\n    <source\n      srcset="\n        '.concat(t(a)," 1x,\n        ").concat(t(l),' 2x\n      "\n      media="(min-width: 1200px)"\n    />\n    <source\n      srcset="\n        ').concat(t(u)," 1x,\n        ").concat(t(d),' 2x\n      "\n      media="(min-width: 768px)"\n    />\n    <source\n      srcset="\n        ').concat(t(s)," 1x,\n        ").concat(t(c),' 2x\n      "\n      media="(max-width: 767px)"\n    />\n    <img\n      src=').concat(t(a),'\n      alt="Error page"\n      width="601"\n    />\n  </picture>\n</section>')}d=i("aNJCr").getBundleURL("03q4W")+i("iE7OH").resolve("1hH1h");var _={KEY_LOCAL_STORAGE:"news-state-local-storage"};function g(e){var t="";try{var n=JSON.parse(localStorage.getItem(_.KEY_LOCAL_STORAGE));if(null===n)return t;var r=!0,o=!1,i=void 0;try{for(var a,l=n[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var s=a.value;if(s.link===e&&s.isFavorite)return t="isFavorite"}}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return t}catch(e){console.log("Error parse date local storage")}}function m(e){var t="";try{var n=JSON.parse(localStorage.getItem(_.KEY_LOCAL_STORAGE));if(null===n)return t;var r=!0,o=!1,i=void 0;try{for(var a,l=n[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var s=a.value;if(s.link===e&&s.isRead)return t="isRead"}}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return t}catch(e){console.log("Error parse date local storage")}}function h(e){return'        <li class="home__list-item weather-container">\n          <aside class="weather"></aside>'+e.map((function(e){var t=e.img,n=e.title,r=e.text,o=e.date,i=e.link,a=e.section;return'\n    <li class="home__list-item '.concat(m(i),'">\n      <div class="home__list-top">\n          <p class="home__list-section">').concat(a,'</p>\n          <p class="home__list-is-read">Already read &#10004;</p>\n          <img width="353" height="395" class="home__list-img" src=').concat(t," alt=").concat(n,'>\n          <button type="button" id="like" class="add-button remove-button ').concat(g(i),'">Add to favorite</button>\n          <button type="button" id="dislike" class="remove-button invisible-button">Remove from favorite</button>\n      </div>\n      <div class="home__list-description">\n        <h2 class="home__list-title">').concat(n,'</h2>\n        <p class="home__list-text">').concat(r,'</p>\n      </div>\n      <div class="home__list-footer">\n        <p class="home__list-date">').concat(o,"</p>\n        <a href=").concat(i,' class="home__list-link">Read more</a>\n      </div>\n    </li>\n    ')})).join("")}var v=document.querySelector("main"),p=document.querySelector(".readPage-list");function S(){return new Date(Date.now()).toLocaleString().split(",")[0]}!function(){try{!function(e){function t(e,t){return h(t.filter((function(t){return t.dateOfRead===e})))}var n=e.flatMap((function(e){return e.dateOfRead})).filter((function(e,t,n){return n.indexOf(e)===t})).map((function(n){return'<li class="readPage-list__item">\n        <h2 class="readPage-list__title">'.concat(n.replaceAll(".","/"),'</h2>\n        <svg class="readPage-list__svg" aria-label="open news" width="15px" height="20px">\n        <use href="/icons.adfc4680.svg#dilka-bottom"></use>\n    </svg>\n    <ul class="read-page-list__list">').concat(t(n,e),"</ul>\n    </li>")})).join("");p.insertAdjacentHTML("beforeend",n)}(JSON.parse(localStorage.getItem(_.KEY_LOCAL_STORAGE)).reduce((function(e,t){return t.isRead&&e.push(t),e}),[]))}catch(e){console.log(e),v.innerHTML=f()}}(),p.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;var t=e.target.parentNode.parentNode,n=function(e){var t=e.querySelector(".home__list-section").textContent,n=e.querySelector(".home__list-img").src,r=e.querySelector(".home__list-img").alt,o=e.querySelector(".home__list-title").textContent,i=e.querySelector(".home__list-text").textContent,a=e.querySelector(".home__list-date").textContent,l=e.querySelector(".home__list-link").href,s=S();return{section:t,img:n,alt:r,title:o,text:i,date:a,link:l,isRead:!0,dateOfRead:s}}(t);try{var r=JSON.parse(localStorage.getItem(_.KEY_LOCAL_STORAGE));if(null===r)return void localStorage.setItem(_.KEY_LOCAL_STORAGE,JSON.stringify([n]));if(null!==r){r.every((function(e){return e.link!==n.link}))&&(r.push(n),localStorage.setItem(_.KEY_LOCAL_STORAGE,JSON.stringify(r)));var o=r.reduce((function(e,t){return t.link===n.link&&(t.dateOfRead=S(),t.isRead=!0),e.push(t),e}),[]);localStorage.setItem(_.KEY_LOCAL_STORAGE,JSON.stringify(o))}}catch(e){console.error(e),v.innerHTML=f()}t.classList.contains("isRead")||t.classList.add("isRead")})),p.addEventListener("click",(function(e){if("H2"!==e.target.nodeName)return;if("H2"!==e.target.nodeName)return;var t=e.target;t.nextElementSibling.classList.toggle("is-open"),t.nextElementSibling.nextElementSibling.classList.toggle("visually-hidden")}))}();
//# sourceMappingURL=read.f4abf6c8.js.map
