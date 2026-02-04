// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        {user ? (
          <>
            <h1>Welcome, {user.name}!</h1>
            <p>You have successfully logged in.</p>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <h1>Welcome to the Assignment</h1>
            <p>Please login or signup to continue</p>
            <Link to="/login" className="btn btn-primary me-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-secondary">
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
