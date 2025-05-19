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
    const inputId = `qty-${id}-${type}`;

    const qtyInput = document.getElementById(inputId);

    if (!qtyInput) return;

    let currentQty = parseInt(qtyInput.value) || 1;
    let newQty = currentQty + change;

    if (newQty < 1) newQty = 1;

    qtyInput.value = newQty;
}

export { cart, saveCart, updateCartDisplay, changeQuantityItem };