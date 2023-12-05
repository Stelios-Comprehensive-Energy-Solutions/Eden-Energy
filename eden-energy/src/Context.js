// IndustryContext.js
import React from 'react';

const IndustryContext = React.createContext({
  industry: 'Residential', // default value
  setIndustry: () => {},
});

export default IndustryContext;
