import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import DataSecurity from './pages/DataSecurity/DataSecurity';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import About from './pages/About/About';
import Demo from './pages/Demo/Demo';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/data-security" element={<DataSecurity />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/about" element={<About />} />
              <Route path="/demo" element={<Demo />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
