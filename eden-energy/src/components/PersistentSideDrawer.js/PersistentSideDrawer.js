import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Avatar, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ValuesIcon from '@mui/icons-material/Assignment'; // Assuming this is your Values & Governance icon
import TestimoniesIcon from '@mui/icons-material/RateReview'; // Assuming this is your Testimonies icon
import HelpIcon from '@mui/icons-material/HelpOutline';

import backgroundImage from '../../assets/images/User_Background.jpg';

import {AuthContext,CartContext} from '../../Context';

const PersistentSideDrawer = ({ open, toggleDrawer }) => {

    const [accountOpen, setAccountOpen] = useState(false);
    const { user } = useContext(AuthContext);
    const { cart } = useContext(CartContext);

    // Separate cart items into services and products
    const services = cart.filter(item => item.type === 'service');
    // alert(services);
    const products = cart.filter(item => item.type === 'product');
    // alert(products);

    const handleAccountClick = () => {
        setAccountOpen(!accountOpen);
    };

    return (
        <Drawer variant="persistent" anchor="left" open={open}>
            
            <Divider />
                <Box display="flex" flexDirection="column" height="100%">
                {/* Account Section */}
                <Box sx={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                    <IconButton onClick={toggleDrawer} sx={{ color: 'white', marginRight: '10px', marginTop: '10px' }}>
                        <ChevronLeftIcon />
                    </IconButton>
                    {user && (
                        <Box sx={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgba(38, 50, 56, 0.7)' }}>
                            <Avatar
                                src={user.imageUrl}
                                alt={user.name}
                                sx={{ 
                                    width: '100px', 
                                    height: '100px', 
                                    border: '3px solid white', 
                                    margin: '0 auto', 
                                    marginTop: '-50px'
                                }}
                            />
                            <Typography variant="h6" sx={{ color: 'white', marginTop: '10px' }}>
                                {user.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'white' }}>
                                {user.email}
                            </Typography>
                        </Box>
                    )}
                </Box>
                <Divider />

                {/* Middle Section */}
                <Box flexGrow={1}>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Cart (${cart.length} items)`} />
                        </ListItem>
                        <Divider />

                        {/* Services */}
                        {services.length > 0 && (
                            <Box>
                                <ListItemText primary="Services" sx={{ paddingLeft: '16px' }} />
                                {services.map((item, index) => (
                                    <ListItem button key={index} component={Link} to={item.link}>
                                        <ListItemText primary={item.name} />
                                    </ListItem>
                                ))}
                            </Box>
                        )}

                        {/* Products */}
                        {products.length > 0 && (
                            <Box>
                                <ListItemText primary="Products" sx={{ paddingLeft: '16px' }} />
                                {products.map((item, index) => (
                                    <ListItem button key={index} component={Link} to={item.link}>
                                        <ListItemText primary={item.name} />
                                    </ListItem>
                                ))}
                            </Box>
                        )}
                    </List>
                </Box>

                {/* Bottom Section */}
                <Box>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <ValuesIcon />
                            </ListItemIcon>
                            <ListItemText primary="Values & Governance" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <TestimoniesIcon />
                            </ListItemIcon>
                            <ListItemText primary="Testimonies" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <HelpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Help" />
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Drawer>
    );
};

export default PersistentSideDrawer;
