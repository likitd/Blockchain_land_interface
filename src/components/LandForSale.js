import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandForSale.css'; // Add styles for the table

const LandForSale = () => {
  const navigate = useNavigate();

  // Sample data for available land records (this can be dynamic if fetching from a backend or blockchain)
  const landRecords = [
    { id: 1, location: 'Location ABC', area: '1000 sq.ft', price: '5 ETH' },
    { id: 2, location: 'Location XYZ', area: '1500 sq.ft', price: '7 ETH' },
    { id: 3, location: 'Location LMN', area: '1200 sq.ft', price: '6 ETH' }
  ];

  return (
    <div className="land-for-sale-container">
      <h2>Land Records Available for Purchase</h2>
      <table className="land-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Location</th>
            <th>Area</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {landRecords.map((land) => (
            <tr key={land.id}>
              <td>{land.id}</td>
              <td>{land.location}</td>
              <td>{land.area}</td>
              <td>{land.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="back-button" onClick={() => navigate('/profile')}>
        Back to Profile
      </button>
    </div>
  );
};

export default LandForSale;
