let img = document.querySelector("img");
let hButton = document.querySelector("#hposter");
let vButton = document.querySelector("#vposter");

var pSelect = document.querySelector(".price-option"); 
var selectQuantity = document.querySelector("select");
var price = 0;
  
hButton.addEventListener("click",() => {
  img.src = 'v-standees.jpg';
});

vButton.addEventListener("click",() => {
  img.src = 'designer.jpg';
});
