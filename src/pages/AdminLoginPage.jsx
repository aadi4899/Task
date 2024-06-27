import React, { useState } from 'react';
import AdminLogin from '../components/auth/AdminLogin';

function AdminLoginPage({ onLogin }) {
  return <AdminLogin onLogin={onLogin} />;
}

export default AdminLoginPage;
