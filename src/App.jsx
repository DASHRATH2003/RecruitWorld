import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './components/Services';
import Clients from './pages/Clients';
import WhyUs from './pages/WhyUs';
import './App.css';
import Ourcompany from './pages/Ourcompany';
import Ourclient from './pages/Ourclient';
import Blogs from './pages/Blogs';
import Industry from './pages/Industry';
import Internship from './pages/Internship';
import Contact from './pages/Contact';

// Placeholder components for other routes
const PostJob = () => <div className="p-8 text-center">Post Job Page Coming Soon</div>;
const Jobs = () => <div className="p-8 text-center">Jobs Page Coming Soon</div>;

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/industries" element={<Industry />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/our-company" element={<Ourcompany />} />
            <Route path="/our-client" element={<Ourclient />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;