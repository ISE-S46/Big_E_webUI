let cart = [];

let productsPerPage = 8; // Show 8 products initially (2 rows of 4 products)

// Array of toys data, id end with .0 is toys .1 is games ._2 is game DLC
const toys = [
    { id: 1.0, name: "HG GUNDAM AERIAL REBUILD", image: "images/Aerial.jpg", price: 590.00 },
    { id: 2.0, name: "PG RX-0 UNICORN GUNDAM", image: "images/PG_Unicorn.webp", price: 6800.00 },
    { id: 3.0, name: "PG GUNDAM EXIA", image: "images/exia.jpg", price: 6490.00 },
    { id: 4.0, name: "MG MS-06R ZAKU II HIGH MOBILITY TYPE PSYCHO ZAKU VER KA", image: "images/psycho_zaku.jpg", price: 2790.00 },
    { id: 5.0, name: "Tetris wood puzzle", image: "images/Tetris.jpg", price: 159.00 },
    { id: 6.0, name: "Catan [EN]", image: "images/Catan.jpg", price: 1920.00 },
    { id: 7.0, name: "(BSF) WARHAMMER 40000: INTRODUCTORY SET (ENG)", image: "images/wh40000is.jpg", price: 2450.00 },
    { id: 8.0, name: "Warhammer 40k: Adeptus Custodes: Allarus Custodians", image: "images/whc.jpg", price: 2150.00 },
    { id: 9.0, name: "Honkai: Star Rail Qingque 1/10 Figure", image: "images/QQ.jpg", price: 1190.00 },
    { id: 10.0, name: "Plarail Bullet Train N700S Basic Set", image: "images/N700.jpg", price: 2150.00 }
];

// Array of games/DLC data
const games = [
    { id: 1.1, name: "Warhammer 40,000: Space Marine 2", image: "images/sm2.jpg", price: 1490.00 },
    { id: 2.1, name: "HELLDIVERS™ 2", image: "images/hd2.jpg", price: 1290.00 },
    { id: 3.1, name: "ELDEN RING", image: "images/edl.jpg", price: 1790.00 },
    { id: 4.1, name: "NieR:Automata™", image: "images/Nier_Automata.jpg", price: 1390.00 },
    { id: 5.1, name: "NieR Replicant™ ver.1.22474487139...", image: "images/Nier_Replicant.jpg", price: 1990.00 },
    { id: 6.1, name: "Cyberpunk 2077", image: "images/Cyberpunk.jpg", price: 1799.00 },
    { id: 7.1, name: "DARK SOULS™ III", image: "images/ds.jpg", price: 1500.00 },
    { id: 8.1, name: "Cities: Skylines", image: "images/cs1.jpg", price: 819.00 },
    { id: 9.1, name: "Stellaris", image: "images/Stellaris.jpg", price: 1089.00 },
    { id: 9.02, name: "Stellaris: Apocalypse", image: "images/St_Apo.jpg", price: 669.00 }
];

// Generic function to dynamically display products
function displayProducts(products, containerId, moreButtonId, limit = productsPerPage) {
    const productsContainer = document.getElementById(containerId);
    productsContainer.innerHTML = ''; // Clear existing content

    // Loop through the products array and display only the number specified by 'limit'
    products.slice(0, limit).forEach(product => {
        const productCard = `
            <div class="col-md-3 mb-3 product-item" id="product-${product.id}">
                <div class="card text-center d-flex flex-column h-100 mb-3 shadow">
                    <a href="#" onclick="openProductModal(${product.id}); return false;">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    </a>
                    <div class="card-body d-flex flex-column h-100">
                        <a href="#" class="text-dark link-underline link-underline-opacity-0" onclick="openProductModal(${product.id}); return false;">
                            <div class="card-body d-flex flex-column h-100">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.price.toFixed(2)} baht</p>
                            </div>
                        </a>
                        <div class="mt-auto">
                            <div class="input-group center" style="width: 130px;">
                                <button class="btn btn-outline-secondary" onclick="changeQuantityItem('qty-${product.id}', -1)">-</button>
                                <input type="text" class="form-control text-center" id="qty-${product.id}" min="1" value="1">
                                <button class="btn btn-outline-secondary" onclick="changeQuantityItem('qty-${product.id}', 1)">+</button>
                            </div>
                            <button class="btn btn-warning mt-3" onclick="addToCart(${product.id}, ${product.price}, '${product.name}')">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productsContainer.innerHTML += productCard; // Append product card
    });

    // Hide the "More product" button if all products are displayed
    const moreButton = document.getElementById(moreButtonId);
    if (limit >= products.length) {
        moreButton.style.display = 'none';
    } else {
        moreButton.style.display = 'inline-block';
    }
}

// Function to open the modal with product details
function openProductModal(productId) {
    const product = toys.find(p => p.id === productId) || games.find(p => p.id === productId);

    if (!product) {
        return;
    }

    // Create the HTML for product details to display inside the modal
    const productDetailsHtml = `
        <div class="row">
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h2>${product.name}</h2>
                <p><strong>Price:</strong> ${product.price.toFixed(2)} baht</p>
                <p>${product.description || 'No description available.'}</p>
                <button class="btn btn-warning" onclick="addToCart(${product.id}, ${product.price}, '${product.name}')">Add to Cart</button>
            </div>
        </div>
    `;

    // Insert the product details into the modal body
    document.getElementById('product-modal-body').innerHTML = productDetailsHtml;

    // Open the modal
    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    productModal.show();
}

//stop screen jumping
$('#readmore').click(function(e) {
    e.preventDefault();
  });

// Show more products for a specific section
function showMoreProducts(products, containerId, moreButtonId) {
    displayProducts(products, containerId, moreButtonId, products.length); // Show all products
}

// Show less products for a specific section
function showLessProducts(products, containerId, moreButtonId) {
    displayProducts(products, containerId, moreButtonId, productsPerPage); // Show only the initial products
}

// Add event listener to the "More product" button
document.addEventListener('DOMContentLoaded', function () {
    // Display toys
    displayProducts(toys, 'products-container', 'More'); // Ensure 'More' is the ID for the toys section button

    // Attach event listener for "More" button in toys section
    document.getElementById('More').addEventListener('click', function () {
        showMoreProducts(toys, 'products-container', 'More');
        document.getElementById('show-less-products-container').style.display = 'inline-block'; // Show the Show Less button
    });

    // Attach event listener for "Show Less" button in toys section
    document.getElementById('show-less-products-container').addEventListener('click', function () {
        showLessProducts(toys, 'products-container', 'More');
        this.style.display = 'none'; // Hide the Show Less button
    });

    // Display games
    displayProducts(games, 'games-container', 'games-more-btn'); // Ensure 'games-more-btn' is the ID for the games section button

    // Attach event listener for "More Games/DLC" button
    document.getElementById('games-more-btn').addEventListener('click', function () {
        showMoreProducts(games, 'games-container', 'games-more-btn');
        document.getElementById('show-less-games-container').style.display = 'inline-block'; // Show the Show Less button
    });

    // Attach event listener for "Show Less" button in games section
    document.getElementById('show-less-games-container').addEventListener('click', function () {
        showLessProducts(games, 'games-container', 'games-more-btn');
        this.style.display = 'none'; // Hide the Show Less button
    });
});

// Combine toys and games for best sellers (you can mix or filter based on specific criteria)
const bestSellers = [
    games[3],  // Example: ELDEN RING (from games)
    toys[0],   // Example: HG GUNDAM AERIAL REBUILD (from toys)
    games[1],  // Example: HELLDIVERS™ 2 (from games)
    toys[2],   // Example: PG GUNDAM EXIA (from toys)
];

// Function to dynamically display all best seller products
function displayBestSellers() {
    const bestSellerContainer = document.getElementById('best-seller-container');
    bestSellerContainer.innerHTML = ''; // Clear existing content

    // Loop through the bestSellers array and display all products
    bestSellers.forEach(product => {
        const productCard = `
            <div class="col-md-3 mb-3 product-item" id="product-${product.id}">
                <div class="card text-center d-flex flex-column h-100 mb-3 shadow">
                    <a href="#" class="text-dark link-underline link-underline-opacity-0" onclick="openProductModal(${product.id}); return false;">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                        </div>
                    </a>
                </div>
            </div>
        `;
        bestSellerContainer.innerHTML += productCard; // Append product card
    });
}

// Automatically display all best sellers when the page loads
document.addEventListener('DOMContentLoaded', function () {
    displayBestSellers(); // Display all best sellers on page load
});

function changeQuantityItem(inputId, delta) {
    const inputElement = document.getElementById(inputId);
    let currentValue = parseInt(inputElement.value);

    if (!isNaN(currentValue) && currentValue + delta > 0) {
        inputElement.value = currentValue + delta;
    }
}

function addToCart(productId, price, itemName) {
    // Get the quantity input element
    let qtyInput = document.getElementById(`qty-${productId}`);
    let qty = parseFloat(qtyInput.value);

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

        // Update the toast content with the item added message
        document.getElementById('toast-body-added').innerHTML = `${itemName} has been added to your cart.`;

        // Show the toast
        const addedToCartToast = new bootstrap.Toast(document.getElementById('addedToCartToast'));
        addedToCartToast.show();
    } else {
        // Show quantity error modal
        let quantityModal = new bootstrap.Modal(document.getElementById('quantityModal'));
        quantityModal.show();
    }
}

// Example of a function to update the cart display (this is just a placeholder)
function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-total').innerText = totalItems; // Update cart total display
    document.getElementById('cart-total-lg').innerText = totalItems;
}

function checkout() {
    const modalBody = document.getElementById('cart-modal-body');
    const checkoutButton = document.querySelector('#proceedToCheckoutButton'); // Get the checkout button

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
                    <div class="d-flex align-items-center">
                        <span>${(item.price * item.quantity).toFixed(2)} Baht</span>
                        <button class="btn btn-sm ms-3" onclick="removeItem(${index})">
                            <img src="images/trash.png" alt="delete" class="img-responsive" width="30" height="30">
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

// Function to proceed to checkout (can be customized)
function proceedToCheckout() {
    const checkoutSummaryBody = document.getElementById('checkout-summary-body');

    // Calculate the total price
    let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Create the cart summary content
    let summaryContent = '<ul class="list-group">';
    cart.forEach(item => {
        summaryContent += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${item.name} (${item.quantity} pcs)
                <span>${(item.price * item.quantity).toFixed(2)} Baht</span>
            </li>`;
    });
    summaryContent += '</ul>';

    // Add the total price at the end
    summaryContent += `<p class="mt-3"><strong>Total Price: ${totalPrice.toFixed(2)} Baht</strong></p>`;

    // Update the modal body with the cart summary and total price
    checkoutSummaryBody.innerHTML = summaryContent;

    // Show the checkout summary modal
    const checkoutSummaryModal = new bootstrap.Modal(document.getElementById('checkoutSummaryModal'));
    checkoutSummaryModal.show();
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

document.addEventListener("DOMContentLoaded", function () {
    // Get the search form and input
    const searchInput = document.querySelector('.form-control[type="search"]');
    const searchButton = document.querySelector('button[type="submit"]'); // Get the search button
    const brandLink = document.querySelector('.navbar-brand'); // Get the "Big E" brand link

    // Function to filter products based on the search query and scroll to the first match
    function filterProducts(query) {
        const products = document.querySelectorAll('.product-item');
        let firstMatch = null;

        products.forEach(function (product) {
            const title = product.querySelector('.card-title').textContent.toLowerCase();
            if (title.includes(query)) {
                product.style.display = 'block'; // Show product if it matches
                if (!firstMatch) {
                    firstMatch = product; // Save the first matching product
                }
            } else {
                product.style.display = 'none'; // Hide product if it doesn't match
            }
        });

        // Scroll to the first matched product if one exists
        if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // Listen for click event on the search button
    searchButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission
        const query = searchInput.value.toLowerCase();
        filterProducts(query); // Filter products and scroll to the first match
    });

    // Listen for click event on the brand link (Big E)
    brandLink.addEventListener('click', function (e) {
        // Clear the search input
        searchInput.value = '';

        // Show all products again
        const products = document.querySelectorAll('.product-item');
        products.forEach(function (product) {
            product.style.display = 'block'; // Show all products
        });
    });

    // Prevent default form submission behavior
    document.querySelector('form[role="search"]').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
    });
});