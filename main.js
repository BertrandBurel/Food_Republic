var getBtn = document.getElementById("btnBurger");
var menuBurger = document.getElementById("menuBurger");
    menuBurger.style.display = "none";
var barMenu = document.getElementById("barreMenu");

function displayBurger (){
    if(menuBurger.style.display === "none"){
        menuBurger.style.display = "block"; 
        document.body.style.paddingLeft= "220px";
    }else if (menuBurger.style.display === "block"){
        menuBurger.style.display = "none";
        document.body.style.paddingLeft ="0";
    }
};

getBtn.addEventListener("click",displayBurger);

