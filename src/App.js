// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PDLC from './component/Introduction/PDLC'
import Introduction from './component/Introduction/Introduction'
import ProductDevProcess from './component/Introduction/ProductDevProcess'
import CustomerMarketResearch from './component/Introduction/CustomerMarketResearch'
import ProductLifecycle from'./component/Introduction/ProductLifecycle'
import PrioritizationTechniques from './component/Introduction/PrioritizationTechniques'
import ProductMetricsInteractive from './component/Introduction/ProductMetricsInteractive'
import ProductDiscovery from './component/Introduction/ProductDiscovery'
import FramingProductOpportunity from './component/Introduction/FramingProductOpportunity'
import MarketResearch from './component/Introduction/MarketResearch'

//Intermidiate
import ExecutionStrategy from './component/Intermidiate/ExecutionStrategy'
import Agile from './component/Intermidiate/Agile'
import WireframePrototypeUsability from './component/Intermidiate/WireframePrototypeUsability'
import PMWorkflow from './component/Intermidiate/PMWorkflow'
import ImpactEffortMatrix from './component/Intermidiate/ImpactEffortMatrix'
import CDN from './component/Intermidiate/CDN'
import CloudServerSimulate from './component/Intermidiate/CloudServerSimulate'
import VisionBoard from './component/Intermidiate/VisionBoard'
import UserResearch from './component/Introduction/UserResearch'

import Dashboard from './component/Introduction/Dashboard'

import Dashboard2 from './component/Intermidiate/Dashboard2'
import ASF from './component/Intermidiate/ASF'
import APITypesInfo from './component/Intermidiate/APITypesInfo'
import Analytics from './component/Intermidiate/Analytics'
import Task from './component/Task'
import Tasks from './component/Tasks'

import Home from './component/Home'
import PRD from './component/PRD'
import GrowthHome from './component/Growth2/GrowthHome'
//import internPulsePRD from './component/internPulsePRD'

// Growth PM
import GrowthProductManager from './component/GrowthPM/GrowthProductManager'
import GrowthDashboard from './component/GrowthPM/GrowthDashboard'
import ExperimentationGuide from './component/Growth2/ExperimentationGuide'
import FunnelOptimizationHome from './component/Growth2/FunnelOptimizationHome'
import ViralityNetworkEffects from './component/Growth3/ViralityNetworkEffects'
import Viralitydashboard from './component/Growth3/Viralitydashboard'
import CrossFunctionalCollaboration from './component/Growth4/CrossFunctionalCollaboration'
import ScalabilityAutomation from './component/Growth5/ScalabilityAutomation'
import AutomationDashbaord from './component/Growth5/AutomationDashbaord'
import CollaboDb from './component/Growth4/CollaboDb'
import MonetizationAlignmentModule from './component/Growth6/MonetizationAlignmentModule'
import Monitizationdashboard from './component/Growth6/Monitizationdashboard'
import LocalizationExpansionModule    from './component/Growth7/LocalizationExpansionModule'
import LocalizationDashboard from './component/Growth7/LocalizationDashboard'
import MarketExplorationProcess from './component/Growth8/MarketExplorationProcess'
import Marketdashboard from './component/Growth8/Marketdashboard'
import DigitalMarketingForGrowthPMs from './component/Growth9/DigitalMarketingForGrowthPMs'
import MarketingDashboard from './component/Growth9/MarketingDashboard'
import Alldashboard from './component/Alldashboard'
import ProductManagementIntro from './component/ProductManagementIntro'
import Task2 from './component/Task2';
import Task3 from './component/Task3';
import Quiz1 from './component/Introduction/Quiz1'; 





const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route to HomePage */}
     

        {/* Route to show MenteeForm */}
        <Route path="/" element={<Home />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/intro" element={<Introduction />} />
        <Route path="/pdlc" element={<PDLC />} />
        <Route path="/prodprocess" element={<ProductDevProcess />} />
        <Route path="/cmr" element={<CustomerMarketResearch />} />
        <Route path="/prodlifecycle" element={<ProductLifecycle />} />
        <Route path="/prioritization" element={<PrioritizationTechniques />} />
        <Route path="/prodmetrics" element={<ProductMetricsInteractive />} />
        <Route path="/prodopp" element={<FramingProductOpportunity />} />
        <Route path="/marketresearch" element={<MarketResearch />} />
        <Route path="/impactmatrix" element={< ImpactEffortMatrix/>} />
        <Route path="/userresearch" element={< UserResearch/>} />
        <Route path="/task" element={< Task/>} />
        <Route path="/tasks" element={< Tasks/>} />
        <Route path="/task2" element={< Task2/>} />
        <Route path="/task3" element={< Task3/>} />
        <Route path="/quiz1" element={< Quiz1/>} />

        <Route path="/marketresearch" element={< ProductManagementIntro/>} />

      


        {/*GrwothPM*/}
        <Route path="/growth" element={< GrowthProductManager/>} />
        <Route path="/growthdb" element={<  GrowthDashboard
       />} />
        <Route path="/grohome" element={<ExperimentationGuide/>} />
        <Route path="/growthdashboard" element={<GrowthHome/>} />
        <Route path="/funnel" element={<FunnelOptimizationHome/>} />
        <Route path="/viral" element={<ViralityNetworkEffects/>} />
        <Route path="/viraldashboard" element={<Viralitydashboard/>} />
        <Route path="/collabo" element={<CrossFunctionalCollaboration/>} /> 
        <Route path="/automation" element={<ScalabilityAutomation/>} /> 
        <Route path="/automationdashboard" element={<AutomationDashbaord/>} />  
        <Route path="/Collabodashboard" element={<CollaboDb/>} />  
        <Route path="/monitization" element={<MonetizationAlignmentModule/>} />  
        <Route path="/moneydashboard" element={<Monitizationdashboard/>} />  
        <Route path="/expansion" element={<LocalizationExpansionModule/>} />  
        <Route path="/localizationdashboard" element={<LocalizationDashboard/>} />
        <Route path="/market" element={<MarketExplorationProcess/>} />
        <Route path="/marketdashboard" element={<Marketdashboard/>} />
        <Route path="/digital" element={<DigitalMarketingForGrowthPMs/>} />
        <Route path="/marketingdashboard" element={<MarketingDashboard/>} />
        <Route path="/all" element={<Alldashboard/>} />
        
      

         {/*Intermidiate*/}
        <Route path="/execstrategy" element={<ExecutionStrategy />} />
        <Route path="/agile" element={<Agile />} />
        <Route path="/wireframe" element={<WireframePrototypeUsability />} />
        <Route path="/pmworkflow" element={<PMWorkflow />} />
        <Route path="/proddiscovery" element={<ProductDiscovery />} />
        <Route path="/visionboard" element={< VisionBoard/>} />
        <Route path="/dashboard2" element={< Dashboard2/>} />
        <Route path="/cdn" element={< CDN/>} />
        <Route path="/cloud" element={< CloudServerSimulate/>} />
        <Route path="/asf" element={< ASF/>} />
        <Route path="/apis" element={< APITypesInfo/>} />
        <Route path="/analytics" element={< Analytics/>} />
        <Route path="/prd" element={< PRD/>} />
    
        
        
        
        

        
      </Routes>
    </Router>
  );
};

export default App;
