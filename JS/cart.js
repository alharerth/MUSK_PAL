
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

    if (cartItems.length > 0) {
        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <img src="${item.image}" class="card-img-top" alt="...">
                        <p class="card-text">Product: ${item.info}</p>
                        <span class="price">$${item.price}</span>
                    </div>
                </div>
            `;
            cart.appendChild(cartItemElement);

            totalPrice += parseFloat(item.price); 
        });

        const totalWithShipping = totalPrice + shippingFee;

        totalPriceElement.innerHTML = `Subtotal: $${totalPrice.toFixed(2)}`; // Format to 2 decimal places
        shippingFeeElement.innerHTML = `Shipping Fee: $${shippingFee.toFixed(2)}`;
        finalTotalElement.innerHTML = `Total: $${totalWithShipping.toFixed(2)}`; // Format to 2 decimal places

        checkoutButton.style.display = 'block'; 
        lfDiv.style.display = 'inline-block'; 

        checkoutButton.addEventListener('click', function() {
            console.log('Proceeding to checkout...');
        });
    } else {
        cont.innerHTML = '<img src="/media/Daco_5212497.png" alt="..." class="ci" id="ci1">';
        totalPriceElement.innerHTML = ""; 
        shippingFeeElement.innerHTML = "";
        finalTotalElement.innerHTML = ""; 

        
        checkoutButton.style.display = 'none'; 
        lfDiv.style.display = 'none'; 
    }
});


