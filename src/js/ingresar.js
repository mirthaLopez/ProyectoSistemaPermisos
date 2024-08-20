import { GetUsers } from "../services/getUsers"



const correo = document.getElementById("correo")
const contrasena = document.getElementById("contrasena")
const botonI = document.getElementById("botonI")


botonI.addEventListener("click", function () {

    validarUsuario()

    async function validarUsuario() {

        console.log(1);
        
        let lista = await GetUsers()
        console.log(lista)


    }

    for (let index = 0; index < lista.length; index++) {
        
        
    }

    

   
    
})
