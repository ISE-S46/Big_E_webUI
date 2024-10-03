let cart = [];

function addToCart(productId, price) {
    let qty = document.getElementById(`qty-${productId}`).value;
    if (qty > 0) {
        cart.push({ productId: productId, quantity: parseInt(qty), price: price });
        updateCart();
    } else {
        alert("Please enter a valid quantity.");
    }
}

function updateCart() {
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-total').innerText = totalItems;
}

function checkout() {
    let cartSummary = cart.map(item => `Product ${item.productId}: ${item.quantity} pcs`).join('\n');
    let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Cart Summary:\n${cartSummary}\nTotal Price: $${totalPrice.toFixed(2)}`);
}