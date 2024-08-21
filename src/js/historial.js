///////////////////Funciones Importadas///////////////////////////
import {
    GetRequests
} from "../services/getRequests";


mostrarHistorial();
async function mostrarHistorial() {
    let url = "http://localhost:3007/allRequest";
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
        console.log(solicitudes[index].estado);

        if (solicitudes[index].estado === "Aceptada") {
            let estado = document.createElement("div");
            var imgElement = document.createElement('img')
            imgElement.alt=""
            estado.appendChild(imgElement)
             imgElement.src="/aceptada.cabe0510.png"
            solicitud.appendChild(estado)
            estado.className = "iconoEstado"
        } else if (solicitudes[index].estado === "Rechazada") {
            let estado = document.createElement("div");
            solicitud.appendChild(estado);
            estado.innerHTML = `<img src="../img/rechazada.png">`;
            estado.className = "iconoEstado"
        }
    }
}

/*var imgElement = document.createElement('img');
imgElement.src = 'ruta/a/tu/imagen.jpg';
imgElement.width = 100; // Ancho: 100px
imgElement.height = 200; // Alto: 200px
document.body.appendChild(imgElement);*/