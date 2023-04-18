function retornaHora(data){
  if (data && !(data instanceof Date)){
    throw new TypeError('Esperando instancia de Date');
  }

  if (!data){
    data = new Date();
  }

  return data.toLocaleTimeString('pt-br', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const date = new Date('02-05-1998 12:34:23');
  const hora = retornaHora(date);
  console.log(hora);
} catch(err){
  console.log('vamos tratar o erro')
} finally{
  console.log('tenha um bom dia ')
}

// const hora = retornaHora();
// console.log(hora)