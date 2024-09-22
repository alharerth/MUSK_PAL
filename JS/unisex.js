function updateCartCount() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    document.getElementById('cartCount').innerText = cartCount;
}

function addToCart() {
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    updateCartCount();
}
function adDToCart(productId) {
    const productCard = document.getElementById(productId);
    
    const product = {
        image: productCard.querySelector('img').src,
        info: productCard.querySelector('p').innerText,
        price: productCard.querySelector('span').innerText,
    };

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    cartItems.push(product);
    
    localStorage.setItem('cart', JSON.stringify(cartItems));

    alert("Product added to cart!");
}

window.onload = function() {
    updateCartCount();
};