let pessoa = {
    nome : "murillo",
    idade : 17,
    falar : function(){
        console.log("É um prazer ve-lo "+  this.nome);
    },
    soma : function(a , b) {
        return a + b;
    }
}

console.log  (pessoa.nome);

pessoa.falar();

var soma = pessoa.soma(5 , 7);

console.log (soma);