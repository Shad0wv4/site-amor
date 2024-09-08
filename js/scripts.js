function criarExplosaoDeEmojis() {
    const container = document.getElementById('emoji-container');
    const emojiCount = 100;
    const emojis = Array.from({ length: emojiCount }, () => '💜💙');
    
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

function redirectTo9Meses() {
    window.location.href = '../html.botoes/9meses.html'; // Caminho da página para 9 Meses
  }

  function redirectToFeliz() {
    window.location.href = '../html.botoes/feliz.html'; // Caminho da página para Feliz
  }
  function redirectToTriste() {
    window.location.href = '../html.botoes/triste.html'; // Caminho da página para Feliz
  }
  function redirectToAnxious() {
    window.location.href = '../html.botoes/ansiosa.html'; // Caminho da página para Feliz
  }
  function redirectToPreciso() {
    window.location.href = 'https://wa.me/5514997444626?text=Preciso%20de%20você%20meu%20amor!'; // Caminho da página para Feliz
  }
  
  function redirectToSaudade() {
    window.location.href = '../html.botoes/saudades.html'; // Caminho da página para Feliz
  }