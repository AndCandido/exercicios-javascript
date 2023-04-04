let vetor1 = [5, 6, 7, 3]

function multiplicaVetor(vetor, num) {
    let vetorResultado = []
    for(let i = 0; i < vetor.length; i++) {
        vetorResultado.push(vetor[i] * num)
    }
    return vetorResultado
}



function multiplicaVetor2(vetor, num) {
    let vetorResultado = []
    vetor.forEach(e => {
        vetorResultado.push(e * num)
    });
    return vetorResultado
}

console.log(multiplicaVetor(vetor1, 4))
console.log(multiplicaVetor2(vetor1, 5))
