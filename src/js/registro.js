import {
    postUsuario
} from "../services/postusuario";
import {
    GetUsers
} from "../services/getUsers";
const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const contrasena = document.getElementById("contrasena")
const cedula = document.getElementById("cedula")
const botonR = document.getElementById("botonR")
const select = document.getElementById("select")
const textoBienvenida = document.getElementById("textoBienvenida")


botonR.addEventListener("click", function () {
    if (true) {


        async function traerLista() {
            let listaUsuarios = await GetUsers();
           
          
    
            return listaUsuarios
      
            
        
            
        }
    
        validCorreo();
        async function validCorreo() {
            let response = await traerLista();
            
    
    
            let encontrado = response.filter(element => element.correo ===correo.value)
    
            
    
    
    
     
    
            if (encontrado.length === 0 ) {
                      
              
                    let usuario = {
                        nombre: nombre.value,
                        correo: correo.value,
                        contrasena: contrasena.value,
                        cedula: cedula.value,
                        rol: select.value
                        
                    }
    
    
                    postUsuario(usuario);
                    textoBienvenida.innerHTML = "Felicidades tu registro ha sido exitoso"
                
            }else{
                  textoBienvenida.innerHTML = "El usuario ya se encuentra registrado"
            }
    
        
        }
    }else{
        alert ="Llena todos los campos"
    }
    




})



