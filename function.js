let cart = [];

function addToCart(productId, price, itemName) {
    let qty = parseFloat(document.getElementById(`qty-${productId}`).value);
    if (qty > 0) {
        // Check if the item already exists in the cart
        const existingItem = cart.find(item => item.productId === productId);

        if (existingItem) {
            // If item exists, update its quantity and price
            existingItem.quantity += qty;
        } else {
            // If item does not exist, add it to the cart
            cart.push({ productId: productId, quantity: qty, price: price, name: itemName });
        }

        // Update the cart display (both badge and modal)
        updateCart();

        // Show success modal
        document.getElementById('modal-body-added').innerText = `${itemName} added to your cart.`;
        let addedToCartModal = new bootstrap.Modal(document.getElementById('addedToCartModal'));
        addedToCartModal.show();
    } else {
        // Show quantity error modal
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
    const modalBody = document.getElementById('cart-modal-body');
    let cartSummary = '';
    
    if (cart.length > 0) {
        cartSummary = '<ul class="list-group">';
        cart.forEach(item => {
            cartSummary += `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${item.name} (${item.quantity} pcs)
                    <span>${(item.price * item.quantity).toFixed(2)} Baht</span>
                </li>`;
        });
        cartSummary += '</ul>';

        let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartSummary += `<p class="mt-3"><strong>Total Price: ${totalPrice.toFixed(2)} Baht</strong></p>`;
    } else {
        cartSummary = '<p>Your cart is empty.</p>';
    }

    // Update the modal body with the cart summary
    modalBody.innerHTML = cartSummary;
}

// Function to proceed to checkout (can be customized)
function proceedToCheckout() {
    alert("Proceeding to Checkout...");
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