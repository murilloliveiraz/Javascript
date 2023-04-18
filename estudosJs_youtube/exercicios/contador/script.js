function contar (){
    var ini = document.getElementById('inum1')
    var fim = document.getElementById('inum2')
    var passo = document.getElementById('ipas')
    var res = document.getElementById('res')

    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        res.innerHTML = 'impossivel contar :('
    } else {
        res.innerHTML = 'contando...'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0 ) {
            window.alert('passo invalido, considerando passo 1...')
            p=1
        }

        if (i < f){
            for (var c = i ; c <= f ; c+=p ){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (var c = i ; c >= f ; c-=p ) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }
}
