import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountIcon from '@mui/icons-material/AccountCircle';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { Link } from 'react-router-dom'; // Import the Link component
import jwtDecode from 'jwt-decode';

function Account() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [user, setUser] = useState(null); // To store user data

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [user]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLoginSuccess = (credentialResponse) => {
        // console.log(credentialResponse); // Log the response to see its structure
        const profile = jwtDecode(credentialResponse.credential);

        if (profile) {
            const userData = {
                name: profile.name,
                imageUrl: profile.picture,
                email: profile.email,
            };
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
        } else {
            console.error("Couldn't extract user profile.");
        }
    };

    const handleLogoutSuccess = () => {
        setUser(null);
        localStorage.removeItem('user');
        googleLogout();
    };

    return (
        <div>
            {user ? (
                <>
                    <Avatar onClick={handleClick} src={user.imageUrl} style={{ cursor: 'pointer' }}>
                        {user.imageUrl ? null : <AccountIcon />}
                    </Avatar>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
                        <MenuItem onClick={handleLogoutSuccess}>Sign out</MenuItem>
                    </Menu>
                </>
            ) : (
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
