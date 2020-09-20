// declaration of variables:
var btnsPlus = document.getElementsByClassName("plusbutton");
console.log(btnsPlus)
var btnsMinus = document.getElementsByClassName("minusbutton");
console.log(btnsMinus)
var qnt = document.getElementsByClassName("quantite");
console.log('qnt', qnt)
var prices = document.getElementsByClassName("Price");


// add quantity:

for (let i=0;i<btnsPlus.length;i++) {
  btnsPlus[i].addEventListener("click", function() {
    let sum = document.getElementById("total");
    qnt[i].innerText++
  
    sum.innerText = Number(sum.innerText) + Number(prices[i].innerText)
  })
  btnsMinus[i].addEventListener("click", function() {
    if (qnt[i].innerText>0) { 
      let sum = document.getElementById("total");
      qnt[i].innerText--

      sum.innerText = Number(sum.innerText) - prices[i].innerText
    } else {
      alert("Please choose the quantity")
    }      
  })
}

// add the removebtn to card
let removecards = document.getElementsByClassName("card");

for(let i = 0; i<removecards.length;i++){
  let removeBtn = document.createElement('button'); 
  removeBtn.innerText= 'X';
// remove btn event
removeBtn.addEventListener('click',function(){
  removeBtn.parentElement.remove();
  })
  
  removecards[i].appendChild(removeBtn)
  console.log(removecards[i])
}

// change the hearts color:

//  let coloredHeart = document.getElementsByClassName("heart");
//  for (let i=0;i<coloredHeart.length;i++){
// coloredHeart[i].addEventListener('click', function(){
//   coloredHeart[i].style.color="red";

//   coloredHeart[i].addEventListener('click', function(){
//     coloredHeart[i].style.color="black";    
// }) 
//  })
//  }

// let coloredHeart = document.getElementsByClassName("fa fa-heart heart")
// coloredHeart.addEventListener('mouseover', function(){
//   coloredHeart.style.color='red';

// })
// coloredHeart.addEventListener('mouseout', function(){
//   coloredHeart.style.color='black';
// })



// add color to h3
// let h3Colored = document.getElementById("color");
// console.log(h3Colored);
// h3Colored.addEventListener('mouseenter', function() {
//   h3Colored.style.color='#98B2CE'; 
// })

// h3Colored.addEventListener('mouseleave', function() {
//   h3Colored.style.color='#114880';
// })


// add mouseover and mouseout to prices
for (let i=0; i<prices.length; i++)
prices[i].addEventListener('mouseover', function(){
  prices[i].style.fontSize='25px';
  prices[i].addEventListener('mouseout', function(){
    prices[i].style.fontSize='18px';
    console.log(prices);
})
})


    // add with color heat toggle
let colorHeart = document.getElementsByClassName('heart');
for (let i=0; i<colorHeart.length; i++) {

colorHeart[i].addEventListener('click', function() { 

  colorHeart[i].classList.toggle("red");
  
})
}






















