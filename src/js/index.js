document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll(".botao");
    const personagens = document.querySelectorAll(".personagem");

    botoes.forEach((botao, index) => {
        botao.addEventListener("click", () => {
            const botaoSelecionado = document.querySelector(".botao.selecionado");
            if (botaoSelecionado) {
                botaoSelecionado.classList.remove("selecionado");
            }
            
            botao.classList.add("selecionado");

            const personagemSelecionado = document.querySelector(".personagem.selecionado");
            if (personagemSelecionado) {
                personagemSelecionado.classList.remove("selecionado");
            }
            
            personagens[index].classList.add("selecionado");
        });
    });
});
