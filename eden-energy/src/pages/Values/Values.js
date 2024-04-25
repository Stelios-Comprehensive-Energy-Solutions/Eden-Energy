import React, { useContext } from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { IndustryContext } from '../../Context'; // Adjust the path if necessary
import HistoryCard from './HistoryCard';
import WelcomeCard from './WelcomeCard';
import FoundersVisionCard from './FoundersVisionCard';
import OurTeamCard from './OurTeam';
// import './Values.css'; // Import the CSS file




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
