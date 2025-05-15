// Datos de productos (40 productos: 10 camisas, 10 jeans, 10 chaquetas, 10 zapatos)
const products = [
    // Camisas (IDs 1-10)
    { id: 1, name: "Camisa Casual Azul", price: 39.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c" },
    { id: 2, name: "Camisa Blanca Formal", price: 45.99, image: "https://images.unsplash.com/photo-1603251578711-1e035f381192" },
    { id: 3, name: "Camisa a Cuadros Roja", price: 34.99, image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93" },
    { id: 4, name: "Camisa Denim", price: 42.99, image: "https://images.unsplash.com/photo-1608063608654-e458245b0a57" },
    { id: 5, name: "Camisa Negra Slim Fit", price: 38.99, image: "https://images.unsplash.com/photo-1589994192687-39659a3ad417" },
    { id: 6, name: "Camisa Verde Manga Corta", price: 29.99, image: "https://images.unsplash.com/photo-1599066762225-4b99ac1dde12" },
    { id: 7, name: "Camisa Estampada Floral", price: 36.99, image: "https://images.unsplash.com/photo-1598033125337-6a8c9eaab44b" },
    { id: 8, name: "Camisa Gris Oxford", price: 41.99, image: "https://images.unsplash.com/photo-1603251578913-9e6a3b9e8a7e" },
    { id: 9, name: "Camisa Celeste Casual", price: 37.99, image: "https://images.unsplash.com/photo-1596755094473-78e8b8b4e7bf" },
    { id: 10, name: "Camisa Polo Blanca", price: 32.99, image: "https://images.unsplash.com/photo-1618359057154-6ab1c2838db7" },

    // Jeans (IDs 11-20)
    { id: 11, name: "Jeans Ajustados Negros", price: 59.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d" },
    { id: 12, name: "Jeans Azul Clásico", price: 55.99, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" },
    { id: 13, name: "Jeans Desgastados", price: 62.99, image: "https://images.unsplash.com/photo-1542044896530-05d85be9b97a" },
    { id: 14, name: "Jeans Gris Slim", price: 58.99, image: "https://images.unsplash.com/photo-1601919051748-9a9c54a14eb7" },
    { id: 15, name: "Jeans Azul Oscuro", price: 60.99, image: "https://images.unsplash.com/photo-1582552938357-6048565f7b7b" },
    { id: 16, name: "Jeans Rotos", price: 64.99, image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a" },
    { id: 17, name: "Jeans Relaxed Fit", price: 57.99, image: "https://images.unsplash.com/photo-1601919051748-9a9c54a14eb7" },
    { id: 18, name: "Jeans Blanco", price: 61.99, image: "https://images.unsplash.com/photo-1582552938357-6048565f7b7b" },
    { id: 19, name: "Jeans Negro Desgastado", price: 63.99, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" },
    { id: 20, name: "Jeans Azul Claro", price: 56.99, image: "https://images.unsplash.com/photo-1542044896530-05d85be9b97a" },

    // Chaquetas (IDs 21-30)
    { id: 21, name: "Chaqueta de Cuero Negra", price: 99.99, image: "https://images.unsplash.com/photo-1521223342351-9df406e6e7ae" },
    { id: 22, name: "Chaqueta Bomber Verde", price: 89.99, image: "https://images.unsplash.com/photo-1518902268193-1e6b5c9f14c2" },
    { id: 23, name: "Chaqueta Denim Azul", price: 79.99, image: "https://images.unsplash.com/photo-1574180043302-4b96b5f0683b" },
    { id: 24, name: "Chaqueta de Lana Gris", price: 94.99, image: "https://images.unsplash.com/photo-1512353087810-25dfcd4c88d4" },
    { id: 25, name: "Chaqueta Impermeable Negra", price: 85.99, image: "https://images.unsplash.com/photo-1514984879728-5d7f5e5e6e6e" },
    { id: 26, name: "Chaqueta de Cuero Marrón", price: 97.99, image: "https://images.unsplash.com/photo-1520975957793-8b9f8b91b8f0" },
    { id: 27, name: "Chaqueta Parka Verde", price: 92.99, image: "https://images.unsplash.com/photo-1512353087810-25dfcd4c88d4" },
    { id: 28, name: "Chaqueta Azul Marino", price: 87.99, image: "https://images.unsplash.com/photo-1518902268193-1e6b5c9f14c2" },
    { id: 29, name: "Chaqueta Acolchada Negra", price: 90.99, image: "https://images.unsplash.com/photo-1514984879728-5d7f5e5e6e6e" },
    { id: 30, name: "Chaqueta Casual Beige", price: 88.99, image: "https://images.unsplash.com/photo-1574180043302-4b96b5f0683b" },

    // Zapatos (IDs 31-40)
    { id: 31, name: "Zapatos Formales Negros", price: 79.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { id: 32, name: "Zapatos Casuales Marrones", price: 69.99, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa" },
    { id: 33, name: "Zapatillas Blancas", price: 74.99, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772" },
    { id: 34, name: "Zapatos de Cuero Café", price: 82.99, image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1" },
    { id: 35, name: "Zapatillas Negras Deportivas", price: 77.99, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5" },
    { id: 36, name: "Zapatos Oxford Negros", price: 81.99, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd18f8f8" },
    { id: 37, name: "Zapatillas Grises", price: 73.99, image: "https://images.unsplash.com/photo-1562183241-b937e9704818" },
    { id: 38, name: "Zapatos Casuales Azules", price: 70.99, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa" },
    { id: 39, name: "Zapatos Formales Marrones", price: 80.99, image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1" },
    { id: 40, name: "Zapatillas Deportivas Blancas", price: 76.99, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772" },
];

// Arreglo del carrito
let cart = [];

// Configuración de paginación
const productsPerPage = 12;
let currentPage = 1;
let currentCategory = 'all';
let currentSearchQuery = '';

// Elementos del DOM
const productGrid = document.querySelector('.product-grid');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const closeModal = document.querySelector('.close');
const cartIcon = document.querySelector('.cart-icon');
const checkoutBtn = document.querySelector('.checkout');

// Renderizar productos
function renderProducts(category = currentCategory, page = currentPage, searchQuery = currentSearchQuery) {
    productGrid.innerHTML = '';
    let filteredProducts = products;

    // Filtrar por categoría
    if (category !== 'all') {
        filteredProducts = products.filter(product => {
            if (category === 'camisas') return product.id <= 10;
            if (category === 'jeans') return product.id > 10 && product.id <= 20;
            if (category === 'chaquetas') return product.id > 20 && product.id <= 30;
            if (category === 'zapatos') return product.id > 30;
            return false;
        });
    }

    // Filtrar por búsqueda
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Paginación
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = filteredProducts.slice(start, end);

    // Renderizar tarjetas de productos
    paginatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img loading="lazy" src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Añadir al Carrito</button>
        `;
        productGrid.appendChild(productCard);
    });

    // Actualizar paginación
    updatePagination(filteredProducts.length, page);
}

// Actualizar controles de paginación
function updatePagination(totalProducts, currentPage) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = `
        <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>Anterior</button>
        <span>Página ${currentPage} de ${totalPages}</span>
        <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>Siguiente</button>
    `;
}

// Cambiar página
function changePage(page) {
    currentPage = page;
    renderProducts();
}

// Filtrar por categoría
function filterProducts(category) {
    currentCategory = category;
    currentPage = 1; // Reiniciar a la primera página
    currentSearchQuery = ''; // Limpiar búsqueda
    document.getElementById('search').value = ''; // Limpiar input
    renderProducts();
}

// Buscar productos
function searchProducts() {
    currentSearchQuery = document.getElementById('search').value;
    currentPage = 1; // Reiniciar a la primera página
    renderProducts();
}

// Añadir al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

// Actualizar carrito
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})">Eliminar</button>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = count;
}

// Eliminar del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Mostrar/Ocultar modal del carrito
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Finalizar compra (placeholder)
checkoutBtn.addEventListener('click', () => {
    alert('¡Procediendo al pago!');
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
});

// Inicializar
renderProducts();