import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function LandingPage() {
  const [credentials, setCredentials] = useState('');
  const [isAdminAccess, setIsAdminAccess] = useState(false);
  const navigate = useNavigate();

  const handleAdminAccess = () => {
    if (credentials === 'Prof. Matthew' || credentials === 'Kathan') {
      setIsAdminAccess(true);
      navigate('/admin');
    } else {
      alert('Please enter valid credentials.');
    }
  };

  return (
    <div className="LandingPage">
      <h1 className="title">Welcome to the Access Management System</h1>
      <div className="button-container">
        <Link to="/main">
          <button className="nav-button">Add New Record</button>
        </Link>
        <button className="nav-button" onClick={() => setIsAdminAccess(true)} style={{ marginTop: '10px' }}>
          Admin
        </button>
      </div>
      {isAdminAccess && (
        <div className="admin-credentials">
          <h2 className="admin-title">Admin Access</h2>
          <input
            type="text"
            placeholder="Enter credentials"
            value={credentials}
            onChange={(e) => setCredentials(e.target.value)}
            className="admin-input"
          />
          <button className="submit-button" onClick={handleAdminAccess}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
