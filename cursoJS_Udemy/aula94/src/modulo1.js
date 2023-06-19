export const nome = 'Luiz';
export const sobrenome = 'Miranda';
export const idade = 30;


export function soma(x,y){
    return x + y;
}

export default (x,y) => x*y;

// export class Pessoa{
//     constructor(nome,sobrenome){
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

// export {nome as nome2, sobrenome, idade, soma};

// export { nome as default, sobrenome , idade}