
function criarExplosaoDeEmojis() {
    const container = document.getElementById('emoji-container');
    const emojiCount = 100;
    const emojis = Array.from({ length: emojiCount }, () => '✨');
    
    emojis.forEach((emoji) => {
        const span = document.createElement('span');
        span.textContent = emoji;
        span.className = 'emoji';
        span.style.left = `${Math.random() * 100}vw`;
        span.style.top = `${Math.random() * 100}vh`;
        span.style.fontSize = `${Math.random() * 30 + 20}px`;
        container.appendChild(span);

        // Remover os emojis após a animação
        span.addEventListener('animationend', () => {
            span.remove();
        });
    });
}

// Dispara a explosão de emojis quando a página carrega
window.addEventListener('load', () => {
    criarExplosaoDeEmojis();
});

function playMusic() {
    const music = document.getElementById("myMusic");
    const button = document.getElementById("playButton");
    const emojiContainer = document.getElementById("emojiContainer");

    if (music.paused) {
        music.play();
        button.textContent = "Pausar música";
    } else {
        music.pause();
        button.textContent = "💛música feliz";
    }

}

// Função para criar e animar os emojis de notas musicais
function createMusicEmojis(container) {
    // Gerar entre 3 a 5 emojis
    const emojiCount = Math.floor(Math.random() * 3) + 3;
    
    for (let i = 0; i < emojiCount; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = '🎵';
        
        // Posicionar o emoji em uma posição aleatória em torno do botão
        const randomX = Math.random() * 100 - 50; // Posição X aleatória (-50 a 50 px)
        const randomY = Math.random() * 20 - 10; // Posição Y aleatória (-10 a 10 px)
        emoji.style.left = `${randomX}px`;
        emoji.style.top = `${randomY}px`;

        // Adicionar o emoji ao container
        container.appendChild(emoji);

        // Remover o emoji após a animação (1s)
        setTimeout(() => {
            emoji.remove();
        }, 1000);
    }
}

// Adicionar evento de clique ao botão para tocar/pausar a música e criar emojis
document.getElementById("playButton").addEventListener("click", playMusic);