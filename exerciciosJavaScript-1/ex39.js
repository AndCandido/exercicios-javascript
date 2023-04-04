function troca(vetor1, vetor2) {
    for(let i = 0; i < vetor1.length; i++) {
        vetor1[i] = vetor2[i] + vetor1[i]
        vetor2[i] = vetor1[i] - vetor2[i]
        vetor1[i] = vetor1[i] - vetor2[i]   
    }
    return [vetor1, vetor2]
}

console.log(troca([0, 2, 4, 6, 8], [1, 3, 5, 7, 9]))