import { cart, updateCartQuantityDisplay, RemoveProductFromCart, ClearCartAll } from "./ScriptModules/SynchronizeQuantity.js";
import { CheckoutCart } from "./ScriptModules/ProductsCheckout.js";
import { RedirectSearchUrl } from "./ScriptModules/SearchProduct.js";
import { Register, isLoggedIn } from "./ScriptModules/AccountRouting.js";
import { TogglePasswordIcon } from "./ScriptModules/ShowPassword.js";

document.addEventListener('DOMContentLoaded', () => {
    if (isLoggedIn === true) {
        window.location.href = 'Account.html';
    }

    updateCartQuantityDisplay(cart);

    document.getElementById('searchInput').value = '';

    document.querySelector('form[role="search"]').addEventListener('submit', function (e) {
        e.preventDefault();

        RedirectSearchUrl();
    });

    const registerPassword = document.querySelector('#registerPassword');
    const registerConfirmPassword = document.querySelector('#registerConfirmPassword');

    const showIcon = document.querySelector('#showIcon');
    const hideIcon = document.querySelector('#hideIcon');

    const showIcon2 = document.querySelector('#showIcon2');
    const hideIcon2 = document.querySelector('#hideIcon2');

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

            case btn.classList.contains('togglePassword'):
                TogglePasswordIcon(registerPassword, showIcon, hideIcon);
                break;

            case btn.classList.contains('toggleConfirmPassword'):
                TogglePasswordIcon(registerConfirmPassword, showIcon2, hideIcon2);
                break;

            case btn.classList.contains('Register-btn'):
                Register();
                break;
        }

    });

    document.querySelectorAll('[data-checkout]').forEach(button => {
        button.addEventListener('click', () => {
            CheckoutCart();
        });
    });

});