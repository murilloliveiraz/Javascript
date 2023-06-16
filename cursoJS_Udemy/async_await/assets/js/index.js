function rand(min = 1,max = 3){
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

async function executa(){
  try{
    const fase1 = await wait('fase 1', rand());
    console.log(fase1);
    
    const fase2 = await wait('fase 2', rand());
    console.log(fase2);
    
    const fase3 = await wait('fase 3', rand());
    console.log(fase3);
    
    console.log('terminamos na ', fase3);
    
  } catch(e){
      console.log(e)
  }
};

executa();


// PENDING
const teste2 = wait('qlq', 1000);
console.log(teste2)

setTimeout(() => {
  console.log(teste2)
}, 2000)