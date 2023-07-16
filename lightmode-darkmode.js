const toggleSwitch = document.getElementById('toggle-switch');
const body = document.body;

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', true);
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', false);
  }
});

// Set dark mode based on user preference from local storage
const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
if (isDarkMode) {
  body.classList.add('dark-mode');
  toggleSwitch.checked = true;
}
