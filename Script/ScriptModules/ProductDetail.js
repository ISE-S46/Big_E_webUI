function openProduct(id, type, allProducts) {
    const product = allProducts.find(p => p.id == id && p.type === type);

    if (!product) {
        return console.error(`Product not found for id: ${id}, type: ${type}`);
    }

    document.getElementById('product-container').innerHTML = ShowProductDeatil(product);

}

function ShowProductDeatil(product) {
    const { id, type, image, name, price, description } = product;
    return `
        <div class="row">
            <div class="col-md-6 mt-3 text-center mb-3">
                <img src="${image}" class="img-fluid img-responsive my-3" width="600" justify-content="center" alt="${name}">
            </div>
            <div class="col-md-6 mt-4 mb-3">
                <h2>${name}</h2>
                <a href="./Catalog.html?catalog=${HandleCatalogData(type)[0]}&page=1" data-from="${HandleCatalogData(type)[1]}" class="link-underline link-underline-opacity-0">
                    <h4 class="product-title">${HandleCatalogData(type)[0]}</h4>
                </a>
                <p><strong>Price:</strong> ${price.toLocaleString("th-TH", { maximumFractionDigits: 2 })} baht</p>
                <p>${description || 'No description available.'}</p>
                <div class="input-group my-3" id="Quantitybar">
                    <button class="btn btn-outline-secondary DecreaseQunatity-btn" 
                            data-product-id="${id}"
                            data-product-type="${type}">
                        -
                    </button>
                    <input type="text" class="form-control text-center qty-input" data-product-id="${id}" data-product-type="${type}" min="1" value="1">
                    <button class="btn btn-outline-secondary IncreaseQunatity-btn" 
                            data-product-id="${id}"
                            data-product-type="${type}">
                        +
                    </button>
                </div>
                <button class="btn btn-warning mt-3 add-to-cart-btn"
                        data-product-id="${id}"
                        data-product-type="${type}"
                        data-price="${price}"
                        data-name="${name}">
                    Add to Cart
                </button>
                <button class="btn btn-success mt-3 ms-1 BuyNow-btn"
                        data-product-id="${id}"
                        data-product-type="${type}"
                        data-price="${price}"
                        data-name="${name}">
                    Buy now
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

        case "DLC":
            return ["games", "Games/DLC"];
    }
}

export { openProduct, ShowProductDeatil };