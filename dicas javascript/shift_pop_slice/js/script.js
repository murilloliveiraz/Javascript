//pop - fim do array

let arr = [1,2,3,4,5];
console.log(arr);

let teste = arr.pop();
console.log(teste);
console.log(arr);

//shift - começo do array

let nomes = ['mateus' , 'murillo' , 'gustavo'];
let nome = nomes.shift();

console.log(nomes);
console.log(nome);

//slice - remove de acordo com o indice
let numbers = [1,2,3,4,5];

let number = numbers.splice(0,1);

console.log(numbers);
console.log(number);