function cargarTabla() {
    const db = localStorage.getItem("usuario");
    
    const tabla = document.querySelector("table");
    
    if(db) {
        const datos = JSON.parse(db);
        const fila = document.createElement("tr");
        
        let totalProductos = 0;

        for(const property in datos) {
            totalProductos += datos[property];
        }

        const numProductos = document.createElement("td");
        numProductos.textContent = totalProductos;
        fila.appendChild(numProductos);

        const fecha = document.createElement("td");
        fecha.textContent = new Date(Date.now());
        fila.appendChild(fecha);

        const acciones = document.createElement("td")
        acciones.innerHTML = `<a href="pago.html">Ver</a>`;
        fila.appendChild(acciones);
        
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