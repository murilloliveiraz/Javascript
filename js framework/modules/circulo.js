import randomNumber from "./random.js";

function area (raio){
    return Math.PI*raio*raio;
}

function circunferencia(raio){
    return 2*raio*Math.PI;
}

function random (){
    return randomNumber;
}


const circulo = {
    area,
    circunferencia,
    random
};

export default circulo;