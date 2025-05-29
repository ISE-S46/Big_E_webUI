import { cart, updateCartQuantityDisplay, changeQuantityItem, RemoveProductFromCart, ProductQuantityCheckout, ClearCartAll } from "./ScriptModules/SynchronizeQuantity.js";
import { CheckoutCart, CheckoutPage } from "./ScriptModules/ProductsCheckout.js";
import { RedirectSearchUrl } from "./ScriptModules/SearchProduct.js";

document.addEventListener('DOMContentLoaded', () => {
    updateCartQuantityDisplay(cart);
    CheckoutPage();

    document.getElementById('searchInput').value = '';

    document.querySelector('form[role="search"]').addEventListener('submit', function (e) {
        e.preventDefault();

        RedirectSearchUrl();
    });

    document.body.addEventListener('click', event => {
        const btn = event.target.closest('button');
        if (!btn) return;

        const id = btn.dataset.productId;
        const type = btn.dataset.productType;

        switch (true) {
            case btn.classList.contains('DecreaseQunatity-btn'):
                changeQuantityItem(id, type, -1);
                ProductQuantityCheckout(id, type, -1);
                break;

            case btn.classList.contains('IncreaseQunatity-btn'):
                changeQuantityItem(id, type, 1);
                ProductQuantityCheckout(id, type, +1);
                break;

            case btn.classList.contains('delete-item-btn'):
                RemoveProductFromCart(id, type);
                break;

            case btn.classList.contains('ClearAll-btn') || btn.classList.contains('ClearAll-Checkout'):
                ClearCartAll();
                break;

            case btn.classList.contains('Final-Checkout'):
                window.location.href = "Account.html"; // Placeholder method, will replace later in fullstack version
                break;

        }

    });

    let Coupon = document.getElementById('CouponForm');

    Coupon.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Coupon handling function will be added later in fullstack version");
    });


    document.querySelectorAll('[data-checkout]').forEach(button => {
        button.addEventListener('click', () => {
            CheckoutCart();
        });
    });

});