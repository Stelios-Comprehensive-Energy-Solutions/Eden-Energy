import React, { useContext } from 'react';
import { IndustryContext } from '../../Context';
import { Container, Typography, Grid, Box, TextField, Button, Link } from '@mui/material';
import Map from '../../components/Map/Map';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

function Contact() {
    const { industry } = useContext(IndustryContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div>
            <Navbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" gutterBottom>Contact Us - {industry}</Typography>
                <Typography variant="subtitle1" gutterBottom>
                    We're here to help with any questions, concerns, or feedback you might have. Our team is dedicated to providing you with the support you need.
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>Contact Information</Typography>
                        <Typography>Phone: (123) 456-7890</Typography>
                        <Typography>Email: support@example.com</Typography>
                        <Typography>Address: 123 Main St, City, Country</Typography>
                        <Typography>Operating Hours: Mon-Fri, 9:00 AM - 5:00 PM</Typography>
                        <Link href="#" sx={{ display: 'block', mt: 1 }}>View FAQs</Link>
                        <Link href="#" sx={{ display: 'block', mt: 1 }}>Follow us on Social Media</Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField label="Name" variant="outlined" fullWidth />
                            <TextField label="Email" variant="outlined" fullWidth />
                            <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
                            <Button type="submit" variant="contained" sx={{ alignSelf: 'start' }}>Send Message</Button>
                        </Box>
                    </Grid>
                    <Map/>
                </Grid>
                <Typography variant="subtitle2" sx={{ mt: 4 }}>
                    Your privacy is important to us. By submitting this form, you agree to our Data Use Policy.
                </Typography>
                {/* Embed Google Maps or similar for the physical address */}
                {/* Optionally, include a live chat feature if your platform supports it */}
            </Container>
            <Footer />
        </div>
    );
}

export default Contact;
