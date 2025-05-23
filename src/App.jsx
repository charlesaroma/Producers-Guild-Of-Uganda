import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/CommonLayout/Navbar';
import Footer from './components/CommonLayout/Footer';
import Home from './pages/1Home';
import About from './pages/2About';
import Membership from './pages/3Membership';
import ExecutiveCommittee from './pages/4ExecutiveCommittee';
import BlogEvents from './pages/5BlogEvents';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/executive-committee" element={<ExecutiveCommittee />} />
            <Route path="/blogs-events" element={<BlogEvents />} />
          </Routes>
        </main>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
