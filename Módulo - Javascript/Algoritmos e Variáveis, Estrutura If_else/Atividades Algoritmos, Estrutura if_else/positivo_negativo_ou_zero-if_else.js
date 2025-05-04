// Peça um número com prompt e diga se ele é positivo, negativo ou zero.

while(true){
    const input = (prompt("Digite um número: "));

    if(input === null){
        alert("Operação cancelada!");
        break;
    }

    const numero = Number(input);
    if (isNaN(numero)){
        alert("Digite um número válido!");
        continue;
    }

    if(numero === 0){
        alert("Esse número é zero!")
    }else if(numero > 0){
        alert("Esse número é positivo!")
    }else{
        alert("Esse número é negativo!")
    }
}
