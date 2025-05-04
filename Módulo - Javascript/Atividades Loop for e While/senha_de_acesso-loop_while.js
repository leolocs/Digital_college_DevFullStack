// Crie um loop com while que peça ao usuário uma senha até ele digitar "1234".

const senha_correta = 1234;
let senha_user = '';

while(senha_correta !== senha_user){
    let senha_user = Number(prompt("Digite uma senha: "));

    if(senha_user === null){
        alert("Operação cancelada!");
        break;
    }

    if(senha_correta === senha_user){
        alert("Senha correta, acesso liberado!")
    }else{
        alert("Senha incorreta, tente novamente!")
    }
}
