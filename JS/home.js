function updateCartCount() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    document.getElementById('cartCount').innerText = cartCount;
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