const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = numeros.reduce(function(acumulador,valor){
//     acumulador+= valor;
//     return acumulador;
// },0);

// const total = numeros.reduce(function(acumulador,valor){
//     if(valor%2===0) acumulador.push(valor);
//         return acumulador;
// }, []);

const total = numeros.reduce(function(acumulador,valor){
   acumulador.push(valor*2);
   return acumulador;
},[]);

console.log(total)
















const pessoas = [
    {nome : 'Maria', idade : 23},
    {nome : 'joão', idade :11},
    {nome : 'pedro', idade :67},
    {nome : 'marcos', idade :78},
    {nome : 'gabriela', idade :22},
    {nome : 'rosana', idade :18}
];

const maisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);