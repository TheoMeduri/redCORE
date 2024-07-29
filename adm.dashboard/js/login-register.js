         // Dados de login com nomes
         const validUsers = [
            { username: 'Gabriel Meduri', password: 'Roots123', name: 'Gabriel Meduri' },
            { username: 'Theo Meduri', password: 'Roots123', name: 'Theo Meduri' },
            { username: 'admin3', password: 'pass789', name: 'Admin 3' },
            { username: 'admin4', password: 'pass000', name: 'Admin 4' },
            { username: 'admin5', password: 'pass111', name: 'Admin 5' }
        ];
        
        // Mostrar o modal ao carregar a página se não estiver logado
        window.addEventListener('load', () => {
            const loginModal = document.getElementById('loginModal');
            const closeButton = document.querySelector('.close-button');
            const loginForm = document.getElementById('loginForm');
            const profileName = document.getElementById('profileName');
            const profileInfo = document.querySelector('.profile-info');
            const logoutButton = document.getElementById('logoutButton'); // Adiciona referência ao botão de logout
        
            // Verifica se o usuário está logado
            const loggedInUser = localStorage.getItem('loggedInUser');
            if (loggedInUser) {
                // Usuário está logado, exibe o nome do perfil
                const user = JSON.parse(loggedInUser);
                profileName.textContent = user.name;
                const initial = user.name.charAt(0).toUpperCase(); // Pega a inicial do nome
                const profileImg = document.querySelector('.profile-info img');
                profileImg.style.display = 'none'; // Oculta a imagem de perfil existente
                const avatar = document.createElement('div');
                avatar.classList.add('avatar');
                avatar.textContent = initial;
                profileInfo.insertBefore(avatar, profileName);
                loginModal.style.display = 'none';
            } else {
                // Usuário não está logado, exibe o modal de login
                loginModal.style.display = 'block';
            }
        
            // Fechar o modal
            closeButton.addEventListener('click', () => {
                if (!localStorage.getItem('loggedInUser')) {
                    // Se não estiver logado, não fecha o modal
                    alert('Você precisa fazer login para fechar este modal.');
                } else {
                    loginModal.style.display = 'none';
                }
            });
        
            // Submissão do formulário de login
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
        
                const user = validUsers.find(user => user.username === username && user.password === password);
        
                if (user) {
                    // Usuário validado
                    localStorage.setItem('loggedInUser', JSON.stringify(user));
                    loginModal.style.display = 'none';
                    const initial = user.name.charAt(0).toUpperCase(); // Pega a inicial do nome
                    profileName.textContent = user.name; // Atualiza o nome do perfil
        
                    // Atualiza a imagem do perfil com a inicial
                    const profileImg = document.querySelector('.profile-info img');
                    profileImg.style.display = 'none'; // Oculta a imagem de perfil existente
                    const avatar = document.createElement('div');
                    avatar.classList.add('avatar');
                    avatar.textContent = initial;
                    profileInfo.insertBefore(avatar, profileName);
                } else {
                    alert('Usuário ou senha incorretos.');
                }
            });
        
            // Função de logout
            logoutButton.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('loggedInUser');
                location.reload(); // Recarrega a página para exibir o modal de login novamente
            });
        });
        
        function Profile() {
            window.location.href = 'profile.html'
        }