import { cart, saveCart, updateCartDisplay } from "./SynchronizeQuantity.js";

function addToCart(id, type, price, itemName) {

    let qtyInput = document.getElementById(`qty-${id}-${type}`);
    let qty = parseInt(qtyInput.value);

    // console.log(id, type, price, itemName);
    // console.log(qtyInput);
    // console.log(qty);

    if (qty > 0) {
        const existingItem = cart.find(item => item.id == id && item.type === type);
        const alertToast = document.getElementById('toast-body-added');

        if (existingItem) {
            existingItem.quantity += qty;
            // console.log("added same product to cart");
        } else {
            cart.push({ id, type, quantity: qty, price, name: itemName });
            // console.log("added to cart");
        }
        // console.log(cart);

        saveCart();
        updateCartDisplay(cart);
        showAddedToCartToast(id, type, qty, itemName);
    } else {
        showAddedToCartToast(id, type, 0, itemName);
        // console.log("bruh");
    }
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