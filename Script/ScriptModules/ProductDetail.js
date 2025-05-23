function ShowProductDeatil(product) {
    return `
        <div class="row">
            <div class="col-md-6 mt-3 text-center mb-3">
                <img src="${product.image}" class="img-fluid img-responsive my-3" width="600" justify-content="center" alt="${product.name}">
            </div>
            <div class="col-md-6 mt-4 mb-3">
                <h2>${product.name}</h2>
                <a href="./Catalog.html?catalog=${HandleCatalogData(product.type)[0]}&page=1" data-from="${HandleCatalogData(product.type)[1]}" class="link-underline link-underline-opacity-0">
                    <h4 class="product-title">${HandleCatalogData(product.type)[0]}</h4>
                </a>
                <p><strong>Price:</strong> ${product.price.toLocaleString("th-TH", { maximumFractionDigits: 2 })} baht</p>
                <p>${product.description || 'No description available.'}</p>
                <div class="input-group my-3" id="Quantitybar">
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
    `;
}

function HandleCatalogData(type) {
    switch (type) {
        case "game":
            return ["games", "Games/DLC"];

        case "toy":
            return ["toys", "Toys/Models"];

        case "StellarisDLC":
            return ["games", "Games/DLC"];
    }
}

export { ShowProductDeatil };