import { toys, games, allProducts } from "./ScriptModules/Products.js";
import { ShowProductDeatil } from './ScriptModules/ProductDetail.js';

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const type = params.get('type');

document.addEventListener('DOMContentLoaded', () => {
    openProduct(id, type);
});

function openProduct(id, type) {
    const product = allProducts.find(p => p.id == id && p.type === type);

    if (!product) {
        return console.error(`Product not found for id: ${id}, type: ${type}`);
    }

    // Get the current quantity value from the main product card, default to 1 if not found
    const qty = document.querySelector(`#qty-${id}`)?.value || 1;

    // Show product
    document.getElementById('product-container').innerHTML = ShowProductDeatil(product, qty);

    synchronizeQuantityInput(id);
}