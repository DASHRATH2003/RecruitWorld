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
import Ourcompany from './pages/Ourcompany';
import Ourclient from './pages/Ourclient';
import Blogs from './pages/Blogs';
import Industry from './pages/Industry';
import Internship from './pages/Internship';
import Contact from './pages/Contact';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/admin/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Layout from './components/Layout';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Auth Routes - No Layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Dashboard Routes - Protected & No Layout */}
          <Route
            path="/admin/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Public Routes - With Layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/post-job" element={<Layout><Login /></Layout>} />
          <Route path="/clients" element={<Layout><Clients /></Layout>} />
          <Route path="/internship" element={<Layout><Internship /></Layout>} />
          <Route path="/jobs" element={<Layout><Jobs /></Layout>} />
          <Route path="/jobs/:id" element={<Layout><JobDetails /></Layout>} />
          <Route path="/industries" element={<Layout><Industry /></Layout>} />
          <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/why-us" element={<Layout><WhyUs /></Layout>} />
          <Route path="/our-company" element={<Layout><Ourcompany /></Layout>} />
          <Route path="/our-client" element={<Layout><Ourclient /></Layout>} />

          {/* Catch-all route - redirect to home */}
          <Route path="*" element={<Layout><Home /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
