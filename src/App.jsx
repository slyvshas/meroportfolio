import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import BlogDetail from './components/BlogDetail';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Loading component for smooth transitions
const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-gradient-to-r from-[#FFFFB2] to-[#D1B2FF] rounded-full animate-bounce delay-150"></div>
      <div className="w-2 h-2 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] rounded-full animate-bounce delay-300"></div>
    </div>
  </div>
);

// Route transition component
const RouteTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black relative overflow-x-hidden">
        {/* CSS fix for backdrop-blur rendering issues */}
        <style jsx>{`
          * {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }
          .backdrop-blur-sm, .backdrop-blur-md, .backdrop-blur-xl {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        `}</style>
        <Navbar />
        <RouteTransition>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Certifications />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
        </RouteTransition>
      </div>
    </Router>
  );
}

export default App;