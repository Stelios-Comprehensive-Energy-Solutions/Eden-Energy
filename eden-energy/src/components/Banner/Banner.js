import React, { useContext, useMemo } from 'react';
import { Box, Grid, Typography, Card, styled } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IndustryContext } from '../../Context';
import content from './Content'; // Adjust the path as needed
import './Banner.css';

const BannerCard = styled(Card)({
    maxWidth: '100%',
    height: '100%',
    margin: 'auto',
});

const BannerMedia = styled(Box)({
    height: 300, // Adjust the height as needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});

function Banner({ onButtonClick }) {
    const { industry, industryColor } = useContext(IndustryContext);

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

    // Generate a random image number between 1 and 4
    const imageNumber = useMemo(() => Math.floor(Math.random() * 4) + 1, [industry]);

    // Construct the image path
    const imagePath = require(`../../../public/images/${industry}Landing${imageNumber}.jpeg`).default; // Adjust the path as needed

    // Find the content for the current industry
    // const content.sections[industry] = content.sections.find(section => section.id === industry.toLowerCase()) || content.sections[0];

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: '60vh' }}>
                <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={4}>
                        <Typography variant="h2" gutterBottom align="center">
                            {content.sections[industry].title}
                        </Typography>
                        <Typography variant="h5" gutterBottom align="center">
                            {content.sections[industry].summary}
                        </Typography>
                        <Typography variant="body1" gutterBottom align="center">
                            {content.sections[industry].description}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <BannerCard>
                        <BannerMedia
                            style={{ backgroundImage: `url(${imagePath})` }}
                        />
                    </BannerCard>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Banner;
