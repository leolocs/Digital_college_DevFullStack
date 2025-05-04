// Peça um número com prompt e diga com alert se ele é par ou ímpar. Dica: use 
// if (numero % 2 === 0) 
    
const num = Number(prompt("Digite um número: "))

if(num %2 === 0){
    alert(`Número par`)
}else{
    alert(`Número ímpar`)
}