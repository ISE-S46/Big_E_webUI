function displayProducts(products, containerId, limitPerPage, currentPage = 1) {
    const productsContainer = document.getElementById(containerId);
    productsContainer.innerHTML = '';

    const start = (currentPage - 1) * limitPerPage;
    const end = start + limitPerPage;
    const paginatedProducts = products.slice(start, end);

    paginatedProducts.forEach(product => {
        productsContainer.innerHTML += createProductCard(product);
    });

    const TopNav = document.getElementById("TopNav");
    const BottomNav = document.getElementById("BottomNav");

    if (TopNav && BottomNav) {
        // pagination display
        const totalPages = Math.ceil(products.length / limitPerPage);
        pagination(totalPages, currentPage, TopNav, BottomNav);
        handlePaginationClick(products, containerId, limitPerPage);
    }
}

function createProductCard(product) {
    const { id, type, image, name, price } = product;
    return `
        <div class="col-6 col-md-4 col-lg-3 mb-3 product-item" id="product-${id}">
            <div class="card text-center d-flex flex-column h-100 mb-3 shadow">
                <a href="Product.html?id=${id}&type=${type}" data-product-id="${id}" data-product-type="${type}">
                    <img src="${image}" class="card-img-top" alt="${name}">
                </a>
                <div class="card-body d-flex flex-column h-100">
                    <a href="Product.html?id=${id}&type=${type}" data-product-id="${id}" data-product-type="${type}" class="text-dark link-underline link-underline-opacity-0">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${price.toLocaleString("th-TH", {maximumFractionDigits: 2})} baht</p>
                    </a>
                    <div class="mt-auto">
                        <div class="input-group center" id="Quantitybar">
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
                
                </div>
            </div>
        </div>
    `;
}

function pagination(totalPages, currentPage, TopNav, BottomNav) {
    [TopNav, BottomNav].forEach(nav => nav.innerHTML = "");

    const catalog = getCatalogFromURL();

    for (const nav of [TopNav, BottomNav]) {
        const wrapper = document.createElement("div");

        // Add responsive class container
        wrapper.className = "pagination-wrapper";

        const ul = document.createElement("ul");
        ul.className = "pagination justify-content-center flex-wrap";

        const createPageItem = (label, page, disabled = false, active = false, customClass = "") => {
            const li = document.createElement("li");
            li.className = `page-item ${disabled ? 'disabled' : ''} ${active ? 'active' : ''} ${customClass}`;

            const a = document.createElement("a");
            a.className = "page-link shadow-sm";
            a.href = `?catalog=${catalog}&page=${page}`;
            a.dataset.page = page;
            a.textContent = label;

            li.appendChild(a);
            return li;
        };

        // First and Previous
        ul.appendChild(createPageItem("<<", 1, currentPage === 1));
        ul.appendChild(createPageItem("<", Math.max(currentPage - 1, 1), currentPage === 1));

        ul.appendChild(createPageItem("1", 1, false, currentPage === 1));

        if (currentPage <= 4) {
            for (let i = 2; i <= Math.min(4, totalPages - 1); i++) {
                ul.appendChild(createPageItem(i, i, false, i === currentPage));
            }

            if (totalPages > 5) {
                ul.appendChild(createPageItem("...", currentPage + 1, false, false, "ellipsis"));
            }

        } else {
            if (currentPage > 4) {
                ul.appendChild(createPageItem("...", currentPage - 1, false, false, "ellipsis"));
            }

            const start = currentPage;
            const end = Math.min(currentPage + 3, totalPages - 1);
            for (let i = start; i <= end; i++) {
                ul.appendChild(createPageItem(i, i, false, i === currentPage));
            }

            if (currentPage + 3 < totalPages - 1) {
                ul.appendChild(createPageItem("...", currentPage + 1, false, false, "ellipsis"));
            }
        }

        if (totalPages > 1) {
            ul.appendChild(createPageItem(totalPages, totalPages, false, currentPage === totalPages));
        }

        // Next and Last
        ul.appendChild(createPageItem(">", Math.min(currentPage + 1, totalPages), currentPage === totalPages));
        ul.appendChild(createPageItem(">>", totalPages, currentPage === totalPages));

        wrapper.appendChild(ul);
        nav.appendChild(wrapper);
    }
}

function updateURLPageParam(page) {
    const url = new URL(window.location.href);
    url.searchParams.set("page", page);
    window.history.pushState({}, '', url);
}

function getCatalogFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("catalog") || "";
}

function handlePaginationClick(products, containerId, limitPerPage) {
    document.querySelectorAll('.pagination a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const page = parseInt(e.target.dataset.page);
            if (!isNaN(page)) {
                updateURLPageParam(page);
                displayProducts(products, containerId, limitPerPage, page);
            }
        });
    });
}

export { displayProducts, pagination, handlePaginationClick, updateURLPageParam };