const btn_calcular_tabuada = document.querySelector("#btn_calcular_tabuada")
const btn_calcular_alunos = document.querySelector("#btn_calcular_alunos")

btn_calcular_tabuada.addEventListener("click", (event)=> {
    const number = Number(document.querySelector("#input_number").value)
    const resultado_tabuada = document.querySelector("#resultado_tabuada")

    event.preventDefault()
    resultado_tabuada.innerHTML = ''
    for(let num=1; num<=10; num++){
        resultado_tabuada.innerHTML += `${num} X ${number} = ${num*number} <br>`;
    };
});


btn_calcular_alunos.addEventListener("click", (e)=>{
    e.preventDefault()
    const total_alunos = parseInt(document.querySelector("#total_alunos").value)
    const alunos_presentes = parseInt(document.querySelector("#alunos_presentes").value)
    const resultado_alunos = document.querySelector("#resultado_alunos")

    if(alunos_presentes.value > total_alunos.value){
     resultado_alunos.textContent = `A quantidade de alunos presentes não pode ser maior que o total de alunos!`   
    }else{
        resultado_alunos.innerHTML = `Faltam: ${total_alunos - alunos_presentes} alunos`;
        console.log(`${total_alunos - alunos_presentes}`);
    } 
    
})

function calcEstacionamento (horas){
    if(horas<= 1){
        return 5
    }else{
        return 5 + (horas - 1) * 2
    }
}

alert `O valor a pagar é  de R$ ${calcEstacionamento(horas).toFixed(2)}`