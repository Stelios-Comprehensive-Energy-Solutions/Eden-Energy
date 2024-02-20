import React, { useContext } from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Avatar, Box, Grid, useTheme, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupIcon from '@mui/icons-material/Group';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { IndustryContext } from '../../Context'; // Adjust the path if necessary
import content from './Content'; 
// import './Values.css'; // Import the CSS file

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

// HistoryCard Component
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


function ValuesGovernance() {
    const { industryColor } = useContext(IndustryContext);

    const theme = createTheme({
        palette: {
            primary: {
                main: industryColor.primary,
            },
            secondary: {
                main: industryColor.secondary,
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        background: 'linear-gradient(to right, #74ebd5, #ACB6E5)',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M24 48L0 24l24-24 24 24'/&gt;%3C/g%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Container>
                <WelcomeCard />
                <HistoryCard />
                <FoundersVisionCard />
                <OurTeamCard />
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

export default ValuesGovernance;
