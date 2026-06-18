// ==========================================
// ELEMENTS
// ==========================================
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');

// ==========================================
// THEME LOGIC
// ==========================================

/**
 * Sets the theme, updates the DOM, saves to LocalStorage,
 * and updates the toggle button UI/ARIA attributes.
 */
function setTheme(theme) {
  // 1. Apply theme to HTML root
  html.setAttribute('data-theme', theme);
  
  // 2. Save preference to Local Storage
  localStorage.setItem('theme', theme);
  
  // 3. Update UI text and ARIA
  if (theme === 'dark') {
    themeLabel.textContent = 'Dark';
    themeToggle.setAttribute('aria-checked', 'true');
  } else {
    themeLabel.textContent = 'Light';
    themeToggle.setAttribute('aria-checked', 'false');
  }
}

/**
 * Detects if the user's OS/Browser prefers dark mode
 */
function getSystemPreferredTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// ==========================================
// INITIALIZATION ON PAGE LOAD
// ==========================================
(function initTheme() {
  // Priority 1: Check if user has explicitly saved a preference
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    // Apply saved preference
    setTheme(savedTheme);
  } else {
    // Priority 2: Fall back to system preference (Advanced Feature)
    setTheme(getSystemPreferredTheme());
  }
})();

// ==========================================
// EVENT LISTENER FOR TOGGLE CLICK
// ==========================================
themeToggle.addEventListener('click', () => {
  // Get current active theme, toggle it
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  setTheme(newTheme);
});

// ==========================================
// ADVANCED: Listen for OS Theme Changes
// (If user hasn't manually set a preference, 
// update dynamically when OS theme changes)
// ==========================================
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  // Only react if there is no manual override in LocalStorage
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});