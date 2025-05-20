import { toys, games } from "./ScriptModules/Data.js";
import { ShowProductDeatil } from "./ScriptModules/ProductDetail.js";
import { addToCart } from "./ScriptModules/addToCart.js";
import { cart, updateCartQuantityDisplay, changeQuantityItem, RemoveProductFromCart, ClearCartAll } from "./ScriptModules/SynchronizeQuantity.js";
import { CheckoutCart } from "./ScriptModules/ProductsCheckout.js";

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const type = params.get('type');

const allProducts = [...toys, ...games];

document.addEventListener('DOMContentLoaded', () => {
    updateCartQuantityDisplay(cart);
    openProduct(id, type);

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

function openProduct(id, type) {
    const product = allProducts.find(p => p.id == id && p.type === type);

    if (!product) {
        return console.error(`Product not found for id: ${id}, type: ${type}`);
    }

    document.getElementById('product-container').innerHTML = ShowProductDeatil(product);

}