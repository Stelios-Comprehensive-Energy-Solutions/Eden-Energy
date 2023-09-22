import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import your components


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
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} exact />
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
      {/* Uncomment these as needed: */}
     
    </Router>
  );
}

export default App;
