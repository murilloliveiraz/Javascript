// const pessoa1 = {
//     nome : 'Murillo',
//     idade : 17 , 
//     sobrenome : 'Oliveira'
// }
// console.log(pessoa1);


//FUNÇÃO QUE CRIA PESSOA
// function criePessoa( nome , sobrenome , idade){
//     return {
//         nome,
//         sobrenome ,
//         idade
//     };
// }
//  const pessoa1 = criePessoa('Murillo' , 'Oliveira' , 17);
//  const pessoa2 = criePessoa('julio' , 'Oliveira' , 17);
//  const pessoa3 = criePessoa('DAvid' , 'Oliveira' , 17);
//  console.log(pessoa1.nome , pessoa2.nome , pessoa3.nome);

//FUNCAO QUE FALA O NOME DA PESSOA COM THIS
// const pessoa1 = {
//     nome : 'Murillo',
//     idade : 17 , 
//     sobrenome : 'Oliveira',

//     fala(){
//         console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
//     }
// }
// pessoa1.fala();

//FUNÇÂO DE IDADE
const pessoa1 = {
    nome : 'Murillo',
    idade : 17 , 
    sobrenome : 'Oliveira',

    fala(){
        console.log(`a minha idade atual é ${this.idade}`)
    } ,

    aniversario(){
        this.idade++;
        // console.log(`minha idade após meu aniversario será de ${this.idade}`);
    }
}
pessoa1.fala();
pessoa1.aniversario();
pessoa1.fala();

