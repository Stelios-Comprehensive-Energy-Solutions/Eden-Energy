import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box} from '@mui/material';
import content from './Content'; 
// WelcomeCard Component
const WelcomeCard = () => (
    <Box sx={{ width: '90%', display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <Card sx={{ width: '100%', boxShadow: 3 }}> {/* Update the width to 100% */}
            <CardMedia
                component="img"
                height="200"
                image = {content["welcomeCard"].image} // Update the image path
                alt="Welcome to Eden-Energy"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Welcome to Eden-Energy
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Stelios Comprehensive Energy Solutions (PTY) LTD, trading as Eden-Energy, is at the forefront of providing innovative and sustainable energy solutions. Inspired by a vision for a greener future, we're dedicated to offering the best in solar energy and beyond.
                </Typography>
            </CardContent>
        </Card>
    </Box>
);

export default WelcomeCard;