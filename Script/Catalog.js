import { toys, games, allProducts, bestSellers } from "./ScriptModules/Data.js";
import { addToCart } from "./ScriptModules/addToCart.js";
import { cart, updateCartQuantityDisplay, changeQuantityItem, RemoveProductFromCart, ClearCartAll } from "./ScriptModules/SynchronizeQuantity.js";
import { CheckoutCart } from "./ScriptModules/ProductsCheckout.js";
import { initPriceFilter } from "./ScriptModules/Filter.js";
import { sortItems } from "./ScriptModules/SortProduct.js";
import { RedirectSearchUrl, searchProducts } from "./ScriptModules/SearchProduct.js";

let productsPerPage = 24;

const params = new URLSearchParams(window.location.search);
const CatalogType = params.get('catalog');
const CurrentPage = params.get('page');

let activeCatalogData = [];

document.addEventListener('DOMContentLoaded', () => {
    updateCartQuantityDisplay(cart);

    document.getElementById('searchInput').value = '';

    document.querySelector('form[role="search"]').addEventListener('submit', function (e) {
        e.preventDefault();

        RedirectSearchUrl();
    });

    const CatalogHead = document.querySelector(".CatalogHead");

    switch (true) {
        case (CatalogType == "best-seller"):
            activeCatalogData = [...bestSellers];
            initPriceFilter(bestSellers, 'Product-section', productsPerPage, CurrentPage);
            CatalogHead.innerHTML += `<h1 id="text-shadow">Best Sellers</h1>`;
            break;

        case (CatalogType == "toys"):
            activeCatalogData = [...toys];
            initPriceFilter(toys, 'Product-section', productsPerPage, CurrentPage);
            CatalogHead.innerHTML += `<h1 id="text-shadow">Toys/Models</h1>`;
            break;

        case (CatalogType == "games"):
            activeCatalogData = [...games];
            initPriceFilter(games, 'Product-section', productsPerPage, CurrentPage);
            CatalogHead.innerHTML += `<h1 id="text-shadow">Games/DLC</h1>`;
            break;
        default:
            const SearchResult = searchProducts(CatalogType.toString(), allProducts);
            activeCatalogData = SearchResult;
            initPriceFilter(SearchResult, 'Product-section', productsPerPage, CurrentPage);
            CatalogHead.innerHTML += `<h1>Search result for: <span id="text-shadow">${CatalogType}</span></h1>`;
    }

    document.querySelector('.dropdown-menu.sort-drop-down').addEventListener('click', function (e) {
        const sortItem = e.target.closest('[data-sort]');
        if (!sortItem) return;

        e.preventDefault();

        const method = sortItem.dataset.sort;
        const label = sortItem.textContent.trim();

        // Update sort text on button
        const sortBtn = document.getElementById('sortDropdownBtn');
        if (sortBtn) {
            sortBtn.textContent = label;
        }

        // Sort and re-render
        const sortedCatalog = sortItems(activeCatalogData, method);
        initPriceFilter(sortedCatalog, 'Product-section', productsPerPage, 1);
    });

    document.body.addEventListener('click', event => {
        const btn = event.target.closest('button');
        if (!btn) return;

        const id = btn.dataset.productId;
        const type = btn.dataset.productType;

        switch (true) {
            case btn.classList.contains('DecreaseQunatity-btn'):
                changeQuantityItem(id, type, -1);
                break;

            case btn.classList.contains('IncreaseQunatity-btn'):
                changeQuantityItem(id, type, 1);
                break;

            case btn.classList.contains('add-to-cart-btn'):
                const price = btn.dataset.price;
                const name = btn.dataset.name;
                addToCart(id, type, price, name);
                break;

            case btn.classList.contains('delete-item-btn'):
                RemoveProductFromCart(id, type);
                break;

            case btn.classList.contains('ClearAll-btn'):
                ClearCartAll();
                break;
        }

    });

    document.querySelectorAll('[data-checkout]').forEach(button => {
        button.addEventListener('click', () => {
            CheckoutCart();
        });
    });
});