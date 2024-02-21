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
    imgContainer.src = ev.target.currentSrc;

    let imgHeight = imgContainer.clientHeight;
    let windowHeight = window.innerHeight;
    let topOffset = Math.max((windowHeight - imgHeight) / 2, 0); 
    divImg.style.top = topOffset + "px";

    let imgWidth = imgContainer.clientWidth;
    let windowWidth = window.innerWidth;
    let leftOffset = Math.max((windowWidth - imgWidth) / 2, 0); 
    divImg.style.left = leftOffset + "px";
}

imgs.forEach(img => {
    img.addEventListener("click", handlerImg);
});

let btnCloseImg = document.querySelector(".toClose")

function handlerCloseImg() {
    divImg.style.display = "none";

}

btnCloseImg.addEventListener("click", handlerCloseImg);