// const data = new Date();
// const resultado =  document.querySelector('.container')
// getData(data);

// function getData(data){
//     const diaSemana = data.getDay();
//     const dia = data.getDate();
//     const mes = data.getMonth();
//     const ano = data.getFullYear();
//     const hora= data.getHours();
//     const min = data.getMinutes();
//     const sec = data.getSeconds(); 

//    const titulo = criaTitulo();
//    console.log(titulo);

   
//    const msg = `${diaSem(diaSemana)} , ${dia} de ${getMes(mes)} de ${ano} <br> ${hora}:${min}:${sec}`;
   
//    titulo.innerHTML = msg;
//    resultado.appendChild(titulo);

// }

// function diaSem(diaSemana){
//         let diaSemanaTexto;
//     switch (diaSemana) {
//         case 0:
//          diaSemanaTexto = "Domingo";
//           return diaSemanaTexto;
      
//         case 1:
//           diaSemanaTexto = "Segunda";
//           return diaSemanaTexto;
      
//         case 2:
//           diaSemanaTexto = "Terça";
//           return diaSemanaTexto;
      
//         case 3:
//           diaSemanaTexto = "Quarta";
//           return diaSemanaTexto;
      
//         case 4:
//           diaSemanaTexto = "Quinta";
//           return diaSemanaTexto;
      
//         case 5:
//           diaSemanaTexto = "Sexta";
//           return diaSemanaTexto;
      
//         case 6:
//           diaSemanaTexto = "Sabado";
//           return diaSemanaTexto;
      
//           default:
//              return diaSemanaTexto = '';
//       }
//     }

//     function getMes(mes){
//         let mesTexto;
//     switch (mes) {
//         case 0:
//          mesTexto = "Janeiro";
//           return mesTexto;
      
//         case 1:
//           mesTexto = "Fevereiro";
//           return mesTexto;
      
//         case 2:
//           mesTexto = "MArço";
//           return mesTexto;
      
//         case 3:
//           mesTexto = "Abril";
//           return mesTexto;
      
//         case 4:
//           mesTexto = "MAio";
//           return mesTexto;
      
//         case 5:
//           mesTexto = "Junho";
//           return mesTexto;
      
//         case 6:
//           mesTexto = "Julho";
//           return mesTexto;
      
//           case 7:
//             mesTexto = "Agosto";
//             return mesTexto;

            
//         case 8:
//             mesTexto = "Setembro";
//             return mesTexto;

            
//         case 9:
//             mesTexto = "Outubro";
//             return mesTexto;

            
//         case 10:
//             mesTexto = "Novembro";
//             return mesTexto;

            
//         case 11:
//             mesTexto = "Dezembro";
//             return mesTexto;


//           default:
//              return mesTexto = '';
//       }
//     }

// function criaTitulo (){
//     const titulo = document.createElement('h1');
//     return titulo;
// }

// const resultado =  document.querySelector('.container h1');
// const data = new Date();
// resultado.innerHTML = data.toLocaleDateString('pt-BR' , {dateStyle:'full' });

const data = new Date();
const resultado =  document.querySelector('.container')
getData(data);

function getData(data){
    const diaSemana = data.getDay();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora= data.getHours();
    const min = data.getMinutes();
    const sec = data.getSeconds(); 

   const titulo = criaTitulo();
   console.log(titulo);

   
   const msg = `${diaSem(diaSemana)} , ${dia} de ${getMes(mes)} de ${ano} <br> ${hora}:${min}:${sec}`;
   
   titulo.innerHTML = msg;
   resultado.appendChild(titulo);

}

function diaSem(diaSemana){
      let diasSemana = ['Domingo' , 'segunda' , 'terça' , 'quarta' , 'quinta' , 'sexta' , 'sábado']
      return diasSemana[diaSemana];
    }

    function getMes(mes){
      const meses = ['Janeiro' , 'fevereiro' , 'março', 'abril' , 'maio' , 'junho' , 'agosto' , 'setembro' , 'outubro' , 'novembro' , 'dezembro'];

      return meses[mes];
    }

function criaTitulo (){
    const titulo = document.createElement('h1');
    return titulo;
}
