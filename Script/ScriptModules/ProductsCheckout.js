import { cart } from "./SynchronizeQuantity.js";

function CheckoutCart() {
    
    const existingModal = document.getElementById('checkoutSummaryModal');
    if (existingModal) existingModal.remove();

    // Create total price and cart summary
    let total = 0;
    let summaryHTML = '';

    if (cart.length === 0) {
        summaryHTML = `<p>Your cart is empty.</p>`;
    } else {
        summaryHTML = `<ul class="list-group">`;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            summaryHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${item.name} (x${item.quantity})
                    <span>${itemTotal.toFixed(2)} baht</span>
                </li>
            `;
        });
        summaryHTML += `</ul>
            <div class="mt-3"><strong>Total:</strong> ${total.toFixed(2)} baht</div>`;
    }

    // Modal HTML string
    const modalHTML = `
        <div class="modal fade modal-lg" id="checkoutSummaryModal" tabindex="-1" aria-labelledby="checkoutSummaryLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="checkoutSummaryLabel">Checkout Summary</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="checkout-summary-body">
                        ${summaryHTML}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
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

export { CheckoutCart }

// <div class="modal fade modal-lg" id="checkoutSummaryModal" tabindex="-1" aria-labelledby="checkoutSummaryLabel"
//     aria-hidden="true">
//     <div class="modal-dialog">
//         <div class="modal-content">
//             <div class="modal-header">
//                 <h5 class="modal-title" id="checkoutSummaryLabel">Checkout Summary</h5>
//                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body" id="checkout-summary-body">
//                 <!-- Total price and cart summary will be dynamically loaded here -->
//                 <p>Your cart summary will be shown here.</p>
//             </div>
//             <div class="modal-footer">
//                 <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
//             </div>
//         </div>
//     </div>
// </div>