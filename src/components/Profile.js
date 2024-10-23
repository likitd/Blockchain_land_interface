// src/components/Profile.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Profile.css'; 

function Profile({ aadharNumber, lands, setLands }) { // Destructure aadharNumber
  const location = useLocation();
  const { landId, isConventional } = location.state || {}; // Get landId and isConventional from state if available

  const navigate = useNavigate();

  const handleNonConventionalClick = (landId) => {
    navigate('/land-officer', { state: { landId } });
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h2>Your Aadhar Number: {aadharNumber || 'N/A'}</h2> {/* Now this will work */}
        <button className="sale-button">Land for Sale</button>
      </header>

      {/* Table to display lands owned */}
      <table className="land-table">
        <thead>
          <tr>
            <th>Land Owns</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lands.map((land) => (
            <tr key={land.id}>
              <td>{`Land #${land.id} - ${land.location}`}</td>
              <td>
                {/* Conditionally display buttons based on the status */}
                {land.isConventional ? (
                  <button className="conventional-button">Conventional</button>
                ) : (
                  <>
                    <button className="conventional-button">Conventional</button>
                    <button 
                      className="non-conventional-button" 
                      onClick={() => handleNonConventionalClick(land.id)}
                    >
                      Non-Conventional
                    </button>
                    <button className="sell-button">Sell</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Profile;
