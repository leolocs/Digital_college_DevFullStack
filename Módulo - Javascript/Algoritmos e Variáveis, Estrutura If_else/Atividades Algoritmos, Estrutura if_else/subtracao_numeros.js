// Solicite dois números e mostre a subtração entre eles com alert

let num1 = Number(prompt("Digite um numero: "))
let num2 = 0;
if (num1 <= 0 ){
    alert((`Digite um número maior que zero!`))
}else{
    num2 = Number(prompt(`Digite outro numero: `))
    if (num2 <= 0 && num2 > num1){
        alert(`Digite um número maior que zero e maior que o primeiro número!`)
    }else{
        let subtração = num1 - num2
        alert(`A subtração dos números é: ${subtração}`)
    }
}