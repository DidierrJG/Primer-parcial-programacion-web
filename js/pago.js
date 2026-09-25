function cargarTabla() {
    const db = localStorage.getItem("usuario");
    
    const tabla = document.querySelector("table");
    
    if(db) {
        const datos = JSON.parse(db);
        
        for(const property in datos) {
            const fila = document.createElement("tr");

            const concepto = document.createElement("td");
            concepto.textContent = property.replaceAll("\n", "");
            fila.appendChild(concepto);

            const cantidad = document.createElement("td");
            cantidad.textContent = datos[property];
            fila.appendChild(cantidad);
            
            tabla.appendChild(fila);
        }
        
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