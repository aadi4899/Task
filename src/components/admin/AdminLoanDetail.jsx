import React from 'react';
import axios from 'axios';

function AdminLoanDetail({ loan, token }) {
  const approveLoan = async () => {
    try {
      await axios.post(`/api/admin/loans/${loan.id}/approve`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Loan approved!');
    } catch (error) {
      alert('Failed to approve loan.');
    }
  };

  return (
    <div>
      <h3>Loan ID: {loan.id}</h3>
      <p>Amount: {loan.amount}</p>
      <p>Term: {loan.term} weeks</p>
      <p>Status: {loan.status}</p>
      {loan.status === 'PENDING' && <button onClick={approveLoan}>Approve Loan</button>}
    </div>
  );
}

export default AdminLoanDetail;
