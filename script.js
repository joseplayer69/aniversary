/* ========================================
   CONTRASEÑA
======================================== */

// CAMBIA AQUÍ LA CONTRASEÑA
const CONTRASENA = "262152920";


// Elementos de la pantalla de contraseña
const bloqueo = document.getElementById("bloqueo");
const inputPassword = document.getElementById("password");
const botonDesbloquear = document.getElementById("desbloquear");
const errorPassword = document.getElementById("errorPassword");


/* ========================================
   ELEMENTOS
======================================== */

const musica = document.getElementById("musica");

// Volumen de la música
musica.volume = 0.30;


// Botones volver
const volverHistoria = document.getElementById("volverHistoria");
const volverCarta = document.getElementById("volverCarta");
const volverTiempo = document.getElementById("volverTiempo");
const volverFotos = document.getElementById("volverFotos");


// Secciones
const inicio = document.getElementById("inicio");
const historia = document.getElementById("historia");
const carta = document.getElementById("carta");
const tiempo = document.getElementById("tiempo");
const fotos = document.getElementById("fotos");
const final = document.getElementById("final");


// Botones avanzar
const botonEntrar = document.getElementById("entrar");
const botonCarta = document.getElementById("irCarta");
const botonTiempo = document.getElementById("irTiempo");
const botonFotos = document.getElementById("irFotos");
const botonFinal = document.getElementById("irFinal");


/* ========================================
   FECHA DE INICIO
======================================== */

// CAMBIA ESTA FECHA POR LA FECHA REAL
// EN QUE EMPEZARON SU RELACIÓN.

const fechaInicio = new Date("2025-08-20T19:30:00");


/* ========================================
   TEXTO DE LA CARTA
======================================== */

const mensaje = `
Quería aprovechar este día para recordarte
lo importante que eres para mí.

Hemos vivido momentos hermosos,
momentos difíciles, risas, conversaciones
y recuerdos que voy a guardar para toda la vida.

Gracias por cada momento compartido,
por cada sonrisa y por cada instante
en que simplemente pudimos estar juntos.

Espero que así como en este pequeño universito que cree,
puedas siempre recordar en todos los que vengan
lo especial, importante y única que has sido, eres, y serás
para
MI CORAZÓN .

Te amo muchísimo, del infinito al más allá. ❤️
`;


/* ========================================
   DESBLOQUEAR PÁGINA
======================================== */

function desbloquearPagina() {

    const contraseñaIngresada = inputPassword.value;


    // Comprobar contraseña
    if (contraseñaIngresada === CONTRASENA) {

        // Limpiar mensaje de error
        errorPassword.textContent = "";


        // Ocultar pantalla de contraseña
        bloqueo.classList.add("oculto");


        // Esperar la animación
        setTimeout(function () {

            bloqueo.style.display = "none";


            // Mostrar la pantalla de inicio
            inicio.style.display = "flex";


            setTimeout(function () {

                inicio.classList.add("visible");

            }, 100);

        }, 700);


        // Comenzar música
        musica.play().catch(function () {

            console.log("El navegador bloqueó el audio.");

        });


    } else {

        // Contraseña incorrecta
        errorPassword.textContent = "Contraseña incorrecta ❤️";


        // Limpiar campo
        inputPassword.value = "";


        // Volver a enfocar el campo
        inputPassword.focus();

    }

}


// Click en "Entrar"
botonDesbloquear.addEventListener("click", function () {

    desbloquearPagina();

});


// También permitir presionar ENTER
inputPassword.addEventListener("keydown", function (evento) {

    if (evento.key === "Enter") {

        desbloquearPagina();

    }

});


/* ========================================
   FUNCIÓN PARA CAMBIAR DE SECCIÓN
======================================== */

function cambiarSeccion(actual, siguiente) {

    actual.classList.remove("visible");

    actual.style.opacity = "0";


    setTimeout(function () {

        actual.style.display = "none";

        siguiente.style.display = "flex";


        setTimeout(function () {

            siguiente.classList.add("visible");

        }, 100);

    }, 700);

}


/* ========================================
   ENTRAR A LA HISTORIA
======================================== */

botonEntrar.addEventListener("click", function () {

    inicio.classList.add("oculto");


    setTimeout(function () {

        inicio.style.display = "none";

        historia.style.display = "flex";


        setTimeout(function () {

            historia.classList.add("visible");

        }, 100);

    }, 1500);

});


/* ========================================
   IR A LA CARTA
======================================== */

botonCarta.addEventListener("click", function () {

    cambiarSeccion(historia, carta);


    setTimeout(function () {

        escribirCarta();

    }, 1500);

});


/* ========================================
   EFECTO MÁQUINA DE ESCRIBIR
======================================== */

let temporizadorCarta = null;

let escribiendoCarta = false;


function escribirCarta() {

    const elemento = document.getElementById("textoCarta");


    // Detener cualquier escritura anterior
    if (temporizadorCarta !== null) {

        clearTimeout(temporizadorCarta);

        temporizadorCarta = null;

    }


    // Limpiar texto
    elemento.innerHTML = "";


    let posicion = 0;

    escribiendoCarta = true;


    function escribir() {

        if (posicion < mensaje.length) {

            const caracter = mensaje.charAt(posicion);


            if (caracter === "\n") {

                elemento.innerHTML += "<br><br>";

            } else {

                elemento.innerHTML += caracter;

            }


            posicion++;


            temporizadorCarta = setTimeout(escribir, 28);

        } else {

            escribiendoCarta = false;

            temporizadorCarta = null;

        }

    }


    escribir();

}


/* ========================================
   DETENER ESCRITURA
======================================== */

function detenerEscrituraCarta() {

    if (temporizadorCarta !== null) {

        clearTimeout(temporizadorCarta);

        temporizadorCarta = null;

    }


    escribiendoCarta = false;

}


/* ========================================
   IR AL CONTADOR
======================================== */

botonTiempo.addEventListener("click", function () {

    cambiarSeccion(carta, tiempo);

    actualizarContador();

});


/* ========================================
   CONTADOR
======================================== */

function actualizarContador() {

    const ahora = new Date();

    const diferencia = ahora - fechaInicio;


    const segundosTotales =
        Math.floor(diferencia / 1000);


    const dias =
        Math.floor(segundosTotales / 86400);


    const horas =
        Math.floor((segundosTotales % 86400) / 3600);


    const minutos =
        Math.floor((segundosTotales % 3600) / 60);


    const segundos =
        segundosTotales % 60;


    document.getElementById("dias").textContent = dias;

    document.getElementById("horas").textContent =
        horas.toString().padStart(2, "0");

    document.getElementById("minutos").textContent =
        minutos.toString().padStart(2, "0");

    document.getElementById("segundos").textContent =
        segundos.toString().padStart(2, "0");

}


setInterval(actualizarContador, 1000);


/* ========================================
   IR A FOTOS
======================================== */

botonFotos.addEventListener("click", function () {

    cambiarSeccion(tiempo, fotos);

});


/* ========================================
   IR AL FINAL
======================================== */

botonFinal.addEventListener("click", function () {

    cambiarSeccion(fotos, final);

});


/* ========================================
   BOTONES VOLVER
======================================== */

// CARTA → HISTORIA

volverHistoria.addEventListener("click", function () {

    detenerEscrituraCarta();

    cambiarSeccion(carta, historia);

});


// TIEMPO → CARTA

volverCarta.addEventListener("click", function () {

    cambiarSeccion(tiempo, carta);

});


// FOTOS → TIEMPO

volverTiempo.addEventListener("click", function () {

    cambiarSeccion(fotos, tiempo);

});


// FINAL → FOTOS

volverFotos.addEventListener("click", function () {

    cambiarSeccion(final, fotos);

});