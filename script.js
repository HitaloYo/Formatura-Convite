document.addEventListener('DOMContentLoaded', () => {
    // --- Música ---
    const audio = document.getElementById('bg-music');
    const btn = document.getElementById('music-btn');
    let isPlaying = false;

    // Define volume para 40% para não assustar
    audio.volume = 0.4;

    function toggleMusic() {
        if (isPlaying) {
            audio.pause();
            btn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        } else {
            audio.play();
            btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        }
        isPlaying = !isPlaying;
    }

    btn.addEventListener('click', toggleMusic);

    // Tentar tocar no primeiro clique na tela
    document.body.addEventListener('click', () => {
        if (!isPlaying) {
            audio.play().then(() => {
                isPlaying = true;
                btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            }).catch(() => {});
        }
    }, { once: true });

    // --- Animação de Fundo Melhorada ---
    const bg = document.getElementById('bg-animation');
    // Ícones misturando enfermagem e formatura/celebração
    const icons = [
        'fa-heart', 
        'fa-user-nurse', 
        'fa-syringe', 
        'fa-stethoscope', 
        'fa-graduation-cap', 
        'fa-star', 
        'fa-certificate',
        'fa-notes-medical'
    ];

    function createIcon() {
        const i = document.createElement('i');
        const iconClass = icons[Math.floor(Math.random() * icons.length)];
        i.classList.add('fa-solid', iconClass, 'floating-icon');
        
        // Posição aleatória horizontal
        i.style.left = Math.random() * 100 + 'vw';
        
        // Tamanhos variados para profundidade (menor = mais longe)
        const size = Math.random() * 25 + 10; // entre 10px e 35px
        i.style.fontSize = size + 'px';
        
        // Se for pequeno, deixa mais transparente (efeito de profundidade)
        if(size < 15) {
            i.style.opacity = 0.15;
            i.style.zIndex = 0;
        } else {
            i.style.opacity = 0.35;
            i.style.zIndex = 1;
        }

        // Velocidade aleatória
        const duration = Math.random() * 15 + 10; // entre 10s e 25s
        i.style.animationDuration = duration + 's';
        
        bg.appendChild(i);

        // Remove do DOM após a animação
        setTimeout(() => i.remove(), duration * 1000);
    }

    // Criar ícones com mais frequência
    setInterval(createIcon, 600);
});