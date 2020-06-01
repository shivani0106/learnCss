let img = document.querySelector("img");
let hButton = document.querySelector("#hbanner");
let vButton = document.querySelector("#vbanner");

var pSelect = document.querySelector(".price-option"); 
var selectQuantity = document.querySelector("select");
var price = 0;
  
hButton.addEventListener("click",() => {
  img.src = 'h-banner.jpg';
});

vButton.addEventListener("click",() => {
  img.src = 'demo.jpg';
});


