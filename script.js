const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// Function to apply theme based strictly on system preference
function applySystemTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (prefersDark) {
    body.classList.add('dark-mode');
  } else {
    // Falls back to light mode for light, high-contrast, or custom themes
    body.classList.remove('dark-mode');
  }
}

// Initial check on page load
applySystemTheme();

// Listen for system changes (e.g., user toggles system dark mode while site is open)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (e.matches) body.classList.add('dark-mode');
  else body.classList.remove('dark-mode');
});

// Manual toggle still works for the current session, but won't override system on refresh
themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});