import { toys, games, bestSellers, CarouselItem } from "./ScriptModules/Products.js";
import { renderCarousel } from "./ScriptModules/Carousel.js";
import { displayProducts } from "./ScriptModules/DisplayProduct.js";
import { addToCart } from "./ScriptModules/addToCart.js";
import { cart, updateCartDisplay, changeQuantityItem } from "./ScriptModules/SynchronizeQuantity.js";

let productsMainPage = 16;

document.addEventListener('DOMContentLoaded', () => {
    renderCarousel(CarouselItem);

    updateCartDisplay(cart);

    displayProducts(bestSellers, 'best-seller-container', productsMainPage);
    displayProducts(toys, 'toys-container', productsMainPage);
    displayProducts(games, 'games-container', productsMainPage);

    document.body.addEventListener('click', event => {
        const btn = event.target.closest('button');
        if (!btn) return;
    
        const id = btn.dataset.productId;
        const type = btn.dataset.productType;
    
        if (btn.classList.contains('DecreaseQunatity-btn')) {
            changeQuantityItem(id, type, -1);
        } else if (btn.classList.contains('IncreaseQunatity-btn')) {
            changeQuantityItem(id, type, 1);
        } else if (btn.classList.contains('add-to-cart-btn')) {
            const price = btn.dataset.price;
            const name = btn.dataset.name;
            addToCart(id, type, price, name);
        }
    });
});

// const moreButton = document.getElementById(moreButtonId);