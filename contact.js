// Get the theme toggle button
const themeButton = document.getElementById('themeButton');
const body = document.body;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateButtonIcon();
}

// Toggle theme on button click
themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark-mode' : '');
    updateButtonIcon();
});

// Update button icon based on theme
function updateButtonIcon() {
    const isDarkMode = body.classList.contains('dark-mode');
    themeButton.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}