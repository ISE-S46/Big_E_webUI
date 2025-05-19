let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartDisplay(cart) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-total').innerText = totalItems;
    document.getElementById('cart-total-lg').innerText = totalItems;
}

function changeQuantityItem(id, type, change) {

    const qtyInput = document.querySelectorAll(`input.qty-input[data-product-id="${id}"][data-product-type="${type}"]`);

    if (!qtyInput) return;

    qtyInput.forEach(input => {
        let currentQty = parseInt(input.value) || 1;
        let newQty = currentQty + change;

        if (newQty < 1) newQty = 1;

        input.value = newQty;
    });
}

export { cart, saveCart, updateCartDisplay, changeQuantityItem };