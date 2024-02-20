import React, { useContext } from 'react';
import { IndustryContext } from '../../Context'; // Adjust the path if necessary
import productContent from './Content'; // Adjust the path to your Content.js file
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

function Products() {
    const { industry } = useContext(IndustryContext); // Assuming your context provides an 'industry' value
    const industryProducts = productContent[industry] || {};

    return (
        <div>
            <Navbar />
            <Typography variant="h1" align="center" gutterBottom>
                Products Page
            </Typography>
            <Grid container spacing={4} style={{ padding: '20px' }}>
                {Object.entries(industryProducts).map(([size, details]) => (
                    <Grid item xs={12} sm={6} md={4} key={size}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={details.Image}
                                alt={`${size} product image`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {size} - {details.System}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {details.Description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Components:</strong>
                                    {Object.entries(details.Components).map(([componentName, componentDetail]) => (
                                        <div key={componentName}>{`${componentName}: ${componentDetail}`}</div>
                                    ))}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Power Management:</strong> {details.PowerManagement}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Warranty:</strong> {details.Warranty}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Installation:</strong>
                                    <div>{`Roof Space: ${details.Installation.RoofSpace}`}</div>
                                    <div>{`Compliance: ${details.Installation.Compliance}`}</div>
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Cost:</strong> {details.Cost}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Terms and Conditions:</strong> {details.TermsAndConditions}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h2" align="center" gutterBottom>
                Products We Stock and Support
            </Typography>
            <Grid container spacing={4} style={{ padding: '20px' }}>
                {Object.entries(productContent.Supported).map(([category, items]) => (
                    <Grid item xs={12} sm={6} md={4} key={category}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {category}
                                </Typography>
                                {Object.keys(items).map((item, index) => (
                                    <div key={index}>
                                        <Typography variant="body2">
                                            {item}
                                        </Typography>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={`/images/${item.replace(/ /g, "-")}.png`} // assuming the images are .png files
                                            alt={`${item} image`}
                                        />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Footer />
        </div>
    );
}

export default Products;
