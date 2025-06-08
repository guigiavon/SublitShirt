const productos = {
    textil: [
        {
            id: 1,
            nombre: "Gorras",
            imagen: "imagenes/Textil/Gorras.gif",
            descripcion: "Gorras con estilo, perfectas para protegerte del sol mientras luces increíble.",
            // precio: 1500, // Precio aproximado en pesos argentinos
            categoria: "Textil"
        },
        {
            id: 2,
            nombre: "Remeras",
            imagen: "imagenes/Textil/RemeraBlanca.gif",
            descripcion: "Remeras clásicas y cómodas para un look relajado en cualquier ocasión.",
            // precio: 2000, // Precio aproximado en pesos argentinos
            categoria: "Textil"
        },
        {
            id: 3,
            nombre: "Remeras de algodón",
            imagen: "imagenes/Textil/Remeranegra.gif",
            descripcion: "Remeras de algodón suave que ofrecen comodidad durante todo el día.",
            // precio: 2200, // Precio aproximado en pesos argentinos
            categoria: "Textil"
        },
        {
            id: 4,
            nombre: "Set de jardín",
            imagen: "imagenes/Textil/setdejardin.gif",
            descripcion: "Set completo para jardín, ideal para disfrutar de la naturaleza con estilo.",
            // precio: 3500, // Precio aproximado en pesos argentinos
            categoria: "Textil"
        },
        {
            id: 5,
            nombre: "Mochilas",
            imagen: "imagenes/Textil/Mochilas.gif",
            descripcion: "Mochilas prácticas y elegantes para llevar todo lo que necesitas a donde vayas.",
            // precio: 2500, // Precio aproximado en pesos argentinos
            categoria: "Textil"
        }
    ],
    llaveros: [
        {
            id: 6,
            nombre: "Llaveros",
            imagen: "imagenes/Llaveros/1.jpg",
            descripcion: "Llaveros únicos que mantienen tus llaves organizadas con un toque personal.",
           
            categoria: "Llaveros"
        },
        {
            id: 7,
            nombre: "Llaveros",
            imagen: "imagenes/Llaveros/llaveroresina.jpg",
            descripcion: "Llaveros divertidos. Resinados",
           
            categoria: "Llaveros"
        },
        {
            id: 8,
            nombre: "Llaveros",
            imagen: "imagenes/Llaveros/3.jpg", // Asegúrate de tener esta imagen
            descripcion: "Llaveros sofisticados que destacan por su diseño y calidad.",
           
            categoria: "Llaveros"
        },
        {
            id: 9,
            nombre: "Llaveros",
            imagen: "imagenes/Llaveros/tiracierre.jpg", // Asegúrate de tener esta imagen
            descripcion: "Llaveros elegantes que combinan funcionalidad con un diseño atractivo.",
           
            categoria: "Llaveros"
        }
    ],
    plastico: [
        {
            id: 10,
            nombre: "Termo",
            imagen: "imagenes/Plastico/matermo.jpg",
            descripcion: "Termo de alta calidad para mantener tus bebidas calientes o frías durante todo el día.",
            // precio: 1200, // Precio aproximado en pesos argentinos
            categoria: "Plástico"
        },
        {
            id: 11,
            nombre: "Taza",
            imagen: "imagenes/Plastico/tazaplastico.gif",
            descripcion: "Taza de plástico resistente, ideal para tus bebidas favoritas en cualquier momento.",
            // precio: 700, // Precio aproximado en pesos argentinos
            categoria: "Plástico"
        },
        {
            id: 12,
            nombre: "Jarro térmico",
            imagen: "imagenes/Plastico/termico.jpg",
            descripcion: "Jarro térmico con diseño moderno, perfecto para mantener la temperatura de tus bebidas.",
            // precio: 1400, // Precio aproximado en pesos argentinos
            categoria: "Plástico"
        },
         {
            id: 14,
            nombre: "Taza Starbucks",
            imagen: "imagenes/Plastico/Starv.jpg", // Asegúrate de tener esta imagen
            descripcion: "Taza de Starbucks con diseño exclusivo para disfrutar de tu café con estilo.",
            // precio: 1000, // Precio aproximado en pesos argentinos
            categoria: "Plástico"
        },
        {
            id: 15,
            nombre: "Set de Mate",
            imagen: "imagenes/Plastico/mate.jpg", // Asegúrate de tener esta imagen
            descripcion: "Elegante set de mate, perfecto para disfrutar de tu infusión favorita con clase.",
            // precio: 1800, // Precio aproximado en pesos argentinos
            categoria: "Plástico"
        }
    ],
    ceramica: [
        {
            id: 16,
            nombre: "Taza de Cerámica",
            imagen: "imagenes/Ceramica/taza.jpg",
            descripcion: "Taza de cerámica con diseño elegante, ideal para disfrutar de tu café o té.",
            // precio: 950, // Precio aproximado en pesos argentinos
            categoria: "Cerámica"
        },
        {
            id: 19,
            nombre: "Jarra de Cerámica",
            imagen: "imagenes/Ceramica/Choppceramica.gif",
            descripcion: "Jarra de cerámica con un diseño tradicional, ideal para servir bebidas frías o calientes.",
            // precio: 1500, // Precio aproximado en pesos argentinos
            categoria: "Cerámica"
        },
        {
            id: 21,
            nombre: "Taza Magica",
            imagen: "imagenes/Ceramica/tazamagica.jpg",
            descripcion: "Vaso de cerámica con un acabado brillante, perfecto para cualquier bebida.",
            // precio: 800, // Precio aproximado en pesos argentinos
            categoria: "Cerámica"
        }
    ],
    Impresiones3D: [
        {
            id: 16,
            nombre: "Cartel Led",
            imagen: "imagenes/3D/Carteles.jpg",
            descripcion: "Más que un cartel, una experiencia. Personaliza tu espacio con diseño 3D.",
            // precio: 950, // Precio aproximado en pesos argentinos
            categoria: "Cerámica"
        },
        {
            id: 19,
            nombre: "Piezas de ajedrez",
            imagen: "imagenes/3D/Ajedrez.jpg",
            descripcion: "Juego y arte en relieve. Piezas 3D que elevan tu partida y tu espacio.",
            // precio: 1500, // Precio aproximado en pesos argentinos
            categoria: "Cerámica"
        },
        {
            id: 21,
            nombre: "Souvenir",
            imagen: "imagenes/3D/Souvenir.jpg",
            descripcion: "Más que un objeto, un recuerdo. Personalizamos ese instante para que perdure.",
            // precio: 800, // Precio aproximado en pesos argentinos
            categoria: "Cerámica"
        }
    ]
};

// Selecciona el contenedor de productos (ahora será la fila 'row')
const productosRow = document.querySelector(".contenedor-productos .row");

// Función para mostrar productos de una categoría específica
function mostrarProductosPorCategoria(categoriaSeleccionada) {
    // Limpiar el contenedor de productos antes de mostrar nuevos
    productosRow.innerHTML = '';

    // Iterar a través de los productos de la categoría seleccionada
    productos[categoriaSeleccionada].forEach(producto => {
        const colDiv = document.createElement('div');
        // Clases de columna para Bootstrap: 3 en escritorio, 2 en tablet, 1 en móvil
        colDiv.classList.add('col-md-4', 'col-sm-6', 'mb-4');
        
        colDiv.innerHTML = `
            <div class="card h-100 gallery-item"> <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body text-center">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    ${producto.precio ? `<p class="card-text"><strong>Precio: $${producto.precio}</strong></p>` : ''}
                    <button class="btn btn-primary consultar-btn"
                            data-nombre-producto="${producto.nombre}"
                            data-precio-producto="${producto.precio || 'No especificado'}">Consultar</button>
                </div>
            </div>
        `;
        productosRow.appendChild(colDiv);

        const botonConsultar = colDiv.querySelector('.consultar-btn');

        botonConsultar.addEventListener('click', () => {
            const numeroTelefono = '543513213802'; // ¡Tu número de WhatsApp!

            const mensaje = encodeURIComponent(`¡Hola! Quisiera consultar sobre el producto "${producto.nombre}" (Precio: $${producto.precio || 'No especificado'}).`);

            const whatsappURL = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
            window.open(whatsappURL, '_blank');
        });
    });
}

// Función para mostrar todos los productos inicialmente
function mostrarTodosLosProductos() {
    // Limpiar el contenedor de productos antes de mostrar nuevos
    productosRow.innerHTML = '';

    for (let categoria in productos) {
        productos[categoria].forEach(producto => {
            const colDiv = document.createElement('div');
            // Clases de columna para Bootstrap
            colDiv.classList.add('col-md-4', 'col-sm-6', 'mb-4');
            
            colDiv.innerHTML = `
                <div class="card h-100 gallery-item">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        ${producto.precio ? `<p class="card-text"><strong>Precio: $${producto.precio}</strong></p>` : ''}
                        <button class="btn btn-primary consultar-btn"
                                data-nombre-producto="${producto.nombre}"
                                data-precio-producto="${producto.precio || 'No especificado'}">Consultar</button>
                    </div>
                </div>
            `;
            productosRow.appendChild(colDiv);

            const botonConsultar = colDiv.querySelector('.consultar-btn');

            botonConsultar.addEventListener('click', () => {
                const numeroTelefono = '543513213802'; 
                const mensaje = encodeURIComponent(`¡Hola! Quisiera consultar sobre el producto "${producto.nombre}" (Precio: $${producto.precio || 'No especificado'}).`);
                const whatsappURL = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
                window.open(whatsappURL, '_blank');
            });
        });
    }
}

// Selecciona el contenedor del menú de categorías
const contenedortipo = document.querySelector(".menu-pro");

// Función para mostrar los botones de categorías
function mostrartipo() {
    const categorias = Object.keys(productos);

    // Botón "Mostrar Todos"
    const btnAll = document.createElement('button');
    btnAll.classList.add('btn', 'btn-outline-dark', 'm-2'); // Estilo de botón Bootstrap
    btnAll.textContent = 'Todos los Productos';
    btnAll.addEventListener('click', (event) => {
        event.preventDefault();
        mostrarTodosLosProductos();
    });
    contenedortipo.appendChild(btnAll);

    // Botones para cada categoría
    categorias.forEach(categoria => {
        const btn = document.createElement('button');
        btn.classList.add('btn', 'btn-outline-dark', 'm-2'); // Estilo de botón Bootstrap
        btn.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);

        btn.addEventListener('click', (event) => {
            event.preventDefault();
            mostrarProductosPorCategoria(categoria);
        });
        contenedortipo.appendChild(btn);
    });
}

// Llama a la función para mostrar los botones de categorías al cargar la página
mostrartipo();

// Llama a la función para mostrar todos los productos inicialmente
mostrarTodosLosProductos();