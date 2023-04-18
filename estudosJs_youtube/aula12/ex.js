var idade = 19
console.log (`voce tem ${idade} anos de idade`)
if (idade <16) {
    console.log('voce ainda nao pode votar')
} else if (idade < 18 || idade > 65) {
    console.log('voto opcional')
} else {
    console.log('voto pbrigatorio') 
}