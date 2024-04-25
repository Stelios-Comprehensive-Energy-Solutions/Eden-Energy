// HistoryCard Component
import React from 'react';
import { Card, CardContent, Typography, Box, useTheme} from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
const HistoryCard = () => {
    const theme = useTheme();

    return (
        <Box sx={{width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: 4 }}>
            <Box sx={{ backgroundColor: theme.palette.background.paper, borderRadius: '50%', padding: theme.spacing(2), boxShadow: 3, marginBottom: theme.spacing(2) }}>
                <TimelineIcon color="primary" sx={{ fontSize: 40 }} />
            </Box>
            <Card sx={{ width: '100%', boxShadow: 3 }}>
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: theme.spacing(2) }}>
                        <Typography gutterBottom variant="h5" component="div" textAlign="center" sx={{ marginTop: theme.spacing(2) }}>
                            Our History
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        Founded in George in 2015, Eden-Energy was born from a divine inspiration to offer alternative energy solutions. Our journey began with a focus on solar installations, leveraging years of expertise since 2003. As global and domestic energy issues became more evident, our sense of purpose grew, leading us to embrace collaborations and partnerships to make a real impact.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default HistoryCard;