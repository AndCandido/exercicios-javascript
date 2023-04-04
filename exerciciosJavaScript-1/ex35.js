let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function vet (vetor1, vetor2) {
    for(let i = 0; i < vetor2.length; i++) {
        vetor1.push(vetor2[i])
    }
    console.log(vetor1)
}

vet(vetorPilha, vetorAdiciona)


/*
let vetorPilha2 = [1, 2, 3, 4, 5]
let vetorAdiciona2 = [6, 7, 8, 9, 10]

function adicionaVetor(vetorInicial, vetorAdicionar) {
    for(let i = 0; i < vetorAdicionar.length; i++) {
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor resultado: ' + vetorInicial)
}

adicionaVetor(vetorPilha2, vetorAdiciona2)
*/