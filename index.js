document.addEventListener("DOMContentLoaded", () => {
    console.log("test biss");
    margarita()     
  });

function margarita() { //drinks involved with margarita
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then(response => response.json())
  .then(marg => renderCard(marg))  
  }

function renderCard(marg){
  //console.log(marg)   
  
Object.values(marg.drinks).forEach(card)
    carry ()
}

function card(info){  

  let li  = document.createElement('li')
  let title = document.createElement('h2')
  let image = document.createElement('img')
  //let likeBtn = document.createElement('button')
  let inst = document.createElement('h4')
 

  
  //let likeText = document.createElement('h6')
  li.className= 'card'
  title.textContent = info.strDrink
  image.src = info.strDrinkThumb
  image.style.width ="420px"
  image.style.height = "350px"
  inst.textContent =" "
  

  // likeText = 6
  // likeBtn.innerText = "Do you like me?"
  // likeBtn.addEventListener('click', () =>{
  //   likeText++;    
  //   console.log(likeText)
  // })
  
  title.addEventListener('click', () => { 
    console.log(info.strInstructions)
    let newLi = document.createElement('li')
      
    let mass1 = document.createElement('h6')
    let mass2 = document.createElement('h6')
    let mass3 = document.createElement('h6')
    let mass4 = document.createElement('h6')
    let mass5 = document.createElement('h6')
    let mass6 = document.createElement('h6')
    let mass7 = document.createElement('h6')
    
    let newInst = document.createElement('h4')

    mass1.textContent = `${info.strMeasure1} ${info.strIngredient1}`
    mass2.textContent = `${info.strMeasure2} ${info.strIngredient2}`
    mass3.textContent = `${info.strMeasure3} ${info.strIngredient3}`
    mass4.textContent = `${info.strMeasure4} ${info.strIngredient4}`
    mass5.textContent = `${info.strMeasure5} ${info.strIngredient5}`
    mass6.textContent = `${info.strMeasure6} ${info.strIngredient6}`
    mass7.textContent = `${info.strMeasure7} ${info.strIngredient7}`
    newInst.textContent = info.strInstructions
  
    newLi.append(mass1,mass2,mass3,mass4,mass5,mass6,mass7,newInst)
    inst.append(newLi)
  })
  
  li.append(title,image,inst)
  document.querySelector('#drink-list').appendChild(li)
  
}  
function carry (){
let gits = document.querySelector('#spit')
  gits.textContent = "Get into the Spirit"
  gits.style.color = "black"
  
  gits.addEventListener('mouseenter', (e) => {
//console.log('test shit')
gits.style.color = "purple";
gits.textContent="Its Five O'clock Somewhere!"
  })
  gits.addEventListener('mouseleave', (e) => {
    
    gits.style.color = "black"
    gits.textContent="Get into the Spirit"
      })
}







