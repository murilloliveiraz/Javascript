function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-br', {
    hour12:false
  });
}

// function funcaoDoInterval(){
//   console.log(mostraHora());
// }

// setInterval(funcaoDoInterval, 1000);

const time =  setInterval( function(){
  console.log(mostraHora());
}, 1000);

setTimeout(function(){
  clearInterval(time);
}, 5000);