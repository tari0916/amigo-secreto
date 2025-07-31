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

//Añade los nombres a la lista con id = listaAmigos y lo muestra al usuario
function actualizarLista(){
    //Obtiener la lista donde se mostrarán los nombres y vaciar
    let listaAmigo = document.getElementById("listaAmigos");
    listaAmigo.innerHTML = "";
    
    for(let contador = 0; contador < amigos.length; contador++){
        //Crea el elemento li
        let lista = document.createElement("li");
        //Asigna el nombre como contenido de texto
        lista.textContent = amigos[contador];
        //Agrega al <ul> con id="lista-amigos"
        listaAmigo.appendChild(lista);
    }
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
            //Se actualiza la lista a mostrar
            actualizarLista();
        } else {
             alert("El nombre solo debe contener letras");
        }
    }
}

function sortearAmigo(){
    let result = document.getElementById("resultado");
    //Validar que el array amigos no esté vacío 
    if(amigos.length === 0){
        alert("Por favor, inserte un nombre");
    } else {
        //Número maximo para generar el número aleatorio
        let numeroMaximo = amigos.length-1;
        //Generación de indice aleatorio
        let indice = Math.floor(Math.random()*numeroMaximo);
        //Nombre correspondiente en el arreglo y se muestra el resultado
        result.innerHTML = amigos[indice];
        //Se habilita el botón de reiniciar sorteo
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}

function reiniciarSorteo(){
    //El resultado del sorteo anterior se borra
    let result= document.getElementById("resultado");
    result.innerHTML="";
    //La lista amigos se reestablece
    amigos = []; 
    //No hay ningún amigo ingresado
    amigoIngresado = "";
    //Se actualiza la lista de los nombres a sortear
    actualizarLista();
    //Se deshabilita de nuevo el botón de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled','true');   
}
