import { toys, games } from "./ScriptModules/Products.js";
import { ShowProductDeatil } from './ScriptModules/ProductDetail.js';
import { addToCart } from "./ScriptModules/addToCart.js";
import { cart, updateCartDisplay, changeQuantityItem } from "./ScriptModules/SynchronizeQuantity.js";

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const type = params.get('type');

const allProducts = [...toys, ...games];

document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay(cart);
    openProduct(id, type);

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

function openProduct(id, type) {
    const product = allProducts.find(p => p.id == id && p.type === type);

    if (!product) {
        return console.error(`Product not found for id: ${id}, type: ${type}`);
    }

    document.getElementById('product-container').innerHTML = ShowProductDeatil(product);

}