// Peça um número com prompt e exiba no console.log a tabuada dele de 1 a 5 (usando for). 

const num = Number(prompt("Digite um número: "))

for(let n=1; n<=5; n++){
    console.log(`${num} X ${n} = ${num*n}`)
}