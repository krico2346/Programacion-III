//Alerta

const boton= document.getElementById("boton");

boton.addEventListener("click", function(){
    alert("Hola");
})

//Cambiar color div
const fondo= document.getElementsByTagName("div")[0];

fondo.addEventListener("mouseover", function(){
    fondo.style.background= "green";
})
fondo.addEventListener("mouseout", function(){
    fondo.style.background= "none";
})

//Lista

const input= document.getElementById("input");
const lista= document.getElementById("lista");
let nuevoLi;
const btnLista= document.getElementById("btnLista");

btnLista.addEventListener("click", function(){
    nuevoLi= document.createElement("li");
    nuevoLi.textContent = input.value;
    lista.appendChild(nuevoLi);
})