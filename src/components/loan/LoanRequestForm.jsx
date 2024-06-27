import React, { useState } from 'react';
import axios from 'axios';

function LoanRequestForm({ token }) {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !term || amount <= 0 || term <= 0) {
      setError('Amount and Term must be positive numbers');
      return;
    }
    try {
      await axios.post('/api/loans', { amount, term }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Loan request submitted!');
    } catch (error) {
      setError('Loan request failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount required"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Loan term (weeks)"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        required
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Request Loan</button>
    </form>
  );
}

export default LoanRequestForm;
