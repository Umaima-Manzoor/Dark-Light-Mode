# ThemeShift – Dark/Light Mode Toggle with Persistent User Preference

A fully functional dark/light mode toggle system built with HTML, CSS (CSS variables), and vanilla JavaScript. The user's theme preference is saved to `localStorage` and persists across page reloads and multiple pages. Includes system theme detection as a fallback.

<br>

## 📋 Task Requirements – Fully Fulfilled

| Requirement | Status |
|-------------|--------|
| Two themes – Light Mode (default) & Dark Mode | ✅ |
| CSS variables for theming (background, text, cards, buttons) | ✅ |
| Toggle switch/button in navbar | ✅ |
| Sun icon (light) & Moon icon (dark) | ✅ |
| Toggle theme on click with JavaScript | ✅ |
| Save preference to localStorage | ✅ |
| Load saved theme on page load | ✅ |
| Smooth transitions between themes | ✅ |
| Theme applied to navbar, cards, buttons, text | ✅ |
| Readability in both modes | ✅ |
| System theme detection (`prefers-color-scheme`) – optional | ✅ |
| Animated toggle switch – optional | ✅ |
| Save across multiple pages – optional | ✅ |
| Listen for OS theme changes – optional | ✅ |

<br>

## 🛠️ Technologies Used

- **HTML5** – Semantic markup
- **CSS3** – CSS Variables (Custom Properties), Flexbox, Grid, Transitions
- **Vanilla JavaScript** – localStorage API, DOM manipulation, Event Listeners
- **Font Awesome 6** – Icons (Sun, Moon)
- **Google Fonts** – Inter

<br>

## 📁 Project Structure
```
ThemeShift/
├── index.html # Main HTML page
├── script.js # Theme toggle logic + localStorage
├── styles.css # Complete CSS with light/dark variables
├── README.md # This file
├── Dark-Light-Mode.zip # Project ZIP archive
└── Screenshots/ # Light and dark mode screenshots
├── light-mode.png
└── dark-mode.png
```

<br>

## 🧩 Key Features

### Theme Management
- **Two themes** – Light and Dark modes with complete color palettes.
- **CSS Variables** – All colors are defined as CSS custom properties, making theming consistent and maintainable.
- **Smooth Transitions** – Every themed element transitions smoothly when switching modes.

<br>

### Toggle Switch
- **Custom Animated Switch** – Visually appealing toggle with sliding thumb animation.
- **Dynamic Icons** – Thumb shows ☀️ Sun for light mode and 🌙 Moon for dark mode.
- **Accessibility** – ARIA attributes (`role="switch"`, `aria-checked`) for screen readers.
- **Visual Feedback** – "Light" / "Dark" label updates beside the toggle.

<br>

### Persistence
- **localStorage** – User preference is saved and restored automatically.
- **System Detection** – If no preference is saved, the system theme (`prefers-color-scheme`) is used.
- **OS Theme Listener** – When the OS theme changes, the page adapts automatically (if no manual preference is set).

<br>

### UI Components Preview
The page includes a live UI preview box showing how different components adapt:
- Buttons (Primary, Outline)
- Status Badge
- Input field
- Alert box

All components respond seamlessly to theme changes.

<br>

### Code Display
A syntax-highlighted code block shows the core JavaScript logic, making the implementation transparent.

<br>

## 🧪 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Umaima-Manzoor/Dark-Light-Mode.git
   cd Dark-Light-Mode
   ```
2. **Open the project**
- Double‑click index.html to open in your browser, or
- Use a local development server (e.g., VS Code Live Server)

3. No dependencies or build tools required – it just works.

<br>

## 📸 Screenshots
Screenshots of both Light and Dark modes are included in the Screenshots/ folder

<br>

## 🔧 How It Works
### CSS Variables
```
:root {
  --bg-primary: #f8fafc;
  --text-primary: #0f172a;
  /* ... light theme colors */
}

[data-theme="dark"] {
  --bg-primary: #0f172a;
  --text-primary: #f1f5f9;
  /* ... dark theme colors */
}
```

<br>

### JavaScript Logic
```
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  // Update UI and ARIA attributes
}

// On page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}
```

<br>

## 👩‍💻 Author
Umaima Manzoor – [My GitHub](https://github.com/Umaima-Manzoor/)

<br>

## 📄 License
MIT
