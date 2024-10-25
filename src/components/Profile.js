// src/components/Profile.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile({ aadharNumber, lands, setLands }) {
  const navigate = useNavigate();

  const handleNonConventionalClick = (landId) => {
    navigate('/land-officer', { state: { landId } });
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h2>Your Aadhar Number: {aadharNumber || 'N/A'}</h2>
      </header>

      {/* Table to display lands owned */}
      <h3>Lands Owned</h3>
      <table className="land-table">
        <thead>
          <tr>
            <th>Land ID</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lands.map((land) => (
            <tr key={land.id}>
              <td>{land.id}</td>
              <td>{land.location}</td>
              <td>{land.isConventional ? 'Conventional' : 'Non-Conventional'}</td>
              <td>
                {/* Conditionally display action buttons */}
                {land.isConventional ? (
                  <button className="status-button conventional">Conventional</button>
                ) : (
                  <>
                    <button className="status-button non-conventional" onClick={() => handleNonConventionalClick(land.id)}>
                      Request Conventional
                    </button>
                    <button className="action-button sell">Sell</button>
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
