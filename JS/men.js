


// Function to update the cart count
function updateCartCount() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    document.getElementById('cartCount').innerText = cartCount;
}

// Function to add an item to the cart
function addToCart() {
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    updateCartCount();
}
function adDToCart(productId) {
    // Get the product card
    const productCard = document.getElementById(productId);
    
    // Create a product object
    const product = {
        image: productCard.querySelector('img').src,
        info: productCard.querySelector('p').innerText,
        price: productCard.querySelector('span').innerText,
    };

    // Retrieve existing cart items from local storage or create a new array
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add the new product to the cart
    cartItems.push(product);
    
    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    alert("Product added to cart!"); // Optional: Notify the user
}

// Initialize the cart count on page load
window.onload = function() {
    updateCartCount();
};