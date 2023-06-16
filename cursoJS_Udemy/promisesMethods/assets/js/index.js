function rand(min,max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, tempo){
  return new Promise((resolve, reject) => {
    
    setTimeout(()=>{
      if(typeof msg !== 'string') {
        reject('Erro durante o processo'); 
      return;
    }

      resolve(msg.toUpperCase() + '- passei pela promise');
    }, tempo);
  });
}

const promises = [
  wait('Promise 1', rand(1,3)),
  wait('Promise 2', rand(1,3)),
  wait('Promise 3', rand(1,3)),
];


// ============ ALL ====================
Promise.all(promises)
  .then( valor => {
    console.log(valor);
  })
  .catch(function(erro){
    console.log('ERRO', erro)
  })

// ============RACE ====================
Promise.race(promises)
  .then( valor => {
    console.log(valor);
  })
  .catch(function(erro){
    console.log('ERRO', erro)
  })

 function baixaPagina (){
  const emCache = true;

  if(emCache){
    return Promise.reject('Página em cache');
  } else {
    return wait('Pagina foi baixada', rand(1,3))
  }
}


baixaPagina()
  .then(dadosPagina =>{
    console.log(dadosPagina)
  })
  .catch(e => console.log('ERRO', e));