function getTimefromSeconds(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-br',{
        hour12:false,
        timeZone:'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimefromSeconds(segundos);
    }, 1000);
}

document.addEventListener('click' , function(e){
    const el = e.target;

    console.log(el)

    if (el.classList.contains('iniciar')){
        relogio.classList.remove('.pause');
        clearInterval(timer);
        iniciaRelogio();
    }

    if (el.classList.contains('zerar')){
        clearInterval(timer);
        relogio.classList.remove('pause');
        relogio.innerHTML= '00:00:00';
        segundos = 0;
    }


    if (el.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pause');
    }
});

