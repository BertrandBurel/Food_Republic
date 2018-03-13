var getBtn = document.getElementById("btnBurger");
var menuBurger = document.getElementById("menuBurger");
menuBurger.style.display = "none";
var blockCloseBurger = document.getElementById("blockCloseBurger");

var barMenu = document.getElementById("barreMenu");

function displayBurger() {
    if (menuBurger.style.display === "none") {
        menuBurger.style.display = "block";
        blockCloseBurger.style.display = "block";
        document.body.style.paddingLeft = "220px";
    } else if (menuBurger.style.display === "block") {
        menuBurger.style.display = "none";
        blockCloseBurger.style.display = "none";
        document.body.style.paddingLeft = "0";
    }
};

getBtn.addEventListener("click", displayBurger);

blockCloseBurger.addEventListener("click", function () {
    if (menuBurger.style.display === "block") {
        blockCloseBurger.style.display = "none";
        displayBurger();
    }
})
// fin de fonction burger

// fonction display block social

var shares = document.getElementsByClassName("share");

for (var i = 0; i <= shares.length - 1; i++) {
    shares[i].addEventListener("click", displaySocial);
}

var socialNav = document.getElementById("socialNav");
var blockCloseNav = document.getElementById("blockCloseNav");

function displaySocial() {

    if (socialNav.style.display === "none") {
        socialNav.style.display = "flex";
        blockCloseNav.style.display = "block";
    } else {
        socialNav.style.display = "none";
        blockCloseNav.style.display = "none";
    }

}

// fin de fontion display block social

blockCloseNav.addEventListener("click", function () {
    if (socialNav.style.display === "flex") {
        socialNav.style.display = "none";
        blockCloseNav.style.display = "none";
    }
})

//function navbar scroll

var latest = document.getElementById('repairY');
var navbar = document.getElementById('menuScroll');
navbar.style.display = "none";

window.onscroll = function () {

    if (window.scrollY >= latest.offsetTop) {

        if (window.innerWidth > 810) {
            navbar.style.display = "flex";
        } else if (window.innerWidth < 810) {
            barMenu.style.marginTop = "0";
        } else {
            navbar.style.display = "none";
        }
    } else {
        navbar.style.display = "none";
        barMenu.style.marginTop = "20px";
    }
};

// fin de fonction navbar scroll

//search
var eltLoupe = document.getElementsByClassName("loupeSearch")[0];
var eltMail = document.getElementsByClassName("mailSearch")[0];
var liLoupe = document.getElementById("liSearchBar");
liLoupe.style.display = "none";
var eltSearch = document.getElementsByClassName("search")[0];

eltLoupe.addEventListener("click", function (){
    eltMail.style.display = "none";
    eltLoupe.style.display = "none";
    liLoupe.style.display = "flex";
    eltSearch.style.width = "200px";
})

var closeSearch = document.getElementById("closeSearch");

closeSearch.addEventListener("click", function (){
    eltSearch.style.width = "150px";
    liLoupe.style.display = "none";
    eltMail.style.display = "";
    eltLoupe.style.display = "";
})
//fin de search