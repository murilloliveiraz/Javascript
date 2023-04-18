 const numero = Number(prompt('Digite um numero :'));

 const numeroTitulo = document.getElementById('numero-titulo');
 
 const texto = document.getElementById('div-texto');

 numeroTitulo.innerHTML = numero;
 texto.innerHTML = `<p>seu numero  menos 2 é ${numero - 2} <br>
  O ${numero} é inteiro : ${Number.isInteger(numero)} <br>
 arredonda pra baixo : ${Math.floor(numero)} <br> 
 arredonda pra cima : ${Math.ceil(numero)} <br> 
 É NaN : ${Number.isNaN(numero)}
 apenas 2 casas decimais: ${numero.toFixed(2)} </p> 
 
 `
