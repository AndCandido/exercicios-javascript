function inverter(objeto){
    const valorInvertido = Object.entries(objeto).map(e => e.reverse())
    return Object.fromEntries(valorInvertido)

}

console.log(inverter({a: 1, b: 2, c: 3}))