function renderCarousel(products) {
    let slides = '';

    products.forEach((product, index) => {
        const activeClass = index === 0 ? 'active' : '';

        slides += `
            <div class="carousel-item ${activeClass}">
                <a href="Product.html?id=${product.id}&type=${product.type}" data-product-id="${product.id}" data-product-type="${product.type}">
                    <img src="${product.image}" loading="lazy" class="d-block w-100" alt="${product.name}">
                </a>
            </div>
        `;
    });

    const carouselHTML = `
        <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                ${slides}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    `;

    document.getElementById('productCarouselContainer').innerHTML = carouselHTML;
}

export { renderCarousel };