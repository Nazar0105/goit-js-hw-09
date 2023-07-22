const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let n;function o(){const e=getRandomHexColor();document.body.style.backgroundColor=e}function c(){clearInterval(n),e.disabled=!1}e.addEventListener("click",(function(){c(),o(),n=setInterval(o,1e3),e.disabled=!0})),t.addEventListener("click",c);
//# sourceMappingURL=01-color-switcher.f011c0ec.js.map
