let cart = [];

function changeQuantityItem(inputId, delta) {
    const inputElement = document.getElementById(inputId);
    let currentValue = parseInt(inputElement.value);

    if (!isNaN(currentValue) && currentValue + delta > 0) {
        inputElement.value = currentValue + delta;
    }
}

function addToCart(productId, price, itemName) {
    let qty = parseInt(document.getElementById(`qty-${productId}`).value);

    if (qty > 0) {
        // Check if the item already exists in the cart
        const existingItem = cart.find(item => item.productId === productId);

        if (existingItem) {
            // Update the quantity if the item already exists in the cart
            existingItem.quantity += qty;
        } else {
            // Add new item to the cart
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
    const checkoutButton = document.querySelector('#proceedToCheckoutButton'); // Get the checkout button
    const clearButton = document.querySelector('#clearCartButton'); // Get the clear button

    let cartSummary = '';

    if (cart.length > 0) {
        cartSummary = '<ul class="list-group">';
        cart.forEach((item, index) => {
            cartSummary += `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <span>${item.name}</span><br>
                        <div class="input-group mt-2" style="width: 150px;">
                            <button class="btn btn-outline-secondary" onclick="changeQuantity(${index}, -1)">-</button>
                            <input type="text" class="form-control text-center" id="qty-input-${item.productId}" value="${item.quantity}" readonly>
                            <button class="btn btn-outline-secondary" onclick="changeQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                    <div>
                        <span>${(item.price * item.quantity).toFixed(2)} Baht</span>
                        <button class="btn btn-sm ms-3" onclick="removeItem(${index})">
                            <img src="images/trash.png" alt="delete" class="img-responsive" width="40" height="40">
                        </button>
                    </div>
                </li>`;
        });
        cartSummary += '</ul>';

        let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartSummary += `<p class="mt-3"><strong>Total Price: ${totalPrice.toFixed(2)} Baht</strong></p>`;

        // Show the "Proceed to Checkout" button if cart is not empty
        checkoutButton.style.display = 'block';
    } else {
        cartSummary = '<p>Your cart is empty.</p>';

        // Hide the "Proceed to Checkout" button if cart is empty
        checkoutButton.style.display = 'none';
    }

    // Update the modal body with the cart summary
    modalBody.innerHTML = cartSummary;
}

function clearCart() {
    cart = []; // Clear the cart array
    updateCart(); // Update the cart display
    checkout(); // Refresh the modal to show the empty cart
}

function changeQuantity(index, delta) {
    const item = cart[index];
    if (item.quantity + delta > 0) {
        item.quantity += delta;
    } else {
        // If the quantity reaches 0, you can remove the item or keep it at 1.
        item.quantity = 1;
    }

    // Update the cart and refresh the modal content
    updateCart();
    checkout(); // Refreshes the modal to show updated quantities
}

function removeItem(index) {
    cart.splice(index, 1); // Remove item from the cart array
    updateCart(); // Update the cart display (cart totals)
    checkout(); // Refresh the modal to show updated cart contents
}

// Function to proceed to checkout (can be customized)
function proceedToCheckout() {
    alert("Proceeding to Checkout...");
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the search form and input
    const searchInput = document.querySelector('.form-control[type="search"]');
    const searchButton = document.querySelector('button[type="submit"]'); // Get the search button

    // Function to filter products based on the search query
    function filterProducts(query) {
        const products = document.querySelectorAll('.product-item');

        products.forEach(function (product) {
            const title = product.querySelector('.card-title').textContent.toLowerCase();
            if (title.includes(query)) {
                product.style.display = 'block'; // Show product if it matches
            } else {
                product.style.display = 'none'; // Hide product if it doesn't match
            }
        });
    }

    // Listen for click event on the search button
    searchButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission
        const query = searchInput.value.toLowerCase();
        filterProducts(query); // Filter products when the search button is clicked
    });

    // Prevent default form submission behavior
    document.querySelector('form[role="search"]').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
    });
});