var agora = new Date()
var dia = agora.getDay()


switch (dia) {
    case 0 :
        console.log ('domingo')
        break
    case 1 :
        console.log ('segunda')
        break
    case 2 :
         console.log ('terca')
         break
    case 3 :
         console.log ('quarta')
         break
    case 4 :
            console.log ('quinta')
            break
    case 5 :
            console.log ('sexta')
            break
    case 6 :
            console.log ('sabado')
            break
    default :
        console.log ('dia invalido!')
}