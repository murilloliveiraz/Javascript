// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados);

const pessoas = [
    {nome : 'Maria', idade : 23},
    {nome : 'joão', idade :11},
    {nome : 'pedro', idade :67},
    {nome : 'marcos', idade :78},
    {nome : 'gabriela', idade :22},
    {nome : 'rosana', idade :18}
];

const pessoasComNomesGrandes = pessoas.filter(obj => obj.nome.length >= 5);

const idosos =  pessoas.filter(obj => obj.idade >= 50)

const pesoasNomeA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))

console.log(idosos)
console.log(pessoasComNomesGrandes);

console.log(pesoasNomeA)