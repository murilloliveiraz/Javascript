var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("esse é o conteudo do paragrafo");

novoParagrafo.appendChild(texto);

var body = document.querySelector('body');

body.appendChild(novoParagrafo);

var container = document.getElementById("container");

console.log (container);

var p = document.createElement("p");

p.appendChild(document.createTextNode("texto do paragrafo da section"));

console.log (p);

container.appendChild(p);