'use strict'

window.addEventListener('load', () => {

// Eventos del Ratón


function cambiarColor() {
    var bg = boton.style.background;

    if (bg == "green") {
        console.log("entro al if");

        boton.style.background = "red";
        boton.style.color = "white";


    } else {
        console.log("entro al else");

        boton.style.background = "green";
        boton.style.color = "yellow";

    
    }
    boton.style.padding = "10px";
    boton.style.border = "none";



    return true;
}

var boton = document.querySelector("#boton");


// Evento Click
boton.addEventListener('dblclick',function() {
    cambiarColor();
    this.style.border = "10px solid black";
});

// Mouse Over
boton.addEventListener('mouseover', function(){
    boton.style.background = "pink";
});

// Mouse Out
boton.addEventListener('mouseout', function(){
    boton.style.background = "black";
    boton.style.color = "white";

});


//Focus
var input= document.querySelector("#campo_nombre");

input.addEventListener('focus',function(){
    console.log("Estás dentro del Input");
});


//Blur

input.addEventListener('blur',function(){
    console.log("Estás fuera del Input");
});

//Keydown

input.addEventListener('keydown',function(){
    console.log("Pulsando esta tecla ",String.fromCharCode(event.keyCode));

});

//Keypress

input.addEventListener('keypress',function(){
    console.log("Tecla presionada ",String.fromCharCode(event.keyCode));
    
});

//Keyup

input.addEventListener('keyup',function(){
    console.log("Tecla soltada ",String.fromCharCode(event.keyCode));
    
});



});

