const adminService = {
    login: (username, password) => {
      const adminData = {
        username: 'admin',
        password: 'admin123'
      };
      if (username === adminData.username && password === adminData.password) {
        return { username };
      } else {
        throw new Error('Invalid admin credentials');
      }
    },
  
    getLoans: () => {
      const data = JSON.parse(localStorage.getItem('data')) || { users: [], loans: [] };
      return data.loans;
    },
  
    approveLoan: (loanId) => {
      const data = JSON.parse(localStorage.getItem('data')) || { users: [], loans: [] };
      const loan = data.loans.find(loan => loan.id === loanId);
      if (loan) {
        loan.status = 'APPROVED';
        localStorage.setItem('data', JSON.stringify(data));
      } else {
        throw new Error('Loan not found');
      }
    }
  };
  
  export default adminService;
  