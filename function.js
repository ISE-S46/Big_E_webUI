let cart = [];

let productsPerPage = 8; // Show 8 products initially (2 rows of 4 products)

// Array of toys data, id end with .0 is toys
const toys = [
    { id: 1.0, name: "HG GUNDAM AERIAL REBUILD", image: "images/Aerial.jpg", price: 590.00, description: "Bandai® Gundam Gunpla High Grade Plastic Model Kits Series HG XVX-016RN GUNDAM AERIAL REBUILD The repaired version of the Gundam Aerial from Mobile Suit Gundam: The Witch from Mercury." },
    { id: 2.0, name: "PG RX-0 UNICORN GUNDAM", image: "images/PG_Unicorn.webp", price: 6800.00, description: "Bandai® Gunpla Perfect Grade 1/60 Model Kit PG RX-0 UNICORN GUNDAM" },
    { id: 3.0, name: "PG GUNDAM EXIA", image: "images/exia.jpg", price: 6490.00, description: "Bandai® Gunpla Perfect Grade 1/60 Model Kit PG GN-001 GUNDAM EXIA" },
    { id: 4.0, name: "MG MS-06R ZAKU II HIGH MOBILITY TYPE PSYCHO ZAKU VER KA", image: "images/psycho_zaku.jpg", price: 2790.00, description: "Bandai® Gunpla Master Grade 1/100 VER KA Model Kit MG MS-06R ZAKU II HIGH MOBILITY TYPE PSYCHO ZAKU VER KA" },
    { id: 5.0, name: "Tetris wood puzzle", image: "images/Tetris.jpg", price: 159.00, description: "A wooden puzzle based on the classic Tetris game. Perfect for brain training and a stylish decorative piece." },
    { id: 6.0, name: "Catan [EN]", image: "images/Catan.jpg", price: 669.00, description: "The Settlers of Catan board game, a strategy game where players collect resources and build roads and settlements." },
    { id: 7.0, name: "(BSF) WARHAMMER 40000: INTRODUCTORY SET (ENG)", image: "images/wh40000is.jpg", price: 2450.00, description: "A great way to begin your journey into the Warhammer 40,000 hobby. Includes everything you need to start playing the legendary tabletop game." },
    { id: 8.0, name: "Warhammer 40k: Adeptus Custodes: Allarus Custodians", image: "images/whc.jpg", price: 2150.00, description: "Adeptus Custodes miniatures from the Warhammer 40k universe, highly detailed for collectors and gamers alike." },
    { id: 9.0, name: "Honkai: Star Rail Qingque 1/10 Figure", image: "images/QQ.jpg", price: 1190.00, description: "A detailed 1/10 scale figure of Qingque from Honkai: Star Rail." },
    { id: 10.0, name: "Plarail Bullet Train N700S Basic Set", image: "images/N700.jpg", price: 2150.00, description: "All-in- one set for those who want to start Plarail with [Shinkansen N700S]!" }
];

// Array of games/DLC data, id end with .1 is games, ._2 is game DLC
const games = [
    { id: 1.1, name: "Warhammer 40,000: Space Marine 2", image: "images/sm2.jpg", price: 1490.00, description: "Embody the superhuman skill and brutality of a Space Marine. Unleash deadly abilities and devastating weaponry to obliterate the relentless Tyranid swarms. Defend the Imperium in spectacular third-person action in solo or multiplayer modes." },
    { id: 2.1, name: "HELLDIVERS™ 2", image: "images/hd2.jpg", price: 1290.00, description: "HELLDIVERS™ 2 is a 3rd person squad-based shooter that sees the elite forces of the Helldivers battling to win an intergalactic struggle to rid the galaxy of the rising alien threats." },
    { id: 3.1, name: "ELDEN RING", image: "images/edl.jpg", price: 1790.00, description: "The Lands Between are part of a vast continent where magnificent open fields and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats awaits you." },
    { id: 4.1, name: "NieR:Automata™", image: "images/Nier_Automata.jpg", price: 1390.00, description: "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines. Humanity has been driven from the Earth by mechanical beings from another world. In a final effort to take back the planet, the human resistance sends a force of android soldiers to destroy the invaders. Now, a war between machines and androids rages on... A war that could soon unveil a long-forgotten truth of the world."},
    { id: 5.1, name: "NieR Replicant™ ver.1.22474487139...", image: "images/Nier_Replicant.jpg", price: 1990.00, description: "A thousand-year lie that would live on for eternity... NieR Replicant ver.1.22474487139... is an updated version of NieR Replicant, previously only released in Japan. Discover the one-of-a-kind prequel to the critically-acclaimed masterpiece NieR:Automata. Now with a modern upgrade, experience masterfully revived visuals, a fascinating storyline and more! " },
    { id: 6.1, name: "Cyberpunk 2077", image: "images/Cyberpunk.jpg", price: 1799.00, description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival." },
    { id: 7.1, name: "DARK SOULS™ III", image: "images/ds.jpg", price: 1500.00, description: "The third and final chapter of the Dark Souls series, As fires fade and the world falls into ruin, journey into a universe filled with more colossal enemies and environments. Players will be immersed into a world of epic atmosphere and darkness through faster gameplay and amplified combat intensity. " },
    { id: 8.1, name: "Cities: Skylines", image: "images/cs1.jpg", price: 819.00, description: "Cities: Skylines is a modern take on the classic city simulation. The game introduces new game play elements to realize the thrill and hardships of creating and maintaining a real city whilst expanding on some well-established tropes of the city building experience. You’re only limited by your imagination, so take control and reach for the sky!" },
    { id: 9.1, name: "Stellaris", image: "images/Stellaris.jpg", price: 1089.00, description: "Get ready to explore, discover and interact with a multitude of species as you journey among the stars. Forge a galactic empire by sending out science ships to survey and explore, while construction ships build stations around newly discovered planets. Discover buried treasures and galactic wonders as you spin a direction for your society, creating limitations and evolutions for your explorers. Alliances will form and wars will be declared." },
    { id: 9.02, name: "Stellaris: Apocalypse", image: "images/St_Apo.jpg", price: 669.00, description: "Stellaris: Apocalypse is a full expansion which redefines stellar warfare for all players with a host of new offensive and defensive options. Destroy entire worlds with terrifying new planet-killer weapons, fight against (or alongside) ruthless space pirates, and maybe discover a few non-violent game features as well." }
];

// Filter products based on selected criteria
function filterProductsByCriteria() {
    const category = document.getElementById('categoryFilter').value;

    // Get the selected price ranges from checkboxes
    const selectedPriceRanges = Array.from(document.querySelectorAll('#priceFilter .form-check-input:checked'))
        .map(checkbox => checkbox.value);

    // Filter toys based on selected criteria
    let filteredToys = toys.filter(product => applyFilters(product, category, selectedPriceRanges, 'toys'));

    // Filter games based on selected criteria
    let filteredGames = games.filter(product => applyFilters(product, category, selectedPriceRanges, 'games'));

    // Filter best sellers, which could be a mix of toys and games
    let filteredBestSellers = bestSellers.filter(product => {
        if (toys.some(toy => toy.id === product.id)) {
            // It's a toy, apply toy filters
            return applyFilters(product, category, selectedPriceRanges, 'toys');
        } else if (games.some(game => game.id === product.id)) {
            // It's a game, apply game filters
            return applyFilters(product, category, selectedPriceRanges, 'games');
        }
        return false; // If not found in either, exclude it
    });

    // Display the filtered toys in the toys section
    displayProducts(filteredToys, 'products-container', 'More');

    // Display the filtered games in the games section
    displayProducts(filteredGames, 'games-container', 'games-more-btn');

    // Display the filtered best sellers in the best sellers section
    displayProducts(filteredBestSellers, 'best-seller-container');
}

// Helper function to apply filters based on category and price range
function applyFilters(product, category, priceRanges, section) {
    // Filter by category (only for toys and games, skip for best sellers)
    if (category !== 'all' && category !== section && section !== '') {
        return false;
    }

    // Filter by price range
    if (priceRanges.length > 0) {
        const price = product.price;
        let matchesPrice = false;

        // Check if the product falls within any of the selected price ranges
        priceRanges.forEach(priceRange => {
            if (priceRange === '0-500' && price <= 500) matchesPrice = true;
            if (priceRange === '500-1500' && price > 500 && price <= 1500) matchesPrice = true;
            if (priceRange === '1500-3000' && price > 1500 && price <= 3000) matchesPrice = true;
            if (priceRange === '3000+' && price > 3000) matchesPrice = true;
        });

        if (!matchesPrice) return false; // Exclude product if no price range matches
    }

    return true;
}

// Listen for filter changes
document.getElementById('categoryFilter').addEventListener('change', filterProductsByCriteria);
document.getElementById('priceFilter').addEventListener('change', filterProductsByCriteria);

// Call this function on page load to initialize the filtered view
document.addEventListener('DOMContentLoaded', filterProductsByCriteria);

// Reset filter function
function resetFilter() {
    document.getElementById('categoryFilter').value = 'all';
    
    // Uncheck all price range checkboxes
    const priceCheckboxes = document.querySelectorAll('#priceFilter .form-check-input');
    priceCheckboxes.forEach(checkbox => checkbox.checked = false);

    // Call the filter function to reset the view
    filterProductsByCriteria();
}

// Attach event listener to reset filter button
document.getElementById('resetFilter').addEventListener('click', resetFilter);
document.getElementById('resetFilter1').addEventListener('click', resetFilter);

// Generic function to dynamically display products
function displayProducts(products, containerId, moreButtonId, limit = productsPerPage) {
    const productsContainer = document.getElementById(containerId);
    productsContainer.innerHTML = ''; // Clear existing content

    // Loop through the products array and display only the number specified by 'limit'
    products.slice(0, limit).forEach(product => {
        const productCard = `
            <div class="col-6 col-md-3 mb-3 product-item" id="product-${product.id}">
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
                            <div class="input-group center" id="Quantitybar">
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
                <img src="${product.image}" class="img-fluid img-responsive mb-3" width="600" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h2>${product.name}</h2>
                <p><strong>Price:</strong> ${product.price.toFixed(2)} baht</p>
                <p>${product.description || 'No description available.'}</p>
                <div class="input-group mb-3" id="Quantitybar">
                    <button class="btn btn-outline-secondary" onclick="changeQuantityItem('qty-${product.id}', -1)">-</button>
                    <input type="text" class="form-control text-center" id="qty-${product.id}" min="1" value="1">
                    <button class="btn btn-outline-secondary" onclick="changeQuantityItem('qty-${product.id}', 1)">+</button>
                </div>
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
            <div class="col-6 col-md-3 mb-3 product-item" id="product-${product.id}">
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

// function to update the cart display
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
                        <div class="input-group mt-2" id="Quantitybar">
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

    // Function to show more products (if the "Show More" button exists)
    function triggerShowMoreButtons() {
        const moreButton = document.getElementById('More');
        const moreButton2 = document.getElementById('games-more-btn');
        if (moreButton && moreButton.style.display !== 'none') {
            moreButton.click(); // Trigger the "Show More" button
            moreButton2.click(); // Trigger the "More Game" button
        }
    }

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

        if (query) {
            // If there is a search query, trigger the "Show More" buttons immediately
            triggerShowMoreButtons();

            // After giving the "Show More" button time to load, filter the products
            setTimeout(function () {
                filterProducts(query); // Filter products and scroll to the first match
            }, 200); // Small delay to allow "Show More" to complete loading
        } else {
            // If there's no search query, just show all products
            filterProducts(query);
        }
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