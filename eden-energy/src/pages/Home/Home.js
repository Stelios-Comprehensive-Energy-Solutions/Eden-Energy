import React, { useContext } from 'react';
import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import pageContent from './Content'; // Adjust the path if necessary
import { IndustryContext } from '../../Context'; // Adjust the path if necessary
import { useNavigate } from 'react-router-dom';
import landingImages from '../../assets/images/landingImages/landingImages';
import { productsImages, solutionsImages } from '../../assets/images/productsImages/productImages';

function Home() {
    const { industryColor } = useContext(IndustryContext);

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    const cardData = landingImages["CardsData"];


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
                        background: 'linear-gradient(to right, #74ebd5, #ACB6E5)',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M24 48L0 24l24-24 24 24'/&gt;%3C/g%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                        backgroundColor: industryColor.backgroundColor
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

                                <Swiper
                                    rewind={true}
                                    navigation={true}
                                    modules={[Navigation]}
                                    autoHeight={true} // Enable autoHeight feature
                                    className="mySwiper"
                                >
                                    {landingImages["CardsData"][section.id] && landingImages["CardsData"][section.id].map((Component, index) => (
                                        <SwiperSlide key={index}>
                                            <Component/>
                                        </SwiperSlide>
                                    ))
                                    }

                                </Swiper>
                                <Button variant="contained" color="secondary" onClick={() => handleNavigate(section.url)}>Learn More</Button>

                        </Grid>
                    </Box>
                ))}
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

export default Home;
