import { cart, updateCartQuantityDisplay, RemoveProductFromCart, ClearCartAll } from "./ScriptModules/SynchronizeQuantity.js";
import { CheckoutCart } from "./ScriptModules/ProductsCheckout.js";
import { RedirectSearchUrl } from "./ScriptModules/SearchProduct.js";
import { handleAccount, login, logout } from "./ScriptModules/AccountRouting.js";

document.addEventListener('DOMContentLoaded', () => {
    updateCartQuantityDisplay(cart);
    handleAccount();

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

            case btn.classList.contains('delete-item-btn'):
                RemoveProductFromCart(id, type);
                break;

            case btn.classList.contains('ClearAll-btn'):
                ClearCartAll();
                break;

            case btn.classList.contains('Logout'):
                logout();
                break;

        }

    });

    let CheckLogin = document.getElementById('loginForm')

    if (CheckLogin) {
        CheckLogin.addEventListener('submit', function (e) {
            e.preventDefault();
            login();
        });
    }

    document.querySelectorAll('[data-checkout]').forEach(button => {
        button.addEventListener('click', () => {
            CheckoutCart();
        });
    });

});