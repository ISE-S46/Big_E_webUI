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

    const Cartlist = document.querySelectorAll(`li.item-li[data-product-id="${id}"][data-product-type="${type}"]`);
    Cartlist.forEach(item => {
        item.remove();
    });

    HandleCartButtonAndTotalPrice()

}

function ProductQuantityCheckout(id, type, changeBy) {

    const ProductQty = document.querySelector(`input.qty-input[data-product-id="${id}"][data-product-type="${type}"]`);
    const cartItem = cart.find(item => item.id === id && item.type === type);

    if (!ProductQty || !cartItem) {
        return;
    }

    let itemQty = cartItem.quantity;
    let itemPrice = cartItem.price * (itemQty + changeBy);

    itemQty = Math.max(1, cartItem.quantity + changeBy);
    itemPrice = Math.max(cartItem.price, itemPrice);

    const index = cart.indexOf(cartItem);
    cart[index].quantity = itemQty;

    let QuantityPrice = document.querySelector(`.ProductQuantityPrice[data-product-id="${id}"][data-product-type="${type}"]`);
    QuantityPrice.textContent =`${itemPrice.toLocaleString("th-TH", { maximumFractionDigits: 2 })} baht`;

    updateCartQuantityDisplay(cart);
    HandleCartButtonAndTotalPrice();

}

function ClearCartAll() {

    cart = [];

    updateCartQuantityDisplay(cart);

    const CartList = document.querySelectorAll(`li.item-li`);
    CartList.forEach(item => item.remove());

    HandleCartButtonAndTotalPrice();

}

function HandleCartButtonAndTotalPrice() {

    const total = getCartTotal();
    const formattedTotal = total.toLocaleString("th-TH", { maximumFractionDigits: 2 });
    const totalHtml = `<p class="mb-1"><strong>Subtotal:</strong> ${formattedTotal} baht</p>`;

    const Totalprice = [
        document.querySelector('.total-price'),
        document.querySelector('.total-price-checkout')
    ];

    Totalprice.forEach(ProductPrice => ProductPrice && (ProductPrice.innerHTML = totalHtml));

    const Checkoutmessage = document.getElementById('CartProductSummary');

    if (total === 0 && Checkoutmessage) {
        Checkoutmessage.innerHTML = `<p>Your cart is empty.</p>`;
    } 

    const ClearAll = document.querySelector('.ClearAll-btn');
    const CheckoutBtn = document.getElementById('Checkout-btn');
    const message = document.getElementById('checkout-summary-body');

    if (total === 0 && ClearAll) {
        message.innerHTML = `<p>Your cart is empty.</p>`;
        CheckoutBtn.remove();
        ClearAll.remove();
    }

}

export { cart, updateCartQuantityDisplay, changeQuantityItem, RemoveProductFromCart, ProductQuantityCheckout, ClearCartAll };