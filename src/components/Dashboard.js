// src/components/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h2>Dashboard</h2>
      <p>Welcome to your Dashboard!</p>
      <p>Here you can view and manage your land records.</p>
    </div>
  );
};

// Basic styling for the dashboard
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
};

export default Dashboard;
