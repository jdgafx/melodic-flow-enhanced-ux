import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Main Container */}
      <div className="relative w-full min-h-screen flex flex-col font-sans text-gray-100 selection:bg-amp-secondary selection:text-white overflow-x-hidden">
        
        {/* Background Layer: Fixed position, z-index 0 */}
        <AnimatedBackground />
        
        {/* Navigation: Fixed position, z-50 high priority */}
        <Navbar />

        {/* Content Layer: z-10 ensures it sits on top of the background */}
        <main className="relative z-10 flex-grow w-full flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;