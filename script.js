document.addEventListener('DOMContentLoaded', () => {
    // --- Variáveis do Player de Música ---
    const audio = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-btn');
    const modal = document.getElementById('music-modal');
    const btnPlay = document.getElementById('modal-play');
    const btnClose = document.getElementById('modal-close');
    
    let isPlaying = false;
    audio.volume = 0.5;

    // Mostrar o Modal
    setTimeout(() => {
        modal.classList.add('show');
    }, 500);

    // Ação: Ativar Música
    btnPlay.addEventListener('click', () => {
        audio.play().then(() => {
            isPlaying = true;
            musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            modal.classList.remove('show');
        }).catch(err => { console.log("Erro autoplay", err); });
    });

    // Ação: Fechar sem música
    btnClose.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Botão Flutuante
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

    // --- GERAR PADRÃO DE FUNDO ESTÁTICO ---
    const bg = document.getElementById('bg-animation');
    // Ícones focados em enfermagem
    const icons = [
        'fa-heart-pulse',
        'fa-user-nurse',
        'fa-syringe',
        'fa-stethoscope',
        'fa-notes-medical',
        'fa-pills',
        'fa-kit-medical'
    ];

    function generateStaticPattern() {
        // Cria 60 ícones para preencher bem a tela
        for (let i = 0; i < 60; i++) {
            const iconEl = document.createElement('i');
            const iconClass = icons[Math.floor(Math.random() * icons.length)];
            iconEl.classList.add('fa-solid', iconClass, 'floating-icon');
            
            // Posição aleatória na tela
            iconEl.style.left = Math.random() * 100 + 'vw';
            iconEl.style.top = Math.random() * 100 + 'vh';
            
            // Tamanho variado
            const size = Math.random() * 25 + 15; // entre 15px e 40px
            iconEl.style.fontSize = size + 'px';
            
            // Rotação aleatória para parecer um padrão natural
            const rotation = Math.random() * 360;
            iconEl.style.transform = `rotate(${rotation}deg)`;

            // Z-Index garantido baixo
            iconEl.style.zIndex = "0";
            
            bg.appendChild(iconEl);
            // Não removemos eles, pois são estáticos agora
        }
    }

    // Gera o padrão uma vez ao carregar
    generateStaticPattern();
});