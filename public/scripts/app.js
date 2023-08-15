document.addEventListener('DOMContentLoaded', () => {
  initCartActions();
});

function initCartActions() {
  // Handle product quantity adjustments
  const quantityInputs = document.querySelectorAll('.product-quantity');
  quantityInputs.forEach(input => {
      input.addEventListener('change', handleQuantityChange);
  });

  // Handle add to cart actions
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  addToCartButtons.forEach(button => {
      button.addEventListener('click', handleAddToCart);
  });
}

function handleQuantityChange(event) {
  const newValue = event.target.value;

  // Ensure quantities are positive integers
  if (newValue < 1) {
      event.target.value = 1;
      alert("Quantity can't be less than 1");
  }
}

function handleAddToCart(event) {
  const productId = event.target.dataset.productId;
  const quantity = document.querySelector(`#quantity-${productId}`).value;

  // Example: Send this data to the server (pseudo-code, requires implementation)
  // addToCartOnServer(productId, quantity)

  alert(`Added product ID ${productId} with quantity ${quantity} to cart!`);

  // You'd probably want to handle this with AJAX in a real-world scenario to update the cart without a page reload.
}

// Additional functions and event handlers can be added as needed.
