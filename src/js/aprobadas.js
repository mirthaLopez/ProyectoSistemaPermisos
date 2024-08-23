///////////////////Funciones Importadas///////////////////////////
import {
    GetRequests
} from "../services/getRequests";
///////////////////Declaracion de variables////////////////////////
const tableBody = document.querySelector("#tablaSolicitudes tbody");
//////////////////////////////////////////////////////////////////
mostrarHistorial();
async function mostrarHistorial() {
    let url = "http://localhost:3007/aprovedRequest";
    let solicitudes = await GetRequests(url);
    let out = "";
    for (let solicitud of solicitudes) {
        out += `
           <tr>
                   <td>${solicitud.id}</td>
	               <td>${solicitud.nombre}</td>
	               <td>${solicitud.correo}</td>
	               <td>${solicitud.sede}</td>
	               <td>${solicitud.fechaSalida}</td>
	               <td>${solicitud.fechaIngreso}</td>
	               <td>${solicitud.codigoPc}</td>
	               <td>${solicitud.estado}</td>
            </tr>
        `;
    }

tableBody.innerHTML=out;


    /*solicitudes.map(solicitud => {
        const row = document.createElement("tr");
        Object.values(solicitud).map(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
    
        tableBody.appendChild(row);
    });*/
}