import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLoanDetail from './AdminLoanDetail';

function AdminDashboard({ token }) {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get('/api/admin/loans', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setLoans(response.data);
      } catch (error) {
        alert('Failed to fetch loans.');
      }
    };

    fetchLoans();
  }, [token]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {loans.map((loan) => (
        <AdminLoanDetail key={loan.id} loan={loan} token={token} />
      ))}
    </div>
  );
}

export default AdminDashboard;
