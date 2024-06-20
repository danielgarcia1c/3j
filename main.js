const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const tempo = document.querySelectorAll(".contador");
tempo[0].textContent="Ola"
const tempoObjetivo1 = new Date(2024,8,4);
const tempoObjetivo2 = new Date(2024,8,8);
const tempoObjetivo3 = new Date(2025,2,30);
const tempoObjetivo4 = new Date(2025,4,4);
let segundos;
let minutos;
let horas;
let dias;
const agora = new Date()
segundos = (tempoObjetivo1-agora)/1000
minutos = segundos/60
horas = minutos/60
dias = horas/24
tempo[0].textContent = tempoObjetivo1-agora
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