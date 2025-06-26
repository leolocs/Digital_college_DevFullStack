
function soma(){
    resultado.textContent = Number(n1.value) + Number(n2.value)
    sinal.textContent = "+"
}

function sub(){
    resultado.textContent = Number(n1.value) - Number(n2.value)
    sinal.textContent = "-"
}

function multi(){
    resultado.textContent = Number(n1.value) * Number(n2.value)
    sinal.textContent = "*"
}

function divisao(){    
    resultado.textContent = (Number(n1.value) / Number(n2.value)).toFixed(2)
    sinal.textContent = "/"
}