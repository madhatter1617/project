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
  document.querySelector('#drink-list li').remove()
Object.values(marg.drinks).forEach(card)
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
    let newInst = document.createElement('h4')
    newInst.textContent = info.strInstructions
    newLi.append(newInst)
    inst.append(newLi)
  })
  

  li.append(title,image,inst)
  document.querySelector('#drink-list').appendChild(li)
  
}








