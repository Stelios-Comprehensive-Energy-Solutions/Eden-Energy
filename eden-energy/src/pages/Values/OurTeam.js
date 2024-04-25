import React from 'react';
import {Card, CardContent, Typography, Avatar, Box, Grid, useTheme} from '@mui/material';

import GroupIcon from '@mui/icons-material/Group';
// OurTeamCard Component
const OurTeamCard = () => {
    const theme = useTheme();
    const teamMembers = [
        { name: 'Vincent Van Zyl', role: 'CEO', img: 'path/to/image', description: 'Leading with innovation and commitment to sustainable energy solutions.' },
        { name: 'Walter Van Zyl', role: 'Admin Manager & Coordinator', img: 'path/to/image', description: 'Ensuring seamless operations and superior customer service.' },
        // Add more team members as needed
        { name: 'John Doe', role: 'CTO', img: 'path/to/image', description: 'Driving technological innovation and product development.' },
        { name: 'Jane Smith', role: 'Marketing Manager', img: 'path/to/image', description: 'Creating and implementing effective marketing strategies.' },
        { name: 'Michael Johnson', role: 'Sales Executive', img: 'path/to/image', description: 'Building strong relationships with clients and driving sales growth.' }
    ];

    return (
        <Box sx={{width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: 4 }}>
            <Box sx={{ backgroundColor: theme.palette.background.paper, borderRadius: '50%', padding: theme.spacing(2), boxShadow: 3, marginBottom: theme.spacing(2) }}>
                <GroupIcon color="primary" sx={{ fontSize: 40 }} />
            </Box>
            <Card sx={{ maxWidth: '100%', boxShadow: 3 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign="center">
                        Our Team
                    </Typography>
                    <Grid container spacing={2}>
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                    <Avatar
                                        sx={{ width: 80, height: 80, mb: 2 }}
                                        src={member.img}
                                        alt={member.name}
                                    />
                                    <Typography variant="subtitle1">{member.name}</Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                                        {member.role}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt: 1 }}>
                                        {member.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default OurTeamCard;