import { displayProducts, updateURLPageParam } from "./DisplayProduct.js";

function updateURLWithFilter(min, max, page) {
    const url = new URL(window.location.href);
    url.searchParams.set("min", min);
    url.searchParams.set("max", max);
    url.searchParams.set("page", page);
    window.history.pushState({}, '', url);
}

function getFilterFromURL() {
    const params = new URLSearchParams(window.location.search);

    const rawMin = params.get("min");
    const rawMax = params.get("max");

    const min = rawMin !== null ? parseInt(rawMin) : null;
    const max = rawMax !== null ? parseInt(rawMax) : null;

    return {
        min: min !== null && !isNaN(min) ? min : 0,
        max: max !== null && !isNaN(max) ? max : 100000,
        rawMin,
        rawMax,
        page: parseInt(params.get("page")) || 1
    };
}

function initPriceFilter(productType, containerId, limitPerPage, CurrentPage) {
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
        const maxPrice = parseFloat(maxRange.value) || 100000;

        const filteredProducts = filterProductsByPrice(productType, minPrice, maxPrice);

        updateURLPageParam(1);
        displayProducts(filteredProducts, containerId, limitPerPage, 1);
        updateURLWithFilter(minPrice, maxPrice, 1);
    });

    // Reset filter button handler
    resetButton.addEventListener('click', () => {
        minRange.value = "";
        maxRange.value = "";

        updateURLPageParam(1);
        displayProducts(productType, containerId, limitPerPage, 1);
        updateURLWithFilter("", "", 1);
    });

    // Initial display
    const { min, max, rawMin, rawMax, page } = getFilterFromURL();

    minRange.value = rawMin !== null ? rawMin : "";
    maxRange.value = rawMax !== null ? rawMax : "";
    const filtered = filterProductsByPrice(productType, min, max);
    displayProducts(filtered, containerId, limitPerPage, page);

    window.addEventListener('popstate', () => {
        const { min, max, page, rawMin, rawMax } = getFilterFromURL();
    
        // Only set input values if the user had set them previously
        minRange.value = rawMin !== null ? rawMin : "";
        maxRange.value = rawMax !== null ? rawMax : "";
    
        const filtered = filterProductsByPrice(productType, min, max);
        displayProducts(filtered, containerId, limitPerPage, page);
    });

}

export { initPriceFilter };