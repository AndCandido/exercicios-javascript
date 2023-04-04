function percorreVetor(vetor){
    let maiorValor = vetor[0] 
    let menorValor = vetor[0]
    for(let e in vetor) {
        if(vetor[e] > maiorValor) {
            maiorValor = vetor[e]
        } else if(vetor[e] < menorValor) {
            menorValor = vetor[e]
        }
    }
    console.log(`O maior valor da array é ${maiorValor} e o menor é ${menorValor}`)
}

percorreVetor([0, 10, 30, 50, 39])
percorreVetor([-10 ,0, 10, 30, 130, 131, 50, 39])


/*function maiorMenor (vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor));*/