let leftNavbar = document.getElementById("left-navbar");
let openButton = document.getElementById("navbar-button");
let closeButton = document.getElementById("left-navbar-button");

addEventListeners();

function addEventListeners(){
    openButton.addEventListener("click",openNavbar);
    closeButton.addEventListener("click",closeNavbar);
}

function openNavbar(e){
    leftNavbar.style.display="block";

    e.preventDefault();
}

function closeNavbar(e){
    leftNavbar.style.display="none";

    e.preventDefault();
}