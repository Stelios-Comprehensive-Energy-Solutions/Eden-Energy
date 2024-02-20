import React, { useState, useMemo, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    AppBar, Toolbar, IconButton,  
    Tabs, Tab, Typography, styled, Select, MenuItem
} from '@mui/material';

import {
    Menu as MenuIcon, Home as HomeIcon,
    Build as BuildIcon, ShoppingBasket as ShoppingBasketIcon,
    Mail as MailIcon
} from '@mui/icons-material';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import {IndustryContext} from '../../Context';

import Logo from '../Logo/Logo';
import Account from '../Account/Account';
import PersistentSideDrawer from '../PersistentSideDrawer/PersistentSideDrawer';
import SearchBar from '../SearchBar/SearchBar'; // Import the SearchBar component

const Spacer = styled('div')({
    flexGrow: 1,
});

const StyledTab = styled(Tab)({
    '&.Mui-selected': {
        color: '#67acc1', // or any color that contrasts well with the AppBar's color
    },
    '&:hover': {
        color: '#9bbfd2', // Change the hover color to green
    },
    // other styles...
});

const StyledIconButton = styled(IconButton)({
    '&:hover': {
        color: '#9bbfd2', // Change the hover color to green
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
    }
    // ... any other theme customizations
});

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { industry, setIndustry,industryColor } = useContext(IndustryContext);

    const theme = createTheme({
        palette: {
            primary: {
                main: industryColor.primary,
            },
            secondary: {
                main: industryColor.secondary,
            },
            text: {
                primary: industryColor.textColor,
                secondary: industryColor.secondaryTextColor,
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor: industryColor.backgroundColor
                    },
                },
            },
        },
    });

    const handleSearch = (searchTerm) => {
        // Implement your search logic here
        // For example, navigate to a search results page or filter items in the current view
        console.log("Searching for:", searchTerm);
    };

    const handleIndustryChange = (event) => {
        setIndustry(event.target.value);
    };

    // Define main navigation tabs
    const tabs = useMemo(() => [
        { text: 'Home', icon: <HomeIcon /> },
        { text: 'Services', icon: <BuildIcon /> },
        { text: 'Products', icon: <ShoppingBasketIcon /> },
        { text: 'Contact', icon: <MailIcon /> }
    ], []);

    // Determine initial tab based on current route
    const initialTabValue = tabs.findIndex(tab => `/${tab.text.toLowerCase()}` === location.pathname);
    const [tabValue, setTabValue] = useState(initialTabValue !== -1 ? initialTabValue : 0);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };


    // Handle tab change and navigation
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        navigate(`/${tabs[newValue].text.toLowerCase()}`);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <StyledIconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </StyledIconButton>
                    <Typography variant="h6">
                        <Logo />
                    </Typography>
                    {/* Dropdown for selecting industry */}
                    <Select
                        value={industry}
                        onChange={handleIndustryChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        style={{ marginRight: '10px'}} // Adjust styling as needed
                    >
                        <MenuItem value="Residential">Residential</MenuItem>
                        <MenuItem value="Commercial">Commercial</MenuItem>
                        <MenuItem value="Industrial">Industrial</MenuItem>
                        <MenuItem value="Agricultural">Agriculture</MenuItem>
                    </Select>
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
                    
                    {/* Search Bar */}
                    <SearchBar onSearch={handleSearch} />
                    <Account />
                </Toolbar>
                <PersistentSideDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
            </AppBar>
        </ThemeProvider>
    );
}

export default Navbar;
