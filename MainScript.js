import { toys, games, allProducts, bestSellers, CarouselItem } from "./ScriptModules/Products.js";
import { renderCarousel } from "./ScriptModules/Carousel.js";
import { displayProducts } from "./ScriptModules/DisplayProduct.js";

let productsMainPage = 16;

document.addEventListener('DOMContentLoaded', () => {
    renderCarousel(CarouselItem);
    displayProducts(bestSellers, 'best-seller-container', productsMainPage);
    displayProducts(toys, 'toys-container', productsMainPage);
    displayProducts(games, 'games-container', productsMainPage);
});

// const moreButton = document.getElementById(moreButtonId);