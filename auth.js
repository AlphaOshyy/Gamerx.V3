// Toggle between login and signup
function showForm(which) {
  document.querySelector('.form-box.login').classList.toggle('active', which === 'login');
  document.querySelector('.form-box.signup').classList.toggle('active', which === 'signup');
}

// Link clicks
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-target]');
  if (!link) return;
  e.preventDefault();
  showForm(link.dataset.target);
});

// Simple demo submit handlers (front-end only)
// Replace with real backend calls if you connect PHP later.
document.getElementById('authLogin')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const email = String(form.get('email') || '').trim();
  const password = String(form.get('password') || '').trim();

  if (!email || !password) return alert('Enter email and password');
  // Simulate login success
  localStorage.setItem('gamerx_user', JSON.stringify({ email }));
  alert('Logged in! Welcome back.');
  window.location.href = 'index.html';
});

document.getElementById('authSignup')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const callsign = String(form.get('callsign') || '').trim();
  const email = String(form.get('email') || '').trim();
  const password = String(form.get('password') || '').trim();

  if (!callsign || !email || !password) return alert('Please fill all fields');
  // Simulate account creation
  localStorage.setItem('gamerx_user', JSON.stringify({ callsign, email }));
  alert('Account created! Logged in as ' + callsign);
  window.location.href = 'index.html';
});

// Default view
showForm('login');
