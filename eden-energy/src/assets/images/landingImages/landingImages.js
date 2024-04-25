// Assuming this file is located at src/assets/images/landingImages.js

// Importing landing images for each industry
import Agricultural1 from './AgriculturalLanding1.jpeg';
import Agricultural2 from './AgriculturalLanding2.jpeg';
import Agricultural3 from './AgriculturalLanding3.jpeg';
import Agricultural4 from './AgriculturalLanding4.jpeg';

import Residential1 from './ResidentialLanding1.jpeg';
import Residential2 from './ResidentialLanding2.jpeg';
import Residential3 from './ResidentialLanding3.jpeg';
import Residential4 from './ResidentialLanding4.jpeg';

import Commercial1 from './CommercialLanding1.jpeg';
import Commercial2 from './CommercialLanding2.jpeg';
import Commercial3 from './CommercialLanding3.jpeg';
import Commercial4 from './CommercialLanding4.jpeg';

import Industrial1 from './IndustrialLanding1.jpeg';
import Industrial2 from './IndustrialLanding2.jpeg';
import Industrial3 from './IndustrialLanding3.jpeg';
import Industrial4 from './IndustrialLanding4.jpeg';

import AboutUs from './AboutUs.jpeg';
import HistoryCard from '../../../pages/Values/HistoryCard';
import WelcomeCard from '../../../pages/Values/WelcomeCard';
import FoundersVisionCard from '../../../pages/Values/FoundersVisionCard';
import OurTeamCard from '../../../pages/Values/OurTeam';

import Products1 from './AboutUs.jpeg';

// Grouping landing images by industry
const Images = {
  Agricultural: [Agricultural1, Agricultural2, Agricultural3, Agricultural4],
  Residential: [Residential1, Residential2, Residential3, Residential4],
  Commercial: [Commercial1, Commercial2, Commercial3, Commercial4],
  Industrial: [Industrial1, Industrial2, Industrial3, Industrial4],
  CardsData: {
    "about-us": [WelcomeCard,HistoryCard,FoundersVisionCard,OurTeamCard],
    // "our-products": [Products1]
  }
};

export default Images;
