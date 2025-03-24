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
import Home from './component/Home'








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
        
        
        
        
        

        
      </Routes>
    </Router>
  );
};

export default App;
