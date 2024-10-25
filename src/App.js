// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import LandForSale from './components/LandForSale';
import LandOfficer from './components/LandOfficer';
import LandSale from './components/LandSale';
import './App.css';

function Layout({ children }) {
  const location = useLocation();
  const hideHeader = location.pathname === '/land-for-sale';

  return (
    <>
      {!hideHeader && (
        <div>
          <h1>Land Registry DApp</h1>
          <nav className="nav">
            <Link to="/signup" className="button">Sign Up</Link>
            <Link to="/login" className="button">Log In</Link>
            <Link to="/dashboard" className="button">Dashboard</Link>
            <Link to="/land-sale" className="button">Land Sale</Link>
          </nav>
        </div>
      )}
      <div>{children}</div>
    </>
  );
}

function App() {
  const [lands, setLands] = useState([
    { id: 1, location: 'Location XYZ', isConventional: false, isForSale: false, ownedByUser: true },
    { id: 2, location: 'Location ABC', isConventional: false, isForSale: true, ownedByUser: false },
    { id: 3, location: 'Location LMN', isConventional: true, isForSale: true, ownedByUser: false },
  ]);
  
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile lands={lands} setLands={setLands} />} />
          <Route path="/land-for-sale" element={<LandForSale />} />
          <Route path="/land-officer" element={<LandOfficer lands={lands} setLands={setLands} />} />
          <Route path="/land-sale" element={<LandSale lands={lands} setLands={setLands} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
