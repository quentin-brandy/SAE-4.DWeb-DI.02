let btnMenu = document.querySelector("#header__nav-toggle");

function handlerMenu() {
    document.querySelector(".header__nav").classList.toggle("animate");
}

btnMenu.addEventListener("click", handlerMenu);



// imgToclick

let divImg = document.querySelector("#imgLoaded");
let imgContainer = document.querySelector(".imgToLoad");
let imgs = document.querySelectorAll(".toClick");


function handlerImg(ev) {
    console.log(ev);
    divImg.style.display = "block";
    divImg.style.top = (window.innerHeight - ev.target.clientHeight) / 2 + "px";
    imgContainer.src = ev.target.currentSrc;
}

imgs.forEach(img => {
    img.addEventListener("click", handlerImg);
});

let btnCloseImg = document.querySelector(".toClose")

function handlerCloseImg() {
    divImg.style.display = "none";

}

btnCloseImg.addEventListener("click", handlerCloseImg);