// Importing agricultural images
import AgriculturalAudit from './Agricultural_Audit.jpeg';
import AgriculturalSolar from './Agricultural_Solar.jpeg';
import AgriculturalFinance from './Agricultural_Finance.jpeg';
import AgriculturalStorage from './Agricultural_Storage.jpeg';
import AgriculturalMonitoring from './Agricultural_Monitoring.jpeg';
import AgriculturalOffgrid from './Agricultural_Offgrid.jpeg';
import AgriculturalPump from './Agricultural_Pump.jpeg';

// Importing commercial images
import CommercialEngineering from './Commercial_Engineering.jpeg';
import CommercialFinancing from './Commercial_Financing.jpeg';
import CommercialAudit from './Commercial_Audit.jpeg';
import CommercialBackup from './Commercial_backup.jpeg';
import CommercialCleaning from './Commercial_Cleaning.jpeg';
import CommercialMonitoring from './Commercial_Monitoring.jpeg';
import CommercialSolar from './Commercial_Solar.jpeg';

// Importing industrial images
import IndustrialEngineering from './Industrial_Engineering.jpeg';
import IndustrialFinancing from './Industrial_Financing.jpeg';
import IndustrialMaintenance from './Industrial_Maintenance.jpeg';
import IndustrialMonitoring from './Industrial_Monitoring.jpeg';
import IndustrialConsulting from './Industrial_Consulting.jpeg';
import IndustrialSolutions from './Industrial_Solutions.jpeg';
import IndustrialStorage from './Industrial_Storage.jpeg';

// Importing residential images
import ResidentialBattery from './Residential_Battery.jpeg';
import ResidentialEfficient from './Residential_Efficient.jpeg';
import ResidentialEnergyAudit from './Residential_EnergyAudit.jpeg';
import ResidentialFinancing from './Residential_Financing.jpeg';
import ResidentialOffgrid from './Residential_Offgrid.jpeg';
import ResidentialSmart from './Residential_Smart.jpeg';
import ResidentialSolarCopy from './Residential_Solar copy.jpeg'; // Note the space in the filename might need handling
import ResidentialSolar from './Residential_Solar.jpeg';

// Grouping images by industry
const industryImages = {
  Agricultural: {
    Audit: AgriculturalAudit,
    Solar: AgriculturalSolar,
    Finance: AgriculturalFinance,
    Storage: AgriculturalStorage,
    Monitoring: AgriculturalMonitoring,
    Offgrid: AgriculturalOffgrid,
    Pump: AgriculturalPump,
  },
  Commercial: {
    Engineering: CommercialEngineering,
    Financing: CommercialFinancing,
    Audit: CommercialAudit,
    Backup: CommercialBackup,
    Cleaning: CommercialCleaning,
    Monitoring: CommercialMonitoring,
    Solar: CommercialSolar,
  },
  Industrial: {
    Engineering: IndustrialEngineering,
    Financing: IndustrialFinancing,
    Maintenance: IndustrialMaintenance,
    Monitoring: IndustrialMonitoring,
    Consulting: IndustrialConsulting,
    Solutions: IndustrialSolutions,
    Storage: IndustrialStorage,
  },
  Residential: {
    Battery: ResidentialBattery,
    Efficient: ResidentialEfficient,
    EnergyAudit: ResidentialEnergyAudit,
    Financing: ResidentialFinancing,
    Offgrid: ResidentialOffgrid,
    Smart: ResidentialSmart,
    SolarCopy: ResidentialSolarCopy,
    Solar: ResidentialSolar,
  },
};

export default industryImages;
