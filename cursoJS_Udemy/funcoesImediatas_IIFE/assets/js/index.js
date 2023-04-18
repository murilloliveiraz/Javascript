//IIFE -> Immediately invoked function expression

(function(idade , peso , altura){

    const sobrenome = 'Oliveira';
    function crianome(nome){
        return nome + " " + sobrenome;
    }

    function falaNome(){
        console.log(crianome('Murillo'));
    }

    falaNome();
    console.log(idade, peso , altura)
} )(17, 63 , 182);

