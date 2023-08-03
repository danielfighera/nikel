const nome = "Daniel fighera";
let nome2 ="";
let pessoaDefault = {
    nome: "Daniel Fighera",
    idade: "17",
    trabalho: "Progamador"
}

let nomes =["Marcelo Etlz", "Maria Silva", "João Silva" ];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Daniel Fighera",
        idade: "17",
        trabalho: "Progamador"
    },
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "UX/UI Designer"
    }
];


function alterarNome() {
    nome2 = "Maria silva"
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("-------IMPRIMIR PESSOAS -------");
    pessoas.forEach((item) => {
        console.log("nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
        nome: "Pedro Silva",
        idade: "28",
        trabalho: "Porteiro"
});

imprimirPessoas();



