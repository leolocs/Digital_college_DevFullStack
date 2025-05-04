// Peça uma idade com prompt e mostre uma mensagem personalizada com o 
// número, por exemplo: "Você tem 18 anos".

const idade = Number(prompt("Digite sua idade: "))

if(idade < 18){
    alert(`Você é menor de idade!`)
}else if (idade > 18){
    alert (`Você é maior de idade!`)
}