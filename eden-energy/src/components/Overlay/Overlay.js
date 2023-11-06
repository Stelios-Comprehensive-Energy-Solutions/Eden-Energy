import React from 'react';
import { Box, Modal, ButtonBase } from '@mui/material';
import { styled } from '@mui/system';

// Import SVG images
import ResidentialSVG from '../../assets/images/residential.svg';
import CommercialSVG from '../../assets/images/commercial.svg';
import IndustrialSVG from '../../assets/images/industrial.svg';
import AgriculturalSVG from '../../assets/images/agricultural.svg';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ImageOption = styled(ButtonBase)({
  margin: '1rem',
  '&:hover': {
    opacity: 0.8,
  },
});

const Overlay = ({ onClose }) => {
  // Function to handle industry selection
  const handleIndustrySelect = (industry) => {
    // Placeholder for setting modifier based on industry
    console.log(industry); // This will be replaced with actual logic
    onClose();
  };

  return (
    <StyledModal
      open
      onClose={onClose}
      aria-labelledby="select-industry"
      aria-describedby="select-industry-modal"
      BackdropProps={{ style: { backdropFilter: 'blur(3px)' } }}
    >
      <Box bgcolor="background.paper" p={4} borderRadius={5}>
        <h2 id="select-industry">Select Your Industry</h2>
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          <ImageOption onClick={() => handleIndustrySelect('residential')}>
            <img src={ResidentialSVG} alt="Residential" />
          </ImageOption>
          <ImageOption onClick={() => handleIndustrySelect('commercial')}>
            <img src={CommercialSVG} alt="Commercial" />
          </ImageOption>
          <ImageOption onClick={() => handleIndustrySelect('industrial')}>
            <img src={IndustrialSVG} alt="Industrial" />
          </ImageOption>
          <ImageOption onClick={() => handleIndustrySelect('agricultural')}>
            <img src={AgriculturalSVG} alt="Agricultural" />
          </ImageOption>
        </Box>
      </Box>
    </StyledModal>
  );
};

export default Overlay;
