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
        id:productId,
        image: productCard.querySelector('img').src,
        info: productCard.querySelector('p').innerText,
        price: productCard.querySelector('.price').innerText,
    };

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    cartItems.push(product);
    
    localStorage.setItem('cart', JSON.stringify(cartItems));

    alert("Product added to cart!");
}

let lastScrollTop = 0;
const navbar = document.getElementById('nav');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY; // Use scrollY instead of pageYOffset

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-80px'; // Hide the navbar (adjust based on height)
    } else {
        // Scrolling up
        navbar.style.top = '0'; // Show the navbar
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

document.getElementById('toggleDarkMode').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Toggle the data-bs-theme attribute
    if (body.classList.contains('dark-mode')) {
        body.setAttribute('data-bs-theme', 'dark');
    } else {
        body.removeAttribute('data-bs-theme');
    }
});

window.onload = function() {
    updateCartCount();
};