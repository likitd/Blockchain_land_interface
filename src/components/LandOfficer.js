// src/components/LandOfficer.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LandOfficer.css'; // Import the CSS file

function LandOfficer({ setLands }) {
  const location = useLocation();
  const { landId } = location.state || {}; // Get the landId from state
  const navigate = useNavigate();

  const handleAccept = () => {
    alert(`Land #${landId} has been converted to conventional.`);
    
    setLands((prevLands) =>
      prevLands.map((land) =>
        land.id === landId ? { ...land, isConventional: true } : land
      )
    );

    navigate('/profile');
  };

  const handleReject = () => {
    alert(`Land #${landId} conversion has been rejected.`);
    navigate('/profile');
  };

  return (
    <div className="land-officer-container">
      <h2>Land Officer Page</h2>
      <p>Review the request for Land #{landId}</p>
      <button onClick={handleAccept} className="accept-button">Accept</button>
      <button onClick={handleReject} className="reject-button">Reject</button>
    </div>
  );
}

export default LandOfficer;
