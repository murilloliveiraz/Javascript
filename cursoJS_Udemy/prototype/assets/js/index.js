/*
Javascript é basedao em protótipos para passar propriedades e metódos de um objeto para outro.

Definição de Protótipo
protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produçoes

Todos os objetos tem uma referencia interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro no próprio obejto , primeiro o motor do JS vaiu tentar encontrar esse membro no próprio objeto e depois a cadeia de protótipos é usada até o topo ( null) até encontrar (ou não) tal membro.
 */

// nesse caso na hora de buscar o motor do js vai seguir essa sequencia
// pessoa1 --> Pessoa.prototype --> Object.prototype


function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL : ' + this.nome + " " + this.sobrenome;
}

// pessoa1.Prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto =  function(){
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa ('Murillo', 'O.');
const pessoa2 = new Pessoa ('Julia', 'S.');

const data = new Date();

console.dir(pessoa1);
console.dir(pessoa2);
