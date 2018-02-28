var getBtn = document.getElementById("btnBurger");
var menuBurger = document.getElementById("menuBurger");
var barMenu = document.getElementById("barreMenu");
menuBurger.style.display = "none";

function displayBurger (){
    if(menuBurger.style.display === "none"){
        menuBurger.style.display = "block";
        barMenu.style.width = "60vw";
        barMenu.style.marginLeft ="40vw";
    }else if (menuBurger.style.display === "block"){
        menuBurger.style.display = "none";
        barMenu.style.width = "100vw";
        barMenu.style.margin = "0px";
    }
};

getBtn.addEventListener("click",displayBurger);