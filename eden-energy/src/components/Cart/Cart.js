import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

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
        <Container component={Paper} elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
            <Typography variant="h5" gutterBottom>
                Your Cart
            </Typography>
            <List>
                {cartItems.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
                    </ListItem>
                ))}
            </List>
            {/* You can add more cart functionalities like total price, checkout button, etc. */}
        </Container>
    );
}

export default Cart;
