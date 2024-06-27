const authService = {
    register: (username, password) => {
      let data = JSON.parse(localStorage.getItem('data')) || { users: [], loans: [] };
      if (data.users.find(user => user.username === username)) {
        throw new Error('Username already exists');
      }
      data.users.push({ username, password, loans: [] });
      localStorage.setItem('data', JSON.stringify(data));
    },
    
    login: (username, password) => {
      const data = JSON.parse(localStorage.getItem('data')) || { users: [], loans: [] };
      const user = data.users.find(user => user.username === username && user.password === password);
      if (!user) {
        throw new Error('Invalid username or password');
      }
      return user;
    }
  };
  
  export default authService;
  