'use strict'

// DOM - Document Object Model

// var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

function cambiaColor(color){
    caja.style.color = color;
}

caja.innerHTML = "wena chuchetuoe";
// // // caja.style.background = "red";
// // // caja.style.padding= "20px";
// // // caja.style.color= "blue";
caja.className = "hola";
console.log(caja);