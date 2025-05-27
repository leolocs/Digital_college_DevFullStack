const calcular_horas_btn = document.querySelector('#calcular_horas_btn')

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


