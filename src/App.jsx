// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
     
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Login from '../src/components/auth/Login';
import RegisterPage from './pages/RegisterPage';
import LoanPage from './pages/LoanPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  const handleUserLogin = (user) => {
    setUser(user);
  };

  const handleAdminLogin = (admin) => {
    setAdmin(admin);
  };

  return (
    <Router>
      {/* <Switch> */}
      <Routes>
        {/* <Route path="/" exact component={HomePage} /> */}
        <Route path="/" exact element={<HomePage/>} />
        {/* <Route path="/login" render={() => <LoginPage onLogin={handleUserLogin} />} /> */}
        <Route path="/login" render={() => <Login onLogin={handleUserLogin} />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/loans" render={() => <LoanPage username={user?.username} />} />
        <Route path="/admin-login" render={() => <AdminLoginPage onLogin={handleAdminLogin} />} />
        <Route path="/admin-dashboard" render={() => <AdminDashboardPage admin={admin} />} />
      {/* </Switch> */}
      </Routes>
    </Router>
  );
}

export default App;
