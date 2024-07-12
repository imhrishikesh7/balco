import './App.css'
import {Navbar} from './Components/navbar/Navbar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Product from './Pages/KnowBalco/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chairmanmsg from './Pages/KnowBalco/Chairmanmsg';
import Ceomsg from './Pages/KnowBalco/Ceomsg';
import Cfomsg from './Pages/KnowBalco/Cfomsg';
import ValueCreationModel from './Pages/BusinessOverview/ValueCreationModel';
import StakeholderEngagement from './Pages/BusinessOverview/StakeholderEngagement';
import MaterialityAssessment from './Pages/BusinessOverview/MaterialityAssessment';
import Riskmanagement from './Pages/BusinessOverview/Riskmanagement';
import AboutESG from './Pages/BusinessOverview/AboutESG';
import TransformingForGood from './Pages/BusinessOverview/TransformingForGood';
import VsfVsap from './Pages/BusinessOverview/VsfVsap';
import FinancialCap from './Pages/Capitals/FinancialCap';
import MfdCap from './Pages/Capitals/MfdCap';
import IntelCap from './Pages/Capitals/IntelCap';
import HumanCap from './Pages/Capitals/HumanCap';
import SocialCap from './Pages/Capitals/SocialCap';
import NaturalCap from './Pages/Capitals/NaturalCap';
import Awards from './Pages/Awards/Awards';
import Certifications from './Pages/Awards/Certifications';
import Profiles from './Pages/BusinessOverview/Profiles';
import CoreValues from './Components/CHome/CoreValues/CoreValues';
import AtaGlance from './Pages/AtaGlance/AtaGlance';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/at-a-glance' element={<AtaGlance />} />
        <Route path='/core-values' element={<CoreValues />} />
        <Route path='/product' element={<Product />} />
        <Route path='/chairmanmsg' element={<Chairmanmsg />} />
        <Route path='/ceomsg' element={<Ceomsg />} />
        <Route path='/cfomsg' element={<Cfomsg />} />
        <Route path='/value-creation-model' element={<ValueCreationModel />} />
        <Route path='/stakeholder-engagement' element={<StakeholderEngagement/>} />
        <Route path='/materiality-assessment' element={<MaterialityAssessment/>} />
        <Route path='/risk-management' element={<Riskmanagement/>} />
        <Route path='/about-esg' element={<AboutESG/>} />
        <Route path='/transforming-for-good' element={<TransformingForGood/>} />
        <Route path='/vsf-vsap' element={<VsfVsap/>} />
        <Route path='/financial-capital' element={<FinancialCap/>} />
        <Route path='/manufactured-capital' element={<MfdCap/>} />
        <Route path='/intellectual-capital' element={<IntelCap/>} />
        <Route path='/human-capital' element={<HumanCap/>} />
        <Route path='/social-and-relationship-capital' element={<SocialCap/>} />
        <Route path='/natural-capital' element={<NaturalCap/>} />
        <Route path='/awards' element={<Awards/>} />
        <Route path='/certifications' element={<Certifications/>} />
        <Route path='/profiles' element={<Profiles/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
