import React, { useContext, useState } from 'react';
import { IndustryContext } from '../../Context';
import { Grid, Card, CardMedia, CardContent, CardActionArea, Typography, Button, Modal, Box, Divider, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import servicesData from './Content';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import industryImages from '../../assets/images/servicesImages/serviceImages';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400, // Adjust based on your content
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Services() {
    const { industry } = useContext(IndustryContext);
    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const theme = useTheme();

    const handleOpen = (service) => {
        setSelectedService(service);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Navbar />
            <Box mt={4}>
                <Typography variant="h3" align="center" gutterBottom>
                    Services for {industry} Solutions
                </Typography>
            </Box>
            <Grid container spacing={4} style={{ padding: '20px' }}>
                {servicesData.sections[industry].map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardActionArea onClick={() => handleOpen(service)}>
                                <Grid container>
                                    <Grid item xs={12} sm={5}>
                                        <CardMedia
                                            component="img"
                                            image={industryImages[industry][service.image]} // Access the image based on industry and filename
                                            alt={service.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {service.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {service.summary}
                                            </Typography>
                                            {/* <Typography variant="body2">
                                            {service.description}
                                        </Typography> */}
                                            <Button size="small" onClick={() => handleOpen(service)}>Learn More</Button>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {selectedService && (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <Box sx={modalStyle}>
                        <Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                            {selectedService.title}
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Typography id="modal-description" sx={{ mt: 2 }}>
                            {selectedService.description}
                        </Typography>
                        {/* Additional content like videos or detailed images can be included here */}
                    </Box>
                </Modal>
            )}
            <Footer />
        </div>


    );
}

export default Services;
