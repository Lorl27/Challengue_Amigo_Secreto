// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
///---------------------------------------------

let lista_amigos=[];


//----------------- VALIDACIONES

function is_name_valid(nombre){
    return nombre.trim().length > 0; //no vacío
}

//----------------------- style:

function marcarInputInvalido(input) {
    input.style.border = "2px dashed red";
}

function marcarInputValido(input) {
    input.style.border = "2px dashed green";
}


// -------------------- funciones

function mostrarLista(){
    let mostrar_amigo= document.querySelector("#listaAmigos");
    let largo=lista_amigos.length;

    mostrar_amigo.innerHTML=""; //para no duplicar.
    for(var x=0;x<largo;x++){
        let li=document.createElement("li");
        li.textContent= lista_amigos[x];
        mostrar_amigo.appendChild(li); //agrega li al ul
    }

}



function agregarAmigo(){
    const input_amigo= document.getElementById("amigo");
    const amigo=input_amigo.value.trim(); // elimina los espacios

    //----- VALIDAR ENTRADAS:

    if (!is_name_valid(amigo)) {
        marcarInputInvalido(input_amigo);
        alert("ERROR. Debes ingresar un nombre válido.");
        return;
    } else {
        marcarInputValido(input_amigo);
    }


    if(lista_amigos.includes(amigo)){
        alert(`Ya has ingresado anteriormente a ${amigo}`);
        return;
    }

    //----------------

    lista_amigos.push(amigo);

    input_amigo.value="" //vaciar input;

    mostrarLista();

}




