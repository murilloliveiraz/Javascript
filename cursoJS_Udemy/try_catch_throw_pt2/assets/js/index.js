try {
  console.log('abri o arquivo');
  console.log('manipulei o arquivo');
  console.log('fechei o arquivo');
  
  try {
    console.log('mais um try')
    console.log(a)
  } catch(e){
    console.log('erro no try 2')
  } finally{
    console.log('mais um fiunaly')
  }
} catch(e){
  console.log('houve algum erro');
} finally {
  console.log('Finally : fim do processo')
}