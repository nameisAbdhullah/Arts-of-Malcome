
document.addEventListener('DOMContentLoaded', () => {
    const adminLoginForm = document.getElementById('adminLoginForm');
  
    if (adminLoginForm) {
      adminLoginForm.addEventListener('submit', (event) => {
        event.preventDefault();
  
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        if (username === 'Malcome' && password === '1234') {
          alert('Login Successful!');
          window.location.href = 'dashboard.html';
        } else {
          alert('Invalid credentials. Please try again.');
        }
      });
    }
  });
  