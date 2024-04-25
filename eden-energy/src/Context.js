// Context.js
import React, { useState, createContext, useEffect } from 'react';

// Industry context and provider
const IndustryContext = createContext({
  industry: 'Residential', // default value
  setIndustry: () => {},
  industryColor: {
    primary: '#6a8caf', // Updated default primary color
    secondary: '#f4f4f4', // Updated default secondary color
    textColor: '#333333',
    secondaryTextColor: '#555555',
    backgroundColor: '#e9eff3',
  },
});

export const IndustryProvider = ({ children }) => {
  const [industry, setIndustry] = useState('Residential');
  const [industryColor, setIndustryColor] = useState({
    primary: '#6a8caf', // Softened Blue
    secondary: '#f4f4f4', // Light Gray
    textColor: '#333333',
    secondaryTextColor: '#555555',
    backgroundColor: '#e9eff3',
  });

  useEffect(() => {
    // Set industry colors based on selected industry
    switch (industry) {
      case 'Residential':
        setIndustryColor({
          primary: '#6a8caf', // Softened Blue
          secondary: '#f4f4f4', // Light Gray
          textColor: '#333333',
          secondaryTextColor: '#555555',
          backgroundColor: '#e9eff3',
        });
        break;
      case 'Commercial':
        setIndustryColor({
          primary: '#00796b', // Teal
          secondary: '#ffc107', // Amber
          textColor: '#333333',
          secondaryTextColor: '#555555',
          backgroundColor: '#f5f5f5',
        });
        break;
      case 'Agricultural':
        setIndustryColor({
          primary: '#558b2f', // Olive Green
          secondary: '#9e9e9e', // Gray
          textColor: '#333333',
          secondaryTextColor: '#555555',
          backgroundColor: '#fafafa',
        });
        break;
      case 'Industrial':
        setIndustryColor({
          primary: '#607d8b', // Blue Gray
          secondary: '#ff5722', // Deep Orange
          textColor: '#333333',
          secondaryTextColor: '#555555',
          backgroundColor: '#eceff1',
        });
        break;
      default:
        setIndustryColor({
          primary: '#6a8caf', // Default to a neutral blue if no match
          secondary: '#f4f4f4',
          textColor: '#333333',
          secondaryTextColor: '#555555',
          backgroundColor: '#e9eff3',
        });
    }
  }, [industry]);

  return (
    <IndustryContext.Provider value={{ industry, setIndustry, industryColor }}>
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

export { IndustryContext, AuthContext };
