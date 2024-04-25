// Content.js
const productContent = {
  Residential: {
    Small: {
      Image: 'ResidentialSmall', // Ensure this is the correct path to an actual image
      System: '5kW Sunsynk Hybrid System',
      Components: {
        Inverter: '1 X 5kW Sunsynk Hybrid inverter - Known for its reliability and efficiency, making it a cornerstone of residential solar solutions.',
        Battery: '1 X 5kW Sunsynk battery pack - Offers durable energy storage, ensuring power availability during peak usage or grid outages.',
        SolarPanels: '6 x 500W Solar panels - 3000W total - High-efficiency panels designed for optimal sunlight absorption and conversion.'
      },
      UseCase: 'Ideal for small to medium-sized homes, this system supports daily essential appliance use, balancing efficiency with affordability.',
      Description: 'Central to this package, the SunSynk 5KW inverter—a cutting-edge device—efficiently transforms sunlight into renewable electricity. Its sophisticated yet accessible technology allows for easy monitoring of energy usage, ensuring peak performance and savings. Ideal for small to medium homes, the 5kW inverter balances power capacity with affordability, powering essential appliances without a hefty price tag.',
      PowerManagement: 'Some power management is required to function within the inverter parameters. Not all electrical appliances can function simultaneously. Pair large energy consumption appliance with small appliances to a maximum of 5kW.',
      Warranty: 'The Sunsynk Inverter / Battery combo has a 10 Year warranty, covering both parts and labor for repairs and necessary replacements, ensuring your investment is protected.',
      Installation: {
        RoofSpace: 'A 5kW solar system will require around 10-20m² of roof space, dependent on panel wattage and tilt.',
        Compliance: 'Fully installed with required documentation – Certificate of compliance, ensuring your system meets all local regulations and standards.'
      },
      Cost: 'from R75 000.00 – R89 000.00 - Price varies based on installation complexity, location, and additional services.',
      TermsAndConditions: 'T&C’s apply. Please see our website for full terms, including warranty specifics and installation agreements.'
    },
    Medium: {
      Image: 'ResidentialMedium', // Ensure this is the correct path to an actual image
      System: '8kW Sunsynk Hybrid systems',
      Components: {
        Inverter: '1 x 8kW Sunsynk Hybrid inverter',
        Battery: '2 x 5,32kW Sunsynk Lithium-Ion battery packs',
        SolarPanels: '12 x 500W Solar panels - 6000W total'
      },
      Description: 'An 8kw inverter is often chosen because it\'s suitable for medium to large size homes, It can power essential appliances simultaneously. It\'s an option that offers efficiency although some power management is required to function within the inverter parameters. Preferably pair large energy consumption appliance with small appliances to a maximum of 8kW.',
      PowerManagement: 'Limited power management is required to function within the inverter parameters. Large energy consumption appliance can be utilized simultaneously to a maximum of 8kW.',
      Warranty: 'The Sunsynk Inverter / Battery combo has a 10 Year warranty',
      Installation: {
        RoofSpace: 'A 8kW solar system will require around 25-35 m² of roof space. This is dependent on the wattage of the panel, as well as how they are tilted.',
        Compliance: 'Fully installed with required documentation – Certificate of compliance.'
      },
      Cost: 'from R149 000.00 – R189 000.00',
      TermsAndConditions: 'T&C’s apply'
    },

    Large: {
      Image: 'ResidentialLarge', // Ensure this is the correct path to an actual image
      System: '16kW Sunsynk Hybrid systems',
      Components: {
        Inverter: '1 x 16kW Sunsynk Hybrid inverter',
        Battery: '4 x 5,32kW Sunsynk Lithium-Ion battery packs',
        SolarPanels: '24 x 500W Solar panels - 12000W total'
      },
      Description: 'An 16kw inverter is often chosen because it\'s suitable for large size homes, It can power essential appliances simultaneously. It\'s an option that offers great efficiency. Limited power management is required to function within the inverter parameters. Large energy consumption appliance can be utilized simultaneously to a maximum of 16kW.',
      PowerManagement: 'Limited power management is required to function within the inverter parameters. Large energy consumption appliance can be utilized simultaneously to a maximum of 16kW.',
      Warranty: 'The Sunsynk Inverter / Battery combo has a 10 Year warranty',
      Installation: {
        RoofSpace: 'A 16kW solar system will require around 50-70 m² of roof space. This is dependent on the wattage of the panel, as well as how they are tilted.',
        Compliance: 'Fully installed with required documentation – Certificate of compliance.'
      },
      Cost: 'from R295 000.00 – R325 000.00',
      TermsAndConditions: 'T&C’s apply'
    },


  },
  Commercial: {
    Small: {
      Image: 'temp-image.jpg', // Ensure this is the correct path to an actual image
      System: '16kW Sunsynk Hybrid systems',
      Components: {
        Inverter: '1 x 16kW Sunsynk Hybrid inverter - Known for its reliability and efficiency in commercial settings.',
        Battery: '4 x 5,32kW Sunsynk Lithium-Ion battery packs - Provides robust energy storage for demanding commercial applications.',
        SolarPanels: '24 x 500W Solar panels - 12000W total - Designed for maximum efficiency and durability in commercial environments.'
      },
      Description: 'The 16kW Sunsynk Hybrid system is ideally suited for commercial applications, offering unparalleled efficiency and reliability. With its advanced inverter technology and robust battery storage, it ensures continuous power supply, even in demanding conditions. This system is perfect for businesses looking to reduce energy costs and increase sustainability.',
      PowerManagement: 'This system requires limited power management to operate within its parameters, allowing for the simultaneous use of high-energy-consuming appliances up to a maximum of 16kW.',
      Warranty: 'The Sunsynk Inverter / Battery combo comes with a 10 Year warranty, ensuring long-term reliability and performance.',
      Installation: {
        RoofSpace: 'Requires approximately 50-70 m² of roof space, depending on panel orientation and tilt.',
        Compliance: 'Includes full installation with all necessary documentation for compliance with local regulations and standards.'
      },
      Cost: 'from R 295000.00 – R325000.00, varying based on installation complexity and location.',
      TermsAndConditions: 'T&C’s apply. Full terms, including warranty and installation details, are available on our website.'
    },
    Medium: {
      Image: 'temp-image.jpg', // Update this path as necessary
      System: '50kW Sunsynk Hybrid systems',
      Components: {
        Inverter: '1 x 50 kW Sunsynk Three Phase Hybrid inverter - Tailored for medium-sized commercial operations requiring reliable power.',
        Battery: '1 x Freedom Won Lite Business 40/32 HV N Battery - High-capacity storage solution for extended energy availability.',
        SolarPanels: '32 x 550W Solar panels - 17600W total - Optimal performance solar panels for commercial energy needs.'
      },
      Description: 'Designed for medium-sized commercial enterprises, the 50kW Sunsynk Hybrid system combines high efficiency with robust power management capabilities. It supports essential business operations by ensuring a continuous energy supply, even during peak usage times or grid outages.',
      PowerManagement: 'Efficient power management allows for the simultaneous operation of large energy-consuming appliances up to a maximum of 50kW.',
      Warranty: 'Comes with a comprehensive 10 Year warranty covering both the inverter and battery, guaranteeing peace of mind and long-term savings.',
      Installation: {
        RoofSpace: 'Installation requires 90m² - 180m² of roof space, dependent on specific panel configurations and tilting requirements.',
        Compliance: 'Our team ensures a fully compliant installation process, complete with all necessary documentation and certificates.'
      },
      Cost: 'Pricing starts from R 495000.00 – R525000.00, depending on installation specifics and additional services.',
      TermsAndConditions: 'Terms and conditions apply. Please consult our website for detailed information regarding warranty and service agreements.'
    },
    Large: {
      Image: 'temp-image.jpg', // Update this path as necessary
      System: '100kW Sunsynk Hybrid systems',
      Components: {
        Inverter: '2 x 50 kW Sunsynk Three Phase Hybrid inverters - Provides scalable power solutions for large commercial facilities.',
        Battery: '2 x Freedom Won Lite Business 40/32 HV Battery N - Ensures extended power backup for critical commercial operations.',
        SolarPanels: '72 x 550W Solar panels - 39600W total - High-efficiency solar panels designed for large-scale energy generation.'
      },
      Description: 'The 100kW Sunsynk Hybrid system is engineered for large commercial applications, offering a powerful, efficient, and reliable energy solution. It is ideal for facilities requiring a high-capacity, resilient power supply to support extensive operations.',
      PowerManagement: 'Advanced power management capabilities allow for the efficient use of energy, accommodating simultaneous use of high-demand appliances up to 100kW.',
      Warranty: 'A 10 Year warranty backs the inverter and battery system, providing comprehensive coverage for parts and labor.',
      Installation: {
        RoofSpace: 'Necessitates 180m² of roof space, with specific requirements based on panel wattage and installation angle.',
        Compliance: 'Complete installation service includes all necessary compliance documentation, ensuring adherence to local standards and regulations.'
      },
      Cost: 'Starting from R 1,150,000.00, with variations based on the complexity of the installation and site-specific needs.',
      TermsAndConditions: 'Terms and conditions apply. Detailed warranty and installation terms are available on our website.'
    },
  },

  Industrial: {
    Small: {
      Image: 'temp-image.jpg', // Ensure this is the correct path to an actual image
      System: '100KW Kodak Power System',
      Components: {
        Inverter: 'Multiple Kodak 100KW inverters for 100KW total - Designed for industrial-grade power solutions.',
        Battery: '100 x Atess 10kWh batteries providing 1MWh of storage - Ensures continuous operation with reliable energy storage.',
        SolarPanels: '1835 x 545W Solar panels - 1,000,065W total - Capable of meeting high energy demands with efficient sunlight conversion.'
      },
      Description: 'This 100KW Kodak Power System is engineered for small-scale industrial applications, providing a robust solution for manufacturing machines and workshops. It combines high-capacity inverters, extensive battery storage, and a vast array of solar panels to ensure reliable and efficient power supply.',
      PowerManagement: 'Designed with advanced power management capabilities to support the simultaneous operation of multiple machines and equipment.',
      Warranty: 'Comes with a comprehensive warranty covering inverters, batteries, and solar panels, ensuring long-term reliability and performance.',
      Installation: {
        RoofSpace: 'Requires approximately 3,119.5 square meters of roof space, tailored to industrial settings.',
        Compliance: 'Includes professional installation and all necessary compliance documentation, meeting industrial standards.'
      },
      Cost: 'R500,000 - Pricing reflects the system’s industrial-grade components and installation services.',
      TermsAndConditions: 'T&C’s apply. Full warranty and service details are available on our website.'
    },
    Medium: {
      Image: 'temp-image.jpg',
      System: '500KW Sungrow Power System',
      Components: {
        Inverter: 'Multiple Sungrow 500KW inverters for a total of 500KW - Optimized for medium-scale industrial energy needs.',
        Battery: '200 x Freedom Won 10kWh batteries for 2MWh storage - High-capacity storage for extensive industrial use.',
        SolarPanels: '917 x 545W Solar panels - 499,785W total - Designed to maximize energy production in industrial environments.'
      },
      Description: 'The 500KW Sungrow Power System is tailored for medium-scale factories and industrial complexes, offering a powerful and efficient solution to meet substantial energy demands. It features state-of-the-art inverters, significant battery storage, and a large solar array to support continuous industrial operations.',
      PowerManagement: 'Equipped with sophisticated power management technology to efficiently distribute energy across various industrial applications.',
      Warranty: 'Includes a full warranty for all components, providing peace of mind and support for industrial operations.',
      Installation: {
        RoofSpace: 'Installation requires around 1,559 square meters of roof space, considering industrial layout and specifications.',
        Compliance: 'Full installation service with compliance documentation ensures the system meets all industrial regulations.'
      },
      Cost: 'R2,500,000 - Reflects comprehensive system capabilities and industrial installation requirements.',
      TermsAndConditions: 'Terms and conditions apply. Visit our website for detailed information on warranties and services.'
    },
    Large: {
      Image: 'temp-image.jpg',
      System: '1MW Victron Energy Power System',
      Components: {
        Inverter: 'Multiple Victron Energy 1MW inverters for 1MW total capacity - High-performance inverters for large-scale industrial power.',
        Battery: '400 x Sun Synk 10kWh batteries totaling 4MWh - Extensive storage capacity for maximum energy reliability.',
        SolarPanels: '1835 x 545W Solar panels - 1,000,065W total - Premium solar panels for superior energy generation.'
      },
      Description: 'Designed for powering large-scale manufacturing plants and industrial parks, the 1MW Victron Energy Power System stands out for its exceptional capacity and reliability. It integrates top-tier inverters, an expansive battery array, and a comprehensive solar panel setup to deliver unparalleled power performance.',
      PowerManagement: 'Features advanced power management to handle extensive industrial operations, ensuring efficient energy use across all activities.',
      Warranty: 'A robust warranty backs each component, underscoring our commitment to quality and industrial operational excellence.',
      Installation: {
        RoofSpace: 'Necessitates approximately 3,119.5 square meters of roof space, optimized for large industrial energy projects.',
        Compliance: 'Our team guarantees a compliant installation process, complete with all necessary industrial certifications and documentation.'
      },
      Cost: 'R5,000,000 - Pricing is indicative of the system’s large-scale industrial capabilities and comprehensive installation service.',
      TermsAndConditions: 'T&C’s apply. Comprehensive warranty and service information is available on our website.'
    },
  },

  Agricultural: {
    Small: {
      Image: 'temp-image.jpg', // Ensure this is the correct path to an actual image
      System: '10KW Victron Energy Solar System',
      Components: {
        Inverter: 'Victron Energy 10KW inverter - Reliable and efficient for small-scale agricultural needs.',
        Battery: '4 x Sun Synk 5kWh batteries - Providing 20kWh of storage for consistent energy supply.',
        SolarPanels: '18 x 545W Solar panels - Totaling 9810W, designed for optimal performance in agricultural settings.'
      },
      Description: 'Specially designed for small agricultural operations, this 10KW system supports irrigation, small crop farms, and greenhouse operations with a reliable power source. It combines efficient solar panels, a robust inverter, and sufficient battery storage to ensure continuous operation.',
      PowerManagement: 'Efficient power management allows for sustainable energy use throughout daily operations, supporting essential agricultural equipment.',
      Warranty: 'This system comes with a comprehensive warranty, ensuring long-term reliability and performance for your agricultural needs.',
      Installation: {
        RoofSpace: 'Requires about 30.6 square meters of roof space, making it suitable for small to medium-sized agricultural operations.',
        Compliance: 'Our installation includes all necessary documentation for compliance, ensuring your system meets local agricultural standards.'
      },
      Cost: 'R40,000 - A cost-effective solution for enhancing the sustainability and efficiency of small-scale agricultural operations.',
      TermsAndConditions: 'T&C’s apply. Please refer to our website for full terms, including warranty specifics and installation agreements.'
    },
    Medium: {
      Image: 'temp-image.jpg',
      System: '50KW Sungrow Solar System',
      Components: {
        Inverter: 'Sungrow 50KW inverter - High-capacity inverter for larger agricultural projects.',
        Battery: '10 x Hubble 10kWh batteries - Totaling 100kWh of storage for extended energy availability.',
        SolarPanels: '92 x 545W Solar panels - Providing a substantial 50140W, ideal for larger farms and processing equipment.'
      },
      Description: 'The 50KW Sungrow Solar System is tailored for the demands of larger farming operations and agricultural processing equipment, offering a powerful and reliable energy solution. It ensures that larger farms can operate more sustainably and efficiently, with ample power for a variety of agricultural needs.',
      PowerManagement: 'Designed with advanced power management to accommodate the energy-intensive demands of larger agricultural operations efficiently.',
      Warranty: 'Includes a full warranty, covering inverter, batteries, and solar panels, to support your investment in agricultural productivity.',
      Installation: {
        RoofSpace: 'Installation requires approximately 156.4 square meters of roof space, suited for medium to large agricultural settings.',
        Compliance: 'Comprehensive installation service ensures your system is fully compliant with agricultural standards and regulations.'
      },
      Cost: 'R200,000 - Reflecting the system’s capability to support extensive agricultural activities and equipment.',
      TermsAndConditions: 'Terms and conditions apply. Detailed warranty and installation information is available on our website.'
    },
    Large: {
      Image: 'temp-image.jpg',
      System: '100KW Kodak Solar System',
      Components: {
        Inverter: 'Kodak 100KW inverter - For extensive farming operations, providing robust power solutions.',
        Battery: '20 x Freedom Won 10kWh batteries - Ensuring 200kWh of storage for large-scale agricultural use.',
        SolarPanels: '183 x 545W Solar panels - Totaling 99735W, capable of supporting extensive farming operations and agribusinesses.'
      },
      Description: 'Designed for the largest agricultural ventures, the 100KW Kodak Solar System delivers unparalleled power capacity, ensuring that extensive farming operations and agribusinesses have a reliable, efficient energy source. This system is ideal for powering a wide range of agricultural activities on a large scale.',
      PowerManagement: 'Features sophisticated power management technology to efficiently handle the substantial energy needs of large-scale agricultural operations.',
      Warranty: 'A comprehensive warranty backs the system, offering peace of mind and protection for your significant investment in agricultural efficiency.',
      Installation: {
        RoofSpace: 'Requires approximately 311 square meters of roof space, designed to accommodate the needs of large-scale agricultural projects.',
        Compliance: 'Includes a full installation package with all necessary compliance documentation, tailored to meet the specific requirements of large agricultural operations.'
      },
      Cost: 'R400,000 - A strategic investment in sustainable and efficient energy for large-scale agricultural productivity.',
      TermsAndConditions: 'T&C’s apply. For full terms, including warranty and installation details, please visit our website.'
    },
  },

  // Add more industries as needed
  "Supported": {
    "Inverters": {
      "Sungrow": {
        "url": "https://www.sungrowpower.com"
      },
      "Victron Energy": {
        "url": "https://www.victronenergy.com"
      },
      "Kodak": {
        "url": "https://www.kodak.com/en/consumer/product/power-solutions/solar-panels/"
      },
      "Atess": {
        "url": "https://www.atesspower.com"
      }
    },
    "Batteries": {
      "Hubble": {
        "url": "https://www.hubblelithium.com"
      },
      "Freedom Won": {
        "url": "https://www.freedomwon.co.za"
      },
      "Atess": {
        "url": "https://www.atesspower.com"
      },
      "Sun Synk": {
        "url": "https://www.sunsynk.com"
      },
      "Pylon Tech": {
        "url": "https://www.pylontech.com.cn"
      }
    },
    "Solar": {
      "JA Solar": {
        "url": "https://www.jasolar.com"
      },
      "Trina Solar": {
        "url": "https://www.trinasolar.com"
      },
      "Canadian Solar": {
        "url": "https://www.canadiansolar.com"
      }
    }
  }
};

export default productContent;
