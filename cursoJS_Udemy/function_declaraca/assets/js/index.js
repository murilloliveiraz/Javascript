// O JavaScript usa o padrão de hoisting então esmo que  vocÊ chame a função antes de declarar ela, não vai sar erro pq ele vai elevar ela até em cima

falaOi();

function falaOi(){
    console.log('oi');
}


//First Class objects ( Objetso de primeira classe)
// Function expression

const souUmDado = function(){
    console.log('sou um dado')
}

souUmDado()

// chmara funções dentro de outras funções 

function chamaFuncao (funcao){
    console.log('vou executar sua função')
    funcao();
}
chamaFuncao(souUmDado);

//ARROW FUNCTIONS

const funcaoArrow = () => {
    console.log('sou uma arrow function')
} 
funcaoArrow();

//DENTRO DE UM OBJETO
const obj = {
    falar () {
        console.log('oii')
    }
}

obj.falar();