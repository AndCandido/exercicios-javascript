function analiseNum(vetor) {
    let numeroPar = vetor.filter(num => num % 2 == 0)
    let numeroImpar = vetor.filter(num => num % 2 == 1)
    return ` Números Pares ${numeroPar}, números Ímpares ${numeroImpar} `
}

console.log(analiseNum([4, 5, 7, 3, 2, 1]))
console.log(analiseNum([5, 3, 0, 0, 81, 88]))
console.log(analiseNum([128, -14, 59, 122, 0, 105]))


function analiseNum2(vetor) {
    let numeroPar = vetor.filter(num => num % 2 == 0)
    let numeroImpar = vetor.filter(num => num % 2 == 1)
    return ` Quantidade de números Pares ${numeroPar.length}, quantidade de números Ímpares ${numeroImpar.length}`
}

console.log(analiseNum2([4, 5, 7, 3, 2, 1]))
console.log(analiseNum2([5, 3, 0, 0, 81, 88]))
console.log(analiseNum2([128, -14, 59, 122, 0, 105]))