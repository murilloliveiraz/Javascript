var el = document.createElement("h1");

el.classList = "testando-classe";

var texto = document.createTextNode("novo titulo :)");

el.appendChild(texto);

console.log(el)

var title = document.querySelector("#title");

var body = title.parentNode;

body.replaceChild(el , title);