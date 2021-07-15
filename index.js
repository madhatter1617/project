document.addEventListener("DOMContentLoaded", () => {
    // console.log("test biss");
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
  let inst = document.createElement('ul')
 

  
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
    console.log(info)
    // for (noot in info) {
    //   console.log(`${noot} is pointing at ${info[noot]}`)
    // }
    // Object.keys(info).forEach(noot => {
    //   console.log(`${noot} is pointing at ${info[noot]}`)
    // })

    let newLi = document.createElement('li')
      
    let mass1 = document.createElement('h5')
    let mass2 = document.createElement('h5')
    let mass3 = document.createElement('h5')
    let mass4 = document.createElement('h5')
    let mass5 = document.createElement('h5')
    let mass6 = document.createElement('h5')
    let mass7 = document.createElement('h5')
    let newInst = document.createElement('h4')
    
    let measure1 = info.strMeasure1
    let measure2 = info.strMeasure2
    let measure3 = info.strMeasure3
    let measure4 = info.strMeasure4
    let measure5 = info.strMeasure5
    let measure6 = info.strMeasure6
    let measure7 = info.strMeasure7

    let ingreed1 = info.strIngredient1
    let ingreed2 = info.strIngredient2
    let ingreed3 = info.strIngredient3
    let ingreed4 = info.strIngredient4
    let ingreed5 = info.strIngredient5
    let ingreed6 = info.strIngredient6
    let ingreed7 = info.strIngredient7
    
    mass1=" * " +measure1 +" of " + ingreed1 
    mass2="  * " +measure2 +" of " + ingreed2
    mass3="  * " +measure3 +" of " + ingreed3 
    mass4="  * " +measure4 +" of " + ingreed4
    mass5="  * " +measure5 +" of " + ingreed5 
    mass6="  * " +measure6 +" of " + ingreed6
    mass7="  * " +measure7 +" of " + ingreed7 

    newInst.textContent = info.strInstructions
  
    // if(info.strMeasure4 === null){
    //   console.log('done')
    //   let four = info.strMeasure4 
    //   four.remove()
    // }
    
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







