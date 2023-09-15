import Cart from '../Cart/Cart';
import Account from '../Account/Account';

// React and Hooks
import React, { useState, useEffect } from 'react';

// Routing
import { Link as RouterLink } from 'react-router-dom';

// Material-UI Components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material/LinearProgress';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

// Material-UI Icons
import MenuIcon from '@mui/icons-material/Menu';
import ValuesIcon from '@mui/icons-material/Assignment'; // Example icon for 'Values & Governance'
import TestimoniesIcon from '@mui/icons-material/RateReview'; // Example icon for 'Testimonies'
import HelpIcon from '@mui/icons-material/HelpOutline'; // Icon for 'Help'
import AccountIcon from '@mui/icons-material/AccountCircle'; // Icon for 'Account'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Custom Components
import Logo from '../Logo/Logo';

function Navbar() {
    // State management
    const [menuActive, setMenuActive] = useState(false);
    const [loading, setLoading] = useState(true);
    const [tabValue, setTabValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);  

    // Handle tab change
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    // Handle Google user dropdown
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Simulate site load
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    // Handle side drawer toggle
    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setMenuActive(open);
    };

    // Side drawer list
    const list = () => (
        <div
            role="presentation"
            onClick={() => setMenuActive(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Values & Governance', 'Testimonies', 'Help'].map((text, index) => (
                    <ListItem button key={text} component={RouterLink} to={`/${text.toLowerCase().replace(/ & | /g, '-')}`}>
                        <ListItemIcon>
                            {text === 'Values & Governance' && <ValuesIcon />}
                            {text === 'Testimonies' && <TestimoniesIcon />}
                            {text === 'Help' && <HelpIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                <ListItem button component={RouterLink} to="/cart">
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Shopping Cart" />
                </ListItem>
            </List>
        </div>
    );


    return (
        <AppBar position="sticky" color="primary">
            {loading && <LinearProgress color="secondary" />}
            <Toolbar>
                <Tooltip title="Open Menu">
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <Badge badgeContent={4} color="secondary">
                            <MenuIcon />
                        </Badge>
                    </IconButton>
                </Tooltip>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Logo />
                </Typography>
                <TextField placeholder="Search..." variant="outlined" size="small" style={{ marginLeft: '10px' }} />
                <Account />
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Sign out</MenuItem>
                </Menu>
            </Toolbar>
            <Tabs value={tabValue} onChange={handleTabChange} centered>
                {['Home', 'Services', 'Products','Monitoring', 'Contact'].map((text, index) => (
                    <Tab label={text} key={index} />
                ))}
            </Tabs>
            <Drawer anchor="left" open={menuActive} onClose={toggleDrawer(false)}>
                {list()}
                <Cart />
            </Drawer>

        </AppBar>
    );
}

export default Navbar;
