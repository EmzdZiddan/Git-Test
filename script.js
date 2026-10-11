const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('.theme-icon');

// Ambil tema tersimpan dari localStorage atau default ke 'dark'
const savedTheme = localStorage.getItem('theme') || 'dark';

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.textContent = '☀️';
    themeToggleBtn.setAttribute('aria-label', 'Ganti ke Dark Mode');
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeIcon.textContent = '🌙';
    themeToggleBtn.setAttribute('aria-label', 'Ganti ke Light Mode');
  }
}

// Inisialisasi tema saat halaman dimuat
applyTheme(savedTheme);

// Event listener klik tombol
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});
