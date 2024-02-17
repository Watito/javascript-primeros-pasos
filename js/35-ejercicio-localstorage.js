'use strict'

var formulario = document.querySelector("#formpeliculas");
formulario.addEventListener('submit', function () {

    var titulo = document.querySelector('#addpelicula').value;

    if (titulo.length <= 0) {
        alert("está vacío el campo titulo");
    } else {
        localStorage.setItem(titulo, titulo);
        console.log(localStorage.getItem(titulo));
    }
});

var formulario = document.querySelector("#formpeliculasb");
formulario.addEventListener('submit', function () {

    var titulo = document.querySelector('#borrarPelicula').value;

    if (titulo.length <= 0) {
        alert("está vacío el campo titulo");
    } else {
        
        localStorage.removeItem(titulo);
        console.log("entró a borrar");
    }
});

var ul = document.querySelector('#peliculas-list');
for (var i in localStorage) {
    console.log(localStorage[i]);
    if (typeof localStorage[i] == 'string') {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}



