// src/components/Profile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal'; // Import the separate Modal component
import './Profile.css';

function Profile({ aadharNumber, lands, setLands }) {
  const navigate = useNavigate();
  const [selectedLand, setSelectedLand] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [buyerAadhar, setBuyerAadhar] = useState("");

  const handleRequestConventionalClick = (landId) => {
    navigate('/land-officer', { state: { landId, requestType: 'conventional' } });
  };

  const handleSellClick = (land) => {
    setSelectedLand(land);
    setShowModal(true); // Show the modal
  };

  const handleModalClose = () => {
    setShowModal(false);
    setBuyerAadhar("");
  };

  const handleSubmit = () => {
    navigate('/land-officer', {
        state: { 
            landId: selectedLand.id, 
            requestType: 'sell', 
            buyerAadhar,
            sellerAadhar: aadharNumber // Make sure to pass the seller's Aadhar
        },
    });
    handleModalClose(); // Close modal after submission
};


  const toggleLandDetails = (land) => {
    setSelectedLand(selectedLand?.id === land.id ? null : land);
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h2>Your Aadhar Number: {aadharNumber || 'N/A'}</h2>
        <button className="sale-button">Land for Sale</button>
      </header>

      <table className="land-table">
        <thead>
          <tr>
            <th>Land Owns</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lands.map((land) => (
            <React.Fragment key={land.id}>
              <tr>
                <td onClick={() => toggleLandDetails(land)}>
                  {`Land #${land.id} - ${land.location}`}
                </td>
                <td>
                  {land.isConventional ? (
                    <>
                      <button className="conventional-button">Conventional</button>
                      {!land.isForSale && (
                        <button
                          className="sell-button"
                          onClick={() => handleSellClick(land)}
                        >
                          Sell
                        </button>
                      )}
                    </>
                  ) : (
                    <>
                      <button
                        className="conventional-button"
                        onClick={() => handleRequestConventionalClick(land.id)}
                      >
                        Request Conventional
                      </button>
                      {!land.isForSale && (
                        <button
                          className="sell-button"
                          onClick={() => handleSellClick(land)}
                        >
                          Sell
                        </button>
                      )}
                    </>
                  )}
                </td>
              </tr>
              {selectedLand?.id === land.id && (
                <tr className="land-details">
                  <td colSpan="2">
                    <div>
                      <p><strong>Location:</strong> {land.location}</p>
                      <p><strong>Area:</strong> {land.areaSqMeters} sq. meters</p>
                      <p><strong>Guntas:</strong> {land.guntas}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* Modal for buyer input and land details */}
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={handleModalClose}
          land={selectedLand}
          buyerAadhar={buyerAadhar}
          setBuyerAadhar={setBuyerAadhar}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default Profile;
