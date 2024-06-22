const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 0);
})
let name="mosh";
console.log(name);