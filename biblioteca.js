/* =========================================
   BIBLIOTECA AUDIOVISUAL
   CONTROL DEL CARRUSEL
   ========================================= */


const carrusel = document.getElementById("carrusel");

const botonAnterior =
    document.getElementById("anterior");

const botonSiguiente =
    document.getElementById("siguiente");

const indicadores =
    document.getElementById("indicadores");


/* =========================================
   OBTENER TARJETAS
   ========================================= */

const tarjetas =
    document.querySelectorAll(".video-card");


let posicion = 0;


/* =========================================
   CREAR INDICADORES
   ========================================= */

tarjetas.forEach((_, index) => {

    const indicador =
        document.createElement("span");

    indicador.classList.add("indicador");

    indicador.addEventListener("click", () => {

        posicion = index;

        actualizarCarrusel();

    });

    indicadores.appendChild(indicador);

});


/* =========================================
   ACTUALIZAR CARRUSEL
   ========================================= */

function actualizarCarrusel() {

    const anchoTarjeta =
        tarjetas[0].offsetWidth;

    const espacio =
        22;


    carrusel.scrollTo({

        left:
            posicion *
            (anchoTarjeta + espacio),

        behavior: "smooth"

    });


    actualizarIndicadores();

    actualizarBotones();

}


/* =========================================
   INDICADORES
   ========================================= */

function actualizarIndicadores() {

    const puntos =
        document.querySelectorAll(".indicador");


    puntos.forEach((punto, index) => {

        punto.classList.toggle(
            "activo",
            index === posicion
        );

    });

}


/* =========================================
   BOTONES
   ========================================= */

function actualizarBotones() {

    botonAnterior.disabled =
        posicion === 0;


    botonSiguiente.disabled =
        posicion === tarjetas.length - 1;

}


/* =========================================
   BOTÓN ANTERIOR
   ========================================= */

botonAnterior.addEventListener("click", () => {

    if (posicion > 0) {

        posicion--;

        actualizarCarrusel();

    }

});


/* =========================================
   BOTÓN SIGUIENTE
   ========================================= */

botonSiguiente.addEventListener("click", () => {

    if (posicion < tarjetas.length - 1) {

        posicion++;

        actualizarCarrusel();

    }

});


/* =========================================
   INICIO
   ========================================= */

actualizarIndicadores();

actualizarBotones();