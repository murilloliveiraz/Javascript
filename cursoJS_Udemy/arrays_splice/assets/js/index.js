const nomes = ['Maria' , 'joão', 'Gustavo', 'Mateus', 'Gabriel'];

const removidos1 = nomes.splice(4,1);
console.log(nomes , removidos)


unshift
nomes.splice(0,0,'Murillo', 'John');
console.log(nomes)

//pop
const removidos = nomes.splice(-1,1);
console.log(nomes)
console.log(removidos)

shift
const remocao = nomes.splice(0,1);
console.log(remocao)