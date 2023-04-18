// For classico é geralmente usado para iteraveis (arrays ou strings)

// For In é retorna o indice ou chave

// For of retorna o valor em si (iteraveis , arrays ou strings)


const frutas = ['Pera' , 'Maça' , 'Uva'];

for (let i in frutas){
    console.log(i);
}

//Le os indices(arrays) ou chaves(objetos)

const pessoa = {
    nome: 'Luiz',
    sobrenome : 'Otavio',
    idade : 16 
};

for (let chave in pessoa){
    console.log(chave , pessoa[chave]);
}
// o For In obtem o indice e o valor

console.log('=======================')

for (let i of frutas){
    console.log(i)
}

// o for Of obtem apenas o valor

console.log('=======================')

frutas.forEach(function(el,i , array){
    console.log(el ,i , array);
});