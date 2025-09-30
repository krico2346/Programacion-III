const body= document.getElementById("body");
let numero=0;
const contador= document.getElementById("contador");


window.addEventListener("DOMContentLoaded", () => {
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado) {
        body.className = temaGuardado;
    }
});

function actualizar(){
    numero++;
    contador.textContent=numero;
}

function tema_claro(){
    if (body.className !== "tema-claro") {
        body.className = "tema-claro";
        localStorage.setItem("tema", "tema-claro");
        actualizar();
    }
}

function tema_oscuro(){
    if (body.className !== "tema-oscuro") {
        body.className = "tema-oscuro";
        localStorage.setItem("tema", "tema-oscuro");
        actualizar();
    }
    
}

function tema_morado(){
    if (body.className !== "tema-morado") {
        body.className = "tema-morado";
        localStorage.setItem("tema", "tema-morado");
        actualizar();
    }
}

