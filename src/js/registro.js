const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const contrasena = document.getElementById("contrasena")
const cedula = document.getElementById("cedula")
const botonR = document.getElementById("botonR")
const select = document.getElementById("select")

import { postUsuario } from "../services/postusuario"



botonR.addEventListener("click", function () {
    let usuario = {
        nombre:nombre.value, 
        correo:correo.value,
        contrasena:contrasena.value,
        cedula:cedula.value,
        rol:select.value
    }
    
    postUsuario(usuario)
})
