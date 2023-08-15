document.addEventListener('DOMContentLoaded', () => {
    initCartActions();
});

function initCartActions() {
    // Handle quantity changes in the cart
    const quantityInputs = document.querySelectorAll('.cart-item-quantity');
    quantityInputs.forEach(input => {
        input.addEventListener('change', handleQuantityChange);
    });

    // Handle removal of items from the cart
    const removeButtons = document.querySelectorAll('.remove-from-cart-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', handleRemoveFromCart);
    });
}

function handleQuantityChange(event) {
    const newValue = event.target.value;

    // Ensure quantities are positive integers
    if (newValue < 1) {
        event.target.value = 1;
        alert("Quantity can't be less than 1");
    } else {
        // Update the cart's total amount (pseudo-code, needs your price structure)
        // updateCartTotal();
    }
}

function handleRemoveFromCart(event) {
    const productId = event.target.dataset.productId;

    // If using AJAX, you'd send a request to the server to remove the product from the cart
    // removeProductFromCartOnServer(productId)

    // For now, just a confirmation:
    alert(`Removed product ID ${productId} from the cart!`);

    // In a real-world scenario, post removal, you'd update the DOM to reflect the removed item and adjust the cart total.
}

// Additional optional function to update cart's total amount:
/*
function updateCartTotal() {
    let totalAmount = 0;

    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        const quantity = item.querySelector('.cart-item-quantity').value;
        const price = item.querySelector('.cart-item-price').textContent;  // Assuming price is direct text content of an element

        totalAmount += quantity * parseFloat(price);
    });

    // Update the DOM with the new total (pseudo-code, needs your total element structure)
    // document.querySelector('.cart-total').textContent = '$' + totalAmount.toFixed(2);
}
*/

// Add more functionalities as needed, such as AJAX integration, dynamic DOM updates, etc.
