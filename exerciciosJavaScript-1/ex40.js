function notas(vetorNotas) {
    let conceitos = []
    for(let i = 0; i < vetorNotas.length; i++) {
        if(vetorNotas[i] <= 4.99) {
            conceitos.push(vetorNotas[i] + ': D')
        } else if(vetorNotas[i] <= 6.99) {
            conceitos.push(vetorNotas[i] + ': C')
        } else if(vetorNotas[i] <= 8.99) {
            conceitos.push(vetorNotas[i] + ': B')
        } else if(vetorNotas[i] <= 10) {
            conceitos.push(vetorNotas[i] + ': A')
        } else {
            console.log('Nota inválida encontrada: ' + vetorNotas[i])
        }
    }
    console.log(conceitos)
}

notas([0, 1, 4.9, 5, 6.9, 6.5, 8.99, 9])