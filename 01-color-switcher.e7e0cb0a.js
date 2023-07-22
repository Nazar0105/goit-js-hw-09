!function(){var e,t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");function o(){var e=getRandomHexColor();document.body.style.backgroundColor=e}function a(){clearInterval(e),t.disabled=!1}t.addEventListener("click",(function(){a(),o(),e=setInterval(o,1e3),t.disabled=!0})),n.addEventListener("click",a)}();
//# sourceMappingURL=01-color-switcher.e7e0cb0a.js.map
