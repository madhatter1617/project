document.addEventListener("DOMContentLoaded", () => {
    console.log("test biss");
    margarita()
    mojito()
    tea()
    ginGin()
    vodka()
    triSec()    
  });
function margarita() { //drinks involved with margarita
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then(response => response.json())
  .then(marg => console.log(marg));
}  


function mojito() { //drinks involved with mojito
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
      .then(response => response.json())
      .then(marg => console.log(marg));
    } 

function tea() { //drinks involved with tea
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=tea')
    .then(response => response.json())
    .then(marg => console.log(marg));
        } 

function ginGin() { //drinks involved with the Ingredient  gin
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
      .then(response => response.json())
      .then(gin => console.log(gin));
    } 

function vodka() { //drinks involved with the Ingredient  vodka
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka')
    .then(response => response.json())
    .then(gin => console.log(gin));
    } 

function triSec() { //drinks involved with the Ingredient  triple sec
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Triple%20sec')
    .then(response => response.json())
    .then(gin => console.log(gin));
        } 
    