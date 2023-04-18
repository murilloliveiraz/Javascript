function falaFrase(comeco){
    function falaResto(resto){
        return comeco + " " + resto;
    }

    return falaResto;
}

const f1 = falaFrase('Olá');
const f2 = f1('mundo!');
console.log(f2)

function criaMultiplicador (multiplicador){
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(5));
console.log(quadriplica(10));