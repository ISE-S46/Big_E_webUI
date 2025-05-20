import { cart, saveCart, updateCartQuantityDisplay } from './SynchronizeQuantity.js';

function addToCart(id, type, price, itemName) {

    let qtyInputs = document.querySelectorAll(`input.qty-input[data-product-id="${id}"][data-product-type="${type}"]`);

    // console.log(id, type, price, itemName);
    // console.log(qtyInput);

    if (qtyInputs.length === 0) return;

    let qty = parseInt(qtyInputs[0].value);

    if (isNaN(qty) || qty <= 0) {
        showAddedToCartToast(id, type, 0, itemName);
        return;
    }

    const existingItem = cart.find(item => item.id == id && item.type === type);
    if (existingItem) {
        existingItem.quantity += qty;
    } else {
        cart.push({ id, type, quantity: qty, price, name: itemName });
    }

    saveCart();
    updateCartQuantityDisplay(cart);
    showAddedToCartToast(id, type, qty, itemName);
}

function showAddedToCartToast(id, type,qty, itemName) {
    const toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container position-fixed top-0 end-0 p-3';
    toastContainer.style.zIndex = 1100;

    const uniqueId = `toast-${id}-${type}`;

    toastContainer.innerHTML = `
        <div id="${uniqueId}" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">Item Added to Cart</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                <p>Added ${qty} × ${itemName} to your cart.</p>
            </div>
        </div>
    `;

    document.body.appendChild(toastContainer);

    const toastEl = document.getElementById(uniqueId);
    const toast = new bootstrap.Toast(toastEl, {
        delay: 1500, // Show for 1.5 seconds instead of the default 5s
      });

    toast.show();

    toastEl.addEventListener('hidden.bs.toast', () => {
        toastContainer.remove();
    });
}

export { addToCart };