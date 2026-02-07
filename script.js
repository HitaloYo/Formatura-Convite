document.addEventListener('DOMContentLoaded', () => {
    // --- Variáveis ---
    const audio = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-btn'); // Botão flutuante
    const modal = document.getElementById('music-modal'); // O Pop-up
    const btnPlay = document.getElementById('modal-play'); // Botão do Pop-up "Ativar"
    const btnClose = document.getElementById('modal-close'); // Botão do Pop-up "X"
    
    let isPlaying = false;
    audio.volume = 0.5;

    // 1. Mostrar o Modal assim que carregar (com pequeno delay para animação)
    setTimeout(() => {
        modal.classList.add('show');
    }, 500);

    // 2. Ação: Clicou em "Ativar Música"
    btnPlay.addEventListener('click', () => {
        audio.play().then(() => {
            isPlaying = true;
            musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            modal.classList.remove('show'); // Esconde o modal
        }).catch(err => {
            console.log("Autoplay bloqueado pelo navegador", err);
        });
    });

    // 3. Ação: Clicou em "Não quero música" (Fechar)
    btnClose.addEventListener('click', () => {
        modal.classList.remove('show');
        // A música continua pausada
    });

    // 4. Botão Flutuante (Canto da tela)
    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            musicBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        } else {
            audio.play();
            musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        }
        isPlaying = !isPlaying;
    });

    // --- Animação de Fundo (Ícones) ---
    const bg = document.getElementById('bg-animation');
    const icons = ['fa-heart', 'fa-user-nurse', 'fa-syringe', 'fa-stethoscope', 'fa-graduation-cap', 'fa-star'];

    function createIcon() {
        const i = document.createElement('i');
        const iconClass = icons[Math.floor(Math.random() * icons.length)];
        i.classList.add('fa-solid', iconClass, 'floating-icon');
        
        // Posição e Tamanho
        i.style.left = Math.random() * 100 + 'vw';
        const size = Math.random() * 20 + 10;
        i.style.fontSize = size + 'px';
        
        // Z-Index baixo garantido via JS também
        i.style.zIndex = "0";

        // Duração aleatória
        const duration = Math.random() * 15 + 10;
        i.style.animationDuration = duration + 's';
        
        bg.appendChild(i);
        setTimeout(() => i.remove(), duration * 1000);
    }

    setInterval(createIcon, 800);
});