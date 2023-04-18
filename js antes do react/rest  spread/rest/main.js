// function soma (...numeros) {
//     return numeros.reduce((num , total) => num + total)
// }

// console.log(soma(1,2,3,4,5,6));

function showCar(carroVelho , ...carroNovo){
    console.log(carroVelho , carroNovo);
};

showCar ("celta" , "lamborghini" , 'ferrari' , 'mustang')