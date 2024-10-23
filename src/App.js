import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile'; // Import Profile
import LandForSale from './components/LandForSale'; // Import the new component
import './App.css'; // Import your styles

function Layout({ children }) {
  const location = useLocation();
  
  // Check if we are on the 'land-for-sale' page
  const hideHeader = location.pathname === '/land-for-sale';

  return (
    <>
      {/* Conditionally render header */}
      {!hideHeader && (
        <div>
          <h1>Land Registry DApp</h1>
          <nav className="nav">
            <Link to="/signup" className="button">Sign Up</Link>
            <Link to="/login" className="button">Log In</Link>
            <Link to="/dashboard" className="button">Dashboard</Link>
          </nav>
        </div>
      )}
      <div>{children}</div>
    </>
  );
}

function App() {
  const [aadharNumber, setAadharNumber] = useState('1234-5678-9012'); // Example Aadhar number, replace it with actual data

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile aadharNumber={aadharNumber} />} />
          <Route path="/land-for-sale" element={<LandForSale />} /> {/* New Route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
