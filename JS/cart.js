// Function to update the cart count
function updateCartCount() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    document.getElementById('cartCount').innerText = cartCount;
}

// Initialize the cart count on page load
window.onload = function() {
    updateCartCount();
};
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cart = document.getElementById('cart');

    if (cartItems.length > 0) {
        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
           //cartItemElement.className = 'col-md-4 col-sm-6 mb-4 d-flex'; // Add d-flex for flexbox
            cartItemElement.innerHTML = `
                <div class="card"><!-- Use flex-fill to make cards equal height -->
                    <div class="card-body">
                    <img src="${item.image}" class="card-img-top" alt="...">
                        <p class="card-text">product ${item.info}</p>
                        <span class="price"> ${item.price}</span>
                    </div>
                </div>
            `;
            cart.appendChild(cartItemElement);
        });
    } else {
        cart.innerHTML = "<p>Your cart is empty.</p>";
    }
});
