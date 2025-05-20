function displayProducts(products, containerId, limit) {
    const productsContainer = document.getElementById(containerId);

    productsContainer.innerHTML = '';

    // Display products up to limit
    products.slice(0, limit).forEach(product => {
        productsContainer.innerHTML += createProductCard(product);
    });
}

function createProductCard(product) {
    return `
        <div class="col-6 col-md-3 mb-3 product-item" id="product-${product.id}">
            <div class="card text-center d-flex flex-column h-100 mb-3 shadow">
                <a href="Product.html?id=${product.id}&type=${product.type}" data-product-id="${product.id}" data-product-type="${product.type}">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                </a>
                <div class="card-body d-flex flex-column h-100">
                    <a href="Product.html?id=${product.id}&type=${product.type}" data-product-id="${product.id}" data-product-type="${product.type}" class="text-dark link-underline link-underline-opacity-0">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price.toFixed(2)} baht</p>
                    </a>
                    <div class="mt-auto">
                        <div class="input-group center" id="Quantitybar">
                            <button class="btn btn-outline-secondary DecreaseQunatity-btn" 
                                    data-product-id="${product.id}"
                                    data-product-type="${product.type}">
                                -
                            </button>
                            <input type="text" class="form-control text-center qty-input" data-product-id="${product.id}" data-product-type="${product.type}" min="1" value="1">
                            <button class="btn btn-outline-secondary IncreaseQunatity-btn" 
                                    data-product-id="${product.id}"
                                    data-product-type="${product.type}">
                                +
                            </button>
                        </div>
                        <button class="btn btn-warning mt-3 add-to-cart-btn"
                                data-product-id="${product.id}"
                                data-product-type="${product.type}"
                                data-price="${product.price}"
                                data-name="${product.name}">
                            Add to Cart
                        </button>
                
                </div>
            </div>
        </div>
    `;
}

export { displayProducts };