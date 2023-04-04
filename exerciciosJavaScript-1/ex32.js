function media(vetor) {
    let valoresVetor = 0;
    for(let e in vetor) {
        valoresVetor += vetor[e] 
    }
    console.log(valoresVetor / vetor.length)
}

media([8, 8, 5])