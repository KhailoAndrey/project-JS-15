const e=document.querySelector("body"),t=document.querySelector(".theme-wrapper--light"),c=document.querySelector(".theme-wrapper--dark"),s=document.querySelectorAll(".checkbox");let o=localStorage.getItem("checked");function a(o){"true"===o?(e.classList.add("dark-theme"),t.classList.remove("switch-on"),c.classList.add("switch-on"),s.forEach((e=>e.classList.add("checkbox-on")))):(e.classList.remove("dark-theme"),t.classList.add("switch-on"),c.classList.remove("switch-on"),s.forEach((e=>e.classList.remove("checkbox-on"))))}a(o),e.addEventListener("click",(e=>{(e.target.classList.contains("checkbox")||e.target.classList.contains("checkbox__switcher"))&&(o="true"===o?"false":"true",a(o),localStorage.setItem("checked",o))})),(()=>{const e=document.querySelector("[data-menu-btn]"),t=document.querySelector("[data-menu]");function c(){e.classList.toggle("active"),t.classList.toggle("is-closed")}e.addEventListener("click",c),t.addEventListener("click",c)})();
//# sourceMappingURL=read.217f8c10.js.map
