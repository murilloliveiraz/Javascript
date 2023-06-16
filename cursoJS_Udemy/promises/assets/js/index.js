function rand(min,max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}


function wait(msg, tempo){
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('Erro durante o processo');
    
    setTimeout(()=>{
      resolve(msg);
    }, tempo);
  });
}

wait('Conexao com o BD', rand(1,3))
  .then(resposta => {
    console.log(resposta);
    return wait('Buscando os dados na BD', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return wait('Os dados foram encontrados na BD', rand(1, 3));
  })
  .then( resposta =>{
    console.log(resposta);
    return wait(22222, rand(1, 3));
  })
  .then(resposta =>{
    console.log(resposta)
  })
  .then(() => {
    console.log('exibe os dados da BD');
  })
  .catch(e => {
    console.log('ERRO : ', e);
  })
  