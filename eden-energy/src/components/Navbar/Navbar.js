import React, { useState, useEffect, useMemo, useContext } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import {
    AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon,
    Tabs, Tab, TextField, LinearProgress, Badge, Typography, Tooltip, styled, Select, MenuItem
} from '@mui/material';
import {
    Menu as MenuIcon, Assignment as ValuesIcon, RateReview as TestimoniesIcon,
    HelpOutline as HelpIcon, ShoppingCart as ShoppingCartIcon, Home as HomeIcon,
    Build as BuildIcon, ShoppingBasket as ShoppingBasketIcon, AccountCircle as AccountCircleIcon,
    Mail as MailIcon
} from '@mui/icons-material';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import IndustryContext from '../../Context';

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

const StyledTab = styled(Tab)({
    '&.Mui-selected': {
        color: '#fff', // or any color that contrasts well with the AppBar's color
    },
    // other styles...
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

    const { industry, setIndustry } = useContext(IndustryContext);

    const handleIndustryChange = (event) => {
        setIndustry(event.target.value);
    };

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
                            <StyledTab
                                label={tab.text}
                                key={tab.text}
                                icon={tab.icon}
                                value={index}
                            />
                        ))}
                    </Tabs>
                    <Spacer />
                    {/* Dropdown for selecting industry */}
                    <Select
                        value={industry}
                        onChange={handleIndustryChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        style={{ marginRight: '10px', color: 'white' }} // Adjust styling as needed
                    >
                        <MenuItem value="Residential">Residential</MenuItem>
                        <MenuItem value="Commercial">Commercial</MenuItem>
                        <MenuItem value="Industrial">Industrial</MenuItem>
                        <MenuItem value="Agriculture">Agriculture</MenuItem>
                    </Select>
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
