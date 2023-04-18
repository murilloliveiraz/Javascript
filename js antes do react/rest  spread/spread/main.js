const firstName = ["julia" , "murillo"];

const secondName = ["gustavo" , 'sara'];

const names = [...firstName , ...secondName];

console.log(names);


const firstNumber = [1,7,5,9];

const secondNumber = [1,2,3,4, ...firstNumber];

console.log(secondNumber);
