import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Banner.css';

function Banner({ videoSrc, onButtonClick }) {
    return (
        <section className="banner">
            <div className="banner-left">
                <Typography variant="h2" component="h1" gutterBottom>
                    Empowering Africa
                </Typography>
                <Typography variant="h5" component="p" gutterBottom>
                    With Sustainable Energy Solutions
                </Typography>
                <Typography variant="h4" color="primary" gutterBottom>
                    Always on
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    At Eden Energy, we are solution-oriented engineers, leading the way in the renewable energy revolution. It all starts with solar, the cornerstone of our commitment to providing sustainable energy solutions that stand the test of time.
                </Typography>
                <Button variant="contained" color="primary" onClick={onButtonClick}>
                    Learn More
                </Button>
            </div>
            <div className="banner-right">
                <video autoPlay muted loop id="bannerVideo" aria-label="Background video">
                    <source src={videoSrc || "/path_to_your_default_video.mp4"} type="video/mp4" />
                </video>
            </div>
        </section>
    );
}

export default Banner;
