function avaliacao(nota) {
    let notaCorrigida = arredondar(nota)
    if(notaCorrigida >= 40) {
        console.log(`Aprovado com uma nota de ${notaCorrigida}`)
    } else {
        console.log(`Reprovado com uma nota de ${notaCorrigida}`)
    }
}

function arredondar(nota) {
    if(nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } return nota
}


avaliacao(38)

