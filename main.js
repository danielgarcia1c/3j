const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const tempo = document.querySelectorAll(".contador");
tempo[0].textContent="Ola"
const tempoObjetivo1 = new Date(2024,8,4);
const tempoObjetivo2 = new Date(2024,8,8);
const tempoObjetivo3 = new Date(2025,2,30);
const tempoObjetivo4 = new Date(2025,0,4);
const agora = new Date()
console
console.log(tempo);
for(let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function(){
        for (let j = 0 ; j < botoes.length ; j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}