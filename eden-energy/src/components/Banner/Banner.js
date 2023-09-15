import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Banner.css';

function Banner({ videoSrc, heading, paragraph, buttonText, onButtonClick }) {
    return (
        <section className="banner">
            <video autoPlay muted loop id="bannerVideo" aria-label="Background video">
                <source src={videoSrc || "/path_to_your_default_video.mp4"} type="video/mp4" />
            </video>
            <div className="banner-content">
                <Typography variant="h2" component="h1" gutterBottom>
                    {heading || "Empowering Africa"}
                </Typography>
                <Typography variant="h5" component="p" gutterBottom>
                    {paragraph || "With Sustainable Energy Solutions"}
                </Typography>
                <Typography variant="h4" color="primary" gutterBottom>
                    Always on
                </Typography>
                <Button variant="contained" color="primary" onClick={onButtonClick}>
                    {buttonText || "Learn More"}
                </Button>
            </div>
        </section>
    );
}

export default Banner;
