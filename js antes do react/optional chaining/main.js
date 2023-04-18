let infos = {
    nome : "david",
    idade:16,
    redesSociais: {
        instagram : "@murilloxz",
        facebook : "murillo oliveira",

        redesSociaisProfissionais: {
            linkedin : "www.murillo.com",
            github: "murilloliveiraz",
            redeSocialCanal : {
                instagram : "@murillocanal",
                youtube: "murillodev"
            }
        }
    }
}

console.log(infos?.redesSociais?.redesSociaisProfissionais?.redeSocialCanal?.instagram)