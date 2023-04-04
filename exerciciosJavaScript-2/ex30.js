function segundoMaior(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    return numerosOrdenados[1]
    // const maiorNumero = Math.max(...numeros)
    // numeros = numeros.filter(e => e != maiorNumero)
    // const segundoMaior = Math.max(...numeros)
    // return segundoMaior
}

console.log(segundoMaior([54, 11, 10, 55, 8, 4]))

function segundoMaior2(numeros) {
    numeros.sort((n1, n2) => n2 - n1)
    return numeros[1]
}

console.log(segundoMaior2([1, 90, 32, 54, 40]))