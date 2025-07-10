// 1. Crie uma variável nome com o valor "Carlos" e outra idade com o valor 25. 
// Use if/else para verificar se idade é maior ou igual a 18. 
// Se sim, exiba "Maior de idade", senão "Menor de idade".

const nome = "carlos"
const idade = 16
if(idade < 18){
    console.log("Usuário menor de idade!")
}else{
    console.log("Usuário maior de idade!")
}

// 2.Crie um array frutas com 4 frutas. Use o método .push() para adicionar mais uma fruta e depois exiba o array com console.log().
 const frutas = ["maçã", "morango", "laranja", "abacaxi"]
 frutas.push("banana")
 console.log(frutas)

// 3. Crie uma função que receba uma string e retorne o tamanho dessa string.
function tamanhoPalavra(texto){
    return texto.length
}
console.log()

const palavra = "jurubeba"
console.log(palavra.length)

// 4.Crie um objeto aluno com as propriedades: nome, idade e aprovado. Altere o valor de aprovado para true e exiba o objeto.
aluno = {
    nome: "aluno",
    idade: 17,
    aprovado: false
}
aluno.aprovado = true

console.log(aluno)

// 5. Crie um array com objetos representando produtos: cada objeto deve ter nome e preco. 
// Use .filter() para retornar apenas os produtos com preço acima de 50.
produtos_infor = [
    { nome: "teclado", preco: 120.50 },
    { nome:"mouse", preco: 42.40},
    { nome:"monitor", preco: 950.49},
    { nome:"processador", preco: 1450.45},
    { nome:"GPU RTX 4060", preco: 2300.49}
]

const produtos_acima_50 = produtos_infor.filter((produto) => {
    return produto.preco > 50;
})

// 6. Dado o array [10, 20, 30, 40, 50], use .map() para criar um novo array com todos os valores multiplicados por 2.
const multiplos_10 = [10, 20, 30, 40, 50]

let multiplos_10x2 = multiplos_10.map((num)=>{
    return num*2;
})
console.log(multiplos_10x2)

// 7. Crie uma função que receba dois números e retorne true se ambos forem pares, ou false caso contrário.

function retornaPares(n1,n2){
    return n1 %2 === 0 && n2 === 0;
}
console.log(retornaPares(2,6));
console.log(retornaPares(4,7));

// 8. Crie um array com nomes de 5 pessoas.
// Verifique se o nome “João” está presente usando .includes() e exiba o resultado.
const pessoas = ["Amanda", "João", "Geovane","Pedro", "Leonardo", "Hana"];

const incluiJoão = pessoas.includes("João")
const incluiJulio = pessoas.includes("Julio")
// 9. Crie uma função que receba um array de números e retorne true se todos forem maiores que 10 usando .every().

function maioresde10(array){
    return array.every((item) => {
        return item > 10;
    });
}
console.log(numeros([10,4,50,32,25]))
console.log(numeros([42,7,23,15,30]))

// 10. Crie um objeto carro com modelo, marca e ano. Crie uma função que receba esse objeto como parâmetro e retorne uma string com todos os dados formatados.
const carro = {
    modelo : "458 italia",
    marca : "Ferrari",
    ano : 2015,
};

function descricaoCarro(carro){
    return `Modelo: ${carro.modelo}, Marca: ${carro.marca}, Ano: ${carro.ano}`
}

// 11. Crie um array de objetos com alunos (nome e nota). Use .forEach() para exibir o nome e se a nota é maior ou menor que 7 usando if/else.
const alunos = [
    {nome: "Flávio", nota: 3},
    {nome: "Jurandi", nota: 8},
    {nome: "Sara", nota: 5},
    {nome: "Fernand", nota: 9}
]

// 12. Crie uma função que receba uma idade e retorne:
// 	•	“Criança” se menor que 12
// 	•	“Adolescente” se entre 12 e 17
// 	•	“Adulto” se 18 ou mais

function classificaIdade(idade){
    if(idade < 12){
        return "Criança"
    }else if (idade >= 12 && idade < 18){
        return "Adolescente"
    }else{
        return "Adulto"
    }
}

console.log(classificaIdade(10));
console.log(classificaIdade(22));
console.log(classificaIdade(15));

// 13. Crie um array com 5 números e remova o primeiro e o último elemento usando shift() e pop(). Exiba o array final.
const numeros5 = [1,2,3,4,5]

numeros5.shift();
numeros5.pop();
console.log(numeros5);

// 14. Crie um array com 6 números. Use .find() para encontrar o primeiro número maior que 30.
const numeros6 = [12,25,32,40,9,35,64,52]

const maior30 = numeros6.find((n)=>{
    return n > 30;
});
console.log(maior30);

// 15. Crie um array de objetos representando tarefas (descricao e concluida: true/false). 
// Use .some() para verificar se alguma tarefa foi concluída.

const tarefas = [
    {descricao: "lavar louça", concluido: false}
    {descricao: "Estudar JS", concluido: true}
    {descricao: "treinar", concluido: false}
];

const tarefa_concluida = tarefas.some((tarefa)=>{
    return tarefa.concluido;
})

console.log(tarefa_concluida);