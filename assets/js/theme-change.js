const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

// Set default theme to dark if no theme is stored in localStorage
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    // If the stored theme is 'light', check the toggle
    if (currentTheme === 'light') {
        toggleSwitch.checked = true;
    }
} else {
    // Default to dark theme if no theme is stored
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}

function switchTheme(e) {
    if (e.target.checked) {
        // Switch to light theme
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        // Switch to dark theme
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
