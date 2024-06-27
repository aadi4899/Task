import React from 'react';
import { Link } from 'react-router-dom';
import '../style/homepage.css'

function HomePage() {
  return (
    <div className='mainPage'>
      <h1>Welcome to the Loan Application System</h1>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/admin-login">Admin Login</Link></li>
    </div>
  );
}

export default HomePage;
