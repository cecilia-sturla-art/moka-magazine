window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});
const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {

    hiddenElements.forEach(el => {

        const position = el.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            el.classList.add("show");

        }

    });

});
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    const sobre = document.querySelector("#sobre");
    const edicion = document.querySelector("#edicion");
    const contacto = document.querySelector("#contacto");

    if(scrollPosition >= contacto.offsetTop - 100){

        nav.style.backgroundColor = "#1A1A1A";

    }else if(scrollPosition >= edicion.offsetTop - 100){

        nav.style.backgroundColor = "#591E29";

    }else if(scrollPosition >= sobre.offsetTop - 100){

        nav.style.backgroundColor = "#F2C4D0";

    }else{

        nav.style.backgroundColor = "rgba(26,26,26,0.5)";
    }

});
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        nav.classList.add("nav-scroll");
    }
    else{
        nav.classList.remove("nav-scroll");
    }

});


