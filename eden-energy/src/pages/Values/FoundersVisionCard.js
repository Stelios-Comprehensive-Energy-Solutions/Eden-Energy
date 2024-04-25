import React from 'react';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
// FoundersVisionCard Component
const FoundersVisionCard = () => {
    const theme = useTheme();

    return (
        <Box sx={{width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: 4 }}>
            <Box sx={{ backgroundColor: theme.palette.background.paper, borderRadius: '50%', padding: theme.spacing(2), boxShadow: 3, marginBottom: theme.spacing(2) }}>
                <LightbulbIcon color="primary" sx={{ fontSize: 40 }} />
            </Box>
            <Card sx={{ width: '100%', boxShadow: 3 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign="center">
                        Founder's Vision
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        "Our vision at Eden-Energy is to harness the power of alternative energy to make a significant, positive impact on our environment and communities. Inspired by a commitment to sustainability and innovation, we aim to provide clean, reliable energy solutions to a changing world, utilizing the best and latest technological advancements available."
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default FoundersVisionCard;
