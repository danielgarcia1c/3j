const botoes = document.querySelectorAll(".botao");
console.log(botoes);
for (let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j];this.classList.remove("ativo");
        }
    }
}
