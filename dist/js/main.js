(()=>{"use strict";const e=(e,t)=>{const n=document.querySelector(t),r=n.querySelector(".count_1 > span"),o=n.querySelector(".count_2 > span"),s=n.querySelector(".count_3 > span"),c=n.querySelector(".count_4 > span"),l=()=>{const t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/3600/24),hours:Math.floor(t/3600%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}},i=e=>Number(e)>=0&&Number(e)<10?`0${e}`:e;l().timeRemaining>0&&setInterval((()=>{(()=>{const e=l();e.timeRemaining>0&&(r.textContent=`${i(e.days)}`,o.textContent=`${i(e.hours)}`,s.textContent=`${i(e.minutes)}`,c.textContent=`${i(e.seconds)}`)})()}),1e3)};(()=>{const e=document.getElementById("header").querySelector('a[href="#callback"]'),t=document.querySelector(".header-modal"),n=t.querySelector(".header-modal__close"),r=document.querySelector(".overlay");e.addEventListener("click",(()=>{r.style.cssText="\n        display: block;\n        ",t.classList.remove("header-modal")})),n.addEventListener("click",(()=>{r.style.cssText="\n        display: '';\n        ",t.classList.add("header-modal")}))})(),(()=>{const e=document.querySelector(".benefits-wrap"),t=e.querySelectorAll(".benefits__item"),n=document.querySelector(".benefits-arrows"),r=n.querySelector(".benefits__arrow--left > img"),o=n.querySelector(".benefits__arrow--right > img"),s=document.documentElement.clientWidth;e.style.justifyContent=s<576?"center":"";const c=e=>{e.forEach(((e,t)=>{e.style.display=t>=(s>=576?3:1)?"none":""}))},l=t=>{let n=e.querySelectorAll(".benefits__item");const r="next"===t?0:n.length-1,o=n[r].cloneNode(!0);n[r].remove(),"next"===t?e.append(o):e.prepend(o),n=e.querySelectorAll(".benefits__item"),c(n)};n.addEventListener("click",(e=>{e.target.contains(r)?l("prev"):e.target.contains(o)&&l("next")})),c(t)})(),(()=>{const e=document.getElementById("services").querySelector(".row"),t=e.querySelectorAll(".col-md-12.col-lg-6"),n=document.querySelector(".services-arrows"),r=n.querySelector(".services__arrow--left > img"),o=n.querySelector(".services__arrow--right > img"),s=document.documentElement.clientWidth;e.style.cssText="\n    display: flex;\n    ";const c=e=>{e.forEach(((e,t)=>{e.style.display=t>=(s>=1200?2:1)?"none":""}))},l=t=>{let n=e.querySelectorAll(".col-md-12.col-lg-6");const r="next"===t?0:n.length-1,o=n[r].cloneNode(!0);n[r].remove(),"next"===t?e.append(o):e.prepend(o),n=e.querySelectorAll(".col-md-12.col-lg-6"),c(n)};n.addEventListener("click",(e=>{e.target.contains(r)?l("prev"):e.target.contains(o)&&l("next")})),c(t)})(),(()=>{const e=document.getElementById("services").querySelectorAll(".service-button"),t=document.querySelector(".overlay"),n=document.querySelector(".services-modal"),r=n.querySelector(".services-modal__close"),o=()=>{t.style.cssText="\n        display: block;\n        ",n.classList.remove("services-modal")};e.forEach((e=>e.addEventListener("click",o))),r.addEventListener("click",(()=>{t.style.cssText="\n        display: '';\n        ",n.classList.add("services-modal")}))})(),e("9 june 2022 13: 30: 00","#order_1"),e("9 june 2022 13: 30: 00","#order_2"),(()=>{const e=document.querySelector("body"),t=document.getElementById("documents").querySelectorAll(".col-sm-4"),n=document.createElement("div"),r=document.querySelector(".overlay");t.forEach((t=>{t.addEventListener("mouseenter",(()=>{t.children[0].children[1].style.opacity=1})),t.addEventListener("mouseleave",(()=>{t.children[0].children[1].style.opacity=0})),t.addEventListener("click",(t=>{t.preventDefault(),r.style.cssText="\n                display: block;\n            ",(()=>{e.append(n),n.innerHTML='<img src="images/documents/original/document4.jpg" class="img-responsive" alt="">\n                            <span>X</span>\n        ';const t=n.querySelector("span"),o=n.querySelector("img");n.style.cssText="\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        z-index: 9999;\n        width: 60%;\n        height: 84%;\n        ",t.style.cssText="\n        cursor: pointer;\n        position: fixed;\n        top: 20px;\n        right: 20px;\n        font-size: 25px;\n        color: black;\n        ",o.style.cssText="\n        width: 100%;\n        height: 100%;\n        ",t.addEventListener("click",(()=>{n.style.cssText="\n                display: none;\n            ",r.style.cssText="\n                display: '';\n            "}))})()}))}))})()})();