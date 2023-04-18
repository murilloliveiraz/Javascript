/*
&& AND -> false && true -> 
|| OR -> 
! NOT ->

===============================================

FALSY > vai retronar FALSO
false
0 (zero)
'' , "" , ``
null , undefined
NaN

=========================================

// console.log('luiz otavio '&& null && 'maria '); //retorna o valor falsy

*/

// function oi(){
//     return 'oi';
// }

// let nome = 'murillo' ;

// console.log( nome && oi());


const corUser = null;

const corPadrao = corUser || 'preto';

console.log(corPadrao)  