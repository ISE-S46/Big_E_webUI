// Function to get the product ID from the URL
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Function to display the product details based on the product ID
function displayProductDetails(productId) {
    const product = allProducts.find(p => p.id == productId); // Find the product by ID

    if (!product) {
        document.getElementById('product-details-container').innerHTML = '<h2>Product not found</h2>';
        return;
    }

    // Create the HTML for product details
    const productDetailsHtml = `
        <div class="col-md-6">
            <img src="${product.image}" class="img-fluid" alt="${product.name}">
        </div>
        <div class="col-md-6">
            <h2>${product.name}</h2>
            <p><strong>Price:</strong> ${product.price.toFixed(2)} baht</p>
            <p>${product.description}</p>
            <button class="btn btn-warning" onclick="addToCart(${product.id}, ${product.price}, '${product.name}')">Add to Cart</button>
        </div>
    `;
    document.getElementById('product-details-container').innerHTML = productDetailsHtml;
}

// Get the product ID from the URL and display the corresponding product details
document.addEventListener('DOMContentLoaded', function () {
    const productId = getProductIdFromUrl(); // Get the product ID from the URL
    displayProductDetails(productId); // Display the product details
});

const allProducts = [
    { id: 1.0, name: "HG GUNDAM AERIAL REBUILD", image: "images/Aerial.jpg", price: 590.00 },
    { id: 2.0, name: "PG RX-0 UNICORN GUNDAM", image: "images/PG_Unicorn.webp", price: 6800.00 },
    { id: 3.0, name: "PG GUNDAM EXIA", image: "images/exia.jpg", price: 6490.00 },
    { id: 4.0, name: "MG MS-06R ZAKU II HIGH MOBILITY TYPE PSYCHO ZAKU VER KA", image: "images/psycho_zaku.jpg", price: 2790.00 },
    { id: 5.0, name: "Tetris wood puzzle", image: "images/Tetris.jpg", price: 159.00 },
    { id: 6.0, name: "Catan [EN]", image: "images/Catan.jpg", price: 1920.00 },
    { id: 7.0, name: "(BSF) WARHAMMER 40000: INTRODUCTORY SET (ENG)", image: "images/wh40000is.jpg", price: 2450.00 },
    { id: 8.0, name: "Warhammer 40k: Adeptus Custodes: Allarus Custodians", image: "images/whc.jpg", price: 2150.00 },
    { id: 9.0, name: "Honkai: Star Rail Qingque 1/10 Figure", image: "images/QQ.jpg", price: 1190.00 },
    { id: 10.0, name: "Plarail Bullet Train N700S Basic Set", image: "images/N700.jpg", price: 2150.00 },
    { id: 1.1, name: "Warhammer 40,000: Space Marine 2", image: "images/sm2.jpg", price: 1490.00 },
    { id: 2.1, name: "HELLDIVERS™ 2", image: "images/hd2.jpg", price: 1290.00 },
    { id: 3.1, name: "ELDEN RING", image: "images/edl.jpg", price: 1790.00 },
    { id: 4.1, name: "NieR:Automata™", image: "images/Nier_Automata.jpg", price: 1390.00 },
    { id: 5.1, name: "NieR Replicant™ ver.1.22474487139...", image: "images/Nier_Replicant.jpg", price: 1990.00 },
    { id: 6.1, name: "Cyberpunk 2077", image: "images/Cyberpunk.jpg", price: 1799.00 },
    { id: 7.1, name: "DARK SOULS™ III", image: "images/ds.jpg", price: 1500.00 },
    { id: 8.1, name: "Cities: Skylines", image: "images/cs1.jpg", price: 819.00 },
    { id: 9.1, name: "Stellaris", image: "images/Stellaris.jpg", price: 1089.00 },
    { id: 9.02, name: "Stellaris: Apocalypse", image: "images/St_Apo.jpg", price: 669.00},
];