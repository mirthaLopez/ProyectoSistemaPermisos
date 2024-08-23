////////////////////////Funciones Importadas///////////////////////
import {
    GetRequests
} from "../services/getRequests";
//import {updateRequests} from "../services/updateRequests";

import {
    PostRequest
} from '../services/postRequest';

/*import { updateRequests } from "../services/updateRequests";*/
import {
    deleteRequests
} from '../services/deleteRequests';
/////////////////////Declaracion de variables/////////////////////
const containerPendingRequests = document.getElementById("containerPendingRequests")
showRequests();
async function showRequests() {
    let url = "http://localhost:3007/pendingRequest";
    let solicitudes = await GetRequests(url);
    for (let index = 0; index < solicitudes.length; index++) {
        let solicitud = document.createElement("div");
        solicitud.className = "solicitud"
        containerPendingRequests.appendChild(solicitud);

        let nombre = document.createElement("p");
        solicitud.appendChild(nombre);
        nombre.innerHTML = solicitudes[index].nombre;

        let sede = document.createElement("p");
        solicitud.appendChild(sede);
        sede.innerHTML = solicitudes[index].sede;

        let fechaSalida = document.createElement("p");
        solicitud.appendChild(fechaSalida);
        fechaSalida.innerHTML = solicitudes[index].fechaSalida;

        let fechaIngreso = document.createElement("p");
        solicitud.appendChild(fechaIngreso);
        fechaIngreso.innerHTML = solicitudes[index].fechaIngreso;

        let codigoPc = document.createElement("p");
        solicitud.appendChild(codigoPc);
        codigoPc.innerHTML = solicitudes[index].codigoPc;
        ///// Crea un boton Aceptar Solicitud//////////
        let btnAceptar = document.createElement("button")
        btnAceptar.innerHTML = "Aceptar solicitud";
        solicitud.appendChild(btnAceptar);
        ///// Crea un boton Rechazar Solicitud/////////
        let btnRechazar = document.createElement("button")
        btnRechazar.innerHTML = "Rechazar solicitud";
        solicitud.appendChild(btnRechazar);
        /////Creo un evento para el boton Aceptar/////////
        btnAceptar.addEventListener("click", function () {
            let request = {
                nombre:solicitudes[index].nombre,
                correo:solicitudes[index].correo,
                sede:solicitudes[index].sede,
                fechaSalida:solicitudes[index].fechaSalida,
                fechaIngreso:solicitudes[index].fechaIngreso,
                codigoPc:solicitudes[index].codigoPc,
                estado:"Aceptada"
            }
            //updateRequests(request, solicitudes[index].id);
            //PostHistory(solicitudes[index].nombre, solicitudes[index].sede, solicitudes[index].fechaSalida, solicitudes[index].fechaIngreso, solicitudes[index].codigoPc, estado);
            
            let url="http://localhost:3007/allRequest";
            let link="http://localhost:3007/aprovedRequest";
            PostRequest(request, url)
            PostRequest(request, link)
            deleteRequests(solicitudes[index].id);
            solicitud.remove();
        })
        btnRechazar.addEventListener("click", function () {
            let request = {
                nombre:solicitudes[index].nombre,
                correo:solicitudes[index].correo,
                sede:solicitudes[index].sede,
                fechaSalida:solicitudes[index].fechaSalida,
                fechaIngreso:solicitudes[index].fechaIngreso,
                codigoPc:solicitudes[index].codigoPc,
                estado:"Rechazada"
            }
            let url="http://localhost:3007/allRequest";
            PostRequest(request, url);
            let link="http://localhost:3007/pendingRequest"
            deleteRequests(link,solicitudes[index].id);
            solicitud.remove();
        })
    }
}

/*  /// Crea un boton Eliminar
        let btnEliminar = document.createElement("button") 
        btnEliminar.innerHTML = "Eliminar usuario";
        solicitud.appendChild(btnEliminar); //btn eliminar es hijo de la etiqueta list
    //Creo un evento para el boton Eliminar
    btnEliminar.addEventListener("click", function () {
        validId();
        async function validId() {
            let id = await buscarId(cedulaUsuario);
            deleteUser(id);
        }
        usuario.remove()
    })
async function buscarId(cedulaUsuario) {
    let identificador = 0;
    let usuarios = await GetUsers();
    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].cedula === cedulaUsuario.textContent) {
            identificador = usuarios[index].id;
            break;
        } else {
            identificador="not found";
        }
    }
    return identificador
}*/