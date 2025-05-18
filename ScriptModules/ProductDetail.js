function ShowProductDeatil(product, qty) {
    return `
        <div class="row">
            <div class="col-md-6 mt-3 text-center mb-3">
                <img src="${product.image}" class="img-fluid img-responsive my-3" width="600" justify-content="center" alt="${product.name}">
            </div>
            <div class="col-md-6 mt-3 mb-3">
                <h2>${product.name}</h2>
                <p><strong>Price:</strong> ${product.price.toFixed(2)} baht</p>
                <p>${product.description || 'No description available.'}</p>
                <div class="input-group my-3" id="Quantitybar">
                    <button class="btn btn-outline-secondary" onclick="changeQuantityItem(${product.id}, -1, 'modal')">-</button>
                    <input type="text" class="form-control text-center qty-input" id="modal-qty-${product.id}" min="1" value="${qty}">
                    <button class="btn btn-outline-secondary" onclick="changeQuantityItem(${product.id}, 1, 'modal')">+</button>
                </div>
                <button class="btn btn-warning" onclick="addToCart(${product.id}, ${product.price}, '${product.name}', 'modal')">Add to Cart</button>
            </div>
        </div>
    `;
}

export { ShowProductDeatil };