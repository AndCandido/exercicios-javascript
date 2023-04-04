function getPrimeiroUltimoElemento(array){
    const ultimoElemento = array.pop()
    const primeiroElemento = array.shift()
    return [primeiroElemento, ultimoElemento]
}

console.log(getPrimeiroUltimoElemento([100, 300, 9]))
console.log(getPrimeiroUltimoElemento(["ola", 300, 46, "ana"]))
console.log(getPrimeiroUltimoElemento([false, false, false, false, true]))