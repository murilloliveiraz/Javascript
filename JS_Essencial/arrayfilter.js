const numbers = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 22, 27];
const filteredNumbers = numbers.filter(value => value > 10);
console.log(filteredNumbers);

const clients = [
    {nome: 'Luiz', idade: 30},
    {nome: 'Maria', idade: 22},
    {nome: 'Sonia', idade: 98},
    {nome: 'Rosi', idade: 43},
    {nome: 'João', idade: 15}
];

const bigNames = clients.filter(obj => obj.nome.length >= 5);
console.log(bigNames);

const moreThan50yearsOld = clients.filter(obj => obj.idade >= 50);
console.log(moreThan50yearsOld);

const nameEndsWithA = clients.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nameEndsWithA);