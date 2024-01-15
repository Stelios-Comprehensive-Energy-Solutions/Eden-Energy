import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, IconButton, Link, Grid, List, ListItem, TextField, Button, Tooltip } from '@mui/material';
import Logo from '../Logo/Logo';

// Importing Material-UI icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {ThemeProvider, createTheme } from '@mui/material/styles';

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

function Footer() {
    return (
        <ThemeProvider theme={theme}>
            <Box component="footer" sx={{ mt: 4, p: 3, backgroundColor: 'background.paper' }}>
                <Grid container spacing={3} >
                    {/* Logo Section */}
                    <Grid item xs={12} sm={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ transform: 'scale(2.0)' }}> {/* Scale the logo */}
                            <Logo />
                        </div>
                    </Grid>

                    {/* Navigation Links */}
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>Navigation</Typography>
                        <nav aria-label="Footer Navigation">
                            <List sx={{ padding: 0 }}>
                                {['Home', 'Services', 'Products', 'Account', 'Contact'].map((item, index) => (
                                    <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                                        <Link
                                            component={RouterLink}
                                            to={`/${item.toLowerCase()}`}
                                            sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                        >
                                            {item}
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </nav>
                    </Grid>

                    {/* Social Media Links */}
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>Social</Typography>
                        {[{ icon: FacebookIcon, title: 'Facebook' }, { icon: TwitterIcon, title: 'Twitter' }].map((social, index) => (
                            <Tooltip key={index} title={social.title}>
                                <IconButton
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    sx={{ mr: 1 }}
                                >
                                    <social.icon />
                                </IconButton>
                            </Tooltip>
                        ))}
                    </Grid>

                    {/* Contact Information */}
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>Contact</Typography>
                        <address>
                            <Typography gutterBottom>Stelios Comprehensive Energy Solutions Pty (Ltd t/a Eden-Energy)</Typography>
                            <Typography gutterBottom>Based in George, South Africa</Typography>
                            <Typography gutterBottom>
                                <EmailIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
                                <Link href="mailto:your_email@example.com">your_email@example.com</Link>
                            </Typography>
                            <Typography gutterBottom>
                                <PhoneIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
                                <Link href="tel:+27-XX-XXX-XXXX">+27-XX-XXX-XXXX</Link>
                            </Typography>
                        </address>
                    </Grid>

                    {/* Newsletter Signup */}
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>Newsletter</Typography>
                        <form>
                            <TextField label="Email Address" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                            <Button variant="contained" color="primary">Subscribe</Button>
                        </form>
                    </Grid>

                    {/* Legal and Compliance Links */}
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>Legal</Typography>
                        <List sx={{ padding: 0 }}>
                            {['Terms of Service', 'Privacy Policy'].map((item, index) => (
                                <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                                    <Link
                                        component={RouterLink}
                                        to={`/values#${item.toLowerCase().replace(/\s/g, '-')}`}
                                        sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                    >
                                        {item}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default Footer;
