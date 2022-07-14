// navbar
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}
cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// scrollspy
// let home = document.querySelector("#home");
// let about = document.querySelector("#about");
// let gallery = document.querySelector("#gallery");
// let contact = document.querySelector("#contact");

// window.addEventListener("scroll",()=>{
//     var windo = window.pageYOffset;
//     if(about.offsetTop <= windo && gallery.offsetTop > windo) {
//         console.log("About");
//     }
//     else if(about.offsetTop <= windo && gallery.offsetTop > windo) {
//         console.log("About");
//     }
//     else if(about.offsetTop <= windo && gallery.offsetTop > windo) {
//         console.log("About");
//     }
//     else if(about.offsetTop <= windo && gallery.offsetTop > windo) {
//         console.log("About");
//     }
// });