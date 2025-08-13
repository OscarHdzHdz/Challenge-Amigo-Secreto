let amigos = [];

//Función para agregar los nombres de amigos usando el botón de añadir
function agregarAmigo(){
    let amigoIngresado = document.getElementById("amigo").value;
    //Comprobación de nombre, no puede estar vacío
    if (amigoIngresado == "") {
        alert("Por favor inserte un nombre");
    } else {
        amigos.push(amigoIngresado); //Actualiza el array "amigos" con el nombre ingresado
        console.log(amigos);
        limpiarCampo();
        actualizarListaAmigos();
        
    }
}
// Función para limpiar caja después de que se ingresó un amigo
function limpiarCampo(){
    document.getElementById("amigo").value = "";
}
// Función que actualiza y muestra la lista de los amigos ingresados en pantalla
function actualizarListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    //Recorremos el array y se crea la lista de amigos ingresados
    for (i=0 ; i<amigos.length ; i++){
        let listaAmigos = document.createElement("li");
        listaAmigos.textContent = amigos[i];
        lista.appendChild(listaAmigos);
    }
    
}

// Función que hace el sorteo y elección de uno de los amigos de la lista 
function sortearAmigo(){
    if(amigos.length == 0) {
        alert("No has ingresado ningún amigo");
    } else{
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        let resultado = document.getElementById("resultado");
        
        resultado.innerHTML = amigos[indiceAleatorio];
    }    
    
}