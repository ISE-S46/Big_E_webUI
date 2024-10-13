let cart = [];
let productsPerPage = 8; // Show 8 products initially (2 rows of 4 products)

// Array of toys data, id end with -0 is toys
const toys = [
    { id: 1-0, name: "HG GUNDAM AERIAL REBUILD", image: "images/Aerial.jpg", price: 590.00, description: "Bandai® Gundam Gunpla High Grade Plastic Model Kits Series HG XVX-016RN GUNDAM AERIAL REBUILD The repaired version of the Gundam Aerial from Mobile Suit Gundam: The Witch from Mercury." },
    { id: 2-0, name: "PG RX-0 UNICORN GUNDAM", image: "images/PG_Unicorn.webp", price: 6800.00, description: "Bandai® Gunpla Perfect Grade 1/60 Model Kit PG RX-0 UNICORN GUNDAM" },
    { id: 3-0, name: "PG GUNDAM EXIA", image: "images/exia.jpg", price: 6490.00, description: "Bandai® Gunpla Perfect Grade 1/60 Model Kit PG GN-001 GUNDAM EXIA" },
    { id: 4-0, name: "MG MS-06R ZAKU II HIGH MOBILITY TYPE PSYCHO ZAKU VER KA", image: "images/psycho_zaku.jpg", price: 2790.00, description: "Bandai® Gunpla Master Grade 1/100 VER KA Model Kit MG MS-06R ZAKU II HIGH MOBILITY TYPE PSYCHO ZAKU VER KA" },
    { id: 5-0, name: "Tetris wood puzzle", image: "images/Tetris.jpg", price: 159.00, description: "A wooden puzzle based on the classic Tetris game. Perfect for brain training and a stylish decorative piece." },
    { id: 6-0, name: "Catan [EN]", image: "images/Catan.jpg", price: 669.00, description: "The Settlers of Catan board game, a strategy game where players collect resources and build roads and settlements." },
    { id: 7-0, name: "(BSF) WARHAMMER 40000: INTRODUCTORY SET (ENG)", image: "images/wh40000is.jpg", price: 2450.00, description: "A great way to begin your journey into the Warhammer 40,000 hobby. Includes everything you need to start playing the legendary tabletop game." },
    { id: 8-0, name: "Warhammer 40k: Adeptus Custodes: Allarus Custodians", image: "images/whc.jpg", price: 2150.00, description: "Adeptus Custodes miniatures from the Warhammer 40k universe, highly detailed for collectors and gamers alike." },
    { id: 9-0, name: "Honkai: Star Rail Qingque 1/10 Figure", image: "images/QQ.jpg", price: 1190.00, description: "A detailed 1/10 scale figure of Qingque from Honkai: Star Rail." },
    { id: 10-0, name: "Plarail Bullet Train N700S Basic Set", image: "images/N700.jpg", price: 2150.00, description: "All-in- one set for those who want to start Plarail with [Shinkansen N700S]!" }
];

// Array of games/DLC data, id end with -10 is games, -2_ is game DLC
const games = [
    { id: 1-10, name: "Warhammer 40,000: Space Marine 2", image: "images/sm2.jpg", price: 1490.00, description: "Embody the superhuman skill and brutality of a Space Marine. Unleash deadly abilities and devastating weaponry to obliterate the relentless Tyranid swarms. Defend the Imperium in spectacular third-person action in solo or multiplayer modes." },
    { id: 2-10, name: "HELLDIVERS™ 2", image: "images/hd2.jpg", price: 1290.00, description: "HELLDIVERS™ 2 is a 3rd person squad-based shooter that sees the elite forces of the Helldivers battling to win an intergalactic struggle to rid the galaxy of the rising alien threats." },
    { id: 3-10, name: "ELDEN RING", image: "images/edl.jpg", price: 1790.00, description: "The Lands Between are part of a vast continent where magnificent open fields and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats awaits you." },
    { id: 4-10, name: "NieR:Automata™", image: "images/Nier_Automata.jpg", price: 1390.00, description: "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines. Humanity has been driven from the Earth by mechanical beings from another world. In a final effort to take back the planet, the human resistance sends a force of android soldiers to destroy the invaders. Now, a war between machines and androids rages on... A war that could soon unveil a long-forgotten truth of the world."},
    { id: 5-10, name: "NieR Replicant™ ver.1.22474487139...", image: "images/Nier_Replicant.jpg", price: 1990.00, description: "A thousand-year lie that would live on for eternity... NieR Replicant ver.1.22474487139... is an updated version of NieR Replicant, previously only released in Japan. Discover the one-of-a-kind prequel to the critically-acclaimed masterpiece NieR:Automata. Now with a modern upgrade, experience masterfully revived visuals, a fascinating storyline and more! " },
    { id: 6-10, name: "Cyberpunk 2077", image: "images/Cyberpunk.jpg", price: 1799.00, description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival." },
    { id: 7-10, name: "DARK SOULS™ III", image: "images/ds.jpg", price: 1500.00, description: "The third and final chapter of the Dark Souls series, As fires fade and the world falls into ruin, journey into a universe filled with more colossal enemies and environments. Players will be immersed into a world of epic atmosphere and darkness through faster gameplay and amplified combat intensity. " },
    { id: 8-10, name: "Cities: Skylines", image: "images/cs1.jpg", price: 819.00, description: "Cities: Skylines is a modern take on the classic city simulation. The game introduces new game play elements to realize the thrill and hardships of creating and maintaining a real city whilst expanding on some well-established tropes of the city building experience. You’re only limited by your imagination, so take control and reach for the sky!" },
    { id: 9-10, name: "Stellaris", image: "images/Stellaris.jpg", price: 1089.00, description: "Get ready to explore, discover and interact with a multitude of species as you journey among the stars. Forge a galactic empire by sending out science ships to survey and explore, while construction ships build stations around newly discovered planets. Discover buried treasures and galactic wonders as you spin a direction for your society, creating limitations and evolutions for your explorers. Alliances will form and wars will be declared." },
    { id: 9-21, name: "Stellaris: Apocalypse", image: "images/St_Apo.jpg", price: 669.00, description: "Stellaris: Apocalypse is a full expansion which redefines stellar warfare for all players with a host of new offensive and defensive options. Destroy entire worlds with terrifying new planet-killer weapons, fight against (or alongside) ruthless space pirates, and maybe discover a few non-violent game features as well." }
];
// Combine toys and games into one array
const allProducts = [
    ...toys.map(item => ({ ...item, type: 'toy' })),   // Add 'type' property to each toy
    ...games.map(item => ({ ...item, type: 'game' }))  // Add 'type' property to each game
];

// Combine toys and games for best sellers
const bestSellers = [
    games[3],  // Example: ELDEN RING (from games)
    toys[0],   // Example: HG GUNDAM AERIAL REBUILD (from toys)
    games[1],  // Example: HELLDIVERS™ 2 (from games)
    toys[2],   // Example: PG GUNDAM EXIA (from toys)
];

// Function to filter products based on selected criteria
function filterProductsByCriteria() {
    const category = document.getElementById('categoryFilter').value;
    const selectedPriceRanges = Array.from(document.querySelectorAll('#priceFilter .form-check-input:checked')).map(checkbox => checkbox.value);

    // Filter toys, games, and best sellers
    const filteredToys = filterByCategoryAndPrice(toys, category, selectedPriceRanges, 'toys');
    const filteredGames = filterByCategoryAndPrice(games, category, selectedPriceRanges, 'games');
    const filteredBestSellers = bestSellers.filter(product => filterByProductType(product, category, selectedPriceRanges));

    // Display filtered products in their respective sections
    displayProducts(filteredToys, 'products-container', 'More');
    displayProducts(filteredGames, 'games-container', 'games-more-btn');
    displayBestSellers(filteredBestSellers);
}

// Helper function to filter products by category and price
function filterByCategoryAndPrice(products, category, priceRanges, section) {
    return products.filter(product => applyFilters(product, category, priceRanges, section));
}

// Helper function to determine whether a product is a toy or game
function filterByProductType(product, category, priceRanges) {
    if (toys.some(toy => toy.id === product.id)) {
        return applyFilters(product, category, priceRanges, 'toys');
    } else if (games.some(game => game.id === product.id)) {
        return applyFilters(product, category, priceRanges, 'games');
    }
    return false; // Exclude if product is neither toy nor game
}

// Helper function to apply filters based on category and price range
function applyFilters(product, category, priceRanges, section) {
    // Category filter (skip best sellers section)
    if (category !== 'all' && category !== section) return false;

    // Price range filter
    if (priceRanges.length === 0) return true;

    return priceRanges.some(priceRange => {
        const price = product.price;
        switch (priceRange) {
            case '0-500': return price <= 500;
            case '500-1500': return price > 500 && price <= 1500;
            case '1500-3000': return price > 1500 && price <= 3000;
            case '3000+': return price > 3000;
            default: return false;
        }
    });
}

// Event listener for filter changes
function setupFilterListeners() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');

    categoryFilter.addEventListener('change', filterProductsByCriteria);
    priceFilter.addEventListener('change', filterProductsByCriteria);
    document.addEventListener('DOMContentLoaded', filterProductsByCriteria);
}

// Reset filter function
function resetFilter() {
    document.getElementById('categoryFilter').value = 'all';

    // Uncheck all price range checkboxes
    document.querySelectorAll('#priceFilter .form-check-input').forEach(checkbox => checkbox.checked = false);

    // Reset the product display
    filterProductsByCriteria();
}

// Setup reset button event listeners
function setupResetListeners() {
    document.getElementById('resetFilter').addEventListener('click', resetFilter);
    document.getElementById('resetFilter1').addEventListener('click', resetFilter);
}

// Initialize listeners on page load
setupFilterListeners();
setupResetListeners();

// Function to dynamically display products (optimized for both with and without 'More' button)
function displayProducts(products, containerId, moreButtonId, limit = productsPerPage) {
    const productsContainer = document.getElementById(containerId);
    const moreButton = document.getElementById(moreButtonId);

    // Clear existing content
    productsContainer.innerHTML = '';

    // Handle 'More' button visibility only if limit is defined
    if (moreButton) {
        moreButton.style.display = (limit >= products.length) ? 'none' : 'inline-block';
    }

    // Display products (only show up to 'limit' if pagination is required)
    products.slice(0, limit).forEach(product => {
        productsContainer.innerHTML += createProductCard(product);
    });
}

// Function to create the product card HTML
function createProductCard(product) {
    return `
        <div class="col-6 col-md-3 mb-3 product-item" id="product-${product.id}">
            <div class="card text-center d-flex flex-column h-100 mb-3 shadow">
                <a href="#" onclick="openProductModal(${product.id}); return false;">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                </a>
                <div class="card-body d-flex flex-column h-100">
                    <a href="#" class="text-dark link-underline link-underline-opacity-0" onclick="openProductModal(${product.id}); return false;">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price.toFixed(2)} baht</p>
                    </a>
                    <div class="mt-auto">
                        <div class="input-group center" id="Quantitybar">
                            <button class="btn btn-outline-secondary" onclick="changeQuantityItem(${product.id}, -1)">-</button>
                            <input type="text" class="form-control text-center qty-input" id="qty-${product.id}" min="1" value="1">
                            <button class="btn btn-outline-secondary" onclick="changeQuantityItem(${product.id}, 1)">+</button>
                        </div>
                        <button class="btn btn-warning mt-3" onclick="addToCart(${product.id}, ${product.price}, '${product.name}')">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to open the modal with product details
function openProductModal(productId) {
    const product = allProducts.find(p => p.id === productId);

    if (!product) return console.error('Product not found for ID:', productId);

    // Get the current quantity value from the main product card, default to 1 if not found
    const qty = document.querySelector(`#qty-${productId}`)?.value || 1;

    // Insert the product details into the modal body and show modal
    document.getElementById('product-modal-body').innerHTML = createProductModal(product, qty);
    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    productModal.show();

    // Synchronize quantity input between modal and product cards
    synchronizeQuantityInput(productId);
}

// Function to filter and display products in the best sellers section
function displayBestSellers(filteredBestSellers) {
    displayProducts(filteredBestSellers, 'best-seller-container', '', filteredBestSellers.length); // Show all filtered best sellers (no 'More' button)
}

// Helper function to generate modal HTML content
function createProductModal(product, qty) {
    return `
        <div class="row">
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid img-responsive mb-3" width="600" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h2>${product.name}</h2>
                <p><strong>Price:</strong> ${product.price.toFixed(2)} baht</p>
                <p>${product.description || 'No description available.'}</p>
                <div class="input-group mb-3" id="Quantitybar">
                    <button class="btn btn-outline-secondary" onclick="changeQuantityItem(${product.id}, -1, 'modal')">-</button>
                    <input type="text" class="form-control text-center qty-input" id="modal-qty-${product.id}" min="1" value="${qty}">
                    <button class="btn btn-outline-secondary" onclick="changeQuantityItem(${product.id}, 1, 'modal')">+</button>
                </div>
                <button class="btn btn-warning" onclick="addToCart(${product.id}, ${product.price}, '${product.name}', 'modal')">Add to Cart</button>
            </div>
        </div>
    `;
}

// Function to synchronize quantity across modal and product cards
function synchronizeQuantityInput(productId) {
    const modalQtyInput = document.getElementById(`modal-qty-${productId}`);
    const otherQtyInputs = document.querySelectorAll(`[id^="qty-${productId}"]`);

    // Sync modal quantity input with other product cards
    if (otherQtyInputs.length > 0) modalQtyInput.value = otherQtyInputs[0].value;

    // Sync all quantity inputs when modal's input is changed
    modalQtyInput.addEventListener('input', () => {
        otherQtyInputs.forEach(input => input.value = modalQtyInput.value);
    });

    // Sync modal input when any other card input is changed
    otherQtyInputs.forEach(input => {
        input.addEventListener('input', () => {
            modalQtyInput.value = input.value;
        });
    });
}

// Function to change quantity in both modal and product cards
function changeQuantityItem(productId, delta, source = 'card') {
    const qtyInputs = document.querySelectorAll(`[id^="qty-${productId}"]`);

    qtyInputs.forEach(inputElement => {
        let currentValue = parseInt(inputElement.value);
        if (!isNaN(currentValue) && currentValue + delta > 0) {
            inputElement.value = currentValue + delta;
        }
    });

    // Synchronize quantity inputs across modal and product cards
    synchronizeQuantityInput(productId);
}

// Function to handle "Show More" and "Show Less" for any section
function toggleProductDisplay(products, containerId, moreButtonId, showAll) {
    const moreButton = document.getElementById(moreButtonId);
    const showLessButton = document.getElementById(`show-less-${containerId}`);

    // Show all products or only initial products
    displayProducts(products, containerId, moreButtonId, showAll ? products.length : productsPerPage);

    // Toggle visibility of "Show Less" and "More" buttons
    moreButton.style.display = showAll ? 'none' : 'inline-block';
    showLessButton.style.display = showAll ? 'inline-block' : 'none';
}

// Add event listener to the "More" and "Show Less" buttons dynamically
document.addEventListener('DOMContentLoaded', function () {
    // Toggle display for toys section
    document.getElementById('More').addEventListener('click', function () {
        toggleProductDisplay(toys, 'products-container', 'More', true);
    });

    document.getElementById('show-less-products-container').addEventListener('click', function () {
        toggleProductDisplay(toys, 'products-container', 'More', false);
    });

    // Toggle display for games section
    document.getElementById('games-more-btn').addEventListener('click', function () {
        toggleProductDisplay(games, 'games-container', 'games-more-btn', true);
    });

    document.getElementById('show-less-games-container').addEventListener('click', function () {
        toggleProductDisplay(games, 'games-container', 'games-more-btn', false);
    });
});

// Helper function to update the cart total and display
function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-total').innerText = totalItems;
    document.getElementById('cart-total-lg').innerText = totalItems;
}

// Helper function to update the modal body with the current cart summary
function updateCartModal() {
    const modalBody = document.getElementById('cart-modal-body');
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

        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartSummary += `<p class="mt-3"><strong>Total Price: ${totalPrice.toFixed(2)} Baht</strong></p>`;

        document.querySelector('#proceedToCheckoutButton').style.display = 'block';
    } else {
        cartSummary = '<p>Your cart is empty.</p>';
        document.querySelector('#proceedToCheckoutButton').style.display = 'none';
    }

    modalBody.innerHTML = cartSummary;
}

// Function to add product to the cart
function addToCart(productId, price, itemName, source = 'card') {
    let qtyInput = (source === 'modal') ? document.getElementById(`modal-qty-${productId}`) : document.getElementById(`qty-${productId}`);
    let qty = parseFloat(qtyInput.value);

    if (qty > 0) {
        const existingItem = cart.find(item => item.productId === productId);

        if (existingItem) {
            existingItem.quantity += qty;
        } else {
            cart.push({ productId, quantity: qty, price, name: itemName });
        }

        updateCartDisplay();
        updateCartModal();

        document.getElementById('toast-body-added').innerHTML = `${itemName} has been added to your cart.`;
        const addedToCartToast = new bootstrap.Toast(document.getElementById('addedToCartToast'));
        addedToCartToast.show();
    } else {
        let quantityModal = new bootstrap.Modal(document.getElementById('quantityModal'));
        quantityModal.show();
    }
}

// Function to change quantity (increase or decrease)
function changeQuantity(index, delta) {
    const item = cart[index];
    item.quantity = Math.max(1, item.quantity + delta);

    updateCartDisplay();
    updateCartModal();
}

// Function to remove item from the cart
function removeItem(index) {
    cart.splice(index, 1);
    updateCartDisplay();
    updateCartModal();
}

// Function to proceed to checkout
function proceedToCheckout() {
    const checkoutSummaryBody = document.getElementById('checkout-summary-body');
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    let summaryContent = '<ul class="list-group">';
    cart.forEach(item => {
        summaryContent += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${item.name} (${item.quantity} pcs)
                <span>${(item.price * item.quantity).toFixed(2)} Baht</span>
            </li>`;
    });
    summaryContent += '</ul>';

    summaryContent += `<p class="mt-3"><strong>Total Price: ${totalPrice.toFixed(2)} Baht</strong></p>`;

    checkoutSummaryBody.innerHTML = summaryContent;
    const checkoutSummaryModal = new bootstrap.Modal(document.getElementById('checkoutSummaryModal'));
    checkoutSummaryModal.show();
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCartDisplay();
    updateCartModal();
}
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('.form-control[type="search"]');
    const searchButton = document.querySelector('button[type="submit"]');
    const brandLink = document.querySelector('.navbar-brand');

    // Helper function to trigger "Show More" buttons
    function triggerShowMoreButtons() {
        const buttons = ['More', 'games-more-btn'];
        buttons.forEach(id => {
            const button = document.getElementById(id);
            if (button && button.style.display !== 'none') {
                button.click();
            }
        });
    }

    // Helper function to filter products and scroll to the first match
    function filterProducts(query) {
        const products = document.querySelectorAll('.product-item');
        let firstMatch = null;

        products.forEach((product) => {
            const title = product.querySelector('.card-title').textContent.toLowerCase();
            const match = title.includes(query);
            product.style.display = match ? 'block' : 'none';
            if (match && !firstMatch) firstMatch = product;
        });

        if (firstMatch) firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Search button event listener
    searchButton.addEventListener('click', function (e) {
        e.preventDefault();
        const query = searchInput.value.toLowerCase();
        
        if (query) {
            triggerShowMoreButtons();
            setTimeout(() => filterProducts(query), 200); // Wait for "Show More" to load
        } else {
            filterProducts(query); // Show all products if no query
        }
    });

    // Brand link event listener to clear search and show all products
    brandLink.addEventListener('click', function () {
        searchInput.value = '';
        document.querySelectorAll('.product-item').forEach(product => {
            product.style.display = 'block';
        });
    });

    // Prevent default form submission behavior
    document.querySelector('form[role="search"]').addEventListener('submit', function (e) {
        e.preventDefault();
    });
});