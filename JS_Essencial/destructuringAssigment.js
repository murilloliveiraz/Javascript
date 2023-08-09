const pessoa = {
    nome: 'Murillo',
    sobrenome: 'Oliveira',
    idade: 18,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//atribuiucap via desestruturacao
const { nome, sobrenome, ...resto} = pessoa;
console.log(nome, resto);

// voce pode acessar a chave e desestruturar ela atribuindo outro nome de variavel nao necessariomente o usado no objeto
const {
    endereco: { rua: r = 12345, numero}, endereco
} = pessoa;
console.log(r, numero, endereco);