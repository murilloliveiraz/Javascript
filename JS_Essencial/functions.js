//Hoisting
falaOi();
function falaOi() {
    console.log('oi');
}

//first-Class-Objects 
//function expression
const souUmdado = function nomedaFuncao() {
    console.log('sou um dado')
};
souUmdado();

function executa(params) {
    params();
}
executa(souUmdado);

const funcaoArrow = () => {
    console.log('sou uma arrow')
}
funcaoArrow();

//inside a object
const object = {
    speak() {
        console.log('i am speaking...')
    }
};

object.speak();