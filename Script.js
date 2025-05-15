// Datos de productos
const products = [
    { id: 1, name: "Camisa Casual", price: 39.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c" },
    { id: 2, name: "Jeans Ajustados", price: 59.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d" },
    { id: 3, name: "Chaqueta de Cuero", price: 99.99, image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcXVldGElMjBkZSUyMGN1ZXJvfGVufDB8fDB8fHww" },
    { id: 4, name: "Zapatos Formales", price: 79.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
];

// Arreglo del carrito
let cart = [];

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
function renderProducts() {
    productGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Añadir al Carrito</button>
        `;
        productGrid.appendChild(productCard);
    });
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