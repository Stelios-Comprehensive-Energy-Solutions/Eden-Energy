import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overlay from './components/Overlay/Overlay'; // Adjusted import path

import { AuthProvider, IndustryProvider } from './Context';

// Import your pages
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import ValuesGovernance from './pages/Values/Values';
import Testimonies from './pages/Testimonies/Testimonies';
import Contact from './pages/Contact/Contact';
import Help from './pages/Help/Help';
import Account from './pages/Account/Account';
import Profile from './pages/Profile/Profile';

function App() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [overlayPurpose] = useState('industrySelection'); // Example purpose
  const [isOverlayOpen] = useState(true); // To control the visibility of the overlay

  // This function will be passed down to the overlay to close it
  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  return (
    <AuthProvider>
        <IndustryProvider>
          <Router>
            {/* Show the overlay when the home page is first loaded */}
            {showOverlay && <Overlay open={isOverlayOpen} onClose={handleOverlayClose} purpose={overlayPurpose} />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/values-governance" element={<ValuesGovernance />} />
              <Route path="/testimonies" element={<Testimonies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Help />} />
              <Route path="/account" element={<Account />} />
              <Route path="/profile" element={<Profile />} />
              {/* Redirect all unknown routes to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Router>
        </IndustryProvider>
    </AuthProvider> 
  );
}

export default App;
