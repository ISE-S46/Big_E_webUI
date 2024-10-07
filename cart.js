// Function to update cart in localStorage
function updateLocalStorageCart() {
    localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in localStorage
}

// Function to load cart from localStorage
function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCart(); // Update cart UI (badge and modal)
    }
}