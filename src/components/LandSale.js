// src/components/LandSale.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandSale.css';

function LandSale({ lands, setLands }) {
  const navigate = useNavigate();

  // Filter lands that are available for sale and not owned by the user
  const landsForSale = lands.filter(land => land.isForSale && !land.ownedByUser);

  const handleBuyClick = (landId) => {
    // Navigate to LandOfficer with the selected landId
    navigate('/land-officer', { state: { landId } });
  };

  return (
    <div className="land-sale-container">
      <h2>Land Sale</h2>
      <h3>Available Lands for Purchase</h3>
      <table className="land-sale-table">
        <thead>
          <tr>
            <th>Land ID</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {landsForSale.map((land) => (
            <tr key={land.id}>
              <td>{land.id}</td>
              <td>{land.location}</td>
              <td>
                <button onClick={() => handleBuyClick(land.id)} className="buy-button">Buy</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LandSale;
