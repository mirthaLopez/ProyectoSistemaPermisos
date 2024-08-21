import { GetUsers } from "../services/getUsers"



const correo = document.getElementById("correo")
const contrasena = document.getElementById("contrasena")
const botonI = document.getElementById("botonI")


botonI.addEventListener("click", function () {
    validarUsuario()
    async function validarUsuario() {
        let lista = await GetUsers()
        for (let index = 0; index < lista.length; index++) {

            if (lista[index].correo === correo.value && lista[index].contrasena === contrasena.value) {
                let usuarioActivo=lista[index].nombre
                localStorage.setItem("usuarioActivo", (usuarioActivo))
                console.log("Usuario registrado")
                window.location.href="registro.html"

      
            }else{
                console.log("Usuario no regitrado")
    
            }   
        }
    } 
    
})
