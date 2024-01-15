import React, { useContext } from 'react';
import { IndustryContext } from '../../Context';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import servicesData from './Content';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

function Services() {
    const { industry } = useContext(IndustryContext);
    const [open, setOpen] = React.useState(false);
    const [selectedService, setSelectedService] = React.useState(null);

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
            <h1>Services for {industry}</h1>
            <Grid container spacing={4}>
                {servicesData.sections[industry].map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <Grid container>
                                <Grid item xs={12} sm={5}>
                                    <CardMedia
                                        component="img"
                                        image={require(`../../../public/images/${service.image}`).default}
                                        alt={service.name}
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
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {selectedService && (
                <Dialog
                    open={open}
                    onClose={handleClose}
                    fullWidth
                    maxWidth="md"
                >
                    <DialogTitle>{selectedService.name}</DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            {selectedService.description}
                        </Typography>
                        {/* Include additional content like video or detailed images */}
                    </DialogContent>
                </Dialog>
            )}
            <Footer />
        </div>
    );
}

export default Services;
