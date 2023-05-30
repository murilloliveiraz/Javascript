function Produto (nome , preco , estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque; 

    Object.defineProperty(this , 'estoque', {
        enumerable : true, //mostra a chave
        configurable : true, // pode ser configurado
    
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError ('Mensagem de Erro');
            }

            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto ('Camiseta', 49 );
console.log(p1.estoque);
p1.estoque = 12;
console.log(p1);
console.log(p1.estoque);

function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    };
}

const p2 = criaProduto('camisa');
console.log(p2);
p2.nome = 'camiseta';
console.log(p2.nome);
p2.nome = 'camiseta';
console.log(p2);


