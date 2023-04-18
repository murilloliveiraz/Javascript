const programadoresCandidatos = [
    {nome :" gabriel" , idade: 16 , tecnologia:"JS"},
    {nome :" gustavo" , idade: 18 , tecnologia:"reactjs"},
    {nome :"murillo" , idade: 17 , tecnologia:"Java"},
    {nome :"mateus" , idade: 19 , tecnologia:"reactjs"}
]

const filter = programadoresCandidatos.filter ((candidato) => {
    return candidato.tecnologia === "reactjs"
})

console.log(filter)