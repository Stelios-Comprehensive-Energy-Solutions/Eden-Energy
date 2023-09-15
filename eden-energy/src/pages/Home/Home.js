import React from 'react';
import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';


function Home() {
    const sections = [
        {
            title: 'About Us',
            description: 'Stelios PBO was founded in George in 2015 by Pierre Ferreira, Rudi Steyn, and Japie Lubbe. Our journey from corporate professionals to dedicated community changemakers has been driven by a passion to make a difference in the Southern Cape. Today, Eden-Energy stands as a testament to our commitment to providing sustainable energy solutions, impacting countless lives and businesses.',
            img: 'path_to_about_image.jpg'
        },
        {
            path: '/products',
            title: 'Products',
            description: 'Our product range is meticulously curated to offer the best in sustainable energy. From solar panels to wind turbines and energy storage solutions, we ensure that every product meets international standards of quality and sustainability. Dive into our product range to find the perfect energy solution for your needs.',
            img: 'path_to_products_image.jpg'
        },
        {
            path: '/services',
            title: 'Services',
            description: 'Beyond products, our services are what truly set us apart. Our team of experts provides end-to-end energy solutions, from consultation and design to installation and maintenance. We work closely with our clients to understand their needs and provide tailored solutions that ensure optimal energy efficiency.',
            img: 'path_to_services_image.jpg'
        },
        {
            path: '/testimonies',
            title: 'Testimonies',
            description: 'Our clients are at the heart of everything we do. Their stories of transformation and the impact of our solutions on their lives and businesses inspire us every day. Browse through our testimonies to hear firsthand about the Eden-Energy experience.',
            img: 'path_to_testimonies_image.jpg'
        },
        {
            path: '/values-governance',
            title: 'Values & Governance',
            description: 'At Eden-Energy, our values guide our actions. We believe in integrity, sustainability, and community. Our governance structures ensure that we remain accountable to our stakeholders, upholding the highest standards of corporate responsibility in every decision we make.',
            img: 'path_to_values_image.jpg'
        },
        {
            path: '/help',
            title: 'Help',
            description: 'We understand that transitioning to sustainable energy can be daunting. Our help section is designed to assist you every step of the way. From FAQs to detailed guides and support from our team, we ensure that you have all the information you need at your fingertips.',
            img: 'path_to_help_image.jpg'
        },
        {
            path: '/contact',
            title: 'Contact',
            description: 'Whether you have a query, feedback, or just want to chat about sustainable energy, we’d love to hear from you. Reach out to our team, and we’ll get back to you as soon as possible. Your journey towards sustainable energy starts with a conversation.',
            img: 'path_to_contact_image.jpg'
        }
    ];

    const theme = createTheme({
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        background: 'linear-gradient(to right, #74ebd5, #ACB6E5)',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M24 48L0 24l24-24 24 24'/&gt;%3C/g%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                    },
                },
            },
        },
    });


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Banner />
            <Container>
                {sections.map((section) => (
                    <Box component={Paper} elevation={3} sx={{ padding: '40px', marginTop: '40px', marginBottom: '40px', transition: '0.3s' }} key={section.title}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <figure>
                                    <img src={section.img} alt={section.title} loading="lazy" style={{ width: '100%', borderRadius: '4px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
                                    <figcaption style={{ textAlign: 'center', marginTop: '10px', color: '#757575' }}>{section.title}</figcaption>
                                </figure>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4" gutterBottom color="primary">{section.title}</Typography>
                                <Typography variant="body1" gutterBottom>{section.description}</Typography>
                                {section.path && <Button variant="contained" color="secondary" href={section.path}>Read More</Button>}
                            </Grid>
                        </Grid>
                    </Box>
                ))}
            </Container>
        </ThemeProvider>
    );
}

export default Home;
