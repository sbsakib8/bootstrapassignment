// scrollber navber 
let nav = document.querySelector('.navigation-wrap');
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll-on');
    }else{
        nav.classList.remove('scroll-on');
    }
}

// navber hide

let navber = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navber.forEach((e)=>{
e.addEventListener("click", ()=>{
    navcollapse.classList.remove("show");
})
})