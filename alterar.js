const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
}

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "123456789";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa.nome);

const novaPessoa = {
nome: "Pedro",
};

pessoa = novaPessoa;