const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");let l;console.log(t,e),t.addEventListener("click",(function(){l=setInterval((()=>{o.classList.add("body-class"),o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1500),t.setAttribute("disabled",!0),console.log(t)})),e.addEventListener("click",(function(){clearInterval(l),t.removeAttribute("disabled"),console.log(t)}));
//# sourceMappingURL=01-color-switcher.223397a3.js.map