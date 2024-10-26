// src/components/Modal.js
import React from 'react';
import './Modal.css'; // Ensure your modal styles are defined

function Modal({ isOpen, onClose, land, buyerAadhar, setBuyerAadhar, onSubmit }) {
  if (!isOpen || !land) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Sell Land</h3>
        <label>
          Buyer Aadhar Number:
          <input
            type="text"
            value={buyerAadhar}
            onChange={(e) => setBuyerAadhar(e.target.value)}
            placeholder="Enter Aadhar number"
          />
        </label>
        <div className="modal-land-details">
          <p><strong>Land ID:</strong> {land.id}</p>
          <p><strong>Location:</strong> {land.location}</p>
          <p><strong>Area:</strong> {land.areaSqMeters} sq. meters, {land.guntas} guntas</p>
          <p><strong>Price:</strong> {land.price} USD</p>
        </div>
        <button className="approve-button" onClick={onSubmit}>Submit</button>
        <button className="cancel-button" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
