document.addEventListener("DOMContentLoaded", () => {
    console.log("test biss");
    margarita()
    //vodka()
      
  });
function margarita() { //drinks involved with margarita
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then(response => response.json())
  .then(data => margBtn(data));

}  

function margBtn (data){
    console.log(data)
    let marg = document.querySelector('#marg')
    //marg.textContent = data[1]
    console.log(data)
}



// function vodka() { //drinks involved with the Ingredient  vodka
//     fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka')
//     .then(response => response.json())
//     .then(vodka => {
//         //debugger;
//     });
//     } 
