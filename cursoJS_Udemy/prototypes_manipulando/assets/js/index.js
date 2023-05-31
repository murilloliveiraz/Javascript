//quando voce cria um objeto ele automaticamente ja cria o protype
//new Object -> Object.protoype


const objA =  {
    chaveA: 'A',
    // __proto__ : Object.Protoype
};

const objB = {
    chaveB : 'B',
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC,objA);

// nao use __proto__ use getPrototypeOf()

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100));
}


const p1 = new Produto('Camiseta' , 50);
p1.aumento(100); 
console.log(p1);

//literal
const p2 = {
    nome : 'Caneca',
    preco : 15
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

console.log(p1);
console.log(p2);


const p3 = Object.create(Produto.prototype, {
   preco: {
    writable: true,
    enumerable : true,
    configurable : true,
    value : 90
   } ,
   tamanho : {
    writable: true,
    enumerable : true,
    configurable : true,
    value : 23
   },
});

p3.aumento(10);
console.log(p3);

const p4 = Object.create(Produto.prototype);
p4.preco = 113;
p4.aumento(10);
console.log(p4);