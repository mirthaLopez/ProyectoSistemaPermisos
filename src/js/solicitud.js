/////////////////////Funciones importadas////////////////////////////////
import { PostRequest } from "../services/postRequest";


/////////////////////Declaracion de variables////////////////////////////
const checkbox = document.getElementById("check");
const textCheck = document.getElementById("textCheck");
const btnEnviar = document.getElementById("btnEnviar")
const selector = document.getElementById("selector");
const fechaSalida = document.getElementById("fechaSalida");
const fechaIngreso = document.getElementById("fechaIngreso");
const codigoPc = document.getElementById("codigoPc");
const nombre = document.getElementById("nombre");
const textAdvertencia=document.getElementById("textAdvertencia");

/////////////////////Evento enviar solicitud////////////////////////////
btnEnviar.addEventListener("click", function () {
    if (validarForm() === true) {
        const solicitud={
            nombre:nombre.value,
            sede:selector.value,
            fechaSalida:fechaSalida.value,
            fechaIngreso:fechaIngreso.value,
            codigoPc:codigoPc.value,
            estado:"Pendiente"
        }
        PostRequest(solicitud)
    }else{
        textAdvertencia.innerHTML="Completa todas las casillas del formulario"
    }
})


////////////////////// Validar que el formulario este lleno///////////////////////
function validarForm() {
    let checkStatus=validarCheckbox();
    let validadorNombre = nombre.value.trim();
    let validadorCodigo = codigoPc.value.trim();
    let validadorSalida = fechaSalida.value.trim();
    let validadorIngreso = fechaIngreso.value.trim();
    if ( checkStatus=== true && selector.value !== "" && validadorCodigo.length !== 0 && validadorNombre.length !== 0 
        && validadorSalida.length !== 0 && validadorIngreso.length !== 0 ) {
        textAdvertencia.innerHTML="Tu solicitud ha sido enviada con exito"
        return true
    }else{
        textAdvertencia.innerHTML="Asegurate de llenar todos los datos"
        return false
    }
}
////////////////////// Validar CheckBox Condiciones/////////////////
textCheck.innerHTML = 'Da click, para aceptar las condiciones';
checkbox.addEventListener("change", validarCheckbox, false);
function validarCheckbox() {
    let validCheck = false;
        if (checkbox.checked) {
            validCheck=true;
            textCheck.innerHTML = 'Haz aceptado las condiciones';
        } else {
            validCheck=false;
            textCheck.innerHTML = 'Da click, para aceptar las condiciones';
        }
        return validCheck
}
