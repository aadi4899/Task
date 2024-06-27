import React, { useState } from 'react';
import axios from 'axios';

function RepaymentForm({ loanId, scheduledRepayment, token }) {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || amount < scheduledRepayment) {
      setError(`Repayment amount must be greater or equal to ${scheduledRepayment}`);
      return;
    }
    try {
      await axios.post(`/api/loans/${loanId}/repayments`, { amount }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Repayment submitted!');
    } catch (error) {
      setError('Repayment failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder={`Repayment amount (>= ${scheduledRepayment})`}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit Repayment</button>
    </form>
  );
}

export default RepaymentForm;
