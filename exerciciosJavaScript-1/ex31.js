function contagemNumNegaativos(vetor) {
    let numNegativos = 0
    let numPositivos = 0
    for(let e in vetor) {
        if(vetor[e] < 0) {
            numNegativos++
        }
    }
    numPositivos = vetor.length - numNegativos
    
    console.log(` Números negativos: ${numNegativos}, números positivos: ${numPositivos}`)
}

contagemNumNegaativos([1, 4, 6, -10, -1, 0, 10])