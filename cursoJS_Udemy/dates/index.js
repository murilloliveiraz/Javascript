//  const data = new Date();
//  console.log(data)

//  const data = new Date(2019 , 11 , 19 , 12 , 30 , 40);

//  console.log(data);

// const data = new Date(1679092217705);
// console.log(data)
// console.log('Dia', data.getDate());
// console.log('mes', data.getMonth());
// console.log('Hora', data.getHours());
// console.log('Ano', data.getFullYear());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('Mili', data.getMilliseconds());
// console.log('Dia sem', data.getDay());
// console.log(data.toString());
// console.log(Date.now());

function zeroAEsquerda(num){
 return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);