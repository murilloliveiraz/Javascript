const paragrafos = document.querySelector('.paragrafos');

const p = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);

const backgroundColor = estilosBody.backgroundColor;



console.log(backgroundColor)

for (let i of p) {
     i.style.backgroundColor = backgroundColor;
     i.style.color = '#FFF';
}