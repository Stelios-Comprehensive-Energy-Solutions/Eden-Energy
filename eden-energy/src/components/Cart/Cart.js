import React, { useState, useEffect } from 'react';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    // Fetch cart items from local storage or API on component mount
    useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
        // You can also fetch from an API if needed
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Add other cart-related functions here, like adding or removing items

    return (
        <div>
            <h3>Your Cart</h3>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.quantity}
                    </li>
                ))}
            </ul>
            {/* You can add more cart functionalities like total price, checkout button, etc. */}
        </div>
    );
}

export default Cart;
