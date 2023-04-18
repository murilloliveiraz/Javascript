function verificar (){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.length==0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] confira os dados ...')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'homem'
                if (idade >=0 && idade <10){
                    img.setAttribute('src','babyboy.jpg')
                }else if (idade < 21) {
                    img.setAttribute('src','boy.jpg')
                } else if (idade < 60) {
                    img.setAttribute('src','man.jpg')
                }else {
                    img.setAttribute('src','grandpa.jpg')
                }
        } else if (fsex[1].checked){
             genero = 'mulher'
                 if (idade >=0 && idade <10){
                    img.setAttribute('src','babygirl.jpg')
                 }else if (idade < 21) {
                    img.setAttribute('src','girl.jpg')
                 } else if (idade < 60) {
                    img.setAttribute('src','woman.jpg')
                 }else {
                    img.setAttribute('src','grandma.jpg')
                 }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>detectamos um ${genero} de ${idade} anos </p> .`
        res.appendChild(img)
    }
}