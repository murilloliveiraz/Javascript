//Arrays

let arr =  [1,2,3,4,5];

let [num1,num2,num3,num4,num5] = arr;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);

//objetos
const pessoa = {
    nome : "murillo",
    profissao : "desenvolvedor web",
    idade : 29
}

let {nome:varNome , profissao : varProfissao , idade : varIdade } = pessoa;

console.log(varNome);
console.log(varIdade);
console.log(varProfissao);

//funcoes
function teste(){
    return["teste" , 45];
}

let [varA , varB] = teste();

console.log(varA);
console.log(varB);


//retirar um valor do array

let arrDois = [5,10,15];

const Dois = [,dez,quinze] = arrDois;

console.log(dez);
console.log(quinze);


//strings

let novaString = 'laranja';

let [z,x,y] = novaString;

console.log(z,x,y);


//rest operator
let numeros2 = [1,2,3,4,5,6,7,8,9];

const [um , ...resto] = numeros2;

console.log(um);
console.log(resto);

//tomar cuidado

let obj2 = {
    x : 1,
    y : 2
}

let p , q;

({x:p , y:q} = obj2);

console.log(p);
console.log(q);