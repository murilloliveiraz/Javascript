var x = 0;

var myTimer = setTimeout(function(){
   console.log("o x é 0");
} ,100 );

x=5;

if(x>0) {
   clearTimeout(myTimer);
   console.log("ox passou de 0");
}

var myInterval = setInterval( function(){
   console.log("imprimindo intervalo");
},500);

setTimeout(function(){
   console.log("nao repetir mais");
   clearInterval(myInterval);
} , 1501)