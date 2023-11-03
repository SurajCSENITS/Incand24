let stars= document.querySelector("#stars")
let moon= document.querySelector("#moon")
let mountains_behind= document.querySelector("#mountains_behind")
let text= document.querySelector("#text")
let btn= document.querySelector("#btn")
let mountains_front= document.querySelector("#mountains_front")
let header= document.querySelector("#header-box")

window.addEventListener("scroll", function(){
    let scrolledValue= window.scrollY;
    stars.style.left= scrolledValue*0.25 + "px"
    // JS se kuch bhi CSS ka value doge to string me hona padega
    moon.style.top= scrolledValue*1.05 + "px"
    mountains_behind.style.top= scrolledValue*0.2 + "px"
    text.style.marginRight= scrolledValue*4 + "px"
    text.style.marginTop= scrolledValue*1.2 + "px"
    btn.style.marginTop = scrolledValue*1.2 + "px"
    header.style.top = scrolledValue*0.5 + "px"

})
setInterval(function () {
    btn.classList.toggle("bounce-class")
}, 3000);

