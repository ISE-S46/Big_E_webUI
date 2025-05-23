function RedirectSearchUrl() {
    const input = document.getElementById('searchInput');
    const searchQuery = input.value.trim();

    if (searchQuery !== '') {
        return window.location.href = `./Catalog.html?catalog=${encodeURIComponent(searchQuery)}&page=1`;
    }
}

function searchProducts(searchInput, Product) {
    const query = searchInput.toLowerCase();
    const matchingProducts = Product.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    );
   
    return matchingProducts;
}

export { RedirectSearchUrl, searchProducts };