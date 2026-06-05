// 1. Gather all required UI references from the document 
const themeToggleBtn = document.getElementById('themeToggle');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalOverlay');

// 2. Logic configuration to swap custom Theme attributes
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggleBtn.textContent = 'Toggle Dark Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Toggle Light Mode';
    }
});

// 3. Logic handler to expose hidden popup configurations
openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

// 4. Logic handler to reverse/dismiss popup configurations
closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// 5. Dismiss modal window safely if user clicks outside on background overlay
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});