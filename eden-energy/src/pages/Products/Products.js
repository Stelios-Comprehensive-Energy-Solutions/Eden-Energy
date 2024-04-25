import React, { useContext, useState } from 'react';
import { IndustryContext } from '../../Context'; // Adjust the path if necessary
import productContent from './Content'; // Adjust the path to your Content.js file
import { Card, CardContent, CardMedia, CardActions, Typography, Grid, Button, Modal, Box, Divider, Paper, CardActionArea } from '@mui/material';

import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

import {productsImages,solutionsImages} from '../../assets/images/productsImages/productImages';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Products() {
    const { industry } = useContext(IndustryContext); // Assuming your context provides an 'industry' value
    const industryProducts = productContent[industry] || {};

    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const handleOpen = (details) => {
        setModalContent(details);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleOpenUrl = (url) => {
        window.open(url, '_blank');
    };


    return (
        <div>
            <Navbar />
            <Box mt={4}>
                <Typography variant="h3" align="center" gutterBottom>
                    Products for {industry} Solutions
                </Typography>
            </Box>
            <Grid container spacing={4} style={{ padding: '20px' }}>
                {Object.entries(industryProducts).map(([size, details]) => (
                    <Grid item xs={12} sm={6} md={4} key={size}>
                        <Card sx={{ m: 'auto', '&:hover': { boxShadow: 6 } }}>
                            <CardMedia
                                component="img"
                                height="200" // Increased height for better visibility
                                image={solutionsImages[industry][size]}
                                alt={`${size} product image`}
                                sx={{ objectFit: 'cover' }} // Ensure the image covers the area nicely
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {size} - {details.System}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {details.Description}
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    <strong>Installation:</strong>
                                    <Box component="ul" sx={{ m: 0, pl: 2 }}> {/* Adjust the pl (padding left) for indentation */}
                                        <li>Roof Space: {details.Installation.RoofSpace}</li>
                                        <li>Compliance: {details.Installation.Compliance}</li>
                                    </Box>
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    <strong>Cost:</strong> {details.Cost}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing sx={{ justifyContent: 'flex-end', p: 2 }}>
                                <Button size="small" variant="outlined" color="primary" onClick={() => handleOpen(details)}>
                                    More Info
                                </Button>
                                <Button size="small" variant="contained" color="primary" href="/contact" target="_blank" sx={{ ml: 1 }}>
                                    Contact Us
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h3" align="center" gutterBottom>
                Products We Stock and Support
            </Typography>
            <Grid container spacing={4} sx={{ padding: '20px' }}>
                {Object.entries(productContent.Supported).map(([category, items]) => (
                    <Grid item xs={12} key={category}>
                        <Paper elevation={3} sx={{ padding: 2, marginBottom: '20px' }}>
                            <Typography gutterBottom variant="h4" component="div" align="center" sx={{ marginBottom: '20px' }}>
                                {category}
                            </Typography>
                            <Grid container spacing={2}>
                                {Object.entries(items).map(([item, details], index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Card sx={{
                                            height: '100%',
                                            '&:hover': {
                                                boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)', // Customizable hover effect
                                            },
                                            transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for hover effect
                                        }}>
                                            <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} onClick={() => handleOpenUrl(details.url)}>
                                                <CardContent>
                                                    <Typography variant="h4" textAlign="center">
                                                        {item}
                                                    </Typography>
                                                </CardContent>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ width: '100%', height: 140, objectFit: 'contain' }} // Adjust size as needed
                                                    image={productsImages[item.replace(/ /g, "")]} // assuming the images are .png files
                                                    alt={`${item} image`}
                                                />
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Footer />


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                        {modalContent.System}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="subtitle1" component="div" sx={{ mb: 1 }}>
                        <strong>Components:</strong>
                    </Typography>
                    <Box component="ul" sx={{ listStyleType: 'disc', ml: 3, pl: 1 }}>
                        {Object.entries(modalContent.Components || {}).map(([componentName, componentDetail]) => (
                            <Box component="li" key={componentName} sx={{ display: 'list-item', mb: 0.5 }}>
                                <Typography variant="body2">{`${componentName}: ${componentDetail}`}</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle1" sx={{ mb: 1 }}>
                            <strong>Power Management:</strong>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            {modalContent.PowerManagement}
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle1" sx={{ mb: 1 }}>
                            <strong>Warranty:</strong>
                        </Typography>
                        <Typography variant="body2">
                            {modalContent.Warranty}
                        </Typography>
                    </Box>
                </Box>
            </Modal>

        </div>
    );
}

export default Products;
