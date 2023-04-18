// function Produto (nome , preco , estoque){
//     this.nome = nome;
//     this.preco = preco;

//     Object.defineProperty(this , 'estoque', {
//         enumerable : true, //mostra a chave
//         value : estoque, //valor
//         writable : false, //pode ser alterado
//         configurable : false // pode ser configurado
//     });
// }

// const p1 = new Produto ('Camiseta', 49 , 8);
// p1.estoque = 299292;
// console.log(p1)


function Produto (nome , preco , estoque){

    Object.defineProperty(this , 'estoque', {
        enumerable : true, //mostra a chave
        value : estoque, //valor
        writable : false, //pode ser alterado
        configurable : false // pode ser configurado
    });

    // Object.defineProperties(this , {
    //     nome : {
    //     enumerable : true,
    //     value : nome, 
    //     writable : true,
    //     configurable : false 
    //     },

    //     preco : {
    //         enumerable : true,
    //         value : preco, 
    //         writable : true,
    //         configurable : false 
    //         },
    // });
}

const p1 = new Produto ('Camiseta', 49 , 8);
p1.estoque = 299292;
console.log(p1)