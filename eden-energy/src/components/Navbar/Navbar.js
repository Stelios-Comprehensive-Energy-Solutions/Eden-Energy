import React, { useState, useEffect, useMemo } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import {
    AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon,
    Tabs, Tab, TextField, LinearProgress, Badge, Typography, Tooltip, styled
} from '@mui/material';
import {
    Menu as MenuIcon, Assignment as ValuesIcon, RateReview as TestimoniesIcon,
    HelpOutline as HelpIcon, ShoppingCart as ShoppingCartIcon, Home as HomeIcon,
    Build as BuildIcon, ShoppingBasket as ShoppingBasketIcon, AccountCircle as AccountCircleIcon,
    Mail as MailIcon
} from '@mui/icons-material';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Logo from '../Logo/Logo';
import Cart from '../Cart/Cart';
import Account from '../Account/Account';

// Styled components
const SearchField = styled(TextField)({
    marginLeft: '10px',
});

const Spacer = styled('div')({
    flexGrow: 1,
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#0d47a1', // A shade of blue
        },
        secondary: {
            main: '#c62828', // A shade of red
        },
        background: {
            default: '#f4f4f4', // A light background color
        },
    },
    typography: {
        // Adjust typography if needed
    },
    // ... any other theme customizations
});

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Define main navigation tabs
    const tabs = useMemo(() => [
        { text: 'Home', icon: <HomeIcon /> },
        { text: 'Services', icon: <BuildIcon /> },
        { text: 'Products', icon: <ShoppingBasketIcon /> },
        { text: 'Account', icon: <AccountCircleIcon /> },
        { text: 'Contact', icon: <MailIcon /> }
    ], []);

    // Determine initial tab based on current route
    const initialTabValue = tabs.findIndex(tab => `/${tab.text.toLowerCase()}` === location.pathname);
    const [tabValue, setTabValue] = useState(initialTabValue !== -1 ? initialTabValue : 0);

    const [menuActive, setMenuActive] = useState(false);
    const [loading, setLoading] = useState(true);

    // Simulate loading state for demonstration purposes
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    // Handle tab change and navigation
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        navigate(`/${tabs[newValue].text.toLowerCase()}`);
    };

    // Toggle the side drawer menu
    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setMenuActive(open);
    };

    // Define side menu items
    const menuItems = [
        { text: 'Values & Governance', icon: <ValuesIcon />, link: '/values-governance' },
        { text: 'Testimonies', icon: <TestimoniesIcon />, link: '/testimonies' },
        { text: 'Help', icon: <HelpIcon />, link: '/help' },
        { text: 'Shopping Cart', icon: <ShoppingCartIcon />, link: '/cart' }
    ];

    // Render side menu list
    const renderMenuList = () => (
        <div
            role="presentation"
            onClick={() => setMenuActive(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {menuItems.map((item) => (
                    <ListItem button key={item.text} component={RouterLink} to={item.link}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <ThemeProvider theme={theme}>
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
                    <Typography variant="h6">
                        <Logo />
                    </Typography>
                    <Tabs value={tabValue} onChange={handleTabChange}>
                        {tabs.map((tab, index) => (
                            <Tab
                                label={tab.text}
                                key={tab.text}
                                icon={tab.icon}
                                value={index}
                            />
                        ))}
                    </Tabs>
                    <Spacer />
                    <SearchField placeholder="Search..." variant="outlined" size="small" />
                    <Account />
                </Toolbar>
                <Drawer anchor="left" open={menuActive} onClose={toggleDrawer(false)}>
                    {renderMenuList()}
                    <Cart />
                </Drawer>
            </AppBar>
        </ThemeProvider>
    );
}

export default Navbar;
