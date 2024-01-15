import React, { useContext } from 'react';
import { Box, Modal, Typography, Card, CardActionArea, CardMedia, styled } from '@mui/material';

import {IndustryContext} from '../../Context';

// Import SVG images
import ResidentialSVG from '../../assets/images/Residential.png';
import CommercialSVG from '../../assets/images/Commercial.png';
import IndustrialSVG from '../../assets/images/Industrial.png';
import AgriculturalSVG from '../../assets/images/Agricultural.png';

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    BackdropProps: { style: { backdropFilter: 'blur(3px)' } }, // Moved inline styling here
    // Add any additional styling as needed
});

const GridContainer = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Creates two columns of equal width
    gridGap: '0.5rem', // Sets the gap between grid items
    padding: '0.5rem', // Optional: Adds some padding around the grid
    maxWidth: '100%', // Ensures the container does not exceed the width of its parent
    margin: 'auto', // Centers the container in the parent
    // Adjust the below properties if you need responsiveness
    '@media (max-width: 900px)': {
        gridTemplateColumns: '1fr', // Stacks the cards in a single column on smaller screens
    },
});

const FlipCard = styled(Card)({
    margin: '0.5rem',
    width: '500px', // Adjust width as needed
    height: '280px', // Adjust height as needed
    perspective: '1000px', // Add perspective to make the flip effect more pronounced
});

const FlipCardInner = styled('div')({
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.8s',
    transformStyle: 'preserve-3d',
    '&:hover': {
        transform: 'rotateY(180deg)',
    },
    '&:hover': {
        transform: 'rotateY(180deg)',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Added shadow effect for depth
    },
});

const CardFront = styled(CardActionArea)({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden', // Hide the back side when flipped
    cursor: 'pointer',
    transition: 'transform 0.3s ease', // Optional: for a smoother hover effect
    backfaceVisibility: 'hidden',
});

const CardBack = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: '#f0f0f0', // Choose a background color for the back
    color: 'black',
    transform: 'rotateY(180deg)', // Flip the back side by default
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '1rem',
    cursor: 'pointer',
    transition: 'transform 0.3s ease', // Optional: for a smoother hover effect
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
});

const Overlay = ({ open, onClose, purpose }) => {
    // Function to handle industry selection
    const { setIndustry } = useContext(IndustryContext);

    const handleIndustrySelect = (industry) => {
        setIndustry(industry);
        console.log(industry); // This will be replaced with actual logic
        onClose();
    };

    const renderContent = () => {
        switch (purpose) {
            case 'industrySelection':
                return (
                    <StyledModal
                        open
                        onClose={onClose}
                        aria-labelledby="select-industry"
                        aria-describedby="select-industry-modal"
                        disableEscapeKeyDown // Disables closing the modal with the escape key
                    >
                        <Box bgcolor="background.paper" p={4} borderRadius={5}>
                            <Box textAlign="center" mb={4}>
                                <Typography variant="h4" component="h" gutterBottom fontWeight="bold">
                                    Eden Energy
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" mb={4}>
                                    Specialised Solar Solutions
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" fontWeight="bold">
                                    Select Your Industry
                                </Typography>
                            </Box>
                            <GridContainer display="flex" justifyContent="center" flexWrap="wrap">
                                {/* FlipCard for Residential */}
                                <FlipCard>
                                    <FlipCardInner>
                                        <CardFront onClick={() => handleIndustrySelect('Residential')}>
                                            <CardMedia
                                                component="img"
                                                image={ResidentialSVG}
                                                alt="Residential"
                                                loading="lazy" // This enables lazy loading
                                            />
                                        </CardFront>
                                        <CardBack  onClick={() => handleIndustrySelect('Residential')}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Residential
                                            </Typography>
                                            <Typography variant="body2" component="p" gutterBottom>
                                                Elevate your home with our tailored solar solutions. Our panels are designed to fit your roof space perfectly, ensuring optimal energy production. Generate your own power and enjoy lower electricity bills, a reliable power supply, and a sustainable lifestyle.
                                            </Typography>
                                        </CardBack>
                                    </FlipCardInner>
                                </FlipCard>
                                {/* FlipCard for Commercial */}
                                <FlipCard>
                                    <FlipCardInner>
                                        <CardFront onClick={() => handleIndustrySelect('Commercial')}>
                                            <CardMedia
                                                component="img"
                                                image={CommercialSVG}
                                                alt="Commercial"
                                                loading="lazy" // This enables lazy loading
                                            />
                                        </CardFront>
                                        <CardBack onClick={() => handleIndustrySelect('Commercial')}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Commercial
                                            </Typography>
                                            <Typography variant="body2" component="p" gutterBottom>
                                                Empower your business operations with our efficient solar panels. Enjoy uninterrupted productivity with a dependable power source that also serves as a backup during grid outages.
                                            </Typography>
                                        </CardBack>
                                    </FlipCardInner>
                                </FlipCard>

                                {/* FlipCard for Industrial */}
                                <FlipCard>
                                    <FlipCardInner>
                                        <CardFront onClick={() => handleIndustrySelect('Industrial')}>
                                            <CardMedia
                                                component="img"
                                                image={IndustrialSVG}
                                                alt="Industrial"
                                                loading="lazy" // This enables lazy loading
                                            />
                                        </CardFront>
                                        <CardBack onClick={() => handleIndustrySelect('Industrial')}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Industrial
                                            </Typography>
                                            <Typography variant="body2" component="p" gutterBottom>
                                                Achieve energy independence and stabilize operational costs with our robust solar solutions designed for industrial needs. Mitigate the impact of fluctuating energy prices and reduce grid dependency.
                                            </Typography>
                                        </CardBack>
                                    </FlipCardInner>
                                </FlipCard>

                                {/* FlipCard for Agricultural */}
                                <FlipCard>
                                    <FlipCardInner>
                                        <CardFront onClick={() => handleIndustrySelect('Agricultural')}>
                                            <CardMedia
                                                component="img"
                                                image={AgriculturalSVG}
                                                alt="Agricultural"
                                                loading="lazy" // This enables lazy loading
                                            />
                                        </CardFront>
                                        <CardBack onClick={() => handleIndustrySelect('Agricultural')}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Agricultural
                                            </Typography>
                                            <Typography variant="body2" component="p" gutterBottom>
                                                Enhance your agricultural operations with our solar solutions. Reduce operational costs, increase efficiency, and support sustainable practices with a consistent and clean energy source.
                                            </Typography>
                                        </CardBack>
                                    </FlipCardInner>
                                </FlipCard>
                            </GridContainer>
                        </Box>
                    </StyledModal>
                );
            case 'announcement':
                return (
                    <Box textAlign="center" mb={4}>
                        {/* Announcement Content */}
                        <Typography variant="h4" gutterBottom>
                            Special Announcement
                        </Typography>
                        <Typography variant="body1">
                            Check out our latest solar solutions and special offers!
                        </Typography>
                        {/* ... Additional announcement content */}
                    </Box>
                );
            // ... other cases
            default:
                return <Typography>Content not available</Typography>;
        }
    };
    console.log(purpose);
    return (
        renderContent()
    );
};

export default Overlay;
