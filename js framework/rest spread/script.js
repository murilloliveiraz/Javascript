function showList(empresa , ...clientes) {
    console.log(empresa)
    console.log(clientes)
}

showList("carrefour" , 'mjurillo' , 'achraf' , 'hakimi')


const numeros = [1,2,56,79,43,5,2];

console.log(Math.max(...numeros));

const itens = document.querySelectorAll("li");

[...itens].map(item => {
    console.log(item);
});

console.log(itens);


const carro = {cor:"azul" , portas:4, ano:2020};

const cloneCarro2 = carro;

// console.log(cloneCarro2)

// console.log(carro)

const cloneCarro = {...carro , turbo:true};

// console.log(cloneCarro)

class Transporte {
    constructor(){
        this.terrestre = true;
    }
    andar (){
        console.log("andou")
    }
}

class Carro extends Transporte {
    constructor( cor , portas){
        super();
        this.cor = cor;
        this.portas = portas;
    }
}

const carroclass = new Carro ("red" , 4);

const cloneCarroclass = {...carroclass};

console.log(carroclass);
console.log(cloneCarroclass)