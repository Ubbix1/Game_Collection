document.addEventListener('DOMContentLoaded', function () {
    const cartTable = document.querySelector('.cart table');
    const subtotalElement = document.querySelector('.total-price table tr:nth-child(1) td:last-child');
    const taxElement = document.querySelector('.total-price table tr:nth-child(2) td:last-child');
    const totalElement = document.querySelector('.total-price table tr:nth-child(3) td:last-child');
    const checkoutButton = document.querySelector('.checkout');
  
    function updateCart() {
      // Logic for updating cart items, quantities, etc.
    }
  
    function updateTotal() {
      const cartItems = document.querySelectorAll('.cart-item');
      let subtotal = 0;
  
      cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').textContent); // Adjust selectors as needed
        const quantity = parseInt(item.querySelector('.item-quantity').value); // Adjust selectors as needed
        const itemTotal = price * quantity;
        subtotal += itemTotal;
      });
  
      const taxRate = 0.25; // Adjust tax rate as needed
      const tax = subtotal * taxRate;
      const total = subtotal + tax;
  
      subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
      taxElement.textContent = `$${tax.toFixed(2)}`;
      totalElement.textContent = `$${total.toFixed(2)}`;
    }
  
    // Attach event listeners
    document.querySelectorAll('.cart table input').forEach(input => {
      input.addEventListener('input', updateCart);
      input.addEventListener('input', updateTotal); // Update total after quantity changes
    });
  
    cartTable.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        event.preventDefault();
        event.target.closest('tr').remove();
        updateCart();
        updateTotal(); // Update total after item removal
      }
    });
  
    checkoutButton.addEventListener('click', () => {
      const confirmation = confirm('Are you sure you want to proceed to checkout?');
      if (confirmation) {
        setTimeout(() => {
          alert('Purchase successful! Total amount: ' + totalElement.textContent);
        }, 0); // Delay alert for dynamic total
      }
    });
  
    updateCart(); // Initial cart update
    updateTotal(); // Initial total update
  });
  