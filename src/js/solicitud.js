/////////////////////Funciones importadas////////////////////////////////
import {
    PostRequest
} from "../services/postRequest";
import {
    GetRequests
} from "../services/getRequests";
/////////////////////Declaracion de variables////////////////////////////
const checkbox = document.getElementById("check");
const textCheck = document.getElementById("textCheck");
const btnEnviar = document.getElementById("btnEnviar")
const selector = document.getElementById("selector");
const fechaSalida = document.getElementById("fechaSalida");
const fechaIngreso = document.getElementById("fechaIngreso");
const codigoPc = document.getElementById("codigoPc");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const textAdvertencia = document.getElementById("textAdvertencia");
const tableBody = document.querySelector("#tablaSolicitudes tbody");
let correoUsuario = "javier.com";
//////////////////////////////////////////////////////////////////////////
const pendingRequest = document.getElementById("pendingRequest");
const aprovedRequest = document.getElementById("aprovedRequest");
const declineRequest = document.getElementById("declineRequest");
//////////////////////Funcion Carga la pagina ///////////////////////////
function cargar() {
    location.reload()
}
/////////////////////Evento enviar solicitud////////////////////////////
btnEnviar.addEventListener("click", function () {
    if (validarForm() === true) {
        const solicitud = {
            nombre: nombre.value,
            correo: correo.value,
            sede: selector.value,
            fechaSalida: fechaSalida.value,
            fechaIngreso: fechaIngreso.value,
            codigoPc: codigoPc.value,
            estado: "Pendiente"
        }
        let url = 'http://localhost:3007/pendingRequest';
        PostRequest(solicitud, url);
        //let pendingUrl = "http://localhost:3007/pendingRequest";
        //showRequests(pendingUrl);
        location.reload();
    } else {
        textAdvertencia.innerHTML = "Completa todas las casillas del formulario"
    }
})


////////////////////// Validar que el formulario este lleno///////////////////////
function validarForm() {
    let checkStatus = validarCheckbox();
    let validadorNombre = nombre.value.trim();
    let validadorCodigo = codigoPc.value.trim();
    let validadorSalida = fechaSalida.value.trim();
    let validadorIngreso = fechaIngreso.value.trim();
    if (checkStatus === true && selector.value !== "" && validadorCodigo.length !== 0 && validadorNombre.length !== 0 &&
        validadorSalida.length !== 0 && validadorIngreso.length !== 0) {
        textAdvertencia.innerHTML = "Tu solicitud ha sido enviada con exito"
        return true
    } else {
        textAdvertencia.innerHTML = "Asegurate de llenar todos los datos"
        return false
    }
}
////////////////////// Validar CheckBox Condiciones/////////////////
textCheck.innerHTML = 'Da click, para aceptar las condiciones';
checkbox.addEventListener("change", validarCheckbox, false);

function validarCheckbox() {
    let validCheck = false;
    if (checkbox.checked) {
        validCheck = true;
        textCheck.innerHTML = 'Haz aceptado las condiciones';
    } else {
        validCheck = false;
        textCheck.innerHTML = 'Da click, para aceptar las condiciones';
    }
    return validCheck
}

////////////////// Mostrar historial solicitudes del usuario//////////////////
let pendingUrl = "http://localhost:3007/pendingRequest";
showRequests(pendingUrl);
let historyUrl = "http://localhost:3007/allRequest";
showRequests(historyUrl);
console.log("aqui");
async function showRequests(url) {
    let listaSolicitudes = await GetRequests(url);
    let listaFiltrada=listaSolicitudes.filter( solicitud => solicitud.correo === correoUsuario)
    let solicitudesInvertidas = listaFiltrada.reverse();
    solicitudesInvertidas.map((solicitud) => {
        const fila = tableBody.insertRow();
        const estado = fila.insertCell(0);
        const nombre = fila.insertCell(1);
        const fechaSalida = fila.insertCell(2);
        const fechaIngreso= fila.insertCell(3);
        const codigoPc = fila.insertCell(4);
       
        estado.textContent= solicitud.estado;
        nombre.textContent= solicitud.nombre;
        fechaSalida.textContent= solicitud.fechaSalida;
        fechaIngreso.textContent= solicitud.fechaIngreso;
        codigoPc.textContent= solicitud.codigoPc;
    })
    /*for (let index = 0; index < listaSolicitudes.length; index++) {
        if (listaSolicitudes[index].correo === correoUsuario) {
            let solicitud = document.createElement("div");
            solicitud.className = "solicitud"
            if (listaSolicitudes[index].estado === "Pendiente") {
                pendingRequest.appendChild(solicitud);

            } else if (listaSolicitudes[index].estado === "Aceptada") {
                aprovedRequest.appendChild(solicitud);
            } else {
                declineRequest.appendChild(solicitud);
            }

            let estado = document.createElement("p");
            solicitud.appendChild(estado);
            estado.innerHTML = listaSolicitudes[index].estado;

            let nombre = document.createElement("p");
            solicitud.appendChild(nombre);
            nombre.innerHTML = listaSolicitudes[index].nombre;

            let fechaSalida = document.createElement("p");
            solicitud.appendChild(fechaSalida);
            fechaSalida.innerHTML = listaSolicitudes[index].fechaSalida;

            let fechaIngreso = document.createElement("p");
            solicitud.appendChild(fechaIngreso);
            fechaIngreso.innerHTML = listaSolicitudes[index].fechaIngreso;

            let codigoPc = document.createElement("p");
            solicitud.appendChild(codigoPc);
            codigoPc.innerHTML = listaSolicitudes[index].codigoPc;
        }
    }*/
}