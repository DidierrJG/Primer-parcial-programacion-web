function cargarTabla() {
    const db = localStorage.getItem("usuario");
    
    const tabla = document.querySelector("table");
    
    if(db) {
        const datos = JSON.parse(db);

        const fila = document.createElement("tr");
        
        for(const property in datos) {
            const concepto = document.createElement("td");
            TextDecoder.textContent = property;

            fila.appendChild(concepto);
        }

        tabla.appendChild(fila);
    } else {
        tabla.innerHTML = "";

        const section = document.querySelector("section");

        if(!section.querySelector("p")) {    
            const mensaje = document.createElement("p");
            mensaje.textContent = "No tienes pedidos";

            section.appendChild(mensaje);
        }
    }
}

cargarTabla();