// src/components/LandOfficer.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LandOfficer.css';

function LandOfficer({ lands, setLands }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { landId } = location.state || {};

  const handleApprove = () => {
    setLands(prevLands =>
      prevLands.map(land =>
        land.id === landId ? { ...land, ownedByUser: true, isForSale: false } : land
      )
    );
    alert(`Land #${landId} approved and now owned by you.`);
    navigate('/profile');
  };

  const handleReject = () => {
    alert(`Land #${landId} purchase request rejected.`);
    navigate('/land-sale');
  };

  return (
    <div className="land-officer-container">
      <h2>Land Officer</h2>
      <p>Review the purchase request for Land #{landId}</p>
      <button onClick={handleApprove} className="approve-button">Approve</button>
      <button onClick={handleReject} className="reject-button">Reject</button>
    </div>
  );
}

export default LandOfficer;
