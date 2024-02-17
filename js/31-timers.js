"use strict";

window.addEventListener("load", () => {
    //Timers

    function intervalo() {
        var tiempo = setInterval(() => {
            console.log("Set interval ejecutado");

            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "30px";
            } else {
                encabezado.style.fontSize = "50px";
            }
        }, 500);

        return tiempo;
    }

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function () {
        alert("Se Paró el intervalo");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener("click", function () {
        alert("Se inició el intervalo");
        intervalo();
        
    });
});
