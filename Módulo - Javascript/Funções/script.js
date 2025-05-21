
// ########## Estrutura de uma função ##########
// function nomeDaFuncao (parametro){

// }

//Função com parâmetro

const nome = prompt("Qual seu nome? ")
const n1 = Number(prompt("Digite o primeiro número:"))
const n2 = Number(prompt("Digite o segundo número:"))


function saudacao (nome){
    alert(`Olá ${nome}`)
}

cumprimentar("João")

//Funções retornando valores
function somar (n1,n2){
    const soma = n1 + n2
    alert(soma)
}

somar(10, 5)

function subtrair (n1,n2){
    const resultado = n1 - n2
    return resultado
}

// Arrow function

