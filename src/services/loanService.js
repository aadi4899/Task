const loanService = {
    createLoan: (username, amount, term) => {
      const data = JSON.parse(localStorage.getItem('data')) || { users: [], loans: [] };
      const user = data.users.find(user => user.username === username);
      const loanId = data.loans.length + 1;
      const repayments = Array.from({ length: term }, (_, i) => ({
        id: i + 1,
        dueDate: new Date(Date.now() + (i + 1) * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        amount: (amount / term).toFixed(2),
        status: 'PENDING'
      }));
  
      const loan = {
        id: loanId,
        username,
        amount,
        term,
        status: 'PENDING',
        repayments
      };
  
      data.loans.push(loan);
      user.loans.push(loanId);
      localStorage.setItem('data', JSON.stringify(data));
    },
  
    getUserLoans: (username) => {
      const data = JSON.parse(localStorage.getItem('data')) || { users: [], loans: [] };
      return data.loans.filter(loan => loan.username === username);
    },
  
    addRepayment: (loanId, repaymentId, amount) => {
      const data = JSON.parse(localStorage.getItem('data')) || { users: [], loans: [] };
      const loan = data.loans.find(loan => loan.id === loanId);
      const repayment = loan.repayments.find(repayment => repayment.id === repaymentId);
  
      if (amount >= repayment.amount) {
        repayment.status = 'PAID';
        if (loan.repayments.every(repayment => repayment.status === 'PAID')) {
          loan.status = 'PAID';
        }
        localStorage.setItem('data', JSON.stringify(data));
      } else {
        throw new Error('Repayment amount is less than the scheduled amount');
      }
    }
  };
  
  export default loanService;
  