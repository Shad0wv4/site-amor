// Data de início: 09/12/2023
const startDate = new Date("2023-12-09T00:00:00");

// Função para atualizar o contador
function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    // Calcular diferença em dias, horas e minutos
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    // Atualizar o conteúdo no HTML
    document.getElementById("days").textContent = `${days}D`;
    document.getElementById("hours").textContent = `${hours}H`;
    document.getElementById("minutes").textContent = `${minutes}M`;
}

// Atualizar o contador a cada segundo
setInterval(updateCounter, 1000);

// Função para tocar ou pausar a música
// Função para tocar ou pausar a música e criar emojis
function playMusic() {
    const music = document.getElementById("myMusic");
    const button = document.getElementById("playButton");
    const emojiContainer = document.getElementById("emojiContainer");

    if (music.paused) {
        music.play();
        button.textContent = "Pausar música";
    } else {
        music.pause();
        button.textContent = "💜 Nossa música";
    }

    // Criar emojis de notas musicais 🎵
    createMusicEmojis(emojiContainer);
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


// Função que adiciona a classe 'fade-in-up' a todos os elementos com a classe 'fade-in-up'
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os elementos que possuem a classe 'fade-in-up'
    const elements = document.querySelectorAll('.fade-in-up');
    
    // Adiciona a classe 'fade-in-up' em cada elemento após o carregamento da página
    elements.forEach(element => {
        element.classList.add('fade-in-up');
    });
});

function criarExplosaoDeEmojis() {
    const container = document.getElementById('emoji-container');
    const emojiCount = 100;
    const emojis = Array.from({ length: emojiCount }, () => '🎉❤');
    
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