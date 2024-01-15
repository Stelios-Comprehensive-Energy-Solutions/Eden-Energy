import React from 'react';
import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import pageContent from './Content'; // Adjust the path if necessary


function Home() {

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
                {pageContent.sections.map((section) => (
                    <Box component={Paper} className="section-box" elevation={3} sx={{ padding: '40px', marginTop: '40px', marginBottom: '40px', transition: '0.3s' }} key={section.title}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <figure>
                                    <img src={section.img} alt={section.title} loading="lazy" style={{ width: '100%', borderRadius: '4px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
                                    <figcaption style={{ textAlign: 'center', marginTop: '10px', color: '#757575' }}>{section.title}</figcaption>
                                </figure>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4" gutterBottom color="primary">{section.title}</Typography>
                                <Typography variant="body1" gutterBottom className="searchable-content">{section.description}</Typography>
                                {section.path && <Button variant="contained" color="secondary" href={section.path}>Read More</Button>}
                            </Grid>
                        </Grid>
                    </Box>
                ))}
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

export default Home;
