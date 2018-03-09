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

/*
//function navbar scroll
window.onscroll= function(){
    var latest = document.getElementById('latestCtn');
    var navbar = document.getElementById(''); // à créer, et lui mettre display none par defaut.
   
    if(window.scrollY >= latest.offsetTop){
    //quand la section latest arrive en haut de l'ecran !.
      navbar.style.display = "block";
    }else{
      navbar.style.display= "none";
    }
  };
*/