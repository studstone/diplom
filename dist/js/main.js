(()=>{"use strict";(()=>{const e=document.getElementById("header").querySelector('a[href="#callback"]'),l=document.querySelector(".header-modal"),t=l.querySelector(".header-modal__close"),c=document.querySelector(".overlay");e.addEventListener("click",(()=>{c.style.cssText="\n        display: block;\n        ",l.classList.remove("header-modal")})),t.addEventListener("click",(()=>{c.style.cssText="\n        display: '';\n        ",l.classList.add("header-modal")}))})()})();