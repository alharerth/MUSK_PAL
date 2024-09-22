// Function to update the cart count
function updateCartCount() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    document.getElementById('cartCount').innerText = cartCount;
}


// Initialize the cart count on page load
window.onload = function() {
    updateCartCount();
};