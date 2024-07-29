document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeButton = document.querySelector('.close-button');
    const toRegister = document.getElementById('to-register');
    const toLogin = document.getElementById('to-login');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginFormDiv = document.getElementById('login-form');
    const registerFormDiv = document.getElementById('register-form');
    const profileSection = document.querySelector('.Profile');
    const profileTitle = document.getElementById('title');
    const logoutBtn = document.getElementById('logout');

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    toRegister.addEventListener('click', () => {
        loginFormDiv.classList.add('hidden');
        registerFormDiv.classList.remove('hidden');
    });

    toLogin.addEventListener('click', () => {
        registerFormDiv.classList.add('hidden');
        loginFormDiv.classList.remove('hidden');
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const user = JSON.parse(localStorage.getItem(username));

        if (user && user.password === password) {
            alert('Login bem-sucedido');
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            loginModal.style.display = 'none';
            updateProfile(user);
            toggleProfileSection(true);
        } else {
            alert('Usuário ou senha incorretos');
        }
    });

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('reg-username').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const userId = generateUserId();

        const user = {
            username: username,
            email: email,
            password: password,
            userId: userId
        };

        if (localStorage.getItem(username)) {
            alert('Usuário já cadastrado');
        } else {
            localStorage.setItem(username, JSON.stringify(user));
            alert('Cadastro bem-sucedido');
            registerFormDiv.classList.add('hidden');
            loginFormDiv.classList.remove('hidden');
        }
    });

    logoutBtn.addEventListener('click', () => {
        logout();
    });

    function generateUserId() {
        return Math.floor(1000 + Math.random() * 9000);
    }

    function updateProfile(user) {
        profileTitle.textContent = `${user.username}#${user.userId}`;
    }

    function toggleProfileSection(isLoggedIn) {
        if (isLoggedIn) {
            profileSection.style.display = 'block';
            document.querySelector('.login').style.display = 'none';
        } else {
            profileSection.style.display = 'none';
            document.querySelector('.login').style.display = 'block';
        }
    }

    function checkLoggedInUser() {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            updateProfile(loggedInUser);
            toggleProfileSection(true);
        }
    }

    function logout() {
        localStorage.removeItem('loggedInUser');
        toggleProfileSection(false);
    }

    checkLoggedInUser();
});

