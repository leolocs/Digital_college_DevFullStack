// Funções nativas para usar com listas
// animais.push("Tartaruga")       //adiciona ao fim da lista
// animais.shift()                 // remove do começo
// animais.unshift("coelho")       //adiciona no começo
// animais.[2] = "Hamster"         //altera uma posição especifica
// console.log(animais.length)     // visualiza o tamanho da lista
// console.log(animais[1])         // visualiza um elemento em uma posição especifica
// console.log(animais)            // ver toda a lista.

// Função adicionar Item
const item_q1 = document.querySelector("#item_q1");

let listaVerduras = ["Arroz", "Feijão"];
resposta_q1.textContent = listaVerduras;

function adicionarItem(){
    listaVerduras.push(item_q1.value);
    console.log(listaVerduras)
    resposta_q1.textContent = listaVerduras;
}

const item_q2 = document.querySelector("#item_q2")

let filaDeImpressao = ['doc1.pdf', 'doc2.pdf', 'relatorio.xls']
item_q2.textContent = filaDeImpressao;

function removerItem(){
    filaDeImpressao.pop()
    console.log(filaDeImpressao);
    item_q2.textContent = filaDeImpressao;
}

const fila_espera = document.querySelector("#fila_espera")
let lista_fila_espera = ['Maria', 'João', 'Ana'];

function removerPrimeiro(){
    lista_fila_espera.shift();
    fila_espera.textContent = lista_fila_espera;
}