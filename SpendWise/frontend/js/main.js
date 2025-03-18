document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  if (!token && window.location.pathname.includes('dashboard.html')) {
    alert('You must be logged in to access the dashboard');
    window.location.href = 'login.html';
  }
});
