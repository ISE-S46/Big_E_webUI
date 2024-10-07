// Function to get the product ID from the URL
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Function to search for a product in both toys and games arrays
function findProductById(productId) {
    // First, search in the toys array
    let product = toys.find(p => p.id == productId);
    
    // If not found in toys, search in the games array
    if (!product) {
        product = games.find(p => p.id == productId);
    }

    return product;
}

// Function to display the product details based on the product ID
function displayProductDetails(productId) {
    const product = findProductById(productId); // Find the product by ID from both arrays

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
            <p>${product.description || "No description available."}</p>
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