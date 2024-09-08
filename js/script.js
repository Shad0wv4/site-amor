// Seleciona os elementos do DOM
const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');
const loading = document.getElementById('loading');

// Dados de login corretos
let emailCorreto = "Alana@gmail.com";
let senhaCorreta = "12345";

// Função de login
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === emailCorreto && senha === senhaCorreta) {
        errorMessage.style.display = 'none'; // Esconde a mensagem de erro
        loading.style.display = 'block'; // Mostra a mensagem de "Carregando..."

        setTimeout(() => {
            window.location.href = 'home.html';
        }, 2000); // Redireciona após 2 segundos
    } else {
        errorMessage.textContent = "Erro de login, coloque o user correto";
        errorMessage.style.display = 'block';
    }
});

// Adiciona a animação de fade-in quando a página carregar
window.addEventListener('load', () => {
    const container = document.querySelector('.container');
    container.classList.add('fade-in'); // Adiciona a classe que ativa a animação
});

// Sistema de "Esqueceu a senha"
document.querySelector('.forgot-password').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Pergunta o nome completo
    const nomeCompleto = prompt("Qual o nome completo da Alana?");
    if (nomeCompleto !== "Alana Christieny dos santos") {
        alert("Resposta incorreta. Tente novamente.");
        return;
    }

    // Pergunta o tempo juntos
    const tempoJuntos = prompt("Há quanto tempo estamos juntos?");
    if (tempoJuntos !== "9 meses") {
        alert("Resposta incorreta. Tente novamente.");
        return;
    }

    // Se as respostas estiverem corretas, pede para redefinir a senha
    const novaSenha = prompt("Escreva a nova senha");
    if (novaSenha) {
        senhaCorreta = novaSenha; // Atualiza a senha
        alert("Senha redefinida com sucesso!");
    } else {
        alert("A redefinição da senha foi cancelada.");
    }
});
