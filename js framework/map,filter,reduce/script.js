const precos = [
    "Crédito",
    "R$200",
    "R$400",
    "contas a pagar",
    "R$300",
    "R$400",
    "Meus Dados"
];

const precosFiltro = precos.filter(preco => {
    return preco.includes("R$");
});

const precosNumeros = precosFiltro.map(preco => Number(preco.replace("R$" , "")));

const total = precosNumeros.reduce(( anterior , item)=>
     anterior+item);

console.log(total);
 