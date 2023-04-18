function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this);
}

const p1 = new Pessoa('Luiz',"Miranda");
const p2 = new Pessoa('David', 'Murillo');
delete p1.nome;

console.log(p1);
console.log(p2);