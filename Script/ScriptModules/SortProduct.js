import { initPriceFilter } from "./Filter.js";

function applySort(method, page, CatalogData, productsPerPage) {
    const sortOption = document.querySelector(`[data-sort="${method}"]`);
    const label = sortOption?.textContent.trim() || 'default';

    // Update sort button label
    const sortBtn = document.getElementById('sortDropdownBtn');
    if (sortBtn) {
        sortBtn.textContent = label;
    }

    // Update URL
    const params = new URLSearchParams(window.location.search);
    params.set('sort', method);
    params.set('page', page.toString());
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);

    // Sort and render
    const sortedCatalog = sortItems(CatalogData, method);
    initPriceFilter(sortedCatalog, 'Product-section', productsPerPage, page);
}

function sortItems(items, method) {
    const sorted = [...items];

    switch (method) {
        case "price-asc":
            sorted.sort((minPrice, maxPrice) => minPrice.price - maxPrice.price);
            break;
        case "price-desc":
            sorted.sort((minPrice, maxPrice) => maxPrice.price - minPrice.price);
            break;
        case "newest":
            sorted.sort((newest, oldest) => new Date(oldest.DATE) - new Date(newest.DATE));
            break;
        case "oldest":
            sorted.sort((newest, oldest) => new Date(newest.DATE) - new Date(oldest.DATE));
            break;
        case "default":
            break;
    }

    return sorted;

}

export { applySort };