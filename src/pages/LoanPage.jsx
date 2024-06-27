import React, { useState, useEffect } from 'react';
import LoanRequestForm from '../components/loan/LoanRequestForm';
import LoanList from '../components/loan/LoanList';
import loanService from '../services/loanService';

function LoanPage({ username }) {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const userLoans = loanService.getUserLoans(username);
    setLoans(userLoans);
  }, [username]);

  return (
    <div>
      <LoanRequestForm username={username} />
      <LoanList loans={loans} />
    </div>
  );
}

export default LoanPage;
