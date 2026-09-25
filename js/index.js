async function obtenerProductos() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    console.log(data);
    return data;
}

async function mostrarProductos() {
    const section = document.querySelector("#productos");
    const productos = await obtenerProductos();

    for(let i = 0; i < 4; i++) {
        const articulo = document.createElement("article");
        const producto = productos[i];

        articulo.innerHTML = `
            <img src="${producto.image}" width=128>
            <h3>
                ${producto.title}
            </h3>
            <div>
                <p>${producto.price}</p>
                <button class="add-boton">
                    Add
                </button>
            </div>
        `;

        section.appendChild(articulo);
    }
    
}

mostrarProductos();

const section = document.querySelector("#productos");

section.addEventListener("click", (e) => {
    if(e.target.classList.contains("add-boton")) {
        const producto = e.target.parentElement.parentElement;
        const nombre = producto.querySelector("h3");

        guardarCompra(nombre.textContent);
    }
})

function guardarCompra(producto) {
    const db = localStorage.getItem("usuario");

    if(db) {
        const datos = JSON.parse(db);

        if(datos[producto]) {
            datos[producto]++;
        } else {
            datos[producto] = 1;
        }
        
        localStorage.setItem("usuario", JSON.stringify(datos))
    } else {
        localStorage.setItem("usuario", JSON.stringify({[producto]: 1}));
    }
}