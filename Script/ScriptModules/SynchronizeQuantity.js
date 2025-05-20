import { getCartTotal } from './ProductsCheckout.js';

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartQuantityDisplay(cart) {

    localStorage.setItem('cart', JSON.stringify(cart));

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

    cart = cart.filter(item => !(item.id == id && item.type == type));

    updateCartQuantityDisplay(cart);

    const Cartlist = document.querySelector(`li.item-li[data-product-id="${id}"][data-product-type="${type}"]`);
    Cartlist.remove();

    HandleCartButton()

}

function ClearCartAll() {

    cart = [];

    updateCartQuantityDisplay(cart);

    const CartList = document.querySelectorAll(`li.item-li`);
    CartList.forEach(item => item.remove());

    HandleCartButton()

}

function HandleCartButton() {

    const total = getCartTotal();
    const totalPrice = document.querySelector('.total-price')
    totalPrice.innerHTML = `<strong>Total:</strong> ${total.toFixed(2)} baht`;

    if (total === 0) {
        const message = document.getElementById("checkout-summary-body");
        const ClearAll = document.querySelector(".ClearAll-btn")
        const CheckoutBtn = document.getElementById("Checkout-btn");

        message.innerHTML = `<p>Your cart is empty.</p>`;
        CheckoutBtn.remove();
        ClearAll.remove();
    }

}

export { cart, updateCartQuantityDisplay, changeQuantityItem, RemoveProductFromCart, ClearCartAll };