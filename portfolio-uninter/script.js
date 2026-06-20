// Aguarda o carregamento do DOM antes de executar
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    form.addEventListener("submit", function(event) {
        // Evita o recarregamento padrão da página ao enviar o formulário
        event.preventDefault();

        // Captura dos valores dos inputs
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Oculta feedback anterior
        feedback.classList.add("hidden");
        feedback.className = "form-feedback hidden";

        // 1. Validação de Campos Vazios
        if (nome === "" || email === "" || mensagem === "") {
            feedback.textContent = "Por favor, preencha todos os campos obrigatórios.";
            feedback.classList.remove("hidden");
            feedback.classList.add("error");
            return;
        }

        // 2. Validação de Formato de E-mail (Regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            feedback.textContent = "Por favor, insira um endereço de e-mail válido.";
            feedback.classList.remove("hidden");
            feedback.classList.add("error");
            return;
        }

        // 3. Simulação de Envio de Sucesso
        feedback.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
        feedback.classList.remove("hidden");
        feedback.classList.add("success");

        // Limpa os campos do formulário após o sucesso
        form.reset();
    });
});