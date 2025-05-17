import { toys, games, allProducts, bestSellers, CarouselItem } from "./ScriptModules/Products.js";
import { renderCarousel } from "./ScriptModules/Carousel.js";

// load carousel
document.addEventListener('DOMContentLoaded', () => {
    renderCarousel(CarouselItem);
});