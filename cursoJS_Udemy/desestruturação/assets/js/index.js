  const pessoa = {
    nome : 'luiz',
    sobrenome : 'miranda',
    idade : 30 ,
    endereco : {
        rua : 'djalma de barbosa',
        numero : 320
    }
  };


  //atribuicao via desestruturaçaõ
//   const {nome , sobrenome , idade} = pessoa;

//   const { endereco : {rua , numero} , endereco} = pessoa;
//   console.log(rua , numero , endereco)
//   console.log(nome , sobrenome , idade);

const { nome , ...resto}= pessoa;
console.log(nome , resto)