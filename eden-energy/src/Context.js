// Context.js
import React, { useState, createContext, useEffect } from 'react';

// Industry context and provider
const IndustryContext = createContext({
  industry: 'Residential', // default value
  setIndustry: () => {},
});

export const IndustryProvider = ({ children }) => {
  const [industry, setIndustry] = useState('Residential');

  return (
    <IndustryContext.Provider value={{ industry, setIndustry }}>
      {children}
    </IndustryContext.Provider>
  );
};

// Authentication context and provider
const AuthContext = createContext({
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Load cart from local storage or initialize with test data
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        } else {
            // Initialize with test data
            setCart([
                { id: 1, name: 'Test Service', type: 'service', link: '/service/test-service' },
                { id: 2, name: 'Test Product', type: 'product', link: '/product/test-product' }
            ]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { IndustryContext, AuthContext };
