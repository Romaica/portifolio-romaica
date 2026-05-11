// valida o formulário e interação
document.getElementById('formulario_contato').addEventListener('submit', function(event) {
    event.preventDefault(); // adicionado para não carregar a página

    // grava valores na memória para validação
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // valida dados obrigatórios
    if (nome === "" || email === "" || mensagem ===     "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // checa se o e-mail é válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    alert("Mensagem enviada com sucesso! Obrigado pelo contato, " + nome + ". Assim que possivel eu itei te retornar!");
    
    this.reset();
});