//Factory Functions

function criaPessoa ( nome , sobrenome , a , p){
    return {
        nome, 
        sobrenome,
        fala(assunto){
            return `${this.nome} esta falando sobre ${assunto}.`;
        },

        get nomeCompleto(){
            return `${nome} ${sobrenome}`;
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' '); 
        },

        altura : a ,
        peso : p,
        get imc (){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa ('David' , 'Murillo' , 1.8 , 62);
p1.nomeCompleto = 'Raimundo Soares Silva'
console.log(p1.nomeCompleto);
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.nomeCompleto)