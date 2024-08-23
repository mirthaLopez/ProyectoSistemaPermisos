import {
    GetUsers
} from "../services/getUsers"



const correo = document.getElementById("correo")
const contrasena = document.getElementById("contrasena")
const botonI = document.getElementById("botonI")
const textoBienvenida = document.getElementById("textoBienvenida")


botonI.addEventListener("click", function () {
    if (correo.value !== "" && contrasena.value !== "") {
        validarUsuario()
        async function validarUsuario() {
            let lista = await GetUsers()
            for (let index = 0; index < lista.length; index++) {

                if (lista[index].correo === correo.value && lista[index].contrasena === contrasena.value) {
                    let usuarioActivo = lista[index].nombre
                    localStorage.setItem("usuarioActivo", (usuarioActivo))
                    let correoActivo = lista[index].correo
                    localStorage.setItem("correoActivo", (correoActivo))
                    let rolActivo = lista[index].rol
                    localStorage.setItem("rolActivo", (rolActivo))
                    console.log("Usuario registrado")
                    window.location.href = "registro.html"

                    /* if (lista[index].rol === "Administrador") {
                         window.location.href="registro.html"
                     }else{
                         window.location.href="registro.html"
                     }*/
                } else {
                    console.log("Usuario no regitrado")
                }
            }
        }

    }else{
        textoBienvenida.innerHTML="Llena todos los espacios"
    }


})