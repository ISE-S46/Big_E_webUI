import { toys, games, bestSellers, CarouselItem } from "./ScriptModules/Data.js";
import { renderCarousel } from "./ScriptModules/Carousel.js";
import { displayProducts } from "./ScriptModules/DisplayProduct.js";
import { addToCart } from "./ScriptModules/addToCart.js";
import { cart, updateCartQuantityDisplay, changeQuantityItem, RemoveProductFromCart, ClearCartAll } from "./ScriptModules/SynchronizeQuantity.js";
import { CheckoutCart } from "./ScriptModules/ProductsCheckout.js";

let productsMainPage = 16;

document.addEventListener('DOMContentLoaded', () => {
    renderCarousel(CarouselItem);

    updateCartQuantityDisplay(cart);

    displayProducts(bestSellers, 'best-seller-container', productsMainPage);
    displayProducts(toys, 'toys-container', productsMainPage);
    displayProducts(games, 'games-container', productsMainPage);

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

// const moreButton = document.getElementById(moreButtonId);