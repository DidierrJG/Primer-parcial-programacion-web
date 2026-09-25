const ingresar = document.querySelector("button");

const formulario = document.querySelector("form");

ingresar.addEventListener("click", (e) => {
    e.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if(username == "mor_2314" && password == "83r5^_") {
        window.location.href = "index.html";
    } else {
        if(!document.querySelector("p")) {    
            const mensaje = document.createElement("p");
            mensaje.textContent = "Datos invalidos";

            formulario.appendChild(mensaje);
        }
    }
})