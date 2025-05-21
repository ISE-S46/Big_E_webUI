import { toys, games, bestSellers } from "./ScriptModules/Data.js";
import { displayProducts } from "./ScriptModules/DisplayProduct.js";
import { addToCart } from "./ScriptModules/addToCart.js";
import { cart, updateCartQuantityDisplay, changeQuantityItem, RemoveProductFromCart, ClearCartAll } from "./ScriptModules/SynchronizeQuantity.js";
import { CheckoutCart } from "./ScriptModules/ProductsCheckout.js";
import { initPriceFilter } from "./ScriptModules/Filter.js";

let productsPerPage = 24;

const params = new URLSearchParams(window.location.search);
const CatalogType = params.get('catalog');

document.addEventListener('DOMContentLoaded', () => {

    updateCartQuantityDisplay(cart);

    const CatalogHead = document.querySelector(".CatalogHead");

    switch (true) {
        case (CatalogType == "best-seller"):
            initPriceFilter(bestSellers, 'Product-section', productsPerPage);
            CatalogHead.innerHTML += `<h1 id="text-shadow">Best Sellers</h1>`;
            break;

        case (CatalogType == "toys"):
            initPriceFilter(toys, 'Product-section', productsPerPage);
            CatalogHead.innerHTML += `<h1 id="text-shadow">Toys/Models</h1>`;
            break;

        case (CatalogType == "games"):
            initPriceFilter(toys, 'Product-section', productsPerPage);
            CatalogHead.innerHTML += `<h1 id="text-shadow">Games/DLC</h1>`;
            break;
    }

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