'use strict'

//BOM - Browser Object Model

function getBom() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.location.href);

}

function redirect(url) {

    window.location.href =  url;
}

function abrirVentana(url){
    // window.open(url,"","width=500,height=500");
    window.open(url);
}
getBom();