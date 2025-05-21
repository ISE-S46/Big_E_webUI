import { displayProducts } from "./DisplayProduct.js";

function initPriceFilter(productType, containerId, limitPerPage) {
    const minRange = document.getElementById('minRange');
    const maxRange = document.getElementById('maxRange');
    const applyButton = document.querySelector('.price-filter-btn');
    const resetButton = document.querySelector('.reset-filter-btn');

    // Filter products by price range
    const filterProductsByPrice = (products, min, max) => {
        return products.filter(product => 
            product.price >= min && product.price <= max
        );
    };

    // Apply filter button handler
    applyButton.addEventListener('click', () => {
        const minPrice = parseFloat(minRange.value) || 0;
        const maxPrice = parseFloat(maxRange.value) || 10000;
        
        const filteredProducts = filterProductsByPrice(productType, minPrice, maxPrice);
        displayProducts(filteredProducts, containerId, limitPerPage);
    });

    // Reset filter button handler
    resetButton.addEventListener('click', () => {
        minRange.value = "";
        maxRange.value = "";
        displayProducts(productType, containerId, limitPerPage);
    });

    // Initial display
    displayProducts(productType, containerId, limitPerPage);

}

export { initPriceFilter };