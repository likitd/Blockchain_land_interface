// src/components/LandOfficer.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LandOfficer.css';

function LandOfficer({ lands, setLands }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Destructure state from location to get required props
  const { landId, requestType, buyerAadhar, sellerAadhar } = location.state || {};

  // Debugging logs to verify passed state
  console.log('Location State:', location.state);

  // Find the land corresponding to the landId
  const land = lands.find((l) => l.id === landId);

  // Debugging log to check if land is found
  console.log('Selected Land:', land);

  const handleApprove = () => {
    if (!land) return;

    // Update land based on request type
    setLands((prevLands) =>
      prevLands.map((l) =>
        l.id === land.id
          ? requestType === 'sell'
            ? { ...l, isForSale: true } // Set land for sale if approved
            : { ...l, isConventional: true } // Convert to conventional if approved
          : l
      )
    );

    navigate('/profile'); // Navigate back to Profile after approval
  };

  const handleReject = () => {
    navigate('/profile'); // Simply navigate back if rejected
  };

  if (!land) {
    return <div>No land details provided.</div>; // Handles case where land isn't found
  }

  return (
    <div className="land-officer-container">
      <h2>Land Officer Approval</h2>
      <div className="land-details">
        <p><strong>Land ID:</strong> {land.id}</p>
        <p><strong>Location:</strong> {land.location}</p>
        <p><strong>Area:</strong> {land.areaSqMeters} sq meters</p>
        <p><strong>Guntas:</strong> {land.guntas}</p>
        <p><strong>Price:</strong> {land.price} USD</p>
        <p><strong>Current Status:</strong> {land.isConventional ? 'Conventional' : 'Non-Conventional'}</p>
        <p><strong>Buyer Aadhar:</strong> {buyerAadhar}</p> {/* Display buyer's Aadhar */}
        <p><strong>Seller Aadhar:</strong> {sellerAadhar}</p> {/* Display seller's Aadhar */}
      </div>
      <div className="approval-buttons">
        <button className="approve-button" onClick={handleApprove}>Approve</button>
        <button className="reject-button" onClick={handleReject}>Reject</button>
      </div>
    </div>
  );
}

export default LandOfficer;
