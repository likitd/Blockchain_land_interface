import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Profile.css';  // Assuming you have styles here

function Profile() {
  const location = useLocation();
  const { aadharNumber } = location.state || {}; // Get aadharNumber from the state
  const navigate = useNavigate(); // Initialize the navigate hook

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h2>Your Aadhar Number: {aadharNumber || 'N/A'}</h2>
        {/* Navigate to the Land for Sale page when button is clicked */}
        <button className="sale-button" onClick={() => navigate('/land-for-sale')}>
          Land for Sale
        </button>
      </header>

      {/* Table to display lands owned */}
      <table className="land-table">
        <thead>
          <tr>
            <th>Land Owns</th>
            <th>Actions</th> {/* New header for action buttons */}
          </tr>
        </thead>
        <tbody>
          {/* Example row for Land #1 */}
          <tr>
            <td>Land #1 - Location XYZ</td>
            <td>
              {/* Buttons for actions */}
              <button className="conventional-button">Conventional</button>
              <button className="non-conventional-button">Non-Conventional</button>
              <button className="sell-button">Sell</button>
            </td>
          </tr>

          {/* Example row for Land #2 */}
          <tr>
            <td>Land #2 - Location ABC</td>
            <td>
              {/* Buttons for actions */}
              <button className="conventional-button">Conventional</button>
              <button className="non-conventional-button">Non-Conventional</button>
              <button className="sell-button">Sell</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Profile;
