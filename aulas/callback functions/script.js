function exibir (num){
    console.log("a operacao resultou em :"+num);
 }

 
 function soma (a , b , callback){
    var s = a+b;
    callback(s);
 }

 function multiplicacao (a , b , cb){
    var s = a*b;
    cb(s);
 }

 soma(2,2 ,exibir);

 multiplicacao(2,5, exibir);
