function estaEntre(numero, minimo, maximo, inclusivo = false){
    if(inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
}

console.log(estaEntre(5, 4, 10))
console.log(estaEntre(10, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))