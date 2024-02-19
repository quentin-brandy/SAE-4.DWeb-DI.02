let btnMenu = document.querySelector("#header__nav-toggle");

function handlerMenu() {
    document.querySelector(".header__nav").classList.toggle("animate");
}

btnMenu.addEventListener("click", handlerMenu);