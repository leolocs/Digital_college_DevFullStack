const calcular_horas_btn = document.querySelector('#calcular_horas_btn')
const classificar_tarefa_btn = document.querySelector('#classificar_tarefa_btn')

calcular_horas_btn.addEventListener('click', (e)=> {
    e.preventDefault();
    const horasTrabalhadas = Number(document.querySelector('#inputhorasTrabalhadas').value);
    const Valorhora = Number(document.querySelector('#inputValorhora').value);
    const resultadoCalculoHoras = document.querySelector('#resultadoCalculoHoras');

    // resultadoCalculoHoras = '';
    const total = Valorhora * horasTrabalhadas
    if(total >= 2000){
        resultadoCalculoHoras.textContent = 'Parabéns pelas horas trabalhadas!';
    }else if(total <= 0){
        resultadoCalculoHoras.textContent = 'Horas Inválidas!'
    }else if(Valorhora <=0 ){
        resultadoCalculoHoras.textContent = 'Valor hora inválida'
    }else{
        resultadoCalculoHoras.textContent = `O valor total das suas horas de trabalho foram: R$${total}`
    }
})


classificar_tarefa_btn.addEventListener ('click', (e)=>{
    e.preventDefault();
    const atividade = document.querySelector('#atividade').value;
    const prioridade = document.querySelector('#prioridade').value;
    const resultado_tarefa = document.querySelector('#resultado_tarefa');

    resultado_tarefa.textContent = '';

    switch (prioridade){
        case "1":
            resultado_tarefa.textContent = `A atividade ${atividade} é urgente!`
            break
        case "2":
            resultado_tarefa.textContent = `A atividade ${atividade} é importante!`
            break
        case "3":
            resultado_tarefa.textContent = `A atividade ${atividade} é opcional!`
            break
    }

    console.log(resultado_tarefa.textContent)
})


lista.splice()