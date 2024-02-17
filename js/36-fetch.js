'use strict';

// alert("hola");

// Fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector("#usuarios");

var div_lindsay = document.querySelector("#lindsay");

var div_profesor = document.querySelector("#profesor");


getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);

        return getInfo();
    })
    .then(data => {
        div_profesor.innerHTML = data;

        return getLindsay();
    })
    .then(data => data.json())
    .then(user => {
        mostrarLindsay(user.data);
    })
    .catch(error => {
        console.log(error);
    });





function getUsuarios() {
    return fetch('https://reqres.in/api/users?page=2');
}


function getLindsay() {
    return fetch('https://reqres.in/api/users/8');
}

function getInfo() {
    var profesor = {
        nombre: 'Victor',
        apellidos: 'Robles',
        url: 'https://victorroblesweb.es'

    };

    return new Promise((resolve, reject) => {
        var profesor_string = JSON.stringify(profesor);

        setTimeout(function () {
            profesor_string = JSON.stringify(profesor);

            if (typeof profesor_string != 'string' || profesor_string == '') return reject('error');

            return resolve(profesor_string);

        }, 30);


    })

}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + "." + user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';
    });
}

function mostrarLindsay(user) {
    console.log(user);
    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');

    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';

    div_lindsay.appendChild(nombre);
    div_lindsay.appendChild(avatar);

    document.querySelector("#lindsay .loading").style.display = 'none';
}

