const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(function(valor){
    return valor*2;
})

console.log(numerosEmDobro);

const pessoas = [
    {nome : 'Maria', idade : 23},
    {nome : 'joão', idade :11},
    {nome : 'pedro', idade :67},
    {nome : 'marcos', idade :78},
    {nome : 'gabriela', idade :22},
    {nome : 'rosana', idade :18}
];

const nomes = pessoas.map(obj => obj.nome);
const idade = pessoas.map(obj => ({idade : obj.idade}));

const comIds= pessoas.map(function(obj,indice){
    const newObj = {...obj};
    newObj.id = indice;
    return newObj; 
})

console.log(pessoas);               