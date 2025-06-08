

const productos = [
    {
        id: 1,
        nombre: 'Taza Sublimable',
        precio: 800,
        moneda: 'ARS',
        categoria: 'Cerámica',
        imagen: 'imagenes/taza-sublimable.jpg',
        descripcion: 'Taza de cerámica blanca preparada para sublimación, resistente al calor y perfecta para personalizar.'
    },
    {
        id: 2,
        nombre: 'Camiseta para Sublimar',
        precio: 1500,
        moneda: 'ARS',
        categoria: 'Textil',
        imagen: 'imagenes/camiseta-sublimar.jpg',
        descripcion: 'Camiseta de poliéster blanco, ideal para la sublimación de diseños coloridos y detallados.'
    },
    {
        id: 3,
        nombre: 'Puzzle Sublimable',
        precio: 1200,
        moneda: 'ARS',
        categoria: 'Accesorios',
        imagen: 'imagenes/puzzle-sublimable.jpg',
        descripcion: 'Puzzle de cartón con capa de poliéster, listo para ser sublimado con imágenes personalizadas.'
    },
    {
        id: 4,
        nombre: 'Cojín Sublimable',
        precio: 2000,
        moneda: 'ARS',
        categoria: 'Hogar',
        imagen: 'imagenes/cojin-sublimable.jpg',
        descripcion: 'Cojín cuadrado con funda de poliéster sublimable, ideal para decorar cualquier espacio con un toque personal.'
    },
    {
        id: 5,
        nombre: 'Llaveros Sublimables',
        precio: 500,
        moneda: 'ARS',
        categoria: 'Accesorios',
        imagen: 'imagenes/llavero-sublimable.jpg',
        descripcion: 'Llaveros de metal con recubrimiento sublimable, perfectos para crear recuerdos personalizados.'
    }
];

// Renderizar navegación


// Crear menú de navegación por categorías
const nav = document.getElementById("menusecu");
const ul = document.createElement('ul');
ul.classList.add('navbar-nav');

// Agrupar productos por categorías
const categorias = [...new Set(productos.map(pro => pro.categoria))];

categorias.forEach(cat => {
    const li = document.createElement('li');
    li.classList.add('nav-item');

    const link = document.createElement('a');
    link.classList.add('nav-link');
    link.href = '#'; // Se mantiene como "#" ya que el evento click gestionará la visualización
    link.textContent = cat;

    // Evento click para mostrar productos de la categoría seleccionada
    link.addEventListener('click', function(event) {
        event.preventDefault();
        renderProducts(cat);
    });

    li.appendChild(link);
    ul.appendChild(li);
});

nav.appendChild(ul);

// Inicializar carrito
const cart = [];
const container = document.querySelector('.row');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Función para renderizar productos filtrados por categoría
function renderProducts(categoria = null) {
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos productos

    let productosFiltrados = productos;

    if (categoria) {
        productosFiltrados = productos.filter(pro => pro.categoria === categoria);
    }

    if (productosFiltrados.length && container) {
        productosFiltrados.forEach(pro => {
            const card = document.createElement('div');
            card.classList.add('card', 'col-md-4');

            card.innerHTML = `
                <img src="${pro.imagen}" class="card-img-top" alt="${pro.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${pro.nombre}</h5>
                    <p class="card-text">${pro.moneda} ${pro.precio}</p>
                    <p class="card-text">${pro.descripcion}</p>
                    <a href="#" class="btn btn-primary">Ver detalles</a>
                    <button class="btn btn-secondary" data-id="${pro.id}">Agregar al carrito</button>
                </div>
            `;

            container.appendChild(card);
        });

        // Selecciona todos los botones con la clase 'btn-secondary'
        const botonesAgregar = document.querySelectorAll('.btn-secondary');
        
        // Añadimos un manejador de eventos para cada botón
        botonesAgregar.forEach(boton => {
            boton.addEventListener('click', function(event) {
                event.preventDefault(); // Evita el comportamiento por defecto del botón
                const id = this.getAttribute('data-id'); // Obtener el ID desde el atributo 'data-id'
                console.log('ID del botón clickeado:', id); // Para depurar el valor del ID
                addToCart(id); // Llamar a la función con el ID
            });
        });
    } else {
        console.error('No se encontraron productos o el contenedor es null.');
    }
}

// Función para agregar productos al carrito
function addToCart(productId) {
    const product = productos.find(p => p.id === parseInt(productId));

    if (product) {
        const existingProduct = cart.find(p => p.id === product.id);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        renderCart();
    }
}

// Función para renderizar el carrito
function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(p => {
        total += p.precio * p.quantity;

        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `
            ${p.nombre} - ${p.moneda} ${p.precio} x ${p.quantity}
            <button class="btn btn-danger btn-sm float-right" data-id="${p.id}">Eliminar</button>
        `;

        cartItems.appendChild(li);
    });

    cartTotal.textContent = `${total.toFixed(2)}`;

    // Añadir eventos a los botones de eliminar
    document.querySelectorAll('#cart-items button').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// Función para eliminar productos del carrito
function removeFromCart(productId) {
    const index = cart.findIndex(p => p.id === productId);

    if (index > -1) {
        cart.splice(index, 1);
        renderCart();
    }
}

// Inicializar la página mostrando todos los productos
renderProducts();
renderCart();
