import { cart } from './SynchronizeQuantity.js';

function CheckoutCart() {

    const existingModal = document.getElementById('checkoutSummaryModal');
    if (existingModal) existingModal.remove();

    // Create total price and cart summary
    let total = 0;
    let summaryHTML = '';
    let ClearAllbtn = '';
    let CheckoutButton = '';

    if (cart.length === 0) {
        summaryHTML = `<p>Your cart is empty.</p>`;
    } else {
        summaryHTML = `<ul class="list-group">`;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            summaryHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center item-li" data-product-id="${item.id}" data-product-type="${item.type}">
                    <div>
                        <a href="Product.html?id=${item.id}&type=${item.type}" data-product-id="${item.id}" data-product-type="${item.type}" class="text-dark link-underline link-underline-opacity-0">
                            <strong class="product-title">${item.name}</strong>
                        </a>
                        <p>(x${item.quantity})</p>
                    </div>
                    <div class="d-flex align-items-center text-end">
                        <span>${itemTotal.toLocaleString("th-TH", { maximumFractionDigits: 2 })} baht</span>
                        <button class="btn btn-sm ms-3 delete-item-btn" data-product-id="${item.id}" data-product-type="${item.type}">
                            <img src="/images/UI/trash.png" alt="delete" class="img-responsive" width="30" height="30">
                        </button>
                    </div>
                </li>
            `;
        });
        summaryHTML += `</ul>
            <div class="mt-3 total-price-checkout">
                <p><strong>Total:</strong> ${total.toLocaleString("th-TH", { maximumFractionDigits: 2 })} baht</p>
            </div>`;

        ClearAllbtn += `<button type="button" class="btn btn-danger ClearAll-btn" >Clear All</button>`;
        CheckoutButton += `
            <a href="./Checkout.html">
                <button type="button" class="btn btn-success" id="Checkout-btn">Checkout</button>
            </a>
        `;
    }

    const modalHTML = `
        <div class="modal fade modal-lg" id="checkoutSummaryModal" tabindex="-1" aria-labelledby="checkoutSummaryLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="checkoutSummaryLabel">Cart Summary</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="checkout-summary-body">
                        ${summaryHTML}
                    </div>
                    <div class="modal-footer" id="CartButton">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        ${ClearAllbtn}
                        ${CheckoutButton}
                    </div>
                </div>
            </div>
        </div>
    `;

    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);

    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutSummaryModal'));
    checkoutModal.show();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function CheckoutPage() {
    const CartProductWindow = document.getElementById('CartProductSummary');
    const Displaytotalprice = document.querySelector('.total-price');

    CartProductWindow.innerHTML = '';
    Displaytotalprice.innerHTML = '';

    let total = 0;
    let summaryHTML = '';
    let TotalPrice = '';
    //let ClearAllbtn = '';

    if (cart.length !== 0) {
        summaryHTML = `<ul class="list-group">`;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            summaryHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center item-li" data-product-id="${item.id}" data-product-type="${item.type}">
                    <div>
                        <a href="Product.html?id=${item.id}&type=${item.type}" data-product-id="${item.id}" data-product-type="${item.type}" class="text-dark link-underline link-underline-opacity-0">
                            <strong class="product-title">${item.name}</strong>
                        </a>
                        <div class="input-group my-3" id="Quantitybar">
                            <button class="btn btn-outline-secondary DecreaseQunatity-btn" 
                                    data-product-id="${item.id}"
                                    data-product-type="${item.type}">
                                -
                            </button>
                            <input type="text" class="form-control text-center qty-input" data-product-id="${item.id}" data-product-type="${item.type}" min="1" value="${item.quantity}">
                            <button class="btn btn-outline-secondary IncreaseQunatity-btn" 
                                    data-product-id="${item.id}"
                                    data-product-type="${item.type}">
                                +
                            </button>
                        </div>
                    </div>
                    <div class="d-flex align-items-center text-end">
                        <span class="ProductQuantityPrice" data-product-id="${item.id}" data-product-type="${item.type}">${itemTotal.toLocaleString("th-TH", { maximumFractionDigits: 2 })} baht</span>
                        <button class="btn btn-sm ms-3 delete-item-btn" data-product-id="${item.id}" data-product-type="${item.type}">
                            <img src="/images/UI/trash.png" alt="delete" class="img-responsive" width="30" height="30">
                        </button>
                    </div>
                </li>
            `;
        });
        summaryHTML += `</ul>`;

        TotalPrice = `<p><strong>Total:</strong> ${total.toLocaleString("th-TH", { maximumFractionDigits: 2 })} baht</p>`;

    } else {
        summaryHTML = `<p>Your cart is empty.</p>`;
        TotalPrice = `<p><strong>Total:</strong> 0 baht</p>`;
    }

    CartProductWindow.innerHTML = summaryHTML;
    Displaytotalprice.innerHTML = TotalPrice;
}

export { CheckoutCart, getCartTotal, CheckoutPage }