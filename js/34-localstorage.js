'use strict'

//Local Storage

//Comprobar disponibilidad de local storage
if(typeof(Storage)!== 'undefined'){
    console.log("Localstorage Disponible");
}else{
    console.log("Localstorage Disponible");
}

//Guardar DAtos 
localStorage.setItem("Titulo","Curso de Symfony Bla bla");

// REcuperar elemento

// console.log(localStorage.getItem("Titulo"));
document.querySelector("#peliculas").innerHTML = localStorage.getItem("Titulo");

//Guardar objetos

var usuario = {
    nombre:"Juan Orellana",
    email: "juan@aaa.cl",
    web: "juan.com"

};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar Objeto
var userjs = JSON.parse(localStorage.getItem("usuario")); //Hay que parsearlo para utilizarlo

console.log(userjs);
document.querySelector("#peliculas").append(userjs.web);

localStorage.removeItem(usuario); //Eliminando el objeto usuario del Localstorage
localStorage.clear; //Limpiando el localstorage


