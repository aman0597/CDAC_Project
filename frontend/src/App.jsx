import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SocietyMemberLoginPage from './components/SocietyMemberLoginPage';
import SocietyMemberRegistrationPage from './components/SocietyMemberRegistrationPage';
import VisitorLoginPage from './components/VisitorLoginPage';
import VisitorRegistrationPage from './components/VisitorRegistrationPage';
import WatchmanLoginPage from './components/WatchmanLoginPage';
import WatchmanRegistrationPage from './components/WatchmanRegistrationPage';
import Header from './components/Header'; 
import Footer from './components/Footer';
import VisitorEntryPage from './components/VisitorEntryPage';
import SocietyMemberLandingPage from './components/SocietyMemberLandingPage';
import WatchmanLandingPage from './components/WatchmanLandingPage';
import DeliveryPartnerEntryPage from './components/DeliveryPartnerEntryPage';
import GeneratePassPage from './components/GeneratePassPage';
import FeaturesPage from './components/FeaturesPage';
import ContactUsPage from './components/ContactUsPage'; 
import VisitorLandingPage from './components/VisitorLandingPage';


const App = () => {
  return (
    <BrowserRouter>
      <Header /> {}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/society-member-login" element={<SocietyMemberLoginPage />} />
        <Route path="/society-member-register" element={<SocietyMemberRegistrationPage />} />
        <Route path="/visitor-login" element={<VisitorLoginPage />} />
        <Route path="/visitor-register" element={<VisitorRegistrationPage />} />
        <Route path="/entry" element={<VisitorLandingPage />} />
        <Route path="/watchman-login" element={<WatchmanLoginPage />} />
        <Route path="/watchman-register" element={<WatchmanRegistrationPage />} />
        <Route path="/visitor-logs" element={<VisitorEntryPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/society_member_landing" element={<SocietyMemberLandingPage />} />
        <Route path="/watchman_landing" element={<WatchmanLandingPage />} />
        <Route path="/delivery-partner-entry" element={<DeliveryPartnerEntryPage />} />
        <Route path="/generate-pass" element={<GeneratePassPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
