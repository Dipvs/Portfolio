        // Tema Escuro/Claro
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        // Verifica o tema salvo no localStorage
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            themeToggleLightIcon.classList.remove('block');
            themeToggleLightIcon.classList.add('hidden');
            themeToggleDarkIcon.classList.remove('hidden');
            themeToggleDarkIcon.classList.add('block');
        } else {
            document.documentElement.classList.remove('dark');
            themeToggleLightIcon.classList.add('block');
            themeToggleLightIcon.classList.remove('hidden');
            themeToggleDarkIcon.classList.add('hidden');
            themeToggleDarkIcon.classList.remove('block');
        }

        themeToggleBtn.addEventListener('click', function() {
            // Alterna entre temas
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');

            // Se definido no localStorage
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }
            } else {
                // Primeira vez alternando
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
        });

        // Efeito de digitação
        new Typed('#typing-effect', {
            strings: [
                'Desenvolvedor Full-Stack', 
                'Criador de Soluções Digitais', 
                'Especialista em Tecnologia'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });