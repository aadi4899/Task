import React from 'react';

function LoanList({ loans }) {
  return (
    <div>
      <h2>Your Loans</h2>
      {loans.map(loan => (
        <div key={loan.id}>
          <p>Loan ID: {loan.id}</p>
          <p>Amount: {loan.amount}</p>
          <p>Term: {loan.term} weeks</p>
          <p>Status: {loan.status}</p>
          <h3>Repayments:</h3>
          <ul>
            {loan.repayments.map(repayment => (
              <li key={repayment.id}>
                Due Date: {repayment.dueDate} - Amount: {repayment.amount} - Status: {repayment.status}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default LoanList;
