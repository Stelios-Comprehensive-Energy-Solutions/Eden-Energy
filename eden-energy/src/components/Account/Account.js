import React, { useContext, useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountIcon from '@mui/icons-material/AccountCircle';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import CircularProgress from '@mui/material/CircularProgress';

import { AuthContext } from '../../Context';

function Account() {
    // Using AuthContext to manage user state
    const { user, setUser } = useContext(AuthContext);
    // State for managing the anchor of the dropdown menu
    const [anchorEl, setAnchorEl] = useState(null);
    // State to handle loading during login/logout
    const [loading, setLoading] = useState(false);

    // Effect to check local storage for user data on component mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [setUser]);

    // Function to handle opening of the user menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Function to handle closing of the user menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Function to handle successful login
    const handleLoginSuccess = (credentialResponse) => {
        setLoading(true);
        try {
            // Decoding JWT token to get user profile
            const profile = jwtDecode(credentialResponse.credential);
            if (profile) {
                // Setting user data including a default role
                const userData = {
                    name: profile.name,
                    imageUrl: profile.picture,
                    email: profile.email,
                    role: 'user', // Default role, replace with actual role from backend
                };
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));
            } else {
                console.error("Couldn't extract user profile.");
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
        setLoading(false);
    };

    // Function to handle logout
    const handleLogoutSuccess = () => {
        setLoading(true);
        setUser(null);
        localStorage.removeItem('user');
        googleLogout();
        setLoading(false);
    };

    // Display loading indicator when processing login/logout
    if (loading) {
        return <CircularProgress />;
    }

    return (
        <div>
            {user ? (
                <>
                    {/* User Avatar and Dropdown Menu */}
                    <Avatar onClick={handleClick} src={user.imageUrl} style={{ cursor: 'pointer' }}>
                        {user.imageUrl ? null : <AccountIcon />}
                    </Avatar>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {/* Conditional rendering for Admin Panel link */}
                        {user.role === 'admin' && (
                            <MenuItem onClick={handleClose} component={Link} to="/admin">Admin Panel</MenuItem>
                        )}
                        {/* Profile and Sign out options */}
                        <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
                        <MenuItem onClick={handleLogoutSuccess}>Sign out</MenuItem>
                    </Menu>
                </>
            ) : (
                // Google Login Button
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            )}
        </div>
    );
}

export default Account;
