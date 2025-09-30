const formulario= document.getElementById("Formulario");
const nombre= document.getElementById("mostrarNombre");


if(formulario){

formulario.addEventListener("submit", function(event){


const input= document.getElementById("inputNombre").value.trim();

    if(!input){
        alert("Se deben llenar todos los campos");
        event.preventDefault();
        return;
    
    }

    else if(!confirm("¿Desea enviar: "+ input + "?")){
        event.preventDefault();
        return;
    }
    
});
}

if(nombre){

const param= new URLSearchParams(window.location.search);
const info= param.get("nombre");

    nombre.textContent= info;
}
