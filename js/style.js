
const preloader=document.querySelector(".preloader")
window.addEventListener("load", ()=>{
    preloader.classList.add("closePreloader")
})
const close=document.querySelector("#close")
const menu=document.querySelector("#menu")
const nav=document.querySelector("ul")
const rgba=document.querySelector(".rgba")
menu.addEventListener("click", ()=>{
    nav.classList.add("opennav")
    rgba.classList.add("rgbafilter")
})
close.addEventListener("click", ()=>{
    nav.classList.remove("opennav")
    rgba.classList.remove("rgbafilter")
})
rgba.addEventListener("click", ()=>{
    nav.classList.remove("opennav")
    rgba.classList.remove("rgbafilter")
})