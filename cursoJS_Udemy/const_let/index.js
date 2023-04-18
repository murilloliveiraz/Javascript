const nome = 'David Murillo ';
const sobrenome = 'de Oliveira Soares';
const idade = 17;
const peso = 63;
const altura = 1.80;
let imc = peso/(altura*altura);
let anoDeNascimento = 2023 - idade;

console.log(` Olá ${nome} que bom te ver !`)
console.log(`a sua idade é ${idade}  e o seu ano de nascimento é ${anoDeNascimento} , voce pesa ${peso} e o seu IMC é ${imc}`)