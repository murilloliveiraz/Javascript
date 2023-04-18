// function meuEscopo(){
//     const form = document.querySelector('.form');
//     const resultado = document.querySelector('.resultado'); 

//     const pessoas = []; 

//     function recebedorEventoForm(evento){
//         evento.preventDefault();

//         const nome = form.querySelector('.nome');
//         const sobrenome = form.querySelector('.sobrenome');
//         const peso = form.querySelector('.peso');
//         const altura = form.querySelector('.altura');

//         pessoas.push({
//             nome : nome.value ,
//             sobrenome : sobrenome.value ,
//             peso : peso.value ,
//             altura : altura.value});

//             console.log(pessoas);

//             resultado.innerHTML += `<p> ${nome.value}  ${sobrenome.value} ${peso.value} ${altura.value}</p>`    
//     }

//     form.addEventListener('submit' , recebedorEventoForm );
// }

// meuEscopo();


function meuForm(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
     
    function envioFormulario(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura  = form.querySelector('.altura');

        pessoas.push({
            nome : nome.value,
            sobrenome : sobrenome.value,
            peso : peso.value,
            altura : altura.value
        });

        resultado.innerHTML += `<p>o seu nome e ${nome.value} ${sobrenome.value} o seu peso é ${peso.value} e a sua altura é ${altura.value} </p>`

        console.log(pessoas)
    }
  
    form.addEventListener('submit' , envioFormulario);
}

meuForm();
