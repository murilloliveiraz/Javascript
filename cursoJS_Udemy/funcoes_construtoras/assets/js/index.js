function Pessoa(nome , sobrenome){
    const ID = 123456;
    const metodoInterno = function(){};

    this.nome = nome;
    this.sobrenome= sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um metodo interno');
    };
}

const p1 = new Pessoa("David", "Murillo");
const p2 = new Pessoa ('Gustavo', 'Soares');
p2.metodo();
p1.metodo();