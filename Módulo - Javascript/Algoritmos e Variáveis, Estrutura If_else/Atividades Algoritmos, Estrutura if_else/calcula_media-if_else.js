// Peça três notas com prompt, calcule a média e diga se o aluno foi aprovado (média ≥ 7). Use Number() e if 

const n1 = Number(prompt("Digite a nota 1: "))
const n2 = Number(prompt("Digite a nota 2: "))
const n3 = Number(prompt("Digite a nota 3: "))
const media = (n1+n2+n3)/3;

alert(`Média: ${media.toFixed()}`)
if(media < 7){
    alert("Você foi reprovado!")
}else if(media >= 7){
    alert("Você foi aprovado!")
}