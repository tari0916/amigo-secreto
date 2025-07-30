/*  El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
    Aquí deberás desarrollar la lógica para resolver el problema.
*/
//Variables
let amigos = []; 
let amigoIngresado = "";

//Función para validar que el nombre contenga solo letras
function nombreConLetras(nombre) {
  return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre);
}

//Función para restablecer el campo amigo a cadena vacía
function limpiarCaja(){
    document.getElementById("amigo").value = "";
}

function agregarAmigo(){
    //Almacenamiento del nombre ingresado por el usuario
    amigoIngresado = document.getElementById("amigo").value;

    //Validar que el campo no esté vacío 
    if(amigoIngresado == ""){
        alert("Por favor, inserte un nombre");
    } else {

        //Validar que el campo solo contenga letras
        if(nombreConLetras(amigoIngresado)===true){
            //Almacena el nuevo nombre en el array amigos
            amigos.push(amigoIngresado);
            //Limpia campo amigo
            limpiarCaja();
            //Se verifica que el nombre se añadió correctamente al array
            console.log(amigos);
        } else {
             alert("El nombre solo debe contener letras");
        }
    }
}
