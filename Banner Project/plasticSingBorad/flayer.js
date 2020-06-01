let img = document.querySelector("img");
let hButton = document.querySelector("#hflayer");
let vButton = document.querySelector("#vflayer");

var pSelect = document.querySelector(".price-option"); 
var selectQuantity = document.querySelector("select");
var price = 0;
  
hButton.addEventListener("click",() => {
  img.src = 'h-flayer.jpg';
});

vButton.addEventListener("click",() => {
  img.src = 'v-flayer.jpg';
});


