// darkMode.js
document.addEventListener('DOMContentLoaded', () => {
    const darkModeEnabled = JSON.parse(localStorage.getItem('darkMode')) || false;
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const piIcon = document.getElementById('piIcon');
    const PIModeToggle = document.getElementById('PIModeToggle');

    // Função para verificar o estado do modo PI e ajustar a visibilidade do ícone PI
    function checkPIMode() {
        const piMode = localStorage.getItem('PIMode') === 'true';
        piIcon.style.display = piMode ? 'block' : 'none';
        if (PIModeToggle) {
            PIModeToggle.checked = piMode;
        }
    }

    // Verifica o estado do modo PI ao carregar a página
    checkPIMode();
});


