import { getCartTotal } from './ProductsCheckout.js';

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartQuantityDisplay(cart) {
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

function RemoveProductFromCart(id, type) {
    // console.log(id);
    // console.log(type);
    // console.log(cart);

    cart = cart.filter(item => !(item.id == id && item.type == type));

    saveCart();
    updateCartQuantityDisplay(cart);

    const Cartlist = document.querySelector(`li.item-li[data-product-id="${id}"][data-product-type="${type}"]`);
    //console.log(Cartlist);

    if (Cartlist) {
        Cartlist.remove();
    }

    const total = getCartTotal();
    const totalPrice = document.querySelector('.total-price')
    totalPrice.innerHTML = `<strong>Total:</strong> ${total.toFixed(2)} baht`;

    if (total === 0) {
        let message = document.getElementById("checkout-summary-body");
        message.innerHTML = `<p>Your cart is empty.</p>`;
    }

}

export { cart, saveCart, updateCartQuantityDisplay, changeQuantityItem, RemoveProductFromCart };