// Peça um número com prompt e use um while para exibir a contagem regressiva até 0.

let num = Number(prompt("Digite um número para contagem: "))

if(isNaN(num) || (num <= 0)){
    alert("Digite um numero válido e maior que zero!")
}else{
    while(num >= 0){
        console.log(`${num}`)
        num--;
    }

    console.log("Contagem encerrada!")
}
