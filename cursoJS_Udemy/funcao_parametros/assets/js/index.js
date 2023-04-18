function funcao(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total)
} 

funcao('valor', 1 , 2, 3,4 ,5);

//Rest Operator
function conta (operador, acumulador, ...numeros){
    for (let numero of numeros){
        if (operador === "+" ) acumulador += numero;
        if (operador === "-" ) acumulador -= numero;
        if (operador === "*" ) acumulador *= numero;
        if (operador === "/" ) acumulador /= numero;
    }
    console.log(acumulador)
}

conta('/', 1 , 20 , 40 , 70 , 50 , 60);