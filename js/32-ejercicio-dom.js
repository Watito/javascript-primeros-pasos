'use strict'

window.addEventListener('load', function () {

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function () {
        console.log("evento sumbit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        if(nombre.trim()== null || nombre.trim().length==0){
            document.querySelector("#error_nombre").innerHTML = "El nombre no es válido";
            alert("el nombre no es válido");
            return false;
        
        }else{
            document.querySelector("#error_nombre").style.display = "none";
        }

        if(apellidos.trim()== null || apellidos.trim().length==0){
            alert("los  apellidos no es válido")
            return false;
        
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es válida")
            return false;
        
        }

        box_dashed.style.display = "block";

        var datos_usuario = [nombre, apellidos, edad];

        // var indice;
        // for(indice in datos_usuario){
        //     var parrafo = document.createElement("p");
        //     parrafo.append(datos_usuario[indice]);
        //     box_dashed.append(parrafo);
        // }


        var p_nombre = document.querySelector("#p_nombre");
        var p_apellidos = document.querySelector("#p_apellidos");
        var p_edad = document.querySelector("#p_edad");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;
    });

});