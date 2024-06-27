import React from 'react';
import RepaymentForm from './RepaymentForm';

function LoanDetail({ loan, token }) {
  return (
    <div>
      <h3>Loan ID: {loan.id}</h3>
      <p>Amount: {loan.amount}</p>
      <p>Term: {loan.term} weeks</p>
      <p>Status: {loan.status}</p>
      <h4>Repayments:</h4>
      {loan.repayments.map((repayment) => (
        <div key={repayment.id}>
          <p>Date: {repayment.date}</p>
          <p>Amount: {repayment.amount}</p>
          <p>Status: {repayment.status}</p>
        </div>
      ))}
      {loan.status === 'APPROVED' && (
        <RepaymentForm loanId={loan.id} scheduledRepayment={loan.repayments[0].amount} token={token} />
      )}
    </div>
  );
}

export default LoanDetail;
