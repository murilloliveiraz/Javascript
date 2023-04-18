const nome = window.prompt("Digite seu nome completo : ");

document.body.innerHTML += `Seu nome é ${nome}<br>`;
document.body.innerHTML += `seu nome tem ${nome.length} letras <br>`;

document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]}<br>`;

document.body.innerHTML += `O primeiro indice da letra O no seu nome é ${nome.indexOf('o')}<br>`;

document.body.innerHTML += `O ultimo indice da letra I no seu nome é ${nome.lastIndexOf('i')}<br>`;

document.body.innerHTML += `as ultikas 3 letras do seu nome são ${nome.slice(-3)}<br>`;

document.body.innerHTML += `as palavras do seu nome são ${nome.split(" ")}<br>`;

document.body.innerHTML += `seu nome me letras maiusculas ${nome.toUpperCase()}<br>`;


document.body.innerHTML += `seu nome em letras minusculas ${nome.toLowerCase()}<br>`;