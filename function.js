let cart = [];

function addToCart(productId, price, itemName) {
    let qty = document.getElementById(`qty-${productId}`).value;
    if (qty > 0) {
        cart.push({ productId: productId, quantity: parseInt(qty), price: price });
        updateCart();

        document.getElementById('modal-body-added').innerText = `${itemName} added to your cart.`;

        let addedToCartModal = new bootstrap.Modal(document.getElementById('addedToCartModal'));
        addedToCartModal.show();
    } else {
        // Show the Bootstrap modal instead of alert
        let quantityModal = new bootstrap.Modal(document.getElementById('quantityModal'));
        quantityModal.show();
    }
}

function updateCart() {
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-total').innerText = totalItems;
    document.getElementById('cart-total-lg').innerText = totalItems;
}

function checkout() {
    let cartSummary = cart.map(item => `Product ${item.productId}: ${item.quantity} pcs`).join('\n');
    let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Cart Summary:\n${cartSummary}\nTotal Price: ${totalPrice.toFixed(2)} Baht`);
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the search form and input
    const searchInput = document.querySelector('.form-control[type="search"]');

    // Listen for the 'input' event on the search field
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();

        // Get all product items
        const products = document.querySelectorAll('.product-item');

        // Loop through the products and show/hide based on search query
        products.forEach(function (product) {
            const title = product.querySelector('.card-title').textContent.toLowerCase();

            if (title.includes(query)) {
                product.style.display = 'block'; // Show product if it matches
            } else {
                product.style.display = 'none'; // Hide product if it doesn't match
            }
        });
    });
});

document.querySelector('form[role="search"]').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
});