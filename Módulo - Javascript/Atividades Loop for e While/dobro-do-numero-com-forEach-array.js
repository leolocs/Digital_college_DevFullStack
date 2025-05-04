// Crie um array com 5 números e use forEach para exibir o dobro de cada um.

const lista_num = []

for(let i=1;i<=5;i++){
    const input = prompt(`Digite o ${i} número ou cancele para sair: `);

    if(input === null){
        alert("Operação cancelada!")
        break;
    }
    const num = Number(input);

    if(isNaN(num)){
        alert("Digite um número válido")
        i--;
        continue;
    }else{
        //Dobra número
        lista_num.push(num**2);
    }
}

console.log(lista_num)