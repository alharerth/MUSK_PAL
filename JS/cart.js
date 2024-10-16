
function updateCartCount() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    document.getElementById('cartCount').innerText = cartCount;
}


window.onload = function() {
    updateCartCount();
};
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cart = document.getElementById('cart');
    const cont = document.getElementById('cont');
    const totalPriceElement = document.getElementById('tprice'); 
    const shippingFeeElement = document.getElementById('shipping-fee'); 
    const finalTotalElement = document.getElementById('final-total'); 
    const checkoutButton = document.getElementById('checkout-button');
    const lfDiv = document.getElementById('lf'); 
    let totalPrice = 0; 
    const shippingFee = 5; 

    function renderCart() {
        cart.innerHTML = ''; 
        totalPrice = 0; 

        if (cartItems.length > 0) {
            cartItems.forEach(item => {
                const cartItemElement = document.createElement('div');
                cartItemElement.innerHTML = `
                    <div class="card" id="${item.id}">
                        <div class="card-body">
                            <img src="${item.image}" class="card-img-top" alt="...">
                            <p class="card-text">Product: ${item.info}</p>
                            <span class="price">$${item.price}</span>
                            <button class="trbu" onclick="delFromCart('${item.id}')">
                                <svg class="traash" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                `;
                cart.appendChild(cartItemElement);
                totalPrice += parseFloat(item.price); 
            });

            const totalWithShipping = totalPrice + shippingFee;

            totalPriceElement.innerHTML = `Subtotal: $${totalPrice.toFixed(2)}`;
            shippingFeeElement.innerHTML = `Shipping Fee: $${shippingFee.toFixed(2)}`;
            finalTotalElement.innerHTML = `Total: $${totalWithShipping.toFixed(2)}`;

            checkoutButton.style.display = 'block'; 
            lfDiv.style.display = 'inline-block'; 
        } else {
            cont.innerHTML = '<img src="/media/Daco_5212497.png" alt="..." class="ci" id="ci1">';
            totalPriceElement.innerHTML = ""; 
            shippingFeeElement.innerHTML = "";
            finalTotalElement.innerHTML = ""; 

            checkoutButton.style.display = 'none'; 
            lfDiv.style.display = 'none'; 
        }
    }

    window.delFromCart = function(itemId) {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        
        cartItems.length = 0; 
        cartItems.push(...updatedCartItems); 
        
        renderCart();
        
    };

    renderCart();

    document.getElementById('cartCount').innerText = cartCount-1;
});
