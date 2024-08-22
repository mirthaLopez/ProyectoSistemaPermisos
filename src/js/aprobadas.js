
///////////////////Funciones Importadas///////////////////////////
import {
    GetRequests
} from "../services/getRequests";
///////////////////Declaracion de variables////////////////////////
const tablaSolicitudes=document.getElementById("tablaSolicitudes")
//////////////////////////////////////////////////////////////////
mostrarHistorial();
async function mostrarHistorial() {
    let url = "http://localhost:3007/aprovedRequest";
    let solicitudes = await GetRequests(url);
    for (let index = 0; index < solicitudes.length; index++) {
        let solicitud = document.createElement("tr");
        solicitud.className = "solicitud"
        tablaSolicitudes.appendChild(solicitud);

        let nombre = document.createElement("td");
        solicitud.appendChild(nombre);
        nombre.innerHTML = solicitudes[index].nombre;

        let sede = document.createElement("td");
        solicitud.appendChild(sede);
        sede.innerHTML = solicitudes[index].sede;

        let fechaSalida = document.createElement("td");
        solicitud.appendChild(fechaSalida);
        fechaSalida.innerHTML = solicitudes[index].fechaSalida;

        let fechaIngreso = document.createElement("td");
        solicitud.appendChild(fechaIngreso);
        fechaIngreso.innerHTML = solicitudes[index].fechaIngreso;
        console.log(solicitudes[index].codigoPc);
        
        let codigoPc = document.createElement("td");
        solicitud.appendChild(codigoPc);
        codigoPc.innerHTML = solicitudes[index].codigoPc;

    }
}