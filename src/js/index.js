document.addEventListener("DOMContentLoaded", function() {
    const botoes = document.querySelectorAll(".botoes .botao");
    const personagens = document.querySelectorAll(".personagens .personagem");

    botoes.forEach((botao, index) => {
        botao.addEventListener("click", function() {
            botoes.forEach(b => b.classList.remove("selecionado"));
            personagens.forEach(p => p.classList.remove("selecionado"));
            botao.classList.add("selecionado");
            personagens[index].classList.add("selecionado");
        });
    });
});
