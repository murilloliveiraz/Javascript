var agora = new Date()
var hora = agora.getHours()
console.log(`agora são ${hora} horas .`)
if (hora <= 12) {
    console.log ('Bom Diia ! :)')
} else if (hora <= 18 ) {
    console.log ('boa tarde !! aobaaa')
} else {
    console.log('boa noitee')
}